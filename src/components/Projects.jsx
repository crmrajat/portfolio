const Projects = (props) => {
    const projectsList = props.data;
    return (
        <section className="card">
            <h1 className="heading">Personal Projects 🪴</h1>

            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 ">
                {projectsList.map((item, index) => {
                    return (
                        <div
                            key={'project' + index}
                            className={`${item.gif} overflow-hidden bg-cover bg-center rounded-lg cursor-pointer h-96 group`}
                        >
                            <div
                                onClick={() => {
                                    console.log(
                                        '💀 navigate to :',
                                        item.websiteUrl
                                    );
                                }}
                                className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"
                            >
                                <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                                    {item.name}
                                </h2>
                                <p className="mt-1 text-md tracking-wider font-light text-blue-300 capitalize">
                                    {item.about}
                                </p>
                                <button className="rounded-lg bg-green-500">
                                    View Code
                                </button>
                                <button className="rounded-lg bg-green-500">
                                    View Demo
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
