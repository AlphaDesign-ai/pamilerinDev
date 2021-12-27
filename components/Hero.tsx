import { FC } from 'react';

interface HeroProps {
  content: string;
  className: string;
}

const Hero: FC<HeroProps> = ({ content, className }) => {
  return <div className={className}>{content}</div>;
};

export default Hero;
