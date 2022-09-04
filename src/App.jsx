import { useState } from 'react';
import { Introduction, Navbar, Projects } from './components';

function App() {
    return (
        <div className="w-full p-4 text-poppins">
            <Navbar />
            <Introduction />
            <hr />
            <Projects />
        </div>
    );
}

export default App;

{
    /* <h4 className={`text-secondary bg-dimWhite font-test`}>
    Hello world!
</h4> */
}
