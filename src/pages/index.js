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

              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro">
                  Docusaurus Tutorial - 5min ⏱️
                </Link>
              </div>

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
