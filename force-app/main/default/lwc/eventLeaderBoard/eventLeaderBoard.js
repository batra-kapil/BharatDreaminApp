import { LightningElement, api, track, wire } from 'lwc';
import getEventLeaderBoard from '@salesforce/apex/EventAppCtrl.getEventLeaderBoard';
export default class EventLeaderBoard extends LightningElement {
    @api attendeeId;
    data;
    error;

    columns = [
        { label: 'Attendee Name', fieldName: 'Event_Attendee__r.Name', type: 'text' },
        { label: 'Points', fieldName: 'Points__c', type: 'number' }
    ];

    @wire(getEventLeaderBoard)
wiredEventActivities({ error, data }) {
    if (data) {
        this.data = data;
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.data = undefined;
    } else {
        this.data = undefined;
        this.error = { message: 'Data not available.' };
    }
}
}