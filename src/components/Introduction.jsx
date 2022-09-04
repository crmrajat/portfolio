import React from 'react';
import me from '../assets/me.jpg';

const Introduction = () => {
    return (
        <article className="my-4 flex  flex-col items-center border lg:flex-row-reverse sm:justify-between ">
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
                <p className="text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illo similique hic maiores doloribus aperiam nemo quibusdam
                    neque cum facilis, recusandae sit possimus atque impedit
                    perferendis numquam iusto cumque nam inventore. Ullam
                    corporis distinctio debitis quod aperiam dignissimos modi
                    dolorum iure esse rem molestiae soluta maiores
                </p>
            </section>
        </article>
    );
};

export default Introduction;
