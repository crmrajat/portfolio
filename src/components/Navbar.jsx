import React from 'react';

const Navbar = () => {
    return (
        <nav className="border mb-4 flex justify-end text-xs sm:text-lg sm:bg-blue-500">
            <a href="#" className="mx-2">
                Intro
            </a>
            <a href="#" className="mx-2">
                Projects
            </a>
            <a href="#" className="mx-2">
                Skills
            </a>
            <a href="#" className="mx-2">
                Experience
            </a>
        </nav>
    );
};

export default Navbar;
