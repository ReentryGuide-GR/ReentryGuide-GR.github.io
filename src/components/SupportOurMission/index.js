import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function SupportOurMission() {
  return (
    <section className={styles.supportSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Support Our Mission</h2>
        <div className="row">
          <div className={clsx('col col--4', styles.column)}>
            <h3>Fork Our Project</h3>
            <p>Take our project to your city! Fork our app on GitHub and start helping formerly incarcerated individuals in your community. Together, we can expand our impact and provide essential resources to more people in need. </p>
          </div>
          <div className={clsx('col col--4', styles.column)}>
            <h3>Contribute to Our Project</h3>
            <p>Have suggestions, found a bug, or want to improve our app? Open an issue on our GitHub repository. Your feedback and contributions are invaluable to us and help make our app better for everyone. </p>
          </div>
          <div className={clsx('col col--4', styles.column)}>
            <h3>Donate to Our Organization</h3>
            <p>Your donations help us continue our work and reach more individuals in need. Support our organization and make a difference in the lives of formerly incarcerated individuals. Donate now to help us expand our efforts and impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
