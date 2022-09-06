const Navbar = () => {
    return (
        <nav
            className="
        gap-5
        text-sm 
        mt-4 mx-4  
        flex justify-end 
        tracking-wide 
        sm:text-lg
        sm:gap-10 "
        >
            <a href="#" className="underlineGradient mx-2">
                Intro
            </a>
            <a href="#" className="underlineGradient mx-2">
                Projects
            </a>
            <a href="#" className="underlineGradient mx-2">
                Skills
            </a>
            <a href="#" className="underlineGradient mx-2">
                Experience
            </a>
        </nav>
    );
};

export default Navbar;
