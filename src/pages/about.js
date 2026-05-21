import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About David MacVicar">
      <main style={{maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem'}}>
        <h1 style={{fontSize: '2.5rem', letterSpacing: '-0.03em'}}>About</h1>
        <div style={{fontSize: '1.1rem', lineHeight: 1.75}}>
          <p>
            I&rsquo;m David MacVicar, a Director of Knowledge and System
            Operations based in Montreal. I work on knowledge management,
            content governance, and the operational side of making
            documentation actually useful to the people who need it.
          </p>
          <p>
            Currently at Leap Event Technology, where I oversee our Guru
            knowledge management instance. Previously on Airbnb&rsquo;s Content
            &amp; Knowledge Management team in Community Support.
          </p>
          <p>
            This site is part portfolio, part working notebook. The case studies
            are drawn from real work, sanitized to respect employer IP. The
            sample docs are projects I&rsquo;ve built end-to-end. The writing is
            where I think out loud about KM as a practice.
          </p>
          <h2 style={{marginTop: '3rem'}}>Get in touch</h2>
          <p>
            <a href="mailto:davemacvicar@gmail.com">Email</a> &middot;{' '}
            <a href="https://www.linkedin.com/in/davidmacvicar/">LinkedIn</a> &middot;{' '}
            <a href="https://github.com/xmacvicar">GitHub</a>
          </p>
        </div>
      </main>
    </Layout>
  );
}
