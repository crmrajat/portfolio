const Navbar = () => {
    const anchorClass =
        'underlineGradient hover:font-bold hover:text-xl hover:tracking-wider';
    return (
        <nav
            className="
            gradient-2
            gap-5
            p-4
            text-sm 
            flex justify-end 
            tracking-wide 
            sm:text-lg
            sm:gap-10 "
        >
            <a href="#introductionView" className={anchorClass}>
                Intro
            </a>
            <a href="#projectView" className={anchorClass}>
                Projects
            </a>
            <a href="#skillView" className={anchorClass}>
                Skills
            </a>
            <a href="#experienceView" className={anchorClass}>
                Experience
            </a>
        </nav>
    );
};

export default Navbar;
