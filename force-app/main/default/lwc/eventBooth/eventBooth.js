import { LightningElement, api } from "lwc";
import saveActivity from "@salesforce/apex/EventAppCtrl.saveActivity";
import saveBoothAttendance from "@salesforce/apex/EventAppCtrl.saveBoothAttendance";
import LightningAlert from "lightning/alert";


export default class EventBooth extends LightningElement {
    @api session_slot = "1";
    slot;
    //config
    configs = [
        {
            slot: "1",
            active: true,
            is_community_session: true,
            title: "Meet Our Sponsors",
            time: "12:30PM",
            items: [
                {
                    id: 1,
                    name: "Brillio",
                    logoUrl: "https://media.licdn.com/dms/image/C560BAQEh2CAtwBx5vA/company-logo_200_200/0/1657805094143/brillio_logo?e=1727308800&v=beta&t=4T-jue0YiwQ0nhVn0VQWYk9lyGTT3iBUwc5_WH7--20",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 2,
                    name: "Perigeon Software",
                    logoUrl: "https://media.licdn.com/dms/image/D4D0BAQHeUQgKnx_VPA/company-logo_200_200/0/1699426181749/intforce_logo?e=1727308800&v=beta&t=EJgzM1Ciwb1gIhujpUSwjlzeDN4wOH_sgaTPydO33qY",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 3,
                    name: "Vedsphere Consultancy Pvt. Ltd.",
                    logoUrl: "https://media.licdn.com/dms/image/D4D0BAQFDlnCizTXSNw/company-logo_200_200/0/1698832132832/vedforce_logo?e=1727308800&v=beta&t=5tcSgpQHyIeuttuDg37xA96BkTOoxulZ2TQav0tR-EI",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 4,
                    name: "360 Degree Cloud Technologies",
                    logoUrl: "https://media.licdn.com/dms/image/C4D0BAQHZeGy8nZo-Cg/company-logo_200_200/0/1641207446773/360_degree_cloud_logo?e=1727308800&v=beta&t=P2m8UpUT-p9tM1ayk1nw4gLXkE_9tFCnuUZAYTcNsdI",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 5,
                    name: "Wahinnovations",
                    logoUrl: "https://media.licdn.com/dms/image/D4D0BAQHaYQs2Tns3xg/company-logo_200_200/0/1682428519467/wahinnovations_logo?e=1727308800&v=beta&t=f4R6Bgdv9KOwJdXzEkxAngK_iM5e77GIL-5u7WB9-m0",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 6,
                    name: "Zordial Technologies",
                    logoUrl: "https://media.licdn.com/dms/image/D560BAQF19VvCeOM_Mg/company-logo_200_200/0/1711516944461/zordial_tech_logo?e=1727308800&v=beta&t=Z8OgtI3ZQ34PmAOY28J3Xxwiz18YNLC9bDgXww9C4jM",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 7,
                    name: "SurveyVista",
                    logoUrl: "https://media.licdn.com/dms/image/D4D0BAQG2k2D6wFVG1A/company-logo_200_200/0/1715845098079/surveyvista_logo?e=1727308800&v=beta&t=zuJZ7TuLgIVgtK8pdqBALsyBhGJTxy28O0SBevY1FrY",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                }
            ]
        }
    ]
    phase;
    @api attendeeId;
    @api eventId;
    @api attendeeRegId;
    @api preRegistered;

    showCheckIn = false;
    showLunch = false;
    showKeynote = false;
    showGame1 = false;
    showGame2 = false;
    showBoothsSessions = false;

    showVote = false;
    showSurvey = false;

    showSpinner = false;

    isFeedback = false;
    feedbackText = "Any additional thoughts?";

    embedded = false;

    voteType;
    voteOptions;
    voteTitle;
    alreadyVoted;

    feedbackOptions = [
        { label: "It was fantastic!", value: "5" },
        { label: "It met my expectations.", value: "4" },
        { label: "It was okay.", value: "3" },
        { label: "It was just average.", value: "2" },
        { label: "It was disappointing.", value: "1" }
    ];


