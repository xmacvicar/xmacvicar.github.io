import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="David MacVicar — KM & Technical Writing"
      description="Portfolio of knowledge management and technical writing work by David MacVicar.">
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h1 className={styles.heroTitle}>
            Knowledge systems<br/>that work.
          </h1>
          <p className={styles.heroLede}>
            I&rsquo;m David MacVicar. I lead knowledge management and content
            operations, with a focus on governance, information architecture, and
            making documentation people actually reach for. This site collects sample
            docs, case studies from my work, and writing on how I think about KM.
          </p>
          <div className={styles.heroLinks}>
            <Link to="/case-studies/intro" className={styles.primaryLink}>
              Read the case studies →
            </Link>
            <Link to="/about" className={styles.secondaryLink}>
              About me
            </Link>
          </div>
        </section>

        <section className={styles.tracks}>
          <article className={styles.track}>
            <p className={styles.trackNumber}>01</p>
            <h2 className={styles.trackTitle}>
              <Link to="/case-studies/intro">Case Studies</Link>
            </h2>
            <p className={styles.trackDesc}>
              Sanitized write-ups of real KM and content operations work:
              problem, approach, what I built, what changed.
            </p>
          </article>

          <article className={styles.track}>
            <p className={styles.trackNumber}>02</p>
            <h2 className={styles.trackTitle}>
              <Link to="/docs/intro">Sample Docs</Link>
            </h2>
            <p className={styles.trackDesc}>
              Documentation I&rsquo;ve written from scratch for tools and systems
              I use. Full doc sets, not snippets.
            </p>
          </article>

          <article className={styles.track}>
            <p className={styles.trackNumber}>03</p>
            <h2 className={styles.trackTitle}>
              <Link to="/writing">Writing</Link>
            </h2>
            <p className={styles.trackDesc}>
              Essays on content governance, knowledge management strategy, and
              the organizational reality of doing this work.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
}
