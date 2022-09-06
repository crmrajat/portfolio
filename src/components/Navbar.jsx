const Navbar = () => {
    return (
        <nav
            className="
            gradient-2
            text-gray-200
            gap-5
            p-4
            text-sm 
            flex justify-end 
            tracking-wide 
            sm:text-lg
            sm:gap-10 "
        >
            <a href="#" className="underlineGradient">
                Intro
            </a>
            <a href="#" className="underlineGradient ">
                Projects
            </a>
            <a href="#" className="underlineGradient ">
                Skills
            </a>
            <a href="#" className="underlineGradient ">
                Experience
            </a>
        </nav>
    );
};

export default Navbar;
