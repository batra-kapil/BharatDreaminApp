import { LightningElement, api, track, wire } from 'lwc';
import getEventLeaderBoard from '@salesforce/apex/EventAppCtrl.getEventLeaderBoard';
export default class EventLeaderBoard extends LightningElement {
    @api attendeeId;
    data;
    error;

    columns = [
        { label: 'Attendee Name', fieldName: 'Event_Attendee__r.Name', type: 'text' },
        { label: 'Points', fieldName: 'Points__c', type: 'number' }
    ];

    @wire(getEventLeaderBoard)
wiredEventActivities({ error, data }) {
    if (data) {
        this.data = data;
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.data = undefined;
    } else {
        this.data = undefined;
        this.error = { message: 'Data not available.' };
    }
}
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
                    name: "Deloitte (Diamond Sponsor)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/02/Sponsor.png",
                    sessionTitle: "we are continuously evolving how we work and how we look at marketplace challenges so we can continue to deliver measurable, sustainable results for our clients and our communities."
                },
                {
                    id: 2,
                    name: "MTX Group (Platinum Sponsor)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/mtx-bharat-dreamin-platinum-sponsor.png",
                    sessionTitle: "MTX Group Inc. (MTX) is a global technology consulting firm that enables organizations to modernize through digital transformation."
                },
                {
                    id: 3,
                    name: "Brillio (Gold Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/Brillio_Primary-Logo_Dark.svg",
                    sessionTitle: "Brillio is one of the fastest growing digital technology service providers and a partner of choice for many Fortune 1000 companies seeking to turn disruption into a competitive advantage through innovative digital adoption.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 4,
                    name: "360 Degree Cloud Technologies (Silver Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/360_DC_Company_Logo.png",
                    sessionTitle: "360 Degree Cloud is a customer-centric Salesforce Summit (Platinum ) partner centered on delivering an extensive spectrum of Salesforce services and products",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 5,
                    name: "SurveyVista (Silver Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/SurveyVistaLogo-300x70-1.png",
                    sessionTitle: "SurveyVista, a 100% native salesforce solution that helps customers collect, integrate, understand and act on data gathered via surveys, forms, checklists, quizzes, and assessments.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 6,
                    name: "Wahinnovations (Silver Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/WahInnovations_Logo.png",
                    sessionTitle: "Wahinnovations is a Salesforce Development company in India and USA that provides the vision to transform the business into next-level opportunities.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 7,
                    name: "mindZvue Technologies (Silver Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/mindzvue-technology-bharat-dreamin-sponsor.png",
                    sessionTitle: "At mindZvue, Excellence and Passion converge with Innovation and Technology. We create new Ideas and Transform them into real-world solutions.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 8,
                    name: "Testsigma (Silver Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/testsigma-bharat-dreamin-sponsor.png",
                    sessionTitle: "Testsigma is a low-code, test automation platform for end-to-end testing that works out of the box.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 9,
                    name: "appycrown (Silver Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/07/AppyCrown-logowhite-1536x1031.png",
                    sessionTitle: "We are helping businesses of all sizes and industries leverage the power of Salesforce to drive growth and success.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 10,
                    name: "FieldAx (Silver Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/07/Fieldax-PNG-Logo-1536x640.png",
                    sessionTitle: "FieldAx Field service management encompasses a wide range of features. With FieldAx, businesses can streamline their daily operations, automate tasks, simplify overall processes, and reduce the need for micromanagement.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 11,
                    name: "Drizzle IT Services (Copper Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/drizzle-bharat-dreamin-sponsor.png",
                    sessionTitle: "Drizzle IT Services is group of highly qualified programmers and salesforce certified enthusiasts works with salesforce consultants to architect and implement technical solutions.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 12,
                    name: "Perigeon Software (Copper Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/Perigeon-copper-sponsor-bharat-dreamin.svg",
                    sessionTitle: "Perigeon Software (Formerly Inforce Software) is a Software Service Company. We are providing complete IT solutions globally with a fresh perspective and dedicated attention to every client.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 13,
                    name: "Zordial Technologies (A la Carte Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/zordial-logo.png",
                    sessionTitle: "Zordial Technologies works on multiple clouds e.g. Sales, Service, Experience, Marketing Cloud, CPQ, Field Service Lightning, Vlocity, FSC (Financial Service Cloud), Certinia (formerly known as FinancialForce ) , PSA and Accounting.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 14,
                    name: "Vedsphere Consultancy Pvt. Ltd. (A la Carte Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/ved-sphere-coffee-sponsor-bharat-dreamin.png",
                    sessionTitle: "Our Salesforce Consultancy services are designed to unlock the full potential of your business. We dive deep into your processes to deliver insights and strategies that drive growth and efficiency.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 15,
                    name: "Briskminds Software Solutions (A la Carte Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/06/bricks-mind-bharat-dreamin-sponsor-1536x384.png",
                    sessionTitle: "Briskminds is a leading salesforce consulting, PDO (product developing outsourcing) partners and MSP (managed services partners) specializes in providing Salesforce consulting, implementation, product development and mobile application development services for all types of organizations.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 16,
                    name: "Heroku (Swag Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/07/heroku-bharat-dreamin-sponsor.png",
                    sessionTitle: "Heroku, a Salesforce company and industry pioneer in platform as a service (PaaS), enables developers to build and run applications entirely in the cloud, without the need to purchase or maintain any servers or software.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 17,
                    name: "Copado (Swag Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/07/copado-bharat-dreamin-sponsor.png",
                    sessionTitle: "Copado empowers every Salesforce development team to plan, build, test and deliver applications with speed and confidence by unifying CI/CD pipelines and automated testing on one platform — all powered by embedded AI.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 18,
                    name: "CompanyStore (Swag Sponsors)",
                    logoUrl: "https://bharatdreamin.com/wp-content/uploads/2024/07/XE8607IdTNhKsucte3jtXf7qfhI.png",
                    sessionTitle: "Basically, we'll make you some cool merch that will echo your brands aesthetic and values! ",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                }
            ]
        }
    ]
}