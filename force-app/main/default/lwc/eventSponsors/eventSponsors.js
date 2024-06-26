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
                    name: "Brillio",
                    logoUrl: "https://media.licdn.com/dms/image/C560BAQEh2CAtwBx5vA/company-logo_200_200/0/1657805094143/brillio_logo?e=1727308800&v=beta&t=4T-jue0YiwQ0nhVn0VQWYk9lyGTT3iBUwc5_WH7--20",
                    sessionTitle: "Brillio is one of the fastest growing digital technology service providers and a partner of choice for many Fortune 1000 companies seeking to turn disruption into a competitive advantage through innovative digital adoption.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 2,
                    name: "Perigeon Software",
                    logoUrl: "https://media.licdn.com/dms/image/D4D0BAQHeUQgKnx_VPA/company-logo_200_200/0/1699426181749/intforce_logo?e=1727308800&v=beta&t=EJgzM1Ciwb1gIhujpUSwjlzeDN4wOH_sgaTPydO33qY",
                    sessionTitle: "Perigeon Software (Formerly Inforce Software) is a Software Service Company. We are providing complete IT solutions globally with a fresh perspective and dedicated attention to every client.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 3,
                    name: "Vedsphere Consultancy Pvt. Ltd.",
                    logoUrl: "https://media.licdn.com/dms/image/D4D0BAQFDlnCizTXSNw/company-logo_200_200/0/1698832132832/vedforce_logo?e=1727308800&v=beta&t=5tcSgpQHyIeuttuDg37xA96BkTOoxulZ2TQav0tR-EI",
                    sessionTitle: "Our Salesforce Consultancy services are designed to unlock the full potential of your business. We dive deep into your processes to deliver insights and strategies that drive growth and efficiency.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 4,
                    name: "360 Degree Cloud Technologies",
                    logoUrl: "https://media.licdn.com/dms/image/C4D0BAQHZeGy8nZo-Cg/company-logo_200_200/0/1641207446773/360_degree_cloud_logo?e=1727308800&v=beta&t=P2m8UpUT-p9tM1ayk1nw4gLXkE_9tFCnuUZAYTcNsdI",
                    sessionTitle: "360 Degree Cloud is a customer-centric Salesforce Summit (Platinum ) partner centered on delivering an extensive spectrum of Salesforce services and products",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 5,
                    name: "Wahinnovations",
                    logoUrl: "https://media.licdn.com/dms/image/D4D0BAQHaYQs2Tns3xg/company-logo_200_200/0/1682428519467/wahinnovations_logo?e=1727308800&v=beta&t=f4R6Bgdv9KOwJdXzEkxAngK_iM5e77GIL-5u7WB9-m0",
                    sessionTitle: "Wahinnovations is a Salesforce Development company in India and USA that provides the vision to transform the business into next-level opportunities. ",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 6,
                    name: "Zordial Technologies",
                    logoUrl: "https://media.licdn.com/dms/image/D560BAQF19VvCeOM_Mg/company-logo_200_200/0/1711516944461/zordial_tech_logo?e=1727308800&v=beta&t=Z8OgtI3ZQ34PmAOY28J3Xxwiz18YNLC9bDgXww9C4jM",
                    sessionTitle: "Zordial Technologies works on multiple clouds e.g. Sales, Service, Experience, Marketing Cloud, CPQ, Field Service Lightning, Vlocity, FSC (Financial Service Cloud), Certinia (formerly known as FinancialForce ) , PSA and Accounting.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                },
                {
                    id: 7,
                    name: "SurveyVista",
                    logoUrl: "https://media.licdn.com/dms/image/D4D0BAQG2k2D6wFVG1A/company-logo_200_200/0/1715845098079/surveyvista_logo?e=1727308800&v=beta&t=zuJZ7TuLgIVgtK8pdqBALsyBhGJTxy28O0SBevY1FrY",
                    sessionTitle: "SurveyVista, a 100% native salesforce solution that helps customers collect, integrate, understand and act on data gathered via surveys, forms, checklists, quizzes, and assessments.",
                    sessionTime: "12:30 PM",
                    sessionLocation: "Daring Developers Hall",
                }
            ]
        }
    ]
}