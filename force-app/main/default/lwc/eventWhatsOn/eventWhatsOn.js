import { LightningElement, api } from "lwc";
import saveActivity from "@salesforce/apex/EventAppCtrl.saveActivity";
import getSessionName from "@salesforce/apex/EventAppCtrl.getSessionName";
import saveSessionBoothAttendance from "@salesforce/apex/EventAppCtrl.saveSessionBoothAttendance";
import saveWorkshopAttendance from "@salesforce/apex/EventAppCtrl.saveWorkshopAttendance";
import savePanelAttendance from "@salesforce/apex/EventAppCtrl.savePanelAttendance";
import LightningAlert from "lightning/alert";
import getActiveEvent from "@salesforce/apex/EventAppCtrl.getActiveEvent";
import DEMOJAM from "@salesforce/resourceUrl/demoJam";
import SPONSORHOUR from "@salesforce/resourceUrl/sponsorHour";
import CLOSINGCEREMONY from "@salesforce/resourceUrl/closingCeremony";
import WORKSHOP1 from "@salesforce/resourceUrl/workshop1";
import WORKSHOP2 from "@salesforce/resourceUrl/workshop2";
import WORKSHOP3 from "@salesforce/resourceUrl/workshop3";
import PANEL1 from "@salesforce/resourceUrl/panel1";
import PANEL2 from "@salesforce/resourceUrl/panel2";
import PANEL3 from "@salesforce/resourceUrl/panel3";
import PANEL4 from "@salesforce/resourceUrl/panel4";
export default class EventWhatsOn extends LightningElement {
    demoJam=DEMOJAM;
    sponsorHour=SPONSORHOUR;
    closingCeremony=CLOSINGCEREMONY;
    workshop1=WORKSHOP1;
    workshop2=WORKSHOP2;
    workshop3=WORKSHOP3;
    panel1=PANEL1;
    panel2=PANEL2;
    panel3=PANEL3;
    panel4=PANEL4;
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
            time: "10:40 AM - 11:10 AM",
            items: [
                {
                    id: 1,
                    name: "Shrey Sharma",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/shrey-sharma-bharat-dreamin-speaker.png",
                    sessionTitle: "How To Make The Best Of Your Leadership Skills",
                    sessionLocation: "Auditorium",
                    src1Visible:false
                },
                {
                    id: 2,
                    name: "Sanket Kumar",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/sanket-kumar-bharat-dreamin-speaker.png",
                    sessionTitle: "Unleashing New Potentials: Blockchain with Salesforce",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Manika Goyal",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Manika-Goyal-bharat-dreamin-speaker.png",
                    sessionTitle: "Intellimoms: Bringing Women Back to Work",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 4,
                    name: "Manish Thaduri",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/manish-thaduri-speaker.png",
                    sessionTitle: "Manish Thaduri",
                    sessionLocation: "Exebition Hall",
                    src1Visible:false
                }
            ]
        },
        {
            slot: "2",
            active: false,
            is_community_session: true,
            title: "Sessions Going On",
            time: "11:20 AM - 11:40 AM",
            items: [
                {
                    id: 1,
                    name: "Phaneendra Arigachetta & Riya Sarkar",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Phaneendra-Arigachetta-bharat-dreamin-speaker.png",
                    src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/RIYA-SARKAR-bharat-dreamin-speaker.png",
                    sessionTitle: "Leveraging Slack for On-Site Support and Quotation Approvals: A Field Engineers Guide",
                    sessionLocation: "Auditorium",
                    src1Visible:true
                },
                {
                    id: 2,
                    name: "Ashvin Bhatt",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Ashvin-Bhatt-bharat-dreamin-speaker.png",
                    sessionTitle: "Salesforce Anti-Pattern : Pitfalls Unveiled",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Rajat Jain",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/rajat-jain-bharat-dreamin-speaker.png",
                    sessionTitle: "MTX - DevSec Ops",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 4,
                    name: "Amit Singh and Rishabh Seth",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/amit-singh-bharat-dreamin-speaker.png",
                    src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/rishabh-seth-bharat-dremain-speaker.png",
                    sessionTitle: "Amit Singh and Rishabh Seth",
                    sessionLocation: "Exebition Hall 3",
                    src1Visible:true
                }
            ]
        },
        {
            slot: "3",
            active: false,
            is_community_session: true,
            title: "Sessions Going On",
            time: "11:50 AM to 12:30 PM",
            items: [
                {
                    id: 1,
                    name: "Shreeya Rashinkar & Swati Taunk",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/shreeya-rashinkar-bharat-dreamin-speaker.png",
                    src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/SWATI-TAUNK-bharat-dreamin-speaker.png",
                    sessionTitle: "Up your telecom game with communications cloud",
                    sessionLocation: "Auditorium",
                    src1Visible:true
                },
                {
                    id: 2,
                    name: "Chamil Madusanka",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/chamil-madhushanka-bharat-dreamin-speaker.png",
                    sessionTitle: "Cultivating Success: A Mentors Guide to Nurturing Salesforce Interns",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Aman Tiwari and Gandharv Madan",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/aman-tiwari-bharat-dreamin-speaker.png",
                    src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/Gandharv-Madan-bharat-dreamin-speaker.png",
                    sessionTitle: "Code Warriors vs. Bug Bashers: A dynamic approach for seamless Salesforce project delivery",
                    sessionLocation: "Convention Hall",
                    src1Visible:true
                },
                {
                    id: 4,
                    name: "Khyati Mehta and Yash Sethi",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/khyati-mehta-bharat-dreamin-speaker.png",
                    src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/Yash-Sethi-bharat-dreamin-speaker.png",
                    sessionTitle: "Spicing Up LWC Components: Data Binding and Styling like a Boss!",
                    sessionLocation: "Exibition Hall",
                    src1Visible:true
                }
            ]
        },
        {
            slot: "4",
            active: false,
            is_community_session: true,
            title: "Sessions Going On",
            time: "14:20 PM to 14:40 PM",
            items: [
                {
                    id: 1,
                    name: "Sagar Pareek",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/sagar-pareek-bharat-dreamin-speaker.png",
                    sessionTitle: "Power of Bindings in Salesforce CRM Analytics",
                    sessionLocation: "Auditorium",
                    src1Visible:false
                },
                {
                    id: 2,
                    name: "Thiriyambaga Sarma",
                    src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    sessionTitle: "Handle Apex exceptions like a pro with custom exception handling framework",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Dipti Kalaria",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/dipti-kalaria.png",
                    sessionTitle: "Trailblazer: The Journey of Embracing Challenges and Self-Belief",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 4,
                    name: "Abhay Arora",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Abhay-Arora-bharat-dreamin-speaker.png",
                    sessionTitle: "DevOps In Salesforce with AI",
                    sessionLocation: "Exebition Hall 3",
                    src1Visible:false
                }
            ]
        },
        {
            slot: "5",
            active: false,
            is_community_session: true,
            title: "Sessions Going On",
            time: "14:50 PM to 15:30 PM",
            items: [
                {
                    id: 1,
                    name: "Vanisha Kheterpal and Akashdeep Singh",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/vanisha-kheterpal-bharat-dremain-speaker.png",
                    src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/akashdeep-singh.png",
                    sessionTitle: "Vanisha Kheterpal and Akashdeep Singh",
                    sessionLocation: "Auditorium",
                    src1Visible:true
                },
                {
                    id: 2,
                    name: "Neha Bhardwaj",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/neha-bhardwaj-bharat-dreamin-speaker.png",
                    sessionTitle: "Choosing the Right Salesforce Integration: Options and Best Practices",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Meera Nair & Rajini Janardhanan",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/meera-nair-bharat-dreamin-speaker.png",
                    src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/Ranjini-Janardhanan-bharat-dreamin-speaker.png",
                    sessionTitle: "CTA Mini Scenario Mastery: Elevating Architect Skills",
                    sessionLocation: "Convention Hall",
                    src1Visible:true
                },
                {
                    id: 4,
                    name: "Mayuresh Verma",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/mayuresh-verma-bharat-dreamin-speaker.png",
                    sessionTitle: "Scalability Innovations for Optimal Salesforce Application Lifecycle Management",
                    sessionLocation: "Exhibition Hall",
                    src1Visible:false
                }  
            ]
        },
        {
            slot: "6",
            active: false,
            is_community_session: true,
            title: "Sessions Going On",
            time: "15:40 PM to 16:10 PM",
            items: [
                {
                    id: 1,
                    name: "Nitin Sharma",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Nitin-bharat-dreamin-speaker.png",
                    sessionTitle: "AppExchange Security Review Program",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 2,
                    name: "Rahul Malhotra",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Rahul-Malhotra-bharat-dreamin-speaker.png",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionLocation: "Auditorium",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Rohan Singh & Lucky Thakkar",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Rohan-Singh-bharat-dreamin-speaker.png",
                    src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/lucky-thakkar-speaker.png",
                    sessionTitle: "Achieving Product Excellence: A Masterclass in Crafting, Marketing, and Selling Captivating Offerings",
                    sessionLocation: "Convention Hall",
                    src1Visible:true
                },
                {
                    id: 4,
                    name: "Saurabh Singh",
                    src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Saurabh-Singh-bharat-dreamin-speaker.png",
                    sessionTitle: "From Vision to Execution: Mastering the art of Salesforce Marketing Cloud Engagement Implementation",
                    sessionLocation: "Exebition Hall 3",
                    src1Visible:false
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
                    title: "Demo Jam",
                    image_url: this.demoJam
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
                    image_url: this.sponsorHour
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
                    image_url: this.closingCeremony
                }
            ]
        }
    ]
    workshops = [
        {
            slot: "1",
            active: false,
            is_community_session: true,
            title: "Workshop Going On",
            time: "10:40 AM to 12:30 PM",
            items: [
                {
                    id: 1,
                    title: "Data + AI",
                    image_url: this.workshop1
                },
                {
                    id: 2,
                    title: "Well Architected Workshop",
                    image_url: this.workshop2
                }
            ]
        },
        {
            slot: "2",
            active: false,
            is_community_session: true,
            title: "Workshop Going On",
            time: "14:20 PM to 16:10 PM",
            items: [
                {
                    id: 1,
                    title: "Data Cloud Solution Design Workshop",
                    image_url: this.workshop3
                },
                {
                    id: 2,
                    title: "Well Architected Workshop",
                    image_url: this.workshop2
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
    showAfterParty = false;
    showKeynote = false;
    showPanelDiscussion = false;
    showPanelDiscussionModal = false;
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
        window.addEventListener("message", this.receiveMessage);
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
                case "Panel Discussion":
                    this.showPanelDiscussion=true;
                    this.showPanelDiscussionModal=true;
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
                                        case "After Party":
                            this.showAfterParty = true;
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
                this.activityDescription='Keynote speakers feedback';
            }
            if(this.phase=='Panel Discussion')
                {
                    this.points=2000;
                    this.activityDescription='Panel Discussion - ';
                }
            if(this.phase.includes('Booths and Sessions'))
                {
                    this.points=500;
                    this.activityDescription='Session Feedback - ';
                }
                if(this.phase.includes('Demo Jam'))
                    {
                        this.points=1000;
                        this.activityDescription='Demo Jam Feedback - ';
                    }
                        if(this.phase.includes('Sponsor'))
                            {
                                this.points=1000;
                                this.activityDescription='Sponsor Hour Feedback';
                            }
                            if(this.phase.includes('Closing'))
                                {
                                    this.points=2000;
                                    this.activityDescription='Closing Ceremony Feedback';
                                }
                                if(this.phase.includes('Event Feedback'))
                                    {
                                        this.points=500;
                                        this.activityDescription='Overall Event Feedback';
                                    }
                                    if(this.showWorkshop===true)
                                        {
                                            this.points=500;
                                            this.activityDescription='Session Feedback - ';
                                        }
                console.log('##description '+this.activityDescription);
                console.log('##session code'+this.sessionCode);
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
                    const reloadEvent = new CustomEvent('reloaddata', {
                        bubbles: true,
                        composed: true
                    });
                    this.dispatchEvent(reloadEvent);
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
        console.log('##session Code'+sessionCode);
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
    showPanelFeedbackForm(sessionCode) {
        this.slotToSend=11;
        this.type='Panel';
        console.log('##event id '+this.eventId);
        console.log('##session Code'+sessionCode);
        console.log('##slot '+this.slotToSend);
        this.showSpinner = true;
        savePanelAttendance({
            eventId: this.eventId,
            attendeeId: this.attendeeId,
            sessionCode: sessionCode,
            type:this.type,
            slot:this.slotToSend,
            sessionName:this.selectedPanelTitle
        })
            .then((result) => {
                if (result) {
                    const parsedResult = JSON.parse(result);
                    if (parsedResult.isSuccess) {
                        this.showPanelDiscussionModal = false;
                        this.showPanelFeedback = true;

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
            type:this.type,
            sessionName :this.selectedWorkshopTitle
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
    savePanelAttendance() {
        const sessionCodeEle = this.template.querySelector(".sessionCode");
        if (this.sessionCode) {
            sessionCodeEle.setCustomValidity("");
            sessionCodeEle.reportValidity();
            this.showPanelFeedbackForm(this.sessionCode);
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
            const message = atob(event.detail.message.data);
            console.log('##message'+message);
            if(this.showModal==true)
                {
                    this.sessionCode=message;
                    this.showFeedbackForm(message);
                }
            else if(this.showWorkshopModal==true)
                {
                    this.sessionCode=message;
                    this.showWorkshopFeedbackForm(message);
                }
                else if(this.showPanelModal==true)
                    {
                        console.log('panel else');
                        this.sessionCode=message;
                        this.showPanelFeedbackForm(message);
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
        this.alreadyVoted=false;
        console.log('##show modal'+event.target.dataset.id);
        this.selectedSessionTitle=event.target.dataset.id;
        this.showModal = true;
        console.log('##show modal 1');
     }
     closeModal()
     {
        this.showModal=false;
        this.selectedSessionTitle='';
        this.sessionCode='';
        this.showSessionFeedback=false;
        this.showSessionAttendance=true;
        this.showWorkshopFeedback=false;
        this.showWorkshopAttendance=true;
        this.showScanner=false;
        const reloadEvent = new CustomEvent('reloaddata', {
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(reloadEvent);
     }
     showWorkshopModal = false;
    selectedWorkshopTitle;
    openWorkshopModal(event){
        this.alreadyVoted=false;
        console.log('##show modal'+event.target.dataset.id);
        this.selectedWorkshopTitle=event.target.dataset.id;
        this.showWorkshopModal = true;
        console.log('##show modal 1');
     }
     closeWorkshopModal()
     {
        this.showWorkshopModal=false;
        this.selectedWorkshopTitle='';
        this.showWorkshopFeedback=false;
        this.showWorkshopAttendance=true;
        this.showSessionFeedback=false;
        this.showSessionAttendance=true;
        this.showScanner=false;
        const reloadEvent = new CustomEvent('reloaddata', {
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(reloadEvent);
     }

     //panel discussion modal
     showPanelModal = false;
    selectedPanelTitle;
    openPanelModal(event){
        this.alreadyVoted=false;
        console.log('##show modal'+event.target.dataset.id);
        this.selectedPanelTitle=event.target.dataset.id;
        this.showPanelModal = true;
        console.log('##show modal 1');
     }
     closePanelModal()
     {
        this.showPanelModal=false;
        this.selectedPanelTitle=false;
        this.showPanelFeedback=false;
        this.showPanelDiscussionModal=true;
        this.showScanner=false;
        const reloadEvent = new CustomEvent('reloaddata', {
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(reloadEvent);
     }


    iframeLoaded = false;

    receiveMessage = (message) => {
        if (message.origin === "https://venerable-strudel-b9e4e9.netlify.app") {
            const event = new CustomEvent("scancomplete", {
                detail: { message }
            });
            this.handleQRResponse(event);
        }
    };
    disconnectedCallback() {
        window.removeEventListener("message", this.receiveMessage);
    }

    handleLoad() {
        this.iframeLoaded = true;
        console.log('##handle load');
    }
}
