import React from 'react'
import styles from './Resume.module.css';

export const Resume = () => {
  return (
    <section className={styles.container} id="resume">
        <h2 className={styles.title}>Resume</h2>
        <div className={styles.content}>
            <div className={styles.iframeContainer}>
                <iframe
                    src="/Kushagra Prajapat_cv.pdf#toolbar=0&navpanes=0&scrollbar=1"
                    title="Resume"
                    className={styles.iframe}
                    ></iframe>
            </div>
            <a href="/Kushagra Prajapat_cv.pdf" download="Kushagra_Prajapat_Resume.pdf" className={styles.downloadBtn}>
                Download Resume
            </a>
        </div>
    </section>
  )
}