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
            <a href="#" className="mx-2d">
                Intro
            </a>
            <a href="#" className="mx-2d">
                Projects
            </a>
            <a href="#" className="mx-2d">
                Skills
            </a>
            <a href="#" className="mx-2d">
                Experience
            </a>
        </nav>
    );
};

export default Navbar;
