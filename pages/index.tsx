import Hero from '../components/Hero';

const shortInfoAboutMe = `Hello, I am Yusuf,a frontend developer and web
                          designer based in Lagos, Nigeria.`;

export default function Home() {
  return (
    <div>
      <Hero
        content={shortInfoAboutMe}
        className="main-hero"
      />
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
