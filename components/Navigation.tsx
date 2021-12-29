import Link from 'next/link';
import { FC } from 'react';

const Navigation: FC = () => {
  return (
    <nav className="navigation">
      <div className="logo-text">
        <Link href="/">PamilerinDev</Link>
      </div>

      <ul className="route-nav">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <a href="" type="download">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
