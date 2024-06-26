import { LightningElement, api } from 'lwc';
import getSwags from '@salesforce/apex/SwagsHandler.getSwags';
import claimSwag from '@salesforce/apex/SwagsHandler.claimSwag';
import LightningAlert from 'lightning/alert';

export default class SwagsList extends LightningElement {

    @api recordId;
    userDetails = null;

    connectedCallback() {
        this.getData();
    }

    getData() {
        this.userDetails = null;
        console.log('##record '+this.recordId);
        getSwags({ accountId: this.recordId })
           .then(result => {
                this.userDetails = result;
                console.log('##userdetails '+this.userDetails);
                this.userDetails.swagsList.forEach((swag, index) => {
                    swag.class = `container ${index !== 0 ? 'container-with-radius' : ''} slds-m-bottom_medium slds-p-vertical_large`;
                });
            })
           .catch(error => {
                LightningAlert.open({
                    message: 'Some error occurred while getting swags',
                    theme: 'error',
                    label: 'Error',
                });
            });
    }

    handleClaimSwagBtn(event) {
        let index = event.currentTarget.dataset.index;
        claimSwag({ productName: this.userDetails.swagsList[index].name, accountId: this.recordId }).then(() => {
            LightningAlert.open({
                message: `${this.userDetails.swagsList[index].name} Claimed Successfully`,
                theme: 'success',
                label: 'Swag Claimed',
            });
            this.getData();
        }).catch((error) => {
            LightningAlert.open({
                message: error.body.message+'Some error occurred while claiming the swag 1',
                theme: 'error',
                label: 'Error',
            });
            this.getData();
        });
    }

    get showLoading() {
        return this.userDetails === null;
    }

    get userName() {
        return this.userDetails.name;
    }

    get userPoints() {
        return this.userDetails.userCurrentPoints;
    }

    get swagList() {
        return this.userDetails.swagsList;
    }

}