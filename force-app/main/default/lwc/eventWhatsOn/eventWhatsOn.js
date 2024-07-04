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
                    name: "Shreeya Rashinkar & Swati Taunk",
                    src:"https://media.licdn.com/dms/image/D4D03AQEyJgEGc6IZsg/profile-displayphoto-shrink_400_400/0/1713897283512?e=1725494400&v=beta&t=cx2McY9TzErivq4-fSffs9kCsG1CaUqv6jCBxdVlo7c",
                    src1:"https://media.licdn.com/dms/image/D5603AQHoUiFaNs1Ejg/profile-displayphoto-shrink_800_800/0/1718552084912?e=1725494400&v=beta&t=w6s0gQx0GTAJ8c3E8ZeqRcida2yYtyL2wtwOqEunYJk",
                    sessionTitle: "Up your telecom game with communications cloud",
                    sessionLocation: "Auditorium",
                    src1Visible:true
                },
                {
                    id: 2,
                    name: "Khyati Mehta and Yash Sethi",
                    src:"https://media.licdn.com/dms/image/C4E03AQG0xs3SqLUxlQ/profile-displayphoto-shrink_400_400/0/1647161489408?e=1725494400&v=beta&t=HCYsb8v5NM9-_wU6H1YcxuvdvanIEFW8AmyI-XPdP1k",
                    src1:"https://media.licdn.com/dms/image/D4D03AQFRVXR7Sp-zNA/profile-displayphoto-shrink_400_400/0/1685192527425?e=1725494400&v=beta&t=XmAcwWcYQDcYTXmwSaR7lSZGAc2mRxau3Qv9BI2O2tY",
                    sessionTitle: "Spicing Up LWC Components: Data Binding and Styling like a Boss!",
                    sessionLocation: "Convention Hall",
                    src1Visible:true
                },
                {
                    id: 3,
                    name: "Aman Tiwari and Gandharv Madan",
                    src:"https://media.licdn.com/dms/image/D5603AQFniTDxZ5FWxQ/profile-displayphoto-shrink_400_400/0/1718223429901?e=1725494400&v=beta&t=wWML1KGsfBlyaCYrAK5d3_tfzZ5r1gb5q7HXDvsBQJk",
                    src1:"https://media.licdn.com/dms/image/D4D03AQEIkaSPXB1GXg/profile-displayphoto-shrink_400_400/0/1693376292019?e=1725494400&v=beta&t=ZDmY0yYqDfanIvMH7tDbBqRcA1ARXlAwl0sCE_ku21E",
                    sessionTitle: "Code Warriors vs. Bug Bashers: A dynamic approach for seamless Salesforce project delivery",
                    sessionLocation: "Convention Hall",
                    src1Visible:true
                },
                {
                    id: 4,
                    name: "Chamil Madusanka",
                    src:"https://media.licdn.com/dms/image/C5603AQGgG4DUSQgTQA/profile-displayphoto-shrink_400_400/0/1615614866769?e=1725494400&v=beta&t=FndHebXCrP6CpBFF8uEA-Gak8KbrNJ7btY2WvZWNSB4",
                    sessionTitle: "Cultivating Success: A Mentors Guide to Nurturing Salesforce Interns",
                    sessionLocation: "Exebition Hall 3",
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
                    name: "Akshata Sawant",
                    src:"https://media.licdn.com/dms/image/D4E03AQE9waTRjGmzVg/profile-displayphoto-shrink_400_400/0/1678464896813?e=1725494400&v=beta&t=eLQkwaIf0pYoX1FGN8zUzpg4F45KhSpWFP64dltCN-I",
                    sessionTitle: "Power Up with Data Cloud and MuleSoft",
                    sessionLocation: "Auditorium",
                    src1Visible:false
                },
                {
                    id: 2,
                    name: "Sanket Kumar",
                    src:"https://media.licdn.com/dms/image/D5603AQEb09m2gDlYsQ/profile-displayphoto-shrink_400_400/0/1712894014957?e=1725494400&v=beta&t=rUF_r7oUqb1ib53kBP5KOB1Ot2eEMMXq5fhj3K7QdzY",
                    sessionTitle: "Unleashing New Potentials: Blockchain with Salesforce",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Manika Goyal",
                    src:"https://media.licdn.com/dms/image/C4E03AQElO09vgqOn4A/profile-displayphoto-shrink_400_400/0/1612942097230?e=1725494400&v=beta&t=TWUpHzSHrK1S1IsVs3I_xs1kTQo_JIn2-2vBZy-YfDs",
                    sessionTitle: "Intellimoms: Bringing Women Back to Work",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 4,
                    name: "Shrey Sharma",
                    src:"https://media.licdn.com/dms/image/D5603AQFrMl4sxEM3ew/profile-displayphoto-shrink_400_400/0/1712643288501?e=1725494400&v=beta&t=ByAwum38nnWo9oaoEw2nnYAo-HhCHoj81X8MiTakBMM",
                    sessionTitle: "Shrey Sharma",
                    sessionLocation: "Exebition Hall 3",
                    src1Visible:false
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
                    name: "Phaneendra Arigachetta & Riya Sarkar",
                    src:"https://media.licdn.com/dms/image/C4E03AQHNXgQMEVlOdA/profile-displayphoto-shrink_800_800/0/1520706688851?e=1725494400&v=beta&t=OSywA_lCEdfq2Mwu7J8dJcxzvcOeTpLgVFt1-6_JitM",
                    src1:"https://media.licdn.com/dms/image/D4D03AQFppv7NSC0xzQ/profile-displayphoto-shrink_400_400/0/1699195231685?e=1725494400&v=beta&t=apV94zgnyBNThOklCpOpnUuTjzCHwlBzdIscae_JQUQ",
                    sessionTitle: "Leveraging Slack for On-Site Support and Quotation Approvals: A Field Engineers Guide",
                    sessionLocation: "Auditorium",
                    src1Visible:true
                },
                {
                    id: 2,
                    name: "Ashvin Bhatt",
                    src:"https://media.licdn.com/dms/image/C5103AQFI1skjHtvYqA/profile-displayphoto-shrink_400_400/0/1574118788436?e=1725494400&v=beta&t=er1x5j4DQzM4p0dOT_OrzjU4-jfv9q1JAJP-vkVwf8U",
                    sessionTitle: "Salesforce Anti-Pattern : Pitfalls Unveiled",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Sponsor Session 1",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1586306161019535360/O4wCLn66_400x400.jpg\")",
                    sessionTitle: "Sponsor Session 1",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 4,
                    name: "Sponsor Session 2",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1586306161019535360/O4wCLn66_400x400.jpg\")",
                    sessionTitle: "Sponsor Session 2",
                    sessionLocation: "Exebition Hall 3",
                    src1Visible:false
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
                    src:"https://media.licdn.com/dms/image/C4E03AQHEkpkx7ed8Sw/profile-displayphoto-shrink_800_800/0/1631703035022?e=1725494400&v=beta&t=Ct4JsV4hOkDRgsHdS98a1H7MMZ8bXpVM1qFtpOKjeoA",
                    sessionTitle: "Power of Bindings in Salesforce CRM Analytics",
                    sessionLocation: "Auditorium",
                    src1Visible:false
                },
                {
                    id: 2,
                    name: "Thiriyambaga Sarma",
                    style: "background-image: url(\"https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI\")",
                    sessionTitle: "Handle Apex exceptions like a pro with custom exception handling framework",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Abhay Arora",
                    src:"https://media.licdn.com/dms/image/D5603AQGI1eQLOhGA7w/profile-displayphoto-shrink_400_400/0/1690699916166?e=1725494400&v=beta&t=PRha8n2HzhDbkNhUpufuDL9yeYVgNXLfts_MtqMFBRM",
                    sessionTitle: "Salesforce with DevOps Practices",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 4,
                    name: "Sponsor Session 3",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1337719158016905216/Co1DnvWP_400x400.jpg\")",
                    sessionTitle: "Sponsor Session 3",
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
                    name: "Mayuresh Verma",
                    src:"https://media.licdn.com/dms/image/D4D03AQG3Nd49dqEyfw/profile-displayphoto-shrink_400_400/0/1718274310272?e=1725494400&v=beta&t=owO-4-ci55uvssxIv5uZGU3_Nx7p1AAQxBEs_pajvGQ",
                    sessionTitle: "Scalability Innovations for Optimal Salesforce Application Lifecycle Management",
                    sessionLocation: "Auditorium (Ground Floow)",
                    src1Visible:false
                },
                {
                    id: 2,
                    name: "Neha Bhardwaj",
                    src:"https://media.licdn.com/dms/image/C5103AQEztqPH-rcahA/profile-displayphoto-shrink_400_400/0/1563359562372?e=1725494400&v=beta&t=BPqsvj6bPiExPTnrykve3NaNUFf7_lq4dA0quF-1EvY",
                    sessionTitle: "Choosing the Right Salesforce Integration: Options and Best Practices",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Meera Nair & Rajini Janardhanan",
                    src:"https://media.licdn.com/dms/image/C5603AQFN4Qf-KDor4A/profile-displayphoto-shrink_800_800/0/1616917463716?e=1725494400&v=beta&t=T3degOlqlHYO2ppuCt98KJPTQBJMIKAMRtJXYiAgJIc",
                    src1:"https://media.licdn.com/dms/image/C4D03AQFLq1Od4Sy31A/profile-displayphoto-shrink_400_400/0/1655821254966?e=1725494400&v=beta&t=ynDDg9HA7eqlvT6MdHWd90vZpuGapSyzaMOxO4kLCJM",
                    sessionTitle: "CTA Mini Scenario Mastery: Elevating Architect Skills",
                    sessionLocation: "Convention Hall",
                    src1Visible:true
                },
                {
                    id: 4,
                    name: "Sponsor Session 4",
                    style: "background-image: url(\"https://pbs.twimg.com/profile_images/1337719158016905216/Co1DnvWP_400x400.jpg\")",
                    sessionTitle: "Sponsor Session 4",
                    sessionLocation: "Exebition Hall 3",
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
                    name: "Rahul Malhotra",
                    src:"https://media.licdn.com/dms/image/C4E03AQGDW6NtpdeD8g/profile-displayphoto-shrink_400_400/0/1605847946170?e=1725494400&v=beta&t=zsB_ux8u1-j7NFydE2Am4ypC1h0oj-49KXVHv02FTTs",
                    sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                    sessionLocation: "Auditorium",
                    src1Visible:false
                },
                {
                    id: 2,
                    name: "Nitin Sharma",
                    style: "background-image: url(\"https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI\")",
                    sessionTitle: "AppExchange Security Review Program",
                    sessionLocation: "Convention Hall",
                    src1Visible:false
                },
                {
                    id: 3,
                    name: "Rohan Singh & Lucky Thakkar",
                    src:"https://media.licdn.com/dms/image/D4D03AQG6WI-wQaf9MQ/profile-displayphoto-shrink_400_400/0/1689400455904?e=1725494400&v=beta&t=mOu-qfHt2sHjhr57ziK8bTNXnUqPsXcewzFf0151g2g",
                    src1:"https://media.licdn.com/dms/image/D4D03AQEVQM8OPcxG5A/profile-displayphoto-shrink_400_400/0/1679087483475?e=1725494400&v=beta&t=jgyYXeKPA6sysCYz4u8gW-96kx1EAln3AVmGq5isgcM",
                    sessionTitle: "Achieving Product Excellence: A Masterclass in Crafting, Marketing, and Selling Captivating Offerings",
                    sessionLocation: "Convention Hall",
                    src1Visible:true
                },
                {
                    id: 4,
                    name: "Saurabh Singh",
                    src:"https://media.licdn.com/dms/image/D4D03AQFFWzBKpnuNrw/profile-displayphoto-shrink_400_400/0/1698400754117?e=1725494400&v=beta&t=VzulVaxGfKRIE6oFE1rA4eXppQQrINvpIauBQqFC6T4",
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
                    title: "Workshop: AI + Data",
                    image_url: this.workshop1
                },
                {
                    id: 2,
                    title: "Workshop: Well Architected Workshop",
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
                    title: "Workshop: Data Cloud Solution Design Workshop",
                    image_url: this.workshop3
                },
                {
                    id: 2,
                    title: "Workshop: Well Architected Workshop",
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
                            "An error occurred when saving your data. Please reach out to the event staff. 1",
                        theme: "error",
                        label: "An error occurred"
                    });
                }
            })
            .catch(() => {
                LightningAlert.open({
                    message:
                        "An error occurred when saving your data. Please reach out to the event staff. 2",
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
