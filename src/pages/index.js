// index.js
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.backgroundImage}></div>
      <div className={clsx('container', styles.heroBanner)}>

        <div className={clsx(styles.column, styles.illustrationColumn)}>
          <div className={styles.illustrationContainer}></div>
        </div>


        <div className={styles.column}>
          {/* <img src="/img/logo2.png" alt="Logo" className={styles.logo} /> */}
          <div className={styles.row}>
            <img src="/img/logo.svg" alt="logo" className={styles.logo} />
            <div className={styles.textContainer}>

              <Heading as="h1" className={styles.hero__title}>
                {siteConfig.title}
              </Heading>

              <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>

              <div className={styles.buttonContainer}>
                <img src="/img/google-play.png" alt="Get it on Google Play" className={styles.googlePlay} />
              </div>

              <p className={styles.text}>Can't use a smart phone?</p>
              <Link className={styles.iconButton} to="/docs/intro">
                <div className={styles.buttonRow}>
                  <img src="/img/download.png" className={styles.icon} alt="icon" />
                  <span className={styles.iconButtonText}>Download Resource Sheet</span>
                </div>
                <img src="/img/arrow_forward.png" className={styles.arrow} alt="arrow" />
              </Link>

              <p className={styles.text}>Want to expand impact?</p>
              <Link className={styles.iconButton} to="/docs/developer-guide/intro">
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
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
