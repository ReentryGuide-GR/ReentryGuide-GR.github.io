import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function AboutThisProject() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollTop = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollTop * -0.1}px)`; // Adjust the multiplier to change the parallax effect speed
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.leftColumn}>
        <div className="row">
          <div className={clsx('col col--6', styles.column)}>
            <h2 className={styles.title}>About This Project</h2>
            <p>Formerly incarcerated individuals often face significant challenges when reintegrating into society. With only 55% reporting any earnings during their first year out of prison, many find themselves homeless. Limited financial resources make it difficult to obtain basic necessities like food, healthcare, and hygiene products.</p>
            <p>Moreover, many who have spent years in prison have never used a smartphone and struggle with modern technology. This makes it nearly impossible for them to use a computer to find local resources, such as charities that provide essential services.</p>
          </div>
          <div className={clsx('col col--6', styles.column)}>
            <p>To address these issues, we designed and developed this app with simplicity and ease of use in mind.</p>
            <p>Our goal is to streamline the process of finding essential resources, such as food, shelter, hygiene, and healthcare, enabling users to easily navigate to the locations offering these services.</p>
            <p>Currently, this app is only implemented in Grand Rapids. We encourage you to fork this app and implement the project in your city to help more people benefit from these essential resources.</p>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div ref={parallaxRef} className={styles.parallaxImage}></div>
      </div>

    </section>
  );
}
