// index.js
import React, { useEffect, useRef } from 'react';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AboutThisProject from '@site/src/components/AboutThisProject';
import SupportOurMission from '@site/src/components/SupportOurMission';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const backgroundRef = useRef(null);
  const illustrationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundPositionY = `${offset * 0.6}px`; // Adjust the value for desired effect
      }
      if (illustrationRef.current) {
        illustrationRef.current.style.transform = `translateY(${offset * 0.25}px)`; // Adjust the value for slower effect
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div ref={backgroundRef} className={styles.backgroundImage}></div>
      <div className={clsx('container', styles.heroBanner)}>

        <div className={clsx(styles.column, styles.illustrationColumn)}>
          <div ref={illustrationRef} className={styles.illustrationContainer}></div>
        </div>


        <div className={clsx(styles.column, styles.textColumn)}>
          <div className={styles.row}>
            <div className={styles.textContainer}>

              <img src="/img/logo-tagline.svg" alt="ReentryGuide GR - Your local resource navigator" className={styles.logo} />

              <Link  className={styles.buttonContainer} to="https://play.google.com/store/apps/details?id=com.reentryreimagined.reentryguidegr">
                <img src="/img/google-play-banner.png" alt="Get it on Google Play" className={styles.googlePlay} />
              </Link >

              <p className={styles.text}>Can't use a smart phone?</p>
              <Link className={styles.iconButton} to="https://reentryguidegr.org/ReentryGuide-GR-Resource-Sheet.pdf">
                <div className={styles.buttonRow}>
                  <img src="/img/download.png" className={styles.icon} alt="icon" />
                  <span className={styles.iconButtonText}>Download Resource Sheet</span>
                </div>
                <img src="/img/arrow_forward.png" className={styles.arrow} alt="arrow" />
              </Link>

              <p className={styles.text}>Want to expand impact?</p>
              <Link className={styles.iconButton} to="/docs/category/developer-guide">
                <div className={styles.buttonRow}>
                  <img src="/img/fork.png" className={styles.icon} alt="icon" />
                  <span className={styles.iconButtonText}>Fork Our Project</span>
                </div>
                <img src="/img/arrow_forward.png" className={styles.arrow} alt="arrow" />
              </Link>

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />">
      <Head>
        <meta name="description" content="ReentryGuide GR is a mobile app brought by Reentry Reimagined to aid the reintegration of former prisoners in Grand Rapids. The app provides easy access to essential resources such as food, clothing, hygiene, and healthcare, ensuring a smoother transition back into society." />
        <meta name="keywords" content="ReentryGuide GR, Reentry Reimagined, former prisoners, reintegration, Grand Rapids, food resources, clothing resources, hygiene resources, healthcare resources, smoother transition, societal reintegration, support services" />
      </Head>
      <HomepageHeader />
      <main>
        <AboutThisProject />
        <SupportOurMission />
      </main>
    </Layout>
  );
}
