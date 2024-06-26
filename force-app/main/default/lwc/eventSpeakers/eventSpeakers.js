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
        title: "Meet Our Speakers",
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
            },
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
    }
]
}