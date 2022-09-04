import React from 'react';
import a1 from '../assets/a1.gif';
import a2 from '../assets/a2.gif';
import a3 from '../assets/a3.gif';
import a4 from '../assets/a4.gif';

const Projects = () => {
    return (
        <div className="border my-4">
            <article>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                            Projects
                        </h1>

                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 ">
                            <div className="bg-p1  overflow-hidden bg-cover bg-center rounded-lg cursor-pointer h-96 group">
                                <div
                                    onClick={() => {
                                        console.log('💀 navigate to project');
                                    }}
                                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"
                                >
                                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                                        Chatingale
                                    </h2>
                                    <p className="mt-1 text-md tracking-wider font-light text-blue-300 capitalize">
                                        A Real time chat application
                                    </p>
                                </div>
                            </div>
                            <div className="bg-p2  overflow-hidden bg-cover bg-center rounded-lg cursor-pointer h-96 group">
                                <div
                                    onClick={() => {
                                        console.log('💀 navigate to project');
                                    }}
                                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"
                                >
                                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                                        Chatingale
                                    </h2>
                                    <p className="mt-1 text-md tracking-wider font-light text-blue-300 capitalize">
                                        A Real time chat application
                                    </p>
                                </div>
                            </div>

                            <div className="bg-p3 overflow-hidden bg-cover bg-center rounded-lg cursor-pointer h-96 group">
                                <div
                                    onClick={() => {
                                        console.log('💀 navigate to project');
                                    }}
                                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"
                                >
                                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                                        Chatingale
                                    </h2>
                                    <p className="mt-1 text-md tracking-wider font-light text-blue-300 capitalize">
                                        A Real time chat application
                                    </p>
                                </div>
                            </div>

                            <div className="bg-p4  overflow-hidden bg-cover bg-center rounded-lg cursor-pointer h-96 group">
                                <div
                                    onClick={() => {
                                        console.log('💀 navigate to project');
                                    }}
                                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"
                                >
                                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                                        Chatingale
                                    </h2>
                                    <p className="mt-1 text-md tracking-wider font-light text-blue-300 capitalize">
                                        A Real time chat application
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>

            {/* <article className="flex  flex-col items-center ">
                <section className="m-4 w-full sm:w-auto relative">
                    <img
                        className="max-h-[300px] w-full object-cover"
                        src={a1}
                        alt="project-1"
                    />
                    <div className="border absolute top-0">
                        <h2 className="">Project Name </h2>
                    </div>
                </section>
                <section className="m-4">
                    <img
                        className="max-h-[300px] w-full object-fill "
                        src={a2}
                        alt="project-1"
                    />
                </section>
                <section className="m-4">
                    <img
                        className="max-h-[300px] w-full object-fill "
                        src={a3}
                        alt="project-1"
                    />
                </section>
                <section className="m-4">
                    <img
                        className="max-h-[300px] w-full object-fill "
                        src={a4}
                        alt="project-1"
                    />
                </section>
            </article> */}
        </div>
    );
};

export default Projects;
