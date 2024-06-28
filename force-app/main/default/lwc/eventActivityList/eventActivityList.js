import { LightningElement, api, track, wire } from 'lwc';
import getEventActivities from '@salesforce/apex/EventAppCtrl.getEventActivities';
const columns = [
    { label: 'Activity Description', fieldName: 'Activity_Description__c', type: 'text',wrapText: true },
    { label: 'Points', fieldName: 'Points__c', type: 'number' }
];
export default class EventActivityList extends LightningElement {
    @api attendeeId;
    @track columns = columns;
    @track eventActivities;
    
    @wire(getEventActivities, { attendeeId: '$attendeeId' })
    wiredEventActivities(result) {
        this.eventActivities = result;
        if (result.error) {
            this.error = result.error;
            this.data = undefined;
        } else if (result.data) {
            this.data = result.data;
            this.error = undefined;
        }
    }
}