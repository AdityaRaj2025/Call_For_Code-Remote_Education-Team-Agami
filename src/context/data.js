// STUDENT
export const enrollList = [
    {
        name: "ReactJS",
        subject: "Front-end web development ",
        duedate: "AUG 05, 2020",
        duration: "30 mins",
        description: "If test auto submitted because of tab switches it means it's the end of the test. You are not allowed to take it again.",
        participants: 23,
        teacher: "Prof.Aditya Raj"
    }, {
        name: 'Arduino',
        subject: 'Internet of things',
        teacher: 'Prof.Tejaswini Reddy',
        duration: '30 mins',
        duedate: 'AUG 03, 2020',
        participants: 24,
        description: "If test auto submitted because of tab switches it means it's the end of the test. You are not allowed to take it again.",
    },
];

export const historyList = [
    {
        name: "Python",
        subject: "Programming",
        duedate: "July 25, 2020",
        duration: "1 hours",
        description: "Successfully Complete",
        teacher: "Prof.Abhishek Sharma",
        score: '35/50'
    }, {
        name: "Java",
        subject: "Programming",
        duedate: "July 20, 2020",
        duration: "30 mins",
        description: "Successfully Complete",
        teacher: "Prof.Aditya Raj",
        score: '18/30'
    }
];

export const examing = {
    questions: [
        {
            question: 'Which method is not part of ReactDOM?',
            a: 'ReactDOM.destroy()',
            b: 'ReactDOM.hydrate()',
            c: 'ReactDOM.createPortal()',
            d: 'ReactDOM.findDOMNode()',
            yourAnswer: '',
            flag: false
        },
        {
            question: 'React is a ________.',
            a: 'Javascript library',
            b: 'Javascript framework',
            c: 'Both of above',
            d: 'None of above',
            yourAnswer: '',
            flag: false,
            fileAttach: 'hello.png'
        },
        {
            question: 'ReactJS covers _________.',
            a: 'User Interface layer in an application',
            b: 'Data layer in an application',
            c: 'Both a and b',
            d: 'None of above',
            yourAnswer: '',
            flag: false
        },
        {
            question: 'ReactJS uses _____ to increase performance.',
            a: 'Virtual DOM',
            b: 'Original DOM',
            c: 'Both of above',
            d: 'None of above',
            yourAnswer: '',
            flag: false
        },
        {
            question: 'Number of elements, a valid react component can return ',
            a: '1',
            b: '2',
            c: '3',
            d: '4',
            yourAnswer: '',
            flag: false
        },
        {
            question: 'State in react is________',
            a: 'A permanent storage',
            b: 'Internal storage of the component',
            c: 'Both of above',
            d: 'None of above',
            yourAnswer: '',
            flag: false
        }
    ]
}

// TEACHER
export const examList = [
    {
        name: "ReactJS",
        subject: "Web development",
        duedate: "AUG 05, 2020",
        duration: "30 mins",
        description: "If test auto submitted because of tab switches it means it's the end of the test. You are not allowed to take it again.",
        participants: 23,
        status: 'EXAMING'
    }, {
        name: 'Arduino',
        subject: 'Internet of things',
        duration: '30 mins',
        duedate: 'AUG 03, 2020',
        participants: 24,
        description: "If test auto submitted because of tab switches it means it's the end of the test. You are not allowed to take it again.",
        status: 'EXAMING'
    }
];

export const questions = [
    {
        question: 'Which method is not part of ReactDOM?',
        a: 'ReactDOM.destroy()',
        b: 'ReactDOM.hydrate()',
        c: 'ReactDOM.createPortal()',
        d: 'ReactDOM.findDOMNode()',
        rightAnswer: 'a'
    },
    {
        question: 'React is a ________.',
            a: 'Javascript library',
            b: 'Javascript framework',
            c: 'Both of above',
            d: 'None of above',
        rightAnswer: 'a',
        fileAttach: 'hello.png'
    },
    {
        question: 'ReactJS covers _________.',
            a: 'User Interface layer in an application',
            b: 'Data layer in an application',
            c: 'Both a and b',
            d: 'None of above',
        rightAnswer: 'a'
    },
    {
        question: 'ReactJS uses _____ to increase performance.',
            a: 'Virtual DOM',
            b: 'Original DOM',
            c: 'Both of above',
            d: 'None of above',
        rightAnswer: 'a'
    },
    {
        question: 'Number of elements, a valid react component can return ',
            a: '1',
            b: '2',
            c: '3',
            d: '4',
        rightAnswer: 'a'
    },
    {
        question: 'State in react is________',
        a: 'A permanent storage',
        b: 'Internal storage of the component',
        c: 'Both of above',
        d: 'None of above',
        rightAnswer: 'b'
    },
    {
        question: 'props in react can________',
        a: 'Be changed inside the component',
        b: 'Not be changed in the component',
        c: 'Be changed in side other component',
        d: 'None of above',
        rightAnswer: 'b'
    },
    {
        question: 'React is _______.',
        a: 'Component based',
        b: 'Module based',
        c: 'Both of above',
        d: 'None of above',
        rightAnswer: 'a'
    }
]
