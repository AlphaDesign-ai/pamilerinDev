import { NextPage } from 'next';
import Head from 'next/head';
import Contact from '../components/Contact';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>about~pamilerinDev</title>
      </Head>
      <div className="about-me">
        <h3>Story about me</h3>
        <p>
          {`I am Lawal Yusuf, a Frontend developer based in
          Lagos, Nigeria . I'm passionate about building web
          product that are accessible and usable to everyone
          and taking accessibility to the front. I was born
          in Lagos and studying Electrical / Electronic
          engineering in the University, I have interned at
          two start-up company over the past 2 years . I
          interned at HNG internship and Sidehustle, the
          latter which I just finished this December 2021
          which I get to worked with different people from
          different culture and I was able to developed my
          collaboration spirit.`}
        </p>
        <div></div>
        <Contact />
      </div>
    </div>
  );
};

export default About;
