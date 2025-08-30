import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.containerData}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("emailIcon.png")} alt="Email" />
                    <a href="mailto:kushagraprajapat9399@gmail.com">kushagraprajapat9399@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("linkedinIcon.png")} alt="LinkedIn" />
                    <a href="https://www.linkedin.com/in/kushagra-prajapat-93107b271/">linkedin.com/kushagra-prajapat</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("githubIcon.png")} alt="Github" />
                    <a href="https://github.com/Kushagra9399">github.com/Kushagra9399</a>
                </li>
            </ul>
        </div>
        <p className={styles.copyright}>© {new Date().getFullYear()} Kushagra Prajapat</p>
    </footer>
  );
}