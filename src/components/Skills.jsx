const Skills = (props) => {
    const skillsList = props.data;
    return (
        <section id="skillView" className="card">
            <h1 className="heading">{'Skills & Technologies used 🚀'}</h1>
            <div className="flex flex-wrap lg:w-4/5 mx-auto">
                {skillsList.map((item, index) => {
                    return (
                        <div
                            key={'skill' + index}
                            className="p-2 sm:w-1/2 w-full "
                        >
                            <div className="bg-gray-800 rounded flex p-4 h-full">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    className="text-emerald-500  w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white capitalize">
                                    {item}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
