import { LightningElement } from 'lwc';

export default class EventAgenda extends LightningElement {
    agendaItems = [
        { id: 1, time: '7:30 AM - 9:00 AM', title: 'Breakfast and Registration' },
        { id: 2, time: '9:00 AM - 9:25 AM', title: 'Opening Ceremony' },
        { id: 3, time: '9:30 AM - 10:20 AM', title: 'Opening Keynote', speakers: 'Kavindra Patel, Sanket Atal, Pushpa Maai' },
        { id: 4, time: '10:20 AM - 10:30 AM', title: 'Mental Health Activity' },
        { id: 5, time: '10:40 AM - 11:10 AM', title: 'Session 1: Up your telecom game with communication cloud', speakers: 'Shreeya Rashinkar & Swati Taunk', location: 'Auditorium (Ground Floor)' },
        { id: 6, time: '10:40 AM - 11:10 AM', title: 'Session 2: Spicing Up LWC Components: Data Binding and Styling like a Boss!', speakers: 'Khyati Mehta and Yash Sethi', location: 'Convention Hall (Ground Floor)' },
        { id: 7, time: '10:40 AM - 11:10 AM', title: 'Session 3: Code Warriors vs. Bug Bashers: A dynamic approach for seamless Salesforce project delivery', speakers: 'Aman Tiwari and Gandharv Madan', location: 'Convention Hall (Ground Floor)' },
        { id: 8, time: '10:40 AM - 11:10 AM', title: 'Session 4: Cultivating Success: A Mentor guide to nurturing Salesforce Interns', speakers: 'Chamil Madusanka', location: 'Exhibition Hall (Lower Ground Floor)' },
        { id: 9, time: '11:20 AM - 11:40 AM', title: 'Session 1: Intelligent Integrations with Copilot Actions and Mulesoft', speakers: 'Akshata Sawant', location: 'Auditorium (Ground Floor)' },
        { id: 10, time: '11:20 AM - 11:40 AM', title: 'Session 2: Unleashing New Potentials: Blockchain with Salesforce', speakers: 'Sanket Kumar', location: 'Convention Hall (Ground Floor)' },
        { id: 11, time: '11:20 AM - 11:40 AM', title: 'Session 3: Intellimoms: Bringing Women Back to Work', speakers: 'Manika Goyal', location: 'Convention Hall (Ground Floor)' },
        { id: 12, time: '11:20 AM - 11:40 AM', title: 'Session 4: Shrey Sharma', speakers: 'Shrey Sharma', location: 'Exhibition Hall (Lower Ground Floor)' },
        { id: 13, time: '11:50 AM - 12:30 PM', title: 'Session 1: Leveraging Slack for On-Site Support and Quotation Approvals: A Field Engineers Guide', speakers: 'Phaneendra Arigachetta & Riya Sarkar', location: 'Auditorium (Ground Floor)' },
        { id: 14, time: '11:50 AM - 12:30 PM', title: 'Session 2: Salesforce Anti-Pattern: Pitfalls Unveiled', speakers: 'Ashvin Bhatt', location: 'Convention Hall (Ground Floor)' },
        { id: 15, time: '11:50 AM - 12:30 PM', title: 'Session 3: Sponsor Session 1', speakers: 'Sponsor Session 1', location: 'Convention Hall (Ground Floor)' },
        { id: 16, time: '11:50 AM - 12:30 PM', title: 'Session 4: Sponsor Session 1', speakers: 'Sponsor Session 1', location: 'Exhibition Hall (Lower Ground Floor)' },
        //workshop
        { id: 5, time: '10:40 AM - 12:30 PM', title: 'Workshop 1 : AI + Data', speakers: 'Vishwa Vikas & Satya Chegondi', location: 'Confrence Room 1 (First Floor)' },
        { id: 6, time: '10:40 AM - 12:30 PM', title: 'Workshop 2 : Well Architected Workshop', speakers: 'Gaurav Kheterpal & TDB', location: 'Confrence Room 2 (First Floor)' },
        { id: 17, time: '1:10 PM - 2:10 PM', title: 'Lunch Break' },
        { id: 18, time: '2:20 PM - 2:40 PM', title: 'Session 1: Power of Bindings in Salesforce CRM Analytics', speakers: 'Sagar Pareek', location: 'Auditorium (Ground Floor)' },
        { id: 19, time: '2:20 PM - 2:40 PM', title: 'Session 2: Handle Apex exceptions like a pro with custom exception handling framework', speakers: 'Thiriyambaga Sarma', location: 'Convention Hall (Ground Floor)' },
        { id: 20, time: '2:20 PM - 2:40 PM', title: 'Session 3: Salesforce with DevOps Practices', speakers: 'Abhay Arora', location: 'Convention Hall (Ground Floor)' },
        { id: 21, time: '2:20 PM - 2:40 PM', title: 'Session 4: Sponsor Session 3', speakers: 'Sponsor Session 3', location: 'Exhibition Hall (Lower Ground Floor)' },
        { id: 22, time: '2:50 PM - 3:30 PM', title: 'Session 1: Scalability Innovations for Optimal Salesforce Applications Lifecycle Management', speakers: 'Mayuresh Verma', location: 'Auditorium (Ground Floor)' },
        { id: 23, time: '2:50 PM - 3:30 PM', title: 'Session 2: Choosing the Right Salesforce Integration: Options and Best Practices', speakers: 'Neha Bhardwaj', location: 'Convention Hall (Ground Floor)' },
        { id: 24, time: '2:50 PM - 3:30 PM', title: 'Session 3: CTA Mini Scenario Mastery: Elevating Architect Skills', speakers: 'Meera Nair & Rajini Janardhanan', location: 'Convention Hall (Ground Floor)' },
        { id: 25, time: '2:50 PM - 3:30 PM', title: 'Session 4: Sponsor Session 4', speakers: 'Sponsor Session 4', location: 'Exhibition Hall (Lower Ground Floor)' },
        { id: 26, time: '3:40 PM - 4:10 PM', title: 'Session 1: Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs', speakers: 'Rahul Malhotra', location: 'Auditorium (Ground Floor)' },
        { id: 27, time: '3:40 PM - 4:10 PM', title: 'Session 2: AppExchange Security Review Program', speakers: 'Nitin Sharma', location: 'Convention Hall (Ground Floor)' },
        { id: 28, time: '3:40 PM - 4:10 PM', title: 'Session 3: Achieving Product Excellence: A Masterclass in Crafting, Marketing, and Selling Captivating Offerings', speakers: 'Rohan Singh & Lucky Thakkar', location: 'Convention Hall (Ground Floor)' },
        { id: 29, time: '3:40 PM - 4:10 PM', title: 'Session 4: From Vision to Execution: Mastering the art of Salesforce Marketing Cloud Engagement Implementation', speakers: 'Saurabh Singh', location: 'Exhibition Hall (Lower Ground Floor)' },
        //workshop
        { id: 5, time: '14:20 PM - 16:10 PM', title: 'Workshop 3 : Data Cloud Solution Design Workshop', speakers: 'Ganjendra Singh Sidodiya, Aisha Nilupher & Nibedita Das', location: 'Confrence Room 1 (First Floor)' },
        { id: 6, time: '14:20 PM - 16:10 PM', title: 'Workshop 4 : Well Architected Workshop', speakers: 'Rupesh Bhatia & Sandhya Mangrulkar', location: 'Confrence Room 2 (First Floor)' },
        { id: 30, time: '4:20 PM - 4:45 PM', title: 'Sponsor Hour', speakers: 'Abhinav Gupta' },
        { id: 31, time: '4:45 PM - 5:10 PM', title: 'Demo Jam' },
        { id: 32, time: '5:10 PM - 5:20 PM', title: 'Mental Health Activity' },
        { id: 33, time: '5:20 PM - 6:00 PM', title: 'Closing Ceremony', speakers: 'Guilda Hilaire' },
        { id: 34, time: '7:00 PM Onwards', title: 'After Party' }
    ];

    get groupedAgenda() {
        const grouped = {};
        this.agendaItems.forEach(item => {
            if (!grouped[item.time]) {
                grouped[item.time] = [];
            }
            grouped[item.time].push(item);
        });
        return Object.keys(grouped).map(time => ({
            time,
            items: grouped[time]
        }));
    }
}
