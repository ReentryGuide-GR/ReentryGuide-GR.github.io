// index.js
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
      <div className={clsx('container', styles.heroBanner)}>

        <div className={styles.column}>
          <div className={styles.illustrationContainer}>
            <img src="/img/illustration.png" alt="Get it on Google Play" className={styles.illustration} />
          </div>
        </div>


        <div className={styles.column}>
          <div className={styles.row}>
            {/* <img src="/img/logo2.png" alt="Logo" className={styles.logo} /> */}
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
                <div className={styles.row}>
                  <img src="/img/download.png" className={styles.icon} alt="icon" />
                  <span className={styles.iconButtonText}>Download Resource Sheet</span>
                </div>
                <img src="/img/arrow_forward.png" className={styles.arrow} alt="arrow" />
              </Link>

              <p className={styles.text}>Ready to expand impact?</p>
              <Link className={styles.iconButton} to="/docs/intro">
                <div className={styles.row}>
                  <img src="/img/article.png" className={styles.icon} alt="icon" />
                  <span className={styles.iconButtonText}>View Documentation</span>
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
