import { FC } from 'react';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';
import TwitterIcon from './TwitterIcon';

const SocialMedia: FC = () => {
  return (
    <div className="socialMedia">
      <GithubIcon />
      <LinkedinIcon />
      <TwitterIcon />
    </div>
  );
};

export default SocialMedia;
