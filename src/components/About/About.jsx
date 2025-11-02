import React from "react";
import styles from './About.module.css';
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl('aboutImage.png')} alt="About" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('cursorIcon.png')} alt="Cursor-Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>AI/ML Enthusiast</h3>
                            <p>I am working in field of Artificial Intelligence and Machine Learning.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('serverIcon.png')} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Full Stack Developer</h3>
                            <p>I am working with React for frontend and python backend frameworks like FastAPI, Django and Flask.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('uiIcon.png')} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Data Analyst</h3>
                            <p>I have worked with data preprocessing, cleaning, create visuals using data, extracting information from data, etc with the help of MySQL, Tableau and Python</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}