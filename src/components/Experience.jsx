const Experience = (props) => {
    const experienceList = props.data;

    const formatDate = (date) => {
        if (date === null || date === undefined) {
            return 'Present';
        }
        return (
            date.toLocaleString('default', { month: 'short' }) +
            ' ' +
            date.getFullYear()
        );
    };

    return (
        <section id="experienceView" className="card">
            <h1 className="heading">Experience 🧗🏽‍♂️</h1>

            <div className="lg:w-4/5 mx-auto">
                {experienceList.map((item, index) => {
                    return (
                        <div
                            key={'exp' + index}
                            className="mb-16 sm:mb-10 flex flex-wrap md:flex-nowrap"
                        >
                            <div className="md:w-72 md:mb-0 mb-4 flex-shrink-0 flex flex-col">
                                <span className=" text-white text-lg sm:font-bold capitalize tracking-wide">
                                    {item.companyName}
                                </span>
                                <span className="text-emerald-300 sm:text-lg font-light">
                                    {item.post}
                                </span>
                                <span className=" text-emerald-100 sm:text-lg  font-light">
                                    {formatDate(item.startDate) +
                                        ' - ' +
                                        formatDate(item.endDate)}
                                </span>
                            </div>
                            <ul className="paragraph md:flex-grow list-disc list-inside">
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
        </section>
    );
};

export default Experience;
