import Link from 'next/link';
import { FC } from 'react';
import Button from './Button';

const Navigation: FC = () => {
  return (
    <nav className="navigation">
      <div>
        <Link href="/">PamilerinDev</Link>
      </div>
      <Button route href="/about">
        About
      </Button>
    </nav>
  );
};

export default Navigation;
