import { LightningElement,wire,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class SwagHomeTab extends LightningElement {
   @api attendeeId;
   @api eventId;
   @api teamName;
   @api attendeeRegId;
   @api preRegistered;
   @api dashboardLoad;
   dashboard;
   redeem;
   showWhatsOn;
   pointsBoard;
   showBooth;
   async connectedCallback() {
    console.log('##dashboard refreshed'+this.dashboardLoad);
    this.dashboard=true;
    this.redeem=false;
    this.redeem=showWhatsOn;
   }
   handleRedeem() {
    console.log('##attendee'+this.attendeeId);
    this.dashboard=false;
    //console.log('##dashabord '+this.dashboard);
    this.redeem=true;
  }
  handleBooth() {
    console.log('##attendee'+this.attendeeId);
    this.dashboard=false;
    this.redeem=false;
    this.showWhatsOn=false;
    this.showBooth=true;
  }
  handleshowWhatsOn() {
    console.log('##attendee'+this.attendeeId);
    this.dashboard=false;
    //console.log('##dashabord '+this.dashboard);
    this.redeem=false;
    this.showWhatsOn=true;
  }
  handlepointsBoard() {
    console.log('##attendee'+this.attendeeId);
    this.dashboard=false;
    //console.log('##dashabord '+this.dashboard);
    this.redeem=false;
    this.showWhatsOn=false;
    this.pointsBoard=true;
  }
}