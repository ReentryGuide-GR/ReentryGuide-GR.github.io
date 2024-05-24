import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function AboutThisProject() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <h2 className={styles.title}>ABOUT THIS PROJECT</h2>
        <div className="row">
          <div className={clsx('col col--4', styles.column)}>
            <p>Formerly incarcerated individuals often face significant challenges when reintegrating into society. With only 55% reporting any earnings during their first year out of prison, many find themselves homeless. Limited financial resources make it difficult to obtain basic necessities like food, healthcare, and hygiene products.</p>
          </div>
          <div className={clsx('col col--4', styles.column)}>
            <p>Moreover, many who have spent years in prison have never used a smartphone and struggle with modern technology. This makes it nearly impossible for them to use a computer to find local resources, such as charities that provide essential services.</p>
          </div>
          <div className={clsx('col col--4', styles.column)}>
            <p>Our goal is to streamline the process of finding essential resources, such as food, shelter, hygiene, and healthcare, enabling users to easily navigate to the locations offering these services.</p>
            <p>Currently, this app is only implemented in Grand Rapids. We encourage you to fork this app and implement the project in your city to help more people benefit from these essential resources.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
