import { FC } from 'react';

interface HeroProps {
  content: string;
  className: string;
}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="main-hero">
      <span>
        Hello , I am developer/designer passionate about
        web,
      </span>
      <span> based in Lagos, Nigeria</span>
    </div>
  );
};

export default Hero;
