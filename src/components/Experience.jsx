const Experience = (props) => {
    const experienceList = props.data;

    const formatDate = (date) => {
        if (date === undefined || date === null) {
            return 'Present';
        }
        return (
            date.getDate() +
            ' ' +
            date.toLocaleString('default', { month: 'short' }) +
            ' ' +
            date.getFullYear()
        );
    };

    return (
        <article className="">
            <section className="">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                        Experience 🧗🏽‍♂️
                    </h1>

                    <div className="container px-5 py-10 mx-auto">
                        {experienceList.map((item, index) => {
                            return (
                                <div
                                    key={'exp' + index}
                                    className="py-8 flex flex-wrap md:flex-nowrap"
                                >
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span className="font-semibold title-font text-gray-700 capitalize">
                                            {item.companyName}
                                        </span>
                                        <span className="mt-2 text-gray-500 text-sm font-semibold">
                                            {item.post}
                                        </span>
                                        <span className="mt-1 text-gray-500 text-sm">
                                            {formatDate(item.startDate) +
                                                ' - ' +
                                                formatDate(item.endDate)}
                                        </span>
                                    </div>
                                    <ul className="md:flex-grow list-disc list-inside">
                                        {item.points.map((point, index) => {
                                            return (
                                                <li
                                                    key={'point' + index}
                                                    className="leading-relaxed"
                                                >
                                                    {point}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Experience;
