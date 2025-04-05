import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PeopleSection from '@site/src/components/PeopleSection';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Common Core
            <span className={styles.heroTitleHighlight}>Ontologies (CCO)</span>
          </h1>
          <p className={styles.heroSubtitle}>
            An international standard providing the semantic foundation for trusted AI systems, unambiguous data exchange, and knowledge representation across critical domains.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button', styles.heroButton, styles.heroButtonPrimary)}
              to="/docs/get-started">
              Get Started
            </Link>
            <Link
              className={clsx('button', styles.heroButton, styles.heroButtonSecondary)}
              to="https://github.com/CommonCoreOntology/CommonCoreOntologies"
              target="_blank">
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Common Core Ontologies (CCO) - A suite of eleven ontologies which, collectively, comprise a mid-level ontology"
      className="homepage">
      <HomepageHeader />
      <main>
        <div className="container padding-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h2" className="text--center margin-bottom--lg">About</Heading>
              <div className="margin-bottom--xl" style={{ textAlign: 'justify' }}>
                <p>
                  The Common Core Ontologies (CCO) is suite of eleven ontologies which, collectively, comprise a mid-level ontology. 
                  CCO - initiated by CUBRC, Inc. in 2010 under an IARPA Knowledge Discovery and Dissemination grant - is widely-used 
                  in defense and intelligence sectors to support data standardization, interoperability, reproducibility, and 
                  automated reasoning across numerous domains.
                </p>
                <p>
                  Accordingly, CCO development and application was, for many years, conducted without much transparency. 
                  As of 2017, however, CCO has been available under a BSD-3 license with a public GitHub repository open to collaboration. 
                  Making CCO publicly available has led to significant increase of interest in CCO development.
                </p>
                <p>
                  For example, in 2022 the Institute of Electrical and Electronics Engineers (IEEE) P3195 Standard for Requirements 
                  for a Mid-Level Ontology and Extensions working group initiated a review of CCO to become the first mid-level 
                  ontology standard. More recently, in 2024 CCO was endorsed as a "baseline standard" for all formal 
                  ontology development across the Department of Defense and Intelligence Community.
                </p>
                <div className="text--center margin-top--lg">
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/about/mission">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomepageFeatures />
        <PeopleSection />
      </main>
    </Layout>
  );
}
