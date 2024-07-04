import { LightningElement, wire, track } from "lwc";
import SFLOGO from "@salesforce/resourceUrl/sf_logo";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getUserPoints from "@salesforce/apex/EventAppCtrl.getUserPoints";
import getActiveEvent from "@salesforce/apex/EventAppCtrl.getActiveEvent";
import getAttendeeById from "@salesforce/apex/EventAppCtrl.getAttendeeById";

import QRCode from "c/barcode";

const WHATSON = "WO";
const QUESTS = "QS";
const ATTENDEEID_LOCALSTORAGE = "attendeeId_bharatdreamin";

export default class EventApp extends LightningElement {
    userPoints=0;
    error;

   
    phase;
    currentTab = WHATSON;
    sfLogo = SFLOGO;

    activeEventId;
    attendeeId;
    attendeeName;
    attendeeKey;
    attendeeTeamName;
    attendeeRegId;
    attendeeObj;
    isLoading = true;
    dashboard;
    whatsOn;
    preRegistered = false;
    redeem;
    accountName;
    
    async connectedCallback() {
        console.log('##sf logo '+this.sfLogo);
        console.log('##try 1');
        try {
            
            const eventResult = await getActiveEvent();
            if (eventResult) {
                console.log('##event result123'+eventResult.Id);
                this.activeEventId = eventResult.Id;
                this.phase = eventResult.Event_Phase__c;
                const localStorageAttendeeId = localStorage.getItem(
                    ATTENDEEID_LOCALSTORAGE
                );
                if (localStorageAttendeeId) {
                    this.attendeeId = localStorageAttendeeId;
                    console.log('##aid'+this.attendeeId);
                    this.handleReloadData();
                    
                    this.getAttendeeInfo();
                    this.dashboard = localStorageAttendeeId;
                }
            }
            this.isLoading = false;
        } catch (e) {
            console.log('##catch ');
            this.dispatchEvent(
                new ShowToastEvent({
                    title: "An error occurred",
                    message: "Please reach out to the event staff.",
                    variant: "error",
                    mode: "sticky"
                })
            );
        }
    }
    handleReloadData() {
        getUserPoints({ attendeeId: this.attendeeId })
            .then((result) => {
                if (result!=undefined) {
                    this.userPoints = result;
                    console.log('##reloaded '+result);
                } else {
                    this.userPoints = undefined;
                }
            })
            .catch(() => {
            this.userPoints = undefined;
            });
    }
    handleRegComplete(event) {
        this.attendeeId = event.detail.attendeeId;
        this.dashboard = event.detail.attendeeId;
        localStorage.setItem(ATTENDEEID_LOCALSTORAGE, event.detail.attendeeId);
        this.getAttendeeInfo();
    }

    async getAttendeeInfo() {
        const attendeeResult = await getAttendeeById({
            attendeeId: this.attendeeId
        });
        if (attendeeResult) {
            this.attendeeObj = attendeeResult;
            this.attendeeName = attendeeResult.Name;
            this.attendeeKey = attendeeResult.Unique_Key__c;
            this.attendeeTeamName = attendeeResult.Team_Name__c;
            this.attendeeRegId = attendeeResult.AttendeeExtId__c;
            this.preRegistered = attendeeResult.Pre_Registered__c;
            QRCode.toCanvas(
                this.template.querySelector(".barcode"),
                btoa(this.attendeeKey),
                {
                    margin: 1,
                    color: {
                        light: "#fff",
                        dark: "#6b2f90" /** Use your event's theme color **/
                    },
                    width: 100
                },
                function (error) {
                    if (error) console.error(error.message);
                }
            );
        } else {
            localStorage.clear();
            window.location.reload();
        }
    }

    /**
     *  METHODS FOR TAB SWITCHING
     */
    get b1Variant() {
        return this.currentTab === WHATSON ? "brand" : "neutral";
    }

    get b2Variant() {
        return this.currentTab === QUESTS ? "brand" : "neutral";
    }

    get showQuests() {
        return this.currentTab === QUESTS;
    }

    get showWhatsOn() {
        return this.currentTab === WHATSON;
    }

    handleShowWhatsOn() {
        this.currentTab = WHATSON;
    }

    handleShowQuests() {
        this.currentTab = QUESTS;
    }
    refreshPage() {
        window.location.reload();
    }
}
