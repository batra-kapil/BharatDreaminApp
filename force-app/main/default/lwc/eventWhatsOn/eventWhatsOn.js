import { LightningElement, api } from "lwc";
import saveActivity from "@salesforce/apex/EventAppCtrl.saveActivity";
import getSessionName from "@salesforce/apex/EventAppCtrl.getSessionName";
import saveSessionBoothAttendance from "@salesforce/apex/EventAppCtrl.saveSessionBoothAttendance";
import saveWorkshopAttendance from "@salesforce/apex/EventAppCtrl.saveWorkshopAttendance";
import LightningAlert from "lightning/alert";
import getActiveEvent from "@salesforce/apex/EventAppCtrl.getActiveEvent";
import DEMOJAM from "@salesforce/resourceUrl/demoJam";
import SPONSORHOUR from "@salesforce/resourceUrl/sponsorHour";
import CLOSINGCEREMONY from "@salesforce/resourceUrl/closingCeremony";

export default class EventWhatsOn extends LightningElement {
    demoJam=DEMOJAM;
    sponsorHour=SPONSORHOUR;
    closingCeremony=CLOSINGCEREMONY;
    @api session_slot = "1";
    @api workshop_slot = "0";
    slot;
    workshopSlot=0;
    slotToSend;
    showWorkshop=false;
    //config
    configs = [
        {
            slot: "1",
            active: false,
            is_community_session: true,
            title: "Sessions Going On",
            time: "12:30PM",
            items: [
                {
                    id: 1,
                    name: "Rahul Malhotra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1208356452160589824/qLtb5g9P_400x400.jpg\")",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 2,
                    name: "Monika Ramchandani",
                    style: "background-image: url(\"https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI\")",
                    sessionTitle: "Build Flows Like a Pro!",
                    sessionTime: "2:30 PM",
                    sessionLocation: "Awesome Admins Hall"
                },
                {
                    id: 3,
                    name: "Kapil Batra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1586306161019535360/O4wCLn66_400x400.jpg\")",
                    sessionTitle: "Building LWCs using Modern JavaScript",
                    sessionTime: "3:30 PM",
                    sessionLocation: "Techies Innovation Hall"
                },
                {
                    id: 4,
                    name: "Jyothsna Bitra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1337719158016905216/Co1DnvWP_400x400.jpg\")",
                    sessionTitle: "Master Marketing Cloud!",
                    sessionTime: "3:00 PM",
                    sessionLocation: "Moment Marketers Hall"
                }
            ]
        },
        {
            slot: "2",
            active: false,
            is_community_session: true,
            title: "Sessions Going On",
            time: "12:30PM",
            items: [
                {
                    id: 1,
                    name: "Rahul Malhotra Slot 2",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1208356452160589824/qLtb5g9P_400x400.jpg\")",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 2,
                    name: "Monika Ramchandani Slot 2",
                    style: "background-image: url(\"https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI\")",
                    sessionTitle: "Build Flows Like a Pro!",
                    sessionTime: "2:30 PM",
                    sessionLocation: "Awesome Admins Hall"
                },
                {
                    id: 3,
                    name: "Kapil Batra Slot 2",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1586306161019535360/O4wCLn66_400x400.jpg\")",
                    sessionTitle: "Building LWCs using Modern JavaScript",
                    sessionTime: "3:30 PM",
                    sessionLocation: "Techies Innovation Hall"
                },
                {
                    id: 4,
                    name: "Jyothsna Bitra Slot 2",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1337719158016905216/Co1DnvWP_400x400.jpg\")",
                    sessionTitle: "Master Marketing Cloud!",
                    sessionTime: "3:00 PM",
                    sessionLocation: "Moment Marketers Hall"
                }
            ]
        },
        {
            slot: "3",
            active: false,
            is_community_session: true,
            title: "Sessions Going On",
            time: "12:30PM",
            items: [
                {
                    id: 1,
                    name: "Rahul Malhotra slot 3",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1208356452160589824/qLtb5g9P_400x400.jpg\")",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 2,
                    name: "Monika Ramchandani slot 3",
                    style: "background-image: url(\"https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI\")",
                    sessionTitle: "Build Flows Like a Pro!",
                    sessionTime: "2:30 PM",
                    sessionLocation: "Awesome Admins Hall"
                },
                {
                    id: 3,
                    name: "Kapil Batra slot 3",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1586306161019535360/O4wCLn66_400x400.jpg\")",
                    sessionTitle: "Building LWCs using Modern JavaScript",
                    sessionTime: "3:30 PM",
                    sessionLocation: "Techies Innovation Hall"
                },
            ]
        },
        {
            slot: "4",
            active: false,
            is_community_session: true,
            title: "Sessions Going On 4",
            time: "12:30PM",
            items: [
                {
                    id: 1,
                    name: "Rahul Malhotra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1208356452160589824/qLtb5g9P_400x400.jpg\")",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 2,
                    name: "Monika Ramchandani",
                    style: "background-image: url(\"https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI\")",
                    sessionTitle: "Build Flows Like a Pro!",
                    sessionTime: "2:30 PM",
                    sessionLocation: "Awesome Admins Hall"
                },
                {
                    id: 3,
                    name: "Kapil Batra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1586306161019535360/O4wCLn66_400x400.jpg\")",
                    sessionTitle: "Building LWCs using Modern JavaScript",
                    sessionTime: "3:30 PM",
                    sessionLocation: "Techies Innovation Hall"
                },
                {
                    id: 4,
                    name: "Jyothsna Bitra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1337719158016905216/Co1DnvWP_400x400.jpg\")",
                    sessionTitle: "Master Marketing Cloud!",
                    sessionTime: "3:00 PM",
                    sessionLocation: "Moment Marketers Hall"
                }
            ]
        },
        {
            slot: "5",
            active: false,
            is_community_session: true,
            title: "Sessions Going On 5",
            time: "12:30PM",
            items: [
                {
                    id: 1,
                    name: "Rahul Malhotra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1208356452160589824/qLtb5g9P_400x400.jpg\")",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 2,
                    name: "Monika Ramchandani",
                    style: "background-image: url(\"https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI\")",
                    sessionTitle: "Build Flows Like a Pro!",
                    sessionTime: "2:30 PM",
                    sessionLocation: "Awesome Admins Hall"
                },
                {
                    id: 3,
                    name: "Kapil Batra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1586306161019535360/O4wCLn66_400x400.jpg\")",
                    sessionTitle: "Building LWCs using Modern JavaScript",
                    sessionTime: "3:30 PM",
                    sessionLocation: "Techies Innovation Hall"
                },
                {
                    id: 4,
                    name: "Jyothsna Bitra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1337719158016905216/Co1DnvWP_400x400.jpg\")",
                    sessionTitle: "Master Marketing Cloud!",
                    sessionTime: "3:00 PM",
                    sessionLocation: "Moment Marketers Hall"
                }
            ]
        },
        {
            slot: "6",
            active: false,
            is_community_session: true,
            title: "Sessions Going On 6",
            time: "12:30PM",
            items: [
                {
                    id: 1,
                    name: "Rahul Malhotra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1208356452160589824/qLtb5g9P_400x400.jpg\")",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 2,
                    name: "Monika Ramchandani",
                    style: "background-image: url(\"https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI\")",
                    sessionTitle: "Build Flows Like a Pro!",
                    sessionTime: "2:30 PM",
                    sessionLocation: "Awesome Admins Hall"
                },
                {
                    id: 3,
                    name: "Kapil Batra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1586306161019535360/O4wCLn66_400x400.jpg\")",
                    sessionTitle: "Building LWCs using Modern JavaScript",
                    sessionTime: "3:30 PM",
                    sessionLocation: "Techies Innovation Hall"
                },
                {
                    id: 4,
                    name: "Jyothsna Bitra",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1337719158016905216/Co1DnvWP_400x400.jpg\")",
                    sessionTitle: "Master Marketing Cloud!",
                    sessionTime: "3:00 PM",
                    sessionLocation: "Moment Marketers Hall"
                }
            ]
        },
        {
            slot: "7",
            active: false,
            is_community_session: false,
            items: [
                {
                    id: 1,
                    title: "Demo Jam: Find the best salesforce app",
                    image_url: this.demoJam,
                    time: "1:30PM",
                    location: "Techies Innovation Hall"
                }
            ]
        },
        {
            slot: "8",
            active: false,
            is_community_session: false,
            items: [
                {
                    id: 1,
                    title: "Sponsor Hour",
                    image_url: this.sponsorHour,
                    time: "4:30PM",
                    location: "Sponsorship Hall"
                }
            ]
        },
        {
            slot: "9",
            active: false,
            is_community_session: false,
            items: [
                {
                    id: 1,
                    title: "Closing Ceremony",
                    image_url: this.closingCeremony,
                    time: "4:30PM",
                    location: "Main Hall"
                }
            ]
        }
    ]
    workshops = [
        {
            slot: "1",
            active: false,
            is_community_session: true,
            title: "Sessions Going On",
            time: "12:30PM",
            items: [
                {
                    id: 1,
                    title: "Workshop: Build your first LWC component",
                    image_url: "https://media.licdn.com/dms/image/D5622AQFN6a68l1SVZQ/feedshare-shrink_800/0/1716551444378?e=2147483647&v=beta&t=YNJTtxIc-ZY0YZfihUDxpsQMzzHXBNSHPAtvBl1ROh0",
                    time: "12:30PM",
                    location: "Techies Innovation Hall"
                },
                {
                    id: 2,
                    title: "Workshop: Integrate Salesforce with Vertex AI",
                    image_url: "https://media.licdn.com/dms/image/D5622AQFN6a68l1SVZQ/feedshare-shrink_800/0/1716551444378?e=2147483647&v=beta&t=YNJTtxIc-ZY0YZfihUDxpsQMzzHXBNSHPAtvBl1ROh0",
                    time: "2:00PM",
                    location: "Awesome Admins Hall"
                }
            ]
        },
        {
            slot: "2",
            active: false,
            is_community_session: true,
            title: "Sessions Going On",
            time: "12:30PM",
            items: [
                {
                    id: 1,
                    title: "Workshop: Build your first LWC component",
                    image_url: "https://media.licdn.com/dms/image/D5622AQFN6a68l1SVZQ/feedshare-shrink_800/0/1716551444378?e=2147483647&v=beta&t=YNJTtxIc-ZY0YZfihUDxpsQMzzHXBNSHPAtvBl1ROh0",
                    time: "12:30PM",
                    location: "Techies Innovation Hall"
                },
                {
                    id: 2,
                    title: "Workshop: Integrate Salesforce with Vertex AI",
                    image_url: "https://media.licdn.com/dms/image/D5622AQFN6a68l1SVZQ/feedshare-shrink_800/0/1716551444378?e=2147483647&v=beta&t=YNJTtxIc-ZY0YZfihUDxpsQMzzHXBNSHPAtvBl1ROh0",
                    time: "2:00PM",
                    location: "Awesome Admins Hall"
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

    async connectedCallback() {
        this.showSpinner = true;
        const eventResult = await getActiveEvent();
        if (eventResult) {
            this.phase = eventResult.Event_Phase__c;
            this.showPhaseContent();
        }
        this.showSpinner = false;
        this.configs.map(config => {
            config.active = false;
            console.log('##config log '+config.slot+" "+this.session_slot);
            if(config.slot === this.session_slot) {
                config.active = true;
            }
        });
        this.workshops.map(workshop => {
            workshop.active = false;
            console.log('##workshop log '+workshop.slot+" "+this.workshop_slot);
            if(workshop.slot === this.workshop_slot) {
                console.log('##if');
                workshop.active = true;
                console.log('##status '+workshop.active);
                this.showWorkshop=true;
            }
        });
    }


    


    showPhaseContent() {
        switch (this.phase) {
            case "Check In":
                this.showCheckIn = true;
                break;
            case "Keynote 1":
                this.showKeynote = true;
                break;
            case "Keynote 1 Feedback":
                this.populateKeynote1Feedback();
                this.showVote = true;
                this.isFeedback = true;
                break;
            case "Booths and Sessions":
                this.showBoothsSessions = true;
                this.slot=1;
                this.session_slot="1";
                break;
            case "Booths and Sessions 2":
                    this.showBoothsSessions = true;
                    this.slot=2;
                    this.session_slot="2";
                    break;
             case "Booths and Sessions 3":
                        this.showBoothsSessions = true;
                        this.slot=3;
                        this.session_slot="3";
                        break;
             case "Lunch":
                            this.showLunch = true;
                            break;

                            case "Booths and Sessions 4":
                                this.showBoothsSessions = true;
                                this.slot=4;
                                this.session_slot="4";
                                break;
                            case "Booths and Sessions 5":
                                    this.showBoothsSessions = true;
                                    this.slot=5;
                                    this.session_slot="5";
                                    break;
                             case "Booths and Sessions 6":
                                        this.showBoothsSessions = true;
                                        this.slot=6;
                                        this.session_slot="6";
                                        break;
                                        case "Demo Jam":
                                        this.showBoothsSessions = true;
                                        this.slot=7;
                                        this.session_slot="7";
                                        this.workshopSlot=0;
                                        break;
                                        case "Sponsor Hour":
                                        this.showBoothsSessions = true;
                                        this.slot=8;
                                        this.session_slot="8";
                                        this.workshopSlot=0;
                                        break;
                                        case "Closing Ceremony":
                                        this.showBoothsSessions = true;
                                        this.slot=9;
                                        this.session_slot="9";
                                        this.workshopSlot=0;
                                        break;
            // case "Keynote 2":
            //     this.showKeynote = true;
            //     break;
            // case "Game 2":
            //     this.showGame2 = true;
            //     break;
            // case "Keynote 2 Feedback":
            //     this.populateKeynote2Feedback();
            //     this.showVote = true;
            //     this.isFeedback = true;
            //     break;
            case "Survey":
                this.populateSurvey();
                this.showSurvey = true;
                this.isFeedback = true;
                break;
            case "Event Feedback":
                this.populateEventFeedback();
                this.showVote = true;
                this.isFeedback = true;
                break;
            default:
                break;
        }
        if(this.slot===1 || this.slot===2 || this.slot===3)
            {
                this.workshopSlot=1;
                this.workshop_slot='1';
            }
        else if(this.slot===4 || this.slot===5 || this.slot===6)
        {
            this.workshopSlot=2;
            this.workshop_slot='2';
        }
    }

    get isRegistrationPhase() {
        return this.phase && this.phase === "Check In";
    }

    get isKeynotePhase() {
        return this.phase && this.phase === "Keynote";
    }

    populateKeynote1Feedback() {
        this.voteType = "keynote1Feedback";
        this.voteTitle = "Keynote Feedback";
        this.voteOptions = [
            {
                title: "How was the opening keynote?",
                name: "keynote1Feedback",
                options: this.feedbackOptions
            }
        ];
        this.embedded = false;
        if (localStorage.getItem("vote_" + this.voteType) === "done") {
            this.alreadyVoted = true;
        } else {
            this.alreadyVoted = false;
        }
    }

    populateKeynote2Feedback() {
        this.voteType = "keynote2Feedback";
        this.voteTitle = "Keynote Feedback";
        this.voteOptions = [
            {
                title: "How was the closing keynote?",
                name: "keynote2Feedback",
                options: this.feedbackOptions
            }
        ];
        this.embedded = false;
        if (localStorage.getItem("vote_" + this.voteType) === "done") {
            this.alreadyVoted = true;
        } else {
            this.alreadyVoted = false;
        }
    }

    populateSurvey() {
        this.voteType = "survey";
        this.voteTitle = "Developer Content Survey";
        this.feedbackText =
            "What content would you like us to do that we are not doing right now?";
        this.voteOptions = [
            {
                title: "Where do you follow Salesforce Developers and get updates?",
                name: "updates",
                options: [
                    { label: "Telegram", value: "telegram" },
                    { label: "Linkedin", value: "linkedin" },
                    { label: "Facebook", value: "facebook" },
                    { label: "Twitter", value: "twitter" },
                    { label: "SF Developers Newsletter", value: "newsletter" },
                    { label: "Community Group on Trailhead", value: "cgth" }
                ]
            },
            {
                title: "If we were to do webinars on YouTube, when would you be free to attend virtually?",
                name: "timeframe",
                options: [
                    { label: "Thursday morning", value: "thu_morn" },
                    { label: "Thursday evening", value: "thu_eve" },
                    { label: "Friday morning", value: "fri_morn" },
                    { label: "Friday evening", value: "fri_eve" },
                    { label: "Saturday morning", value: "sat_morn" },
                    { label: "Saturday evening", value: "sat_eve" },
                    {
                        label: "Only interested in the recording",
                        value: "recording"
                    }
                ]
            },
            {
                title: "How long would you like learning videos to be?",
                name: "preferedLength",
                options: [
                    { label: "YouTube Shorts ~ 1 mins", value: "ytshorts" },
                    { label: "Quick Tutorials ~ 10 mins", value: "qtakes" },
                    { label: "Deep dives: ~30 min", value: "deepdives" },
                    {
                        label: "Webinars/live streams: ~1 hour",
                        value: "webinars"
                    }
                ]
            },
            {
                title: "Where do you go to learn something cool or new about Salesforce?",
                name: "preferedPlace",
                options: [
                    {
                        label: "SF Developers YouTube Channel",
                        value: "sfdevsyt"
                    },
                    { label: "Other YouTube channels", value: "otheryt" },
                    { label: "SF Developers Blog", value: "sfdevsblog" },
                    { label: "Other Blogs", value: "otherblogs" },
                    { label: "Trailhead", value: "trailhead" },
                    { label: "LinkedIn", value: "li" },
                    { label: "Other", value: "other" }
                ]
            }
        ];
        if (localStorage.getItem("vote_" + this.voteType) === "done") {
            this.alreadyVoted = true;
        }
    }

    populateEventFeedback() {
        this.voteType = "eventFeedback";
        this.voteTitle = "Event Feedback";
        this.voteOptions = [
            {
                title: "How was the event?",
                name: "eventFeedbackOverall",
                options: this.feedbackOptions
            }
        ];
        this.embedded = false;
        if (localStorage.getItem("vote_" + this.voteType) === "done") {
            this.alreadyVoted = true;
        } else {
            this.alreadyVoted = false;
        }
    }

    points=0;
    activityDescription;
    sessionName;

    getSession()
    {
        getSessionName({
            eventId: this.eventId,
            sessionCode : this.sessionCode
        })
            .then((result) => {
                if (result) {
                    this.sessionName=result;
                    console.log('##session name '+this.sessionName);
                }
            })
            .catch(() => {
                LightningAlert.open({
                    message:
                        "An error occurred when saving your data. Please reach out to the event staff.",
                    theme: "error",
                    label: "An error occurred"
                });
            });
            console.log('##session name outer '+this.sessionName);
    }
    handleVote(event) {
        this.showSpinner = true;
        console.log('##phase'+this.phase);
        if(this.phase=='Keynote 1 Feedback')
            {
                this.points=2000;
                this.activityDescription='You gave feedback for keynote speakers';
            }
            if(this.phase.includes('Booths and Sessions'))
                {
                    this.points=500;
                    this.activityDescription='You gave feedback for session ';
                }
                if(this.phase.includes('Demo Jam'))
                    {
                        this.points=1000;
                        this.activityDescription='You gave feedback for demo jam ';
                    }
                        if(this.phase.includes('Sponsor'))
                            {
                                this.points=1000;
                                this.activityDescription='You gave feedback for sponsor hour session';
                            }
                            if(this.phase.includes('Closing'))
                                {
                                    this.points=2000;
                                    this.activityDescription='You gave feedback for closing ceremony';
                                }
                                if(this.phase.includes('Event Feedback'))
                                    {
                                        this.points=500;
                                        this.activityDescription='You gave feedback for overall event';
                                    }
                                    if(this.showWorkshop===true)
                                        {
                                            this.points=500;
                                            this.activityDescription='You gave feedback for session ';
                                        }
                console.log('##description '+this.activityDescription);
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

    showWorkshopAttendance = true;
    showWorkshopFeedback = false;

    handleSessionCodeChange(event) {
        this.sessionCode = event.detail.value;
    }
    type;
    showFeedbackForm(sessionCode) {
        this.slotToSend=this.slot;
        this.type='Session';
        console.log('##event id '+this.eventId);
        this.showSpinner = true;
        saveSessionBoothAttendance({
            eventId: this.eventId,
            attendeeId: this.attendeeId,
            sessionCode: sessionCode,
            slot:this.slot,
            type:this.type,
            sessionName:this.selectedSessionTitle
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
                                //title: "How did you like the content shared?",
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

    showWorkshopFeedbackForm(sessionCode) {
        this.slotToSend=this.workshopSlot;
        this.type='Workshop';
        console.log('##event id '+this.eventId);
        this.showSpinner = true;
        saveWorkshopAttendance({
            eventId: this.eventId,
            attendeeId: this.attendeeId,
            sessionCode: sessionCode,
            slot:this.workshopSlot,
            type:this.type
        })
            .then((result) => {
                if (result) {
                    const parsedResult = JSON.parse(result);
                    if (parsedResult.isSuccess) {
                        this.showWorkshopAttendance = false;
                        this.showWorkshopFeedback = true;

                        // Populate Vote Options
                        this.voteType =
                            "session_feedback" + parsedResult.message;
                        // this.voteTitle =
                        //     "Please sharing ";
                        this.voteOptions = [
                            {
                                //title: "How did you like the content shared?",
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
    saveWorkshopAttendance() {
        const sessionCodeEle = this.template.querySelector(".sessionCode");
        if (this.sessionCode) {
            sessionCodeEle.setCustomValidity("");
            sessionCodeEle.reportValidity();
            this.showWorkshopFeedbackForm(this.sessionCode);
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
    closeWorkshopfeedback() {
        this.showWorkshopAttendance = true;
        this.showWorkshopFeedback = false;
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
