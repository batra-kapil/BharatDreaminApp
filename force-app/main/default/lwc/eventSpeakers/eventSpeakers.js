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
                name: "Shreeya Rashinkar & Swati Taunk",
                src:"https://media.licdn.com/dms/image/D4D03AQEyJgEGc6IZsg/profile-displayphoto-shrink_400_400/0/1713897283512?e=1725494400&v=beta&t=cx2McY9TzErivq4-fSffs9kCsG1CaUqv6jCBxdVlo7c",
                src1:"https://media.licdn.com/dms/image/D5603AQHoUiFaNs1Ejg/profile-displayphoto-shrink_800_800/0/1718552084912?e=1725494400&v=beta&t=w6s0gQx0GTAJ8c3E8ZeqRcida2yYtyL2wtwOqEunYJk",
                sessionTitle: "Up your telecom game with communications cloud",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:true
            },
            {
                id: 2,
                name: "Khyati Mehta and Yash Sethi",
                src:"https://media.licdn.com/dms/image/C4E03AQG0xs3SqLUxlQ/profile-displayphoto-shrink_400_400/0/1647161489408?e=1725494400&v=beta&t=HCYsb8v5NM9-_wU6H1YcxuvdvanIEFW8AmyI-XPdP1k",
                src1:"https://media.licdn.com/dms/image/D4D03AQFRVXR7Sp-zNA/profile-displayphoto-shrink_400_400/0/1685192527425?e=1725494400&v=beta&t=XmAcwWcYQDcYTXmwSaR7lSZGAc2mRxau3Qv9BI2O2tY",
                sessionTitle: "Spicing Up LWC Components: Data Binding and Styling like a Boss!",
                sessionTime: "2:30 PM",
                sessionLocation: "Awesome Admins Hall",
                src1Visible:true
            },
            {
                id: 3,
                name: "Aman Tiwari and Gandharv Madan",
                src:"https://media.licdn.com/dms/image/D5603AQFniTDxZ5FWxQ/profile-displayphoto-shrink_400_400/0/1718223429901?e=1725494400&v=beta&t=wWML1KGsfBlyaCYrAK5d3_tfzZ5r1gb5q7HXDvsBQJk",
                src1:"https://media.licdn.com/dms/image/D4D03AQEIkaSPXB1GXg/profile-displayphoto-shrink_400_400/0/1693376292019?e=1725494400&v=beta&t=ZDmY0yYqDfanIvMH7tDbBqRcA1ARXlAwl0sCE_ku21E",
                sessionTitle: "Code Warriors vs. Bug Bashers: A dynamic approach for seamless Salesforce project delivery",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:true
            },
            {
                id: 4,
                name: "Chamil Madusanka",
                src:"https://media.licdn.com/dms/image/C5603AQGgG4DUSQgTQA/profile-displayphoto-shrink_400_400/0/1615614866769?e=1725494400&v=beta&t=FndHebXCrP6CpBFF8uEA-Gak8KbrNJ7btY2WvZWNSB4",
                sessionTitle: "Cultivating Success: A Mentor guide to nurturing Salesforce Interns",
                sessionTime: "3:00 PM",
                sessionLocation: "Moment Marketers Hall",
                src1Visible:false
            },
            {
                id: 5,
                name: "Akshata Sawant",
                src:"https://media.licdn.com/dms/image/D4E03AQE9waTRjGmzVg/profile-displayphoto-shrink_400_400/0/1678464896813?e=1725494400&v=beta&t=eLQkwaIf0pYoX1FGN8zUzpg4F45KhSpWFP64dltCN-I",
                sessionTitle: "Intelligent Integrations with Copilot Actions and Mulesoft",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:false
            },
            {
                id: 6,
                name: "Sanket Kumar",
                src:"https://media.licdn.com/dms/image/D5603AQEb09m2gDlYsQ/profile-displayphoto-shrink_400_400/0/1712894014957?e=1725494400&v=beta&t=rUF_r7oUqb1ib53kBP5KOB1Ot2eEMMXq5fhj3K7QdzY",
                sessionTitle: "Unleashing New Potentials: Blockchain with Saleforce",
                sessionTime: "2:30 PM",
                sessionLocation: "Awesome Admins Hall",
                src1Visible:false
            },
            {
                id: 7,
                name: "Manika Goyal",
                src:"https://media.licdn.com/dms/image/C4E03AQElO09vgqOn4A/profile-displayphoto-shrink_400_400/0/1612942097230?e=1725494400&v=beta&t=TWUpHzSHrK1S1IsVs3I_xs1kTQo_JIn2-2vBZy-YfDs",
                sessionTitle: "Intellimoms: Bringing Women Back to Work",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:false
            },
            {
                id: 8,
                name: "Shrey Sharma",
                src:"https://media.licdn.com/dms/image/D5603AQFrMl4sxEM3ew/profile-displayphoto-shrink_400_400/0/1712643288501?e=1725494400&v=beta&t=ByAwum38nnWo9oaoEw2nnYAo-HhCHoj81X8MiTakBMM",
                sessionTitle: "Shrey Sharma",
                sessionTime: "3:00 PM",
                sessionLocation: "Moment Marketers Hall",
                src1Visible:false
            },
            {
                id: 9,
                name: "Phaneendra Arigachetta & Riya Sarkar",
                src:"https://media.licdn.com/dms/image/C4E03AQHNXgQMEVlOdA/profile-displayphoto-shrink_800_800/0/1520706688851?e=1725494400&v=beta&t=OSywA_lCEdfq2Mwu7J8dJcxzvcOeTpLgVFt1-6_JitM",
                src1:"https://media.licdn.com/dms/image/D4D03AQFppv7NSC0xzQ/profile-displayphoto-shrink_400_400/0/1699195231685?e=1725494400&v=beta&t=apV94zgnyBNThOklCpOpnUuTjzCHwlBzdIscae_JQUQ",
                sessionTitle: "Leveraging Slack for On-Site Support and Quotation Approvals: A Field Engineers Guide",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:true
            },
            {
                id: 10,
                name: "Ashvin Bhatt",
                src:"https://media.licdn.com/dms/image/C5103AQFI1skjHtvYqA/profile-displayphoto-shrink_400_400/0/1574118788436?e=1725494400&v=beta&t=er1x5j4DQzM4p0dOT_OrzjU4-jfv9q1JAJP-vkVwf8U",
                sessionTitle: "Salesforce Anti-Pattern : Pitfalls Unveilled",
                sessionTime: "2:30 PM",
                sessionLocation: "Awesome Admins Hall",
                src1Visible:false
            },
            {
                id: 11,
                name: "Sponsor Session 1",
                style: "background-image: url(\"https://pbs.twimg.com/profile_images/1586306161019535360/O4wCLn66_400x400.jpg\")",
                sessionTitle: "Sponsor Session 1",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:false
            },
            {
                id: 12,
                name: "Sponsor Session 2",
                style: "background-image: url(\"https://pbs.twimg.com/profile_images/1586306161019535360/O4wCLn66_400x400.jpg\")",
                sessionTitle: "Sponsor Session 2",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:false
            },
            {
                id: 13,
                name: "Sagar Pareek",
                src:"https://media.licdn.com/dms/image/C4E03AQHEkpkx7ed8Sw/profile-displayphoto-shrink_800_800/0/1631703035022?e=1725494400&v=beta&t=Ct4JsV4hOkDRgsHdS98a1H7MMZ8bXpVM1qFtpOKjeoA",
                sessionTitle: "Power of Bindings in Salesforce CRM Analytics",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:false
            },
            {
                id: 14,
                name: "Thiriyambaga Sarma",
                style: "background-image: url(\"https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI\")",
                sessionTitle: "Handle Apex exceptions like a pro with custom exception handling framework",
                sessionTime: "2:30 PM",
                sessionLocation: "Awesome Admins Hall",
                src1Visible:false
            },
            {
                id: 15,
                name: "Abhay Arora",
                src:"https://media.licdn.com/dms/image/D5603AQGI1eQLOhGA7w/profile-displayphoto-shrink_400_400/0/1690699916166?e=1725494400&v=beta&t=PRha8n2HzhDbkNhUpufuDL9yeYVgNXLfts_MtqMFBRM",
                sessionTitle: "Salesforce with DevOps Practices",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:false
            },
            {
                id: 16,
                name: "Sponsor Session 3",
                style: "background-image: url(\"https://pbs.twimg.com/profile_images/1337719158016905216/Co1DnvWP_400x400.jpg\")",
                sessionTitle: "Sponsor Session 3",
                sessionTime: "3:00 PM",
                sessionLocation: "Moment Marketers Hall",
                src1Visible:false
            },
            {
                id: 17,
                name: "Mayuresh Verma",
                src:"https://media.licdn.com/dms/image/D4D03AQG3Nd49dqEyfw/profile-displayphoto-shrink_400_400/0/1718274310272?e=1725494400&v=beta&t=owO-4-ci55uvssxIv5uZGU3_Nx7p1AAQxBEs_pajvGQ",
                sessionTitle: "Scalability Innovations for Optimal Salesforce Applications Lifecycle Management",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:false
            },
            {
                id: 18,
                name: "Neha Bhardwaj",
                src:"https://media.licdn.com/dms/image/C5103AQEztqPH-rcahA/profile-displayphoto-shrink_400_400/0/1563359562372?e=1725494400&v=beta&t=BPqsvj6bPiExPTnrykve3NaNUFf7_lq4dA0quF-1EvY",
                sessionTitle: "Choosing the Right Salesforce Integration: Options and Best Practices",
                sessionTime: "2:30 PM",
                sessionLocation: "Awesome Admins Hall",
                src1Visible:false
            },
            {
                id: 19,
                name: "Meera Nair & Rajini Janardhanan",
                src:"https://media.licdn.com/dms/image/C5603AQFN4Qf-KDor4A/profile-displayphoto-shrink_800_800/0/1616917463716?e=1725494400&v=beta&t=T3degOlqlHYO2ppuCt98KJPTQBJMIKAMRtJXYiAgJIc",
                src1:"https://media.licdn.com/dms/image/C4D03AQFLq1Od4Sy31A/profile-displayphoto-shrink_400_400/0/1655821254966?e=1725494400&v=beta&t=ynDDg9HA7eqlvT6MdHWd90vZpuGapSyzaMOxO4kLCJM",
                sessionTitle: "CTA Mini Scenario Mastery: Elevating Architect Skills",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:true
            },
            {
                id: 20,
                name: "Sponsor Session 4",
                style: "background-image: url(\"https://pbs.twimg.com/profile_images/1337719158016905216/Co1DnvWP_400x400.jpg\")",
                sessionTitle: "Sponsor Session 4",
                sessionTime: "3:00 PM",
                sessionLocation: "Moment Marketers Hall",
                src1Visible:false
            },
            {
                id: 21,
                name: "Rahul Malhotra",
                src:"https://media.licdn.com/dms/image/C4E03AQGDW6NtpdeD8g/profile-displayphoto-shrink_400_400/0/1605847946170?e=1725494400&v=beta&t=zsB_ux8u1-j7NFydE2Am4ypC1h0oj-49KXVHv02FTTs",
                sessionTitle: "Unlocking the Power of GraphQL: Supercharge Your Salesforce APIs",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:false
            },
            {
                id: 22,
                name: "Nitin Sharma",
                style: "background-image: url(\"https://media.licdn.com/dms/image/D5603AQHMhxtzTQwceQ/profile-displayphoto-shrink_200_200/0/1716618317617?e=2147483647&v=beta&t=sluTOuYBvBaF41JyJscid32hUlN68Y4W7-CJysGkzDI\")",
                sessionTitle: "AppExchange Security Review Program",
                sessionTime: "2:30 PM",
                sessionLocation: "Awesome Admins Hall",
                src1Visible:false
            },
            {
                id: 23,
                name: "Rohan Singh & Lucky Thakkar",
                src:"https://media.licdn.com/dms/image/D4D03AQG6WI-wQaf9MQ/profile-displayphoto-shrink_400_400/0/1689400455904?e=1725494400&v=beta&t=mOu-qfHt2sHjhr57ziK8bTNXnUqPsXcewzFf0151g2g",
                src1:"https://media.licdn.com/dms/image/D4D03AQEVQM8OPcxG5A/profile-displayphoto-shrink_400_400/0/1679087483475?e=1725494400&v=beta&t=jgyYXeKPA6sysCYz4u8gW-96kx1EAln3AVmGq5isgcM",
                sessionTitle: "Achieving Product Excellence: A Masterclass in Crafting, Marketing, and Selling Captivating Offerings",
                sessionTime: "3:30 PM",
                sessionLocation: "Techies Innovation Hall",
                src1Visible:true
            },
            {
                id: 24,
                name: "Saurabh Singh",
                src:"https://media.licdn.com/dms/image/D4D03AQFFWzBKpnuNrw/profile-displayphoto-shrink_400_400/0/1698400754117?e=1725494400&v=beta&t=VzulVaxGfKRIE6oFE1rA4eXppQQrINvpIauBQqFC6T4",
                sessionTitle: "Master the SFMC Architect Cheatsheet",
                sessionTime: "3:00 PM",
                sessionLocation: "Moment Marketers Hall",
                src1Visible:false
            }
        ]
    }
]
}