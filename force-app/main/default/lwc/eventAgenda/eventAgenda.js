import { LightningElement } from 'lwc';

export default class EventAgenda extends LightningElement {
    agendaItems = [
        { id: 1, time: '7:30 AM - 9:00 AM', title: 'Breakfast and Registration' },
        { id: 2, time: '9:00 AM - 9:25 AM', title: 'Opening Ceremony' },
        { id: 3, time: '9:30 AM - 10:20 AM', title: 'Opening Keynote', speakers: 'Kavindra Patel, Sanket Atal, Pushpa Maai, Vishwa Vikas Dagala' },
        { id: 4, time: '10:20 AM - 10:30 AM', title: 'Mental Health Activity' },
        //Panel discussion
        { id: 5, time: '10:40 AM - 11:10 AM', title: 'Data + AI', speakers: 'Vishwa Vikas Dagala, Satya Sekhar Chegondi, Sunil Kumar, Ranjini Janardhanan, Himanshoo Seth', location: 'Pending' },
        { id: 6, time: '10:40 AM - 11:10 AM', title: 'Startup Ecosystem in India', speakers: 'Ankit Arora, Sandeep Singhal, Ram Naresh Danda, Sanket Atal, Shipra Bhutani', location: 'Pending' },
        { id: 7, time: '10:40 AM - 11:10 AM', title: 'Work Place Equality', speakers: 'Guilda Hilaire, Nalini Krishnan, Manvendra Singh Gohil, Deepali Puri, Abhinav', location: 'Pending' },
        { id: 8, time: '10:40 AM - 11:10 AM', title: 'Career Tranformation: Non tech to Technical', speakers: 'Gaurav Khetrapal, Rashmi P R, Kavindra Patel, UD, Dhruv Trivedi', location: 'Pending' },
        //Session
        { id: 5, time: '11:20 AM - 11:40 AM', title: 'How To Make The Best Of Your Leadership Skills', speakers: 'Shrey Sharma', location: 'Auditorium (Ground Floor)' },
        { id: 6, time: '11:20 AM - 11:40 AM', title: 'Unleashing New Potentials: Blockchain with Salesforce', speakers: 'Sanket Kumar', location: 'Convention Hall (Ground Floor)' },
        { id: 7, time: '11:20 AM - 11:40 AM', title: 'Intellimoms: Bringing Women Back to Work', speakers: 'Manika Goyal', location: 'Convention Hall (Ground Floor)' },
        { id: 8, time: '11:20 AM - 11:40 AM', title: 'Manish Thakuri', speakers: 'Manish Thakuri', location: 'Exebition Hall 3 (Lower Ground Floor)' },
        //Session
        { id: 9, time: '11:50 AM - 12:30 PM', title: 'Leveraging Slack for On-Site Support and Quotation Approvals: A Field Engineers Guide', speakers: 'Phaneendra Arigachetta & Riya Sarkar', location: 'Auditorium (Ground Floor)' },
        { id: 10, time: '11:50 AM - 12:30 PM', title: 'Salesforce Anti-Pattern : Pitfalls Unveiled', speakers: 'Ashvin Bhatt', location: 'Convention Hall (Ground Floor)' },
        { id: 11, time: '11:50 AM - 12:30 PM', title: 'MTX - DevSec Ops', speakers: 'Rajat Jain', location: 'Convention Hall (Ground Floor)' },
        { id: 12, time: '11:50 AM - 12:30 PM', title: 'Amit Singh and Rishabh Seth', speakers: 'Amit Singh and Rishabh Seth', location: 'Exebition Hall 3 (Lower Ground Floor)' },
        //Session
        { id: 13, time: '12:40 AM - 13:10 PM', title: 'Up your telecom game with communications cloud', speakers: 'Shreeya Rashinkar & Swati Taunk', location: 'Auditorium (Ground Floor)' },
        { id: 14, time: '12:40 AM - 13:10 PM', title: 'Cultivating Success: A Mentors Guide to Nurturing Salesforce Interns', speakers: 'Chamil Madusanka', location: 'Convention Hall (Ground Floor)' },
        { id: 15, time: '12:40 AM - 13:10 PM', title: 'Code Warriors vs. Bug Bashers: A dynamic approach for seamless Salesforce project delivery', speakers: 'Aman Tiwari and Gandharv Madan', location: 'Convention Hall (Ground Floor)' },
        { id: 16, time: '12:40 AM - 13:10 PM', title: 'Spicing Up LWC Components: Data Binding and Styling like a Boss!', speakers: 'Khyati Mehta and Yash Sethi', location: 'Exebition Hall 3 (Lower Ground Floor)' },
        //workshop
        { id: 5, time: '11:20 AM - 13:10 PM', title: 'Data + AI', speakers: 'Vishwa Vikas & Satya Chegondi', location: 'Confrence Room 1 (First Floor)' },
        { id: 6, time: '11:20 AM - 13:10 PM', title: 'Well Architected Workshop', speakers: 'Gaurav Kheterpal & TDB', location: 'Confrence Room 2 (First Floor)' },
        
        { id: 17, time: '1:10 PM - 2:10 PM', title: 'Lunch Break' },
        //Session
        { id: 18, time: '2:20 PM - 2:40 PM', title: 'Power of Bindings in Salesforce CRM Analytics', speakers: 'Sagar Pareek', location: 'Auditorium (Ground Floor)' },
        { id: 19, time: '2:20 PM - 2:40 PM', title: 'Handle Apex exceptions like a pro with custom exception handling framework', speakers: 'Thiriyambaga Sarma', location: 'Convention Hall (Ground Floor)' },
        { id: 20, time: '2:20 PM - 2:40 PM', title: 'Trailblazer: The Journey of Embracing Challenges and Self-Belief', speakers: 'Abhay Arora', location: 'Convention Hall (Ground Floor)' },
        { id: 21, time: '2:20 PM - 2:40 PM', title: 'DevOps In Salesforce with AI', speakers: 'Abhay Arora', location: 'Exebition Hall 3 (Lower Ground Floor)' },
        //Session
        { id: 22, time: '2:50 PM - 3:30 PM', title: 'Vanisha Kheterpal and Akashdeep Singh', speakers: 'Vanisha Kheterpal and Akashdeep Singh', location: 'Auditorium (Ground Floor)' },
        { id: 23, time: '2:50 PM - 3:30 PM', title: 'Choosing the Right Salesforce Integration: Options and Best Practices', speakers: 'Neha Bhardwaj', location: 'Convention Hall (Ground Floor)' },
        { id: 24, time: '2:50 PM - 3:30 PM', title: 'CTA Mini Scenario Mastery: Elevating Architect Skills', speakers: 'Meera Nair & Rajini Janardhanan', location: 'Convention Hall (Ground Floor)' },
        { id: 25, time: '2:50 PM - 3:30 PM', title: 'Scalability Innovations for Optimal Salesforce Application Lifecycle Management', speakers: 'Mayuresh Verma', location: 'Exebition Hall 3 (Lower Ground Floor)' },
        //Session
        { id: 26, time: '3:40 PM - 4:10 PM', title: 'AppExchange Security Review Program', speakers: 'Nitin Sharma', location: 'Auditorium (Ground Floor)' },
        { id: 27, time: '3:40 PM - 4:10 PM', title: 'Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs', speakers: 'Rahul Malhotra', location: 'Convention Hall (Ground Floor)' },
        { id: 28, time: '3:40 PM - 4:10 PM', title: 'Achieving Product Excellence: A Masterclass in Crafting, Marketing, and Selling Captivating Offerings', speakers: 'Rohan Singh & Lucky Thakkar', location: 'Convention Hall (Ground Floor)' },
        { id: 29, time: '3:40 PM - 4:10 PM', title: 'From Vision to Execution: Mastering the art of Salesforce Marketing Cloud Engagement Implementation', speakers: 'Saurabh Singh', location: 'Exebition Hall 3 (Lower Ground Floor)' },
        //workshop
        { id: 5, time: '14:20 PM - 16:10 PM', title: 'Data Cloud Solution Design Workshop', speakers: 'Ganjendra Singh Sidodiya, Aisha Nilupher & Nibedita Das', location: 'Confrence Room 1 (First Floor)' },
        { id: 6, time: '14:20 PM - 16:10 PM', title: 'Well Architected Workshop', speakers: 'Rupesh Bhatia & Sandhya Mangrulkar', location: 'Confrence Room 2 (First Floor)' },
        
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
