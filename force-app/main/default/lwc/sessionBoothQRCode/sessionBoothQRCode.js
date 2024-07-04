import { LightningElement, wire, api } from 'lwc';
import QRCode from "c/barcode";
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import getSessionRecord from "@salesforce/apex/EventAppCtrl.getSessionRecord";
// Define the fields to retrieve
export default class SessionBoothQRCode extends LightningElement {
    
    @api recordId;
     session;
     error;
    sessionName;
    sessionCode;

    fetchSessionRecord() {
        getSessionRecord({ recordId: this.recordId })
            .then(result => {
                this.session = result;
                console.log('##session '+this.session.Code__c);
                this.sessionName=this.session.Name;
                this.sessionCode=this.session.Code__c;
                this.error = undefined;
                console.log('##record '+this.sessionName);
                console.log('##record '+this.sessionCode);
                console.log('##qr session code '+this.sessionCode);
                QRCode.toCanvas(
                    this.template.querySelector(".barcode"),
                    btoa(this.sessionCode),
                    {
                        margin: 1,
                        color: {
                            light: "#fff",
                            dark: "#000" /** Use your event's theme color **/
                        },
                        width: 300
                    },
                    function (error) {
                        if (error) console.error(error.message);
                    }
                );
            })
            .catch(error => {
                this.error = error;
                console.log('##error '+this.error);
                this.session = undefined;
            });
    }
    
    renderedCallback(){
        this.fetchSessionRecord();
    }
}