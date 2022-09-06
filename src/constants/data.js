/**
 * NOTE: 📝
 *
 * 👉 For adding the gif of a project ->
 * First place the gif file in the assets folder.
 * Then add the new gif url as a new property in backgroundImage object inside the tailwind config file.
 * Now add the class name used to set the gif as background to ProjectsData gif property.
 *
 * 👉 For changing the introduction image ->
 * Replace the new image inside assets folder with same name.
 *
 *
 */

export const ProjectsData = [
    {
        name: 'Chatingale',
        about: 'A real time chat application',
        websiteUrl: 'www.google.com',
        codeUrl: 'www.google.com',
        gif: 'bg-p1',
    },
    {
        name: 'Text to Speech',
        about: 'Converts text to speech ',
        websiteUrl: 'www.google.com',
        codeUrl: 'www.google.com',
        gif: 'bg-p2',
    },
    {
        name: 'Speech to Text',
        about: 'Converts speech to text ',
        websiteUrl: 'www.google.com',
        codeUrl: 'www.google.com',
        gif: 'bg-p3',
    },
];

export const IntroductionData = [
    '👋 Hi, My name is ',
    'Rajat Bora',
    ' and i am an aspiring Full Stack Developer with a keen interest in new technologies. I have nearly ',
    '3 years',
    ' of experience in web development and contributed to a couple of projects for web and mobile environments.',
];

export const SkillsData = [
    'React',
    'React-Native',
    'Angular',
    'Node-JS',
    'Figma',
];

export const ExperienceData = [
    {
        companyName: 'Wishworks solutions',
        startDate: new Date('20-feb-2019'),
        endDate: null,
        post: 'Software developer',
        points: [
            'sartorial biodiesel vexillologist',
            'xtra check to identify invalid dates.',
            'f you need to support iframes and different contexts you can use the accepted answer but add an',
        ],
    },
    {
        companyName: 'Wishworks solutions',
        startDate: new Date('20-feb-2019'),
        endDate: null,
        post: 'Intern',
        points: [
            'sartorial biodiesel vexillologist',
            'xtra check to identify invalid dates.',
            'f you need to support iframes and different contexts you can use the accepted answer but add an',
        ],
    },
    {
        companyName: 'World Wide Fund for Nature',
        startDate: new Date('20-feb-2019'),
        endDate: new Date('20-jan-2020'),
        post: 'Intern',
        points: [
            'sartorial biodiesel vexillologist',
            'xtra check to identify invalid dates.',
            'f you need to support iframes and different contexts you can use the accepted answer but add an',
        ],
    },
];
