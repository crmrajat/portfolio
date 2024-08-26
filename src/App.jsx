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
    return (
        <>
            <Navbar />
            <Introduction data={IntroductionData} />
            <Projects data={ProjectsData} />
            <Skills data={SkillsData} />
            <Experience data={ExperienceData} />
        </>
    );
}

export default App;
