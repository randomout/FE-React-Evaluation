import moment from "moment";

const Age = 30;
export const fakeInterests = [
    {
        id: 1,
        name: 'Soccer',
        type: 'Sport',
        current: true
    },
    {
        id: 2,
        name: 'Football',
        type: 'Sport',
        current: true
    },
    {
        id: 3,
        name: 'Chess',
        type: 'Game',
        current: false
    },
    {
        id: 4,
        name: 'Racing',
        type: 'Sport',
        current: false
    },
    {
        id: 5,
        name: 'Horse Back Riding',
        type: 'Sport',
        current: true
    }
];

export const fakeSkills = [
    {
        id: 1,
        name: 'Reading',
        type: 'Essential',
        DateLearned: moment().subtract(Age, 'years').add(2, 'years').format()
    },
    {
        id: 2,
        name: 'Writing',
        type: 'Essential',
        DateLearned: moment().subtract(Age, 'years').add(2, 'years').format()
    },
    {
        id: 3,
        name: 'Riding A Bike',
        type: 'Practical',
        DateLearned: moment().subtract(Age, 'years').add(5, 'years').format()
    },
    {
        id: 4,
        name: 'Driving A Car',
        type: 'Practical',
        DateLearned: moment().subtract(Age, 'years').add(16, 'years').format()
    },
    {
        id: 5,
        name: 'Coding',
        type: 'Professional',
        DateLearned: moment().subtract(Age, 'years').add(24, 'years').format()
    }
];

