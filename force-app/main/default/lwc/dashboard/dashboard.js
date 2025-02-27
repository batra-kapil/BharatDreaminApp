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
   showAgenda;
   pointsBoard;
   leaderBoard;
   showBooth;
   showSpeakers;
   showSponsors;
   showQuiz;
   async connectedCallback() {
    console.log('##dashboard refreshed'+this.dashboardLoad);
    this.dashboard=true;
    this.redeem=false;
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
  handleShowAgenda() {
    this.dashboard=false;
    //console.log('##dashabord '+this.dashboard);
    this.redeem=false;
    this.showAgenda=true;
  }
  handlepointsBoard() {
    console.log('##attendee'+this.attendeeId);
    this.dashboard=false;
    //console.log('##dashabord '+this.dashboard);
    this.redeem=false;
    this.showWhatsOn=false;
    this.pointsBoard=true;
  }
  handleSpeakers() {
    this.dashboard=false;
    //console.log('##dashabord '+this.dashboard);
    this.redeem=false;
    this.showWhatsOn=false;
    this.pointsBoard=false;
    this.showSpeakers=true;
  }
  handleSponsors() {
    this.dashboard=false;
    //console.log('##dashabord '+this.dashboard);
    this.redeem=false;
    this.showWhatsOn=false;
    this.pointsBoard=false;
    this.showSpeakers=false;
    this.showSponsors=true;
  }
  handleQuiz() {
    this.dashboard=false;
    this.redeem=false;
    this.showWhatsOn=false;
    this.pointsBoard=false;
    this.showSpeakers=false;
    this.showSponsors=false;
    this.showQuiz=true;
  }
  
}