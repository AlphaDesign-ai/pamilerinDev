import { FC } from 'react';
import Button, { TopNavigateButton } from './Button';

const Contact: FC = () => {
  return (
    <footer className="footer">
      <a
        className="mail-button"
        href="mailto:holluwapamilerin1@gmail.com"
        rel="noreferrer"
      >
        <Button>Drop a mail</Button>
      </a>
      <div className="navigate">
        <TopNavigateButton />
      </div>
    </footer>
  );
};

export default Contact;
