import Link from 'next/link';
import { FC } from 'react';
import ArrowRightIcon from './ArrowRightIcon';
import SocialMedia from './SocialMedia';

const Contact: FC = () => {
  return (
    <footer className="footer">
      <div className="message">
        want to reach out or connect, you can drop a line
        here.
      </div>
      <div className="reach-out">
        <Link href="/">
          <a type="download" className="button">
            <span>Drop a mail</span>
            <ArrowRightIcon />
          </a>
        </Link>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Contact;
