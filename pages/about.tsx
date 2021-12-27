import { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';

const fullInfoAboutMe = `
    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
    amount of the system, and expound the actual teachings of the great explorer
`;

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>about~pamilerinDev</title>
      </Head>
      <h2 className="about-title">Hello guys!!</h2>
      <Hero
        content={fullInfoAboutMe}
        className="about-hero"
      />
      <div className="about-contact">
        Connect with me now
      </div>
    </div>
  );
};

export default About;
