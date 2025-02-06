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
        about: 'A real-time chat application',
        websiteUrl: 'https://chatingale.onrender.com/',
        codeUrl: 'https://github.com/crmrajat/chatingale',
        gif: 'bg-chatingale',
    },
    {
        name: 'Music Fox',
        about: 'Get the lyrics of your favourite songs',
        websiteUrl: 'https://crmrajat.github.io/music-fox',
        codeUrl: 'https://github.com/crmrajat/music-fox',
        gif: 'bg-musicfox',
    },
];

export const IntroductionData = [
    '👋 Hi, My name is ',
    'Rajat Bora',
    ' and I am a Senior Software Engineer with a growing interest in full-stack development. I have nearly ',
    '4 years',
    ' of experience in web development and have contributed to multiple projects for web and mobile environments.',
];

export const SkillsData = [
    'React',
    'React-Native',
    'Angular',
    'Node.js',
    'Django',
    'HTML',
    'CSS',
    'JavaScript',
    'Redux',
    'Tailwind',
    'Bootstrap',
    'Material UI',
    'SCSS',
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
        companyName: 'Drabito Technologies',
        startDate: 'May 2023',
        endDate: 'Present',
        post: 'Senior Software Engineer',
        points: [
            'Developed and maintained high-performance web applications using React, TypeScript, and Redux Toolkit.',
            'Designed and implemented modern, responsive UI/UX interfaces with Shadcn.',
            'Collaborated with testers, designers, and backend engineers to define and refine application features.',
            'Led code reviews and mentored junior developers, promoting best practices.',
            'Participated in Agile development processes, ensuring timely and effective feature delivery.',
        ],
    },
    {
        companyName: 'Wishworks Solutions',
        startDate: 'Apr 2020',
        endDate: 'Jan 2023',
        post: 'Software Engineer',
        points: [
            'Engineered and maintained in-house web and mobile applications using modern frontend technologies.',
            'Collaborated with backend teams to integrate APIs and deploy new features.',
            'Reviewed and implemented high-fidelity wireframes and mockups.',
            'Optimized existing applications for performance improvements.',
        ],
    },
    {
        companyName: 'Wishworks Solutions',
        startDate: 'Oct 2019',
        endDate: 'Apr 2020',
        post: 'Intern',
        points: [
            'Contributed to the development of a web application using Angular.',
            'Designed and developed mockups and wireframes for new projects.',
            'Assisted in integrating frontend components with backend services.',
        ],
    },
    {
        companyName: 'World Wide Fund for Nature',
        startDate: 'Jul 2018',
        endDate: 'Sep 2018',
        post: 'Intern',
        points: [
            'Maintained and optimized the main website, addressing performance bottlenecks.',
            'Monitored website performance metrics using Google Analytics and generated detailed reports.',
            'Assisted in the implementation of SEO best practices.',
        ],
    },
];
