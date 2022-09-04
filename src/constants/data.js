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
        website: 'www.google.com',
        gif: 'bg-p1',
    },
    {
        name: 'Text to Speech',
        about: 'Converts text to speech ',
        website: 'www.google.com',
        gif: 'bg-p2',
    },
    {
        name: 'Speech to Text',
        about: 'Converts speech to text ',
        website: 'www.google.com',
        gif: 'bg-p3',
    },
];

export const IntroductionData = `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
Illo similique hic maiores doloribus aperiam nemo quibusdam
neque cum facilis, recusandae sit possimus atque impedit
perferendis numquam iusto cumque nam inventore. Ullam
corporis distinctio debitis quod aperiam dignissimos modi
dolorum iure esse rem molestiae soluta maiores`;

export const SkillsData = [
    'React',
    'React-Native',
    'Angular',
    'Node-JS',
    'Figma',
];

export const ExperienceData = [
    {
        companyName: 'Wishworks solution',
        startDate: new Date(2016, 1, 20),
        endDate: null,
        post: 'Software developer',
        points: [
            'sartorial biodiesel vexillologist',
            'xtra check to identify invalid dates.',
            'f you need to support iframes and different contexts you can use the accepted answer but add an',
        ],
    },
    {
        companyName: 'Wishworks solution',
        startDate: new Date(2016, 1, 20),
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
        startDate: new Date(2016, 1, 20),
        endDate: null,
        post: 'Intern',
        points: [
            'sartorial biodiesel vexillologist',
            'xtra check to identify invalid dates.',
            'f you need to support iframes and different contexts you can use the accepted answer but add an',
        ],
    },
];
