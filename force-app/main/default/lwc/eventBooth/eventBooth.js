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
                    name: "Monika Ramchandani",
                    logoUrl: "https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 2,
                    name: "Monika Ramchandani",
                    logoUrl: "https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 3,
                    name: "Monika Ramchandani",
                    logoUrl: "https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 4,
                    name: "Monika Ramchandani",
                    logoUrl: "https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 5,
                    name: "Monika Ramchandani",
                    logoUrl: "https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 6,
                    name: "Monika Ramchandani",
                    logoUrl: "https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 7,
                    name: "Monika Ramchandani",
                    logoUrl: "https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 8,
                    name: "Monika Ramchandani",
                    logoUrl: "https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI",
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
        this.activityDescription='You gave feedback for sponsor booth  ';
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
            sessionCode: sessionCode
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
}