    points=0;
    activityDescription;
    handleVote(event) {
        this.showSpinner = true;
        console.log('##phase'+this.phase);
        this.points=250;
        this.activityDescription='Visited booth  ';
        console.log('##points'+this.points);
        saveActivity({
            eventId: this.eventId,
            attendeeId: this.attendeeId,
            activityType: "Vote",
            activitySubType: this.voteType,
            value: JSON.stringify(event.detail.votes),
            points:this.points,
            activityDescription : this.activityDescription,
            sessionCode : this.sessionCode
        })
            .then((result) => {
                if (result) {
                    localStorage.setItem("vote_" + this.voteType, "done");
                    this.alreadyVoted = true;
                } else {
                    LightningAlert.open({
                        message:
                            "An error occurred when saving your data. Please reach out to the event staff.",
                        theme: "error",
                        label: "An error occurred"
                    });
                }
            })
            .catch(() => {
                LightningAlert.open({
                    message:
                        "An error occurred when saving your data. Please reach out to the event staff.",
                    theme: "error",
                    label: "An error occurred"
                });
            })
            .finally(() => {
                this.showSpinner = false;
            });
    }

    sessionCode;
    showSessionAttendance = true;
    showSessionFeedback = false;

    handleSessionCodeChange(event) {
        this.sessionCode = event.detail.value;
    }

    showFeedbackForm(sessionCode) {
        console.log('##event id '+this.eventId);
        this.showSpinner = true;
        saveBoothAttendance({
            eventId: this.eventId,
            attendeeId: this.attendeeId,
            sessionCode: sessionCode,
            sessionName: this.selectedSessionTitle
        })
            .then((result) => {
                if (result) {
                    const parsedResult = JSON.parse(result);
                    if (parsedResult.isSuccess) {
                        this.showSessionAttendance = false;
                        this.showSessionFeedback = true;

                        // Populate Vote Options
                        this.voteType =
                            "session_feedback" + parsedResult.message;
                        // this.voteTitle =
                        //     "Please sharing ";
                        this.voteOptions = [
                            {
                                title: "How did you like the content shared?",
                                name: "session_feedback" + parsedResult.message,
                                options: this.feedbackOptions
                            }
                        ];
                        this.embedded = true;
                        this.isFeedback = true;
                        this.feedbackText = "Any additional thoughts?";
                        if (
                            localStorage.getItem("vote_" + this.voteType) ===
                            "done"
                        ) {
                            this.alreadyVoted = true;
                        } else {
                            this.alreadyVoted = false;
                        }
                    } else {
                        LightningAlert.open({
                            message: parsedResult.message,
                            theme: "error",
                            label: "Oops!"
                        });
                    }
                } else {
                    LightningAlert.open({
                        message:
                            "An error occurred when saving your data. Please reach out to the event staff.",
                        theme: "error",
                        label: "An error occurred"
                    });
                }
            })
            .catch(() => {
                LightningAlert.open({
                    message:
                        "An error occurred when saving your data. Please reach out to the event staff.",
                    theme: "error",
                    label: "An error occurred"
                });
            })
            .finally(() => {
                this.showSpinner = false;
            });
    }

    saveSessionAttendance() {
        const sessionCodeEle = this.template.querySelector(".sessionCode");
        if (this.sessionCode) {
            sessionCodeEle.setCustomValidity("");
            sessionCodeEle.reportValidity();
            this.showFeedbackForm(this.sessionCode);
        } else {
            sessionCodeEle.setCustomValidity("Session Code is required");
            sessionCodeEle.reportValidity();
        }
    }

    closefeedback() {
        this.showSessionAttendance = true;
        this.showSessionFeedback = false;
        this.sessionCode = undefined;
    }

    showScanner = false;

    scanQRCode() {
        this.showScanner = true;
    }

    async handleQRResponse(event) {
        this.closeScanner();
        try {
            const message = event.detail.message.data;
            this.showFeedbackForm(message);
        } catch (e) {
            console.log(e);
            LightningAlert.open({
                message:
                    "An error occurred. Please reach out to the event staff.",
                theme: "error",
                label: "An error occurred"
            });
        }
    }

    closeScanner() {
        this.showScanner = false;
    }
    showModal = false;
    selectedSessionTitle;
    openModal(event){
        console.log('##show modal'+event.target.dataset.id);
        this.selectedSessionTitle=event.target.dataset.id;
        this.showModal = true;
        console.log('##show modal 1');
     }
     closeModal()
     {
        this.showModal=false;
        this.selectedSessionTitle=false;
     }
}
