import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function SupportOurMission() {
  return (
    <section className={styles.supportSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Support Our Mission</h2>
        <div className="row">
          <div className={clsx('col col--4', styles.column)}>
            <h3>Distribute Our Flyer</h3>
            <p>Download our flyer, print copies, and distribute them in your community. This can help us to reach out and benefit more people. Are you part of an organization? Consider displaying the flyer as a poster in your office or community space. </p>
            <Link className={styles.iconButton} to="https://reentryguidegr.org/flyer.pdf">
              <div className={styles.buttonRow}>
                <img src="/img/download.png" className={styles.icon} alt="icon" />
                <span className={styles.iconButtonText}>Download Flyer</span>
              </div>
              <img src="/img/arrow_forward.png" className={styles.arrow} alt="arrow" />
            </Link>
          </div>
          <div className={clsx('col col--4', styles.column)}>
            <h3>Join Our Project</h3>
            <p>
              Take our project to your community! Fork our app on GitHub and start helping formerly incarcerated individuals where you live. Have suggestions or found a bug? Open an issue in our repository. 
              <br />
              <br />
            </p>
            <Link className={styles.iconButton} to="https://github.com/ReentryGuide-GR">
              <div className={styles.buttonRow}>
                <img src="/img/github.svg" className={styles.icon} alt="icon" />
                <span className={styles.iconButtonText}>See our Repo</span>
              </div>
              <img src="/img/arrow_forward.png" className={styles.arrow} alt="arrow" />
            </Link>
          </div>
          <div className={clsx('col col--4', styles.column)}>
            <h3>Donate to Our Organization</h3>
            <p>Your donations help us continue our work and reach more individuals in need. Support our organization and make a difference in the lives of formerly incarcerated individuals. Donate now to help us expand our efforts and impact.</p>
            <Link className={styles.iconButton} to="https://www.reentryreimagined.org/">
              <div className={styles.buttonRow}>
                <img src="/img/give.png" className={styles.icon} alt="icon" />
                <span className={styles.iconButtonText}>Donate</span>
              </div>
              <img src="/img/arrow_forward.png" className={styles.arrow} alt="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
