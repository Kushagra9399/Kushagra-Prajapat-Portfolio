import React from "react";
import { getImageUrl } from '../../utils';
import styles from './Skills.module.css';
import skills from '../../data/skills.json';

export const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id}>
                                <div className={styles.skillImage}>
                                    <img src={getImageUrl(skill.image)} alt={skill.title} />
                                </div>
                                <p className={styles.skill}>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}