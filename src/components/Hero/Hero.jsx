import React from "react";
import { getImageUrl } from '../../utils';
import styles from '../Hero/Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Kushagra Prajapat</h1>
                <p className={styles.description}>Motivated and curious 3rd-year B.E. student in Information Technology with strong interests in
Artificial Intelligence, Machine Learning, and Python development. Proficient in multiple
programming languages and familiar with essential frameworks and tools, I have hands-on experience
in implementing projects that enhance real-world functionality.</p>
                <a href="mailto:kushagraprajapat9399@gmail.com" className={styles.contact}>Contact Me</a>
            </div>
            <img src={getImageUrl('kp_portfolio_image.png')} alt="Profile-Photo" className={styles.heroImg} />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
}