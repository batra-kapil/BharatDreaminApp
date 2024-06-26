public with sharing class SwagsHandler {

    public class SwagsException extends Exception {}

    public class UserDetails {
        @AuraEnabled
        public String name {get;set;}
        @AuraEnabled
        public Integer userCurrentPoints {get;set;}
        @AuraEnabled
        public List<SwagWrapper> swagsList {get;set;}

        public UserDetails(String name, Integer userCurrentPoints, List<SwagWrapper> swagsList) {
            this.name = name;
            this.userCurrentPoints = userCurrentPoints;
            this.swagsList = swagsList;
        }
    }

    public class SwagWrapper {
        @AuraEnabled
        public String name {get;set;}
        @AuraEnabled
        public Integer userCurrentPoints {get;set;}
        @AuraEnabled
        public Boolean quantityNotAvailable {get;set;}
        @AuraEnabled
        public String imageUrl {get;set;}
        @AuraEnabled
        public Integer pointsNeeded {get;set;}
        @AuraEnabled
        public Boolean showClaimSwagBtn {get;set;}
        @AuraEnabled
        public Boolean isClaimed {get;set;}

        public SwagWrapper(String name, Integer userCurrentPoints, Boolean quantityNotAvailable, String imageUrl, Integer pointsNeeded, Boolean showClaimSwagBtn, Boolean isClaimed) {
            this.name = name;
            this.userCurrentPoints = userCurrentPoints;
            this.quantityNotAvailable = quantityNotAvailable;
            this.imageUrl = imageUrl;
            this.pointsNeeded = pointsNeeded;
            this.showClaimSwagBtn = showClaimSwagBtn;
            this.isClaimed = isClaimed;
        }
    }

    // This function will return data in UserDetails wrapper
    @AuraEnabled
    public static UserDetails getSwags(String accountId) {
        try {
            // First get the account details using account id
            Event_Attendees__c account = [SELECT Name, Points__c FROM Event_Attendees__c WHERE Id = :accountId LIMIT 1];
            // Now convert the points coming in Decimal format to Integer
            Integer points = Integer.valueOf(account.Points__c);

            // Create a list of SwagWrapper to return in the response
            List<SwagWrapper> swagsList = new List<SwagWrapper>();

            // Now get all the products from the org
            List<Product2> productList = [SELECT Id, Name, Quantity_Available__c, Static_Resource_Name__c, Points_Needed__c FROM Product2];

            // Now get all the redeemed products which user have already claimed
            List<Redeem_Product__c> redeemProductList = [SELECT Product__c FROM Redeem_Product__c WHERE Event_Attendee__c = :accountId];
            // Create a map of product id to claimed status map
            // This map will identifies whether a product is claimed or not
            Map<Id, Boolean> redeemProductMap = new Map<Id, Boolean>();
            for (Redeem_Product__c redeemProduct : redeemProductList) {
                redeemProductMap.put(redeemProduct.Product__c, true);
            }

            // Get the org domain url, this will help us to construct image of the product from static resource
            String orgUrl = URL.getOrgDomainUrl().toExternalForm();

            // Now iterate through the products list and one-by-one add them to the swagsList
            for (Product2 product : productList) {
                swagsList.add(new SwagWrapper(
                    product.Name,
                    points,
                    Integer.valueOf(product.Quantity_Available__c) <= 0,
                    '/resource/' + EncodingUtil.urlEncode(product.Static_Resource_Name__c, 'UTF-8'),
                    Integer.valueOf(product.Points_Needed__c),
                    !(points >= Integer.valueOf(product.Points_Needed__c) && Integer.valueOf(product.Quantity_Available__c) > 0),
                    redeemProductMap.containsKey(product.Id)
                ));
            }

            // Simply return UserDetails at the end
            return new UserDetails(account.Name, Integer.valueOf(account.Points__c), swagsList);
        } catch (Exception e) {
            throw new SwagsException(e.getMessage());
        }
    }

    // This function is used to claim a particular swag at a time
    @AuraEnabled
    public static void claimSwag(String productName, String accountId) {
        try {
            // First get the product details from the org using productName
            Product2 product = [SELECT Id, Quantity_Available__c, Points_Needed__c FROM Product2 WHERE Name = :productName LIMIT 1];

            // Now check whether the product have enough quantity available or not, if not available then throw error
            if (product.Quantity_Available__c <= 0) {
                throw new SwagsException(productName + ' is not available');
            }

            // Now get the account details using account id as we need to decrease the points user have by the points of the swag claimed
            Event_Attendees__c account = [SELECT Points__c FROM Event_Attendees__c WHERE Id = :accountId LIMIT 1];
            // Now check if the user have enough points to claim the swag or not
            if (account.Points__c < product.Points_Needed__c) {
                throw new SwagsException('You do not have enough points to claim this swag');
            }

            // Now create a instance of Redeem_Product__c, this helps us to save the info the a particular user have claimed a swag
            Redeem_Product__c redeemProduct = new Redeem_Product__c(
                Product__c = product.Id,
                Event_Attendee__c = accountId
            );
            // Insert the record
            insert redeemProduct;

            // Now decrease the product quantity by 1
            product.Quantity_Available__c--;
            // Update the product record
            update product;

            // Now decrease the points user have by the points of the product
            account.Points__c -= product.Points_Needed__c;
            // Update the account record
            update account;
        } catch (Exception e) {
            throw new SwagsException(e.getMessage());
        }
    }

}