import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <header className="user-intro">
        <h1>
          <span className="dev">
            I am a <span>web</span> Developer
          </span>
          <span className="grey-font ">&nbsp;&nbsp;&nbsp;&nbsp;/Designer.</span>
        </h1>
      </header>
      <main className="main-content">
        <Head>
          <title>Pamilerin</title>
        </Head>

        <Hero />
      </main>
      <Contact />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
