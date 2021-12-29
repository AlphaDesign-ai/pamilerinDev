import Contact from '../components/Contact';
import Hero from '../components/Hero';

const shortInfoAboutMe = `Hello, I am developer/designer passionate about web, based in Lagos, Nigeria`;

export default function Home() {
  return (
    <div>
      <Hero
        content={shortInfoAboutMe}
        className="main-hero"
      />
      <Contact />
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
