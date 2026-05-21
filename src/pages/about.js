import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About David MacVicar">
      <main style={{maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem'}}>
        <h1 style={{fontSize: '2.5rem', letterSpacing: '-0.03em'}}>About</h1>
        <div className="markdown" style={{fontSize: '1.1rem', lineHeight: 1.75}}>
          <p>
            I&rsquo;m David MacVicar, a Director of Knowledge and System
            Operations based in Montréal, Quebec. I work on knowledge management,
            content governance, and the operational side of making
            documentation actually useful to the people who need it.
          </p>
          <p>
            As Director of Knowledge &amp; System Operations at <a href="https://leapevent.tech">Leap Event Technology</a>, I oversee our company-wide knowledge strategy, including
            our Guru instance. I also serve as product owner for Fin, our
            AI-powered support tool built on Intercom, leading our approach to
            AI-assisted customer support. Previously, I worked as a knowledge
            manager with Airbnb&rsquo;s Content &amp; Knowledge
            Management team in Community Support.
          </p>
          <p>
            Outside of Leap, I manage the YouTube channel and website brand for
            AR Proformance, handling branding, video editing, and copy.
          </p>
          <p>
            This site is part portfolio, part working notebook. The case studies
            are drawn from real work, sanitized to respect employer IP. The
            sample docs are projects I&rsquo;ve built end-to-end.
          </p>
          <h2 style={{marginTop: '3rem'}}>Outside work</h2>
          <p>
            I&rsquo;m an active musician, an avid squash player, and a road cyclist.
            Visit me at <a href="https://www.davidmacvicar.com">davidmacvicar.com</a>.
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
