import { FC } from 'react';
import Button, { TopNavigateButton } from './Button';

const Contact: FC = () => {
  return (
    <footer className="footer">
      <div className="mail-button">
        <Button>Drop a mail</Button>
      </div>
      <div className="navigate">
        <TopNavigateButton />
      </div>
    </footer>
  );
};

export default Contact;
