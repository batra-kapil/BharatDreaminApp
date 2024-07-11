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
configs = [
    {
        slot: "1",
        active: true,
        is_community_session: true,
        title: "Sessions Going On",
        time: "12:30PM",
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
            },
            {
                id: 5,
                name: "Phaneendra Arigachetta & Riya Sarkar",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Phaneendra-Arigachetta-bharat-dreamin-speaker.png",
                src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/RIYA-SARKAR-bharat-dreamin-speaker.png",
                sessionTitle: "Leveraging Slack for On-Site Support and Quotation Approvals: A Field Engineers Guide",
                sessionLocation: "Auditorium",
                src1Visible:true
            },
            {
                id: 6,
                name: "Ashvin Bhatt",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Ashvin-Bhatt-bharat-dreamin-speaker.png",
                sessionTitle: "Salesforce Anti-Pattern : Pitfalls Unveiled",
                sessionLocation: "Convention Hall",
                src1Visible:false
            },
            {
                id: 7,
                name: "Rajat Jain",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/rajat-jain-bharat-dreamin-speaker.png",
                sessionTitle: "MTX - DevSec Ops",
                sessionLocation: "Convention Hall",
                src1Visible:false
            },
            {
                id: 8,
                name: "Amit Singh and Rishabh Seth",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/amit-singh-bharat-dreamin-speaker.png",
                src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/rishabh-seth-bharat-dremain-speaker.png",
                sessionTitle: "Amit Singh and Rishabh Seth",
                sessionLocation: "Exebition Hall 3",
                src1Visible:true
            },
            {
                id: 9,
                name: "Shreeya Rashinkar & Swati Taunk",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/shreeya-rashinkar-bharat-dreamin-speaker.png",
                src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/SWATI-TAUNK-bharat-dreamin-speaker.png",
                sessionTitle: "Up your telecom game with communications cloud",
                sessionLocation: "Auditorium",
                src1Visible:true
            },
            {
                id: 10,
                name: "Chamil Madusanka",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/chamil-madhushanka-bharat-dreamin-speaker.png",
                sessionTitle: "Cultivating Success: A Mentors Guide to Nurturing Salesforce Interns",
                sessionLocation: "Convention Hall",
                src1Visible:false
            },
            {
                id: 11,
                name: "Aman Tiwari and Gandharv Madan",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/aman-tiwari-bharat-dreamin-speaker.png",
                src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/Gandharv-Madan-bharat-dreamin-speaker.png",
                sessionTitle: "Code Warriors vs. Bug Bashers: A dynamic approach for seamless Salesforce project delivery",
                sessionLocation: "Convention Hall",
                src1Visible:true
            },
            {
                id: 12,
                name: "Khyati Mehta and Yash Sethi",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/khyati-mehta-bharat-dreamin-speaker.png",
                src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/Yash-Sethi-bharat-dreamin-speaker.png",
                sessionTitle: "Spicing Up LWC Components: Data Binding and Styling like a Boss!",
                sessionLocation: "Exibition Hall",
                src1Visible:true
            },
            {
                id: 13,
                name: "Sagar Pareek",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/sagar-pareek-bharat-dreamin-speaker.png",
                sessionTitle: "Power of Bindings in Salesforce CRM Analytics",
                sessionLocation: "Auditorium",
                src1Visible:false
            },
            {
                id: 14,
                name: "Thiriyambaga Sarma",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Thiriyambaga-bharat-dreamin-speaker.png",
                sessionTitle: "Handle Apex exceptions like a pro with custom exception handling framework",
                sessionLocation: "Convention Hall",
                src1Visible:false
            },
            {
                id: 15,
                name: "Dipti Kalaria",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/dipti-kalaria.png",
                sessionTitle: "Trailblazer: The Journey of Embracing Challenges and Self-Belief",
                sessionLocation: "Convention Hall",
                src1Visible:false
            },
            {
                id: 16,
                name: "Abhay Arora",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Abhay-Arora-bharat-dreamin-speaker.png",
                sessionTitle: "DevOps In Salesforce with AI",
                sessionLocation: "Exebition Hall 3",
                src1Visible:false
            },
            {
                id: 17,
                name: "Vanisha Kheterpal and Akashdeep Singh",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/vanisha-kheterpal-bharat-dremain-speaker.png",
                src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/akashdeep-singh.png",
                sessionTitle: "Vanisha Kheterpal and Akashdeep Singh",
                sessionLocation: "Auditorium",
                src1Visible:true
            },
            {
                id: 18,
                name: "Neha Bhardwaj",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/neha-bhardwaj-bharat-dreamin-speaker.png",
                sessionTitle: "Choosing the Right Salesforce Integration: Options and Best Practices",
                sessionLocation: "Convention Hall",
                src1Visible:false
            },
            {
                id: 19,
                name: "Meera Nair & Rajini Janardhanan",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/meera-nair-bharat-dreamin-speaker.png",
                src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/Ranjini-Janardhanan-bharat-dreamin-speaker.png",
                sessionTitle: "CTA Mini Scenario Mastery: Elevating Architect Skills",
                sessionLocation: "Convention Hall",
                src1Visible:true
            },
            {
                id: 20,
                name: "Mayuresh Verma",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/mayuresh-verma-bharat-dreamin-speaker.png",
                sessionTitle: "Scalability Innovations for Optimal Salesforce Application Lifecycle Management",
                sessionLocation: "Exhibition Hall",
                src1Visible:false
            },
            {
                id: 21,
                name: "Nitin Sharma",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Nitin-bharat-dreamin-speaker.png",
                sessionTitle: "AppExchange Security Review Program",
                sessionLocation: "Convention Hall",
                src1Visible:false
            },
            {
                id: 22,
                name: "Rahul Malhotra",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Rahul-Malhotra-bharat-dreamin-speaker.png",
                sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                sessionLocation: "Auditorium",
                src1Visible:false
            },
            {
                id: 23,
                name: "Rohan Singh & Lucky Thakkar",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Rohan-Singh-bharat-dreamin-speaker.png",
                src1:"https://bharatdreamin.com/wp-content/uploads/2024/07/lucky-thakkar-speaker.png",
                sessionTitle: "Achieving Product Excellence: A Masterclass in Crafting, Marketing, and Selling Captivating Offerings",
                sessionLocation: "Convention Hall",
                src1Visible:true
            },
            {
                id: 24,
                name: "Saurabh Singh",
                src:"https://bharatdreamin.com/wp-content/uploads/2024/07/Saurabh-Singh-bharat-dreamin-speaker.png",
                sessionTitle: "From Vision to Execution: Mastering the art of Salesforce Marketing Cloud Engagement Implementation",
                sessionLocation: "Exebition Hall 3",
                src1Visible:false
            }
        ]
    }
]
}