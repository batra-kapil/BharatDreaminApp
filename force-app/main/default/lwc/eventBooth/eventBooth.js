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
                    name: "MTX Group",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/mtx-bharat-dreamin-platinum-sponsor.png",
                    sessionTitle: "MTX Group Inc. (MTX) is a global technology consulting firm that enables organizations to modernize through digital transformation."
                },
                {
                    id: 2,
                    name: "Brillio",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/Brillio_Primary-Logo_Dark.svg",
                    sessionTitle: "Brillio is one of the fastest growing digital technology service providers and a partner of choice for many Fortune 1000 companies seeking to turn disruption into a competitive advantage through innovative digital adoption.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 3,
                    name: "360 Degree Cloud Technologies",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/360_DC_Company_Logo.png",
                    sessionTitle: "360 Degree Cloud is a customer-centric Salesforce Summit (Platinum ) partner centered on delivering an extensive spectrum of Salesforce services and products",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 4,
                    name: "SurveyVista",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/SurveyVistaLogo-300x70-1.png",
                    sessionTitle: "SurveyVista, a 100% native salesforce solution that helps customers collect, integrate, understand and act on data gathered via surveys, forms, checklists, quizzes, and assessments.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 5,
                    name: "Wahinnovations",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/WahInnovations_Logo.png",
                    sessionTitle: "Wahinnovations is a Salesforce Development company in India and USA that provides the vision to transform the business into next-level opportunities.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 6,
                    name: "mindZvue Technologies",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/mindzvue-technology-bharat-dreamin-sponsor.png",
                    sessionTitle: "At mindZvue, Excellence and Passion converge with Innovation and Technology. We create new Ideas and Transform them into real-world solutions.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 7,
                    name: "Testsigma",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/testsigma-bharat-dreamin-sponsor.png",
                    sessionTitle: "Testsigma is a low-code, test automation platform for end-to-end testing that works out of the box.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 8,
                    name: "Drizzle IT Services",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/drizzle-bharat-dreamin-sponsor.png",
                    sessionTitle: "Drizzle IT Services is group of highly qualified programmers and salesforce certified enthusiasts works with salesforce consultants to architect and implement technical solutions.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 9,
                    name: "Perigeon Software",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/Perigeon-copper-sponsor-bharat-dreamin.svg",
                    sessionTitle: "Perigeon Software (Formerly Inforce Software) is a Software Service Company. We are providing complete IT solutions globally with a fresh perspective and dedicated attention to every client.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 10,
                    name: "Zordial Technologies",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/zordial-logo.png",
                    sessionTitle: "Zordial Technologies works on multiple clouds e.g. Sales, Service, Experience, Marketing Cloud, CPQ, Field Service Lightning, Vlocity, FSC (Financial Service Cloud), Certinia (formerly known as FinancialForce ) , PSA and Accounting.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 11,
                    name: "Vedsphere Consultancy Pvt. Ltd.",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/ved-sphere-coffee-sponsor-bharat-dreamin.png",
                    sessionTitle: "Our Salesforce Consultancy services are designed to unlock the full potential of your business. We dive deep into your processes to deliver insights and strategies that drive growth and efficiency.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 12,
                    name: "Briskminds Software Solutions",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/bricks-mind-bharat-dreamin-sponsor-1536x384.png",
                    sessionTitle: "Briskminds is a leading salesforce consulting, PDO (product developing outsourcing) partners and MSP (managed services partners) specializes in providing Salesforce consulting, implementation, product development and mobile application development services for all types of organizations.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 13,
                    name: "Heroku",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/07/heroku-bharat-dreamin-sponsor.png",
                    sessionTitle: "Heroku, a Salesforce company and industry pioneer in platform as a service (PaaS), enables developers to build and run applications entirely in the cloud, without the need to purchase or maintain any servers or software.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 14,
                    name: "Copado",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/07/copado-bharat-dreamin-sponsor.png",
                    sessionTitle: "Copado empowers every Salesforce development team to plan, build, test and deliver applications with speed and confidence by unifying CI/CD pipelines and automated testing on one platform — all powered by embedded AI.",
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
        this.activityDescription='Visited booth - ';
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
                                title: "How was the interaction with our sponsor?",
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
            const message = atob(event.detail.message.data);
            console.log('##message'+message);
            if(this.showModal==true)
                {
                    this.sessionCode=message;
                    this.showFeedbackForm(message);
                }
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
        this.showSessionFeedback=false;
        this.showSessionAttendance=true;
        this.sessionCode='';
        this.showModal=false;
        this.selectedSessionTitle=false;
     }
     iframeLoaded = false;

    receiveMessage = (message) => {
        console.log('##receive');
        if (message.origin === "https://venerable-strudel-b9e4e9.netlify.app") {
            console.log('##receive 1');
            const event = new CustomEvent("scancomplete", {
                detail: { message }
            });
            console.log('##receive 2');
            this.handleQRResponse(event);
        }
        console.log('##message');
    };
    async connectedCallback() {
        window.addEventListener("message", this.receiveMessage);
    }
    disconnectedCallback() {
        window.removeEventListener("message", this.receiveMessage);
    }

    handleLoad() {
        this.iframeLoaded = true;
        console.log('##handle load');
    }
}
