import me from '../assets/me.jpg';

const Introduction = (props) => {
    const aboutMe = props.data;
    return (
        <article
            className="
            card
            flex 
            flex-col 
            gap-8
            place-items-center
            md:flex-row
            group
            "
        >
            <section className="flex-1 ">
                <img
                    className="h-full w-full object-cover  rounded-lg"
                    src={me}
                    alt="my image"
                />
            </section>
            <section className="flex-1 ">
                <h1 className="heading">Introduction 👨🏽‍💻</h1>

                <div className="container">
                    <span className="paragraph">{aboutMe[0]}</span>
                    <span className="paragraph underlineGradient uppercase  group-hover:bg-[length:100%_3px]">
                        {aboutMe[1]}
                    </span>
                    <span className="paragraph">{aboutMe[2]}</span>
                    <span className="paragraph underlineGradient group-hover:bg-[length:100%_3px]">
                        {aboutMe[3]}
                    </span>
                    <span className="paragraph">{aboutMe[4]}</span>
                </div>
            </section>
        </article>
    );
};

export default Introduction;
