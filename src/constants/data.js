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
        startDate: new Date('april-2020').toISOString(),
        endDate: null,
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
        startDate: new Date('october-2019').toISOString(),
        endDate: new Date('april-2020').toISOString(),
        post: 'Intern',
        points: [
            'Worked closely with the development team to create a web app in Angular.',
            'Designed mockups and wireframes for projects.',
            'Update and improve existing company websites.',
        ],
    },
    {
        companyName: 'World Wide Fund for Nature',
        startDate: new Date('july-2018').toISOString(),
        endDate: new Date('september-2018').toISOString(),
        post: 'Intern',
        points: [
            'Maintaining, optimizing, troubleshooting, and improving the main website.',
            'Regularly monitoring the Google Analytics data and generating reports.',
        ],
    },
];
