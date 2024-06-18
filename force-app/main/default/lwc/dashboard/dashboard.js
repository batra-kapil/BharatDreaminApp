import { LightningElement,wire,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class SwagHomeTab extends LightningElement {
   @api attendeeId;
   @api eventId;
   @api teamName;
   @api attendeeRegId;
   @api preRegistered;
   dashboard;
   redeem;
   showWhatsOn;
   async connectedCallback() {
    this.dashboard=true;
    this.redeem=false;
    this.redeem=showWhatsOn;
   }
   handleRedeem() {
    console.log('##attendee'+this.attendeeId);
    this.dashboard=false;
    console.log('##dashabord '+this.dashboard);
    this.redeem=true;
  }
  handleshowWhatsOn() {
    console.log('##attendee'+this.attendeeId);
    this.dashboard=false;
    console.log('##dashabord '+this.dashboard);
    this.redeem=false;
    this.showWhatsOn=true;
  }
}