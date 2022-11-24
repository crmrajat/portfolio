const Projects = (props) => {
    const projectsList = props.data;

    const openInNewTab = (url) =>{
        window.open(url, '_blank').focus();
      }

    return (
        <section id="projectView" className="card">
            <h1 className="heading">Personal Projects 🌻</h1>

            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:w-4/5 mx-auto">
                {projectsList.map((item, index) => {
                    return (
                        <div
                            key={'project' + index}
                            className={`${item.gif}  overflow-hidden bg-cover bg-center rounded-lg cursor-pointer h-96 group`}
                        >
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-900/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                                    {item.name}
                                </h2>
                                <p className="mt-1 text-md tracking-wider font-light text-emerald-100 capitalize">
                                    {item.about}
                                </p>
                                <div className="flex flex-col gap-4 mt-4">
                                    <button className="btn" onClick={() => {
                                        openInNewTab(item.codeUrl);
                                    }}>
                                        View Code 🧩
                                    </button>
                                    <button className="btn"  onClick={() => {
                                        openInNewTab(item.websiteUrl);
                                    }}>
                                        View Demo 👀
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
