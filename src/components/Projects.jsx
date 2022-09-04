const Projects = (props) => {
    const projectsList = props.data;
    return (
        <article className="my-4">
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                        Personal Projects 🪴
                    </h1>

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
                                                item.website
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
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Projects;
