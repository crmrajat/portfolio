import me from '../assets/me.jpg';
import styles from '../styles';

const Introduction = (props) => {
    const aboutMe = props.data;
    return (
        <article
            className={[
                `${styles.card}  
                flex flex-col gap-8
                 place-items-center
                md:flex-row
                `,
            ]}
        >
            <section className="flex-1 ">
                <img
                    className="h-full w-full object-cover  rounded-lg"
                    src={me}
                    alt="my image"
                />
            </section>
            <section className="flex-1 ">
                <h1 className={`${styles.heading} `}>Introduction 👨🏽‍💻</h1>
                <p className={`${styles.paragraph}`}>{aboutMe}</p>{' '}
            </section>
        </article>
    );
};

export default Introduction;
