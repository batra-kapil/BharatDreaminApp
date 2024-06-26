public with sharing class GetSwagsHandler {

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
                    orgUrl + '/resource/' + EncodingUtil.urlEncode(product.Static_Resource_Name__c, 'UTF-8'),
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

}