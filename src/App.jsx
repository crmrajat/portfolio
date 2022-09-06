import { useState } from 'react';
import {
    Introduction,
    Navbar,
    Projects,
    Skills,
    Experience,
} from './components';
import {
    SkillsData,
    ProjectsData,
    IntroductionData,
    ExperienceData,
} from './constants/data';

function App() {
    const [skills, setSkills] = useState(SkillsData);
    const [projects, setProjects] = useState(ProjectsData);
    const [introduction, setIntroduction] = useState(IntroductionData);
    const [experience, setExperience] = useState(ExperienceData);

    return (
        <div className="container mx-auto bg-gray-900">
            <Navbar />
            <Introduction data={introduction} />
            <Projects data={projects} />
            <Skills data={skills} />
            <Experience data={experience} />
        </div>
    );
}

export default App;
