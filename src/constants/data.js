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
        gif: 'bg-chatingale',
    },
    {
        name: 'Text to Speech',
        about: 'Converts text to speech ',
        websiteUrl: 'www.google.com',
        codeUrl: 'www.google.com',
        gif: 'bg-musicfox',
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
    'Django',
    'Html',
    'Css',
    'JavaScript',
    'Redux',
    'Tailwind',
    'Bootstrap',
    'Material UI',
    'Scss',
    'TypeScript',
    'Git',
    'Jira',
    'Trello',
    'Figma',
    'Adobe XD',
    'Illustrator',
    'Photoshop',
];

export const ExperienceData = [
    {
        companyName: 'Wishworks Solutions',
        startDate: 'Apr 2020',
        endDate: 'Present',
        post: 'Software developer',
        points: [
            'Developed in-house web and mobile applications.',
            'Collaborated with the back-end team to implement new features.',
            'Assessed mockups and high-fidelity wireframes for projects.',
            'Followed the mobile-first approach to develop modern and responsive websites.',
        ],
    },
    {
        companyName: 'Wishworks Solutions',
        startDate: 'Oct 2019',
        endDate: 'Apr 2020',
        post: 'Intern',
        points: [
            'Worked closely with the development team to create a web app in Angular.',
            'Designed mockups and wireframes for projects.',
            'Update and improve existing company websites.',
        ],
    },
    {
        companyName: 'World Wide Fund for Nature',
        startDate: 'Jul 2018',
        endDate: 'Sep 2018',
        post: 'Intern',
        points: [
            'Maintaining, optimizing, troubleshooting, and improving the main website.',
            'Regularly monitoring the Google Analytics data and generating reports.',
        ],
    },
];
