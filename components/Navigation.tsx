import { FC } from 'react';

const Navigation: FC = () => {
  return (
    <nav className="navigation">
      <span>&nbsp;</span>

      <ul className="route-nav">
        <li>
          <a href="/about">Github.</a>
        </li>
        <li>
          <a href="" type="download">
            Resume.
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
