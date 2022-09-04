import me from '../assets/me.jpg';

const Introduction = (props) => {
    const aboutMe = props.data;
    return (
        <article className="my-4 flex  flex-col items-center  lg:flex-row-reverse sm:justify-between bg-white dark:bg-gray-900">
            <section className="p-4">
                <img
                    className="max-h-[400px] sm:max-h-max"
                    src={me}
                    alt="my image"
                />
            </section>
            <section className="p-4">
                <h1 className="text-3xl sm:text-7xl  text-center">
                    Introduction
                </h1>
                <p className="text-sm sm:text-base">{aboutMe}</p>
            </section>
        </article>
    );
};

export default Introduction;
