import { FC } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  route?: boolean;
}
const Button: FC<ButtonProps> = ({
  href,
  children,
  route,
}) => {
  return (
    <span className="button">
      {route ? (
        <Link href={href}>{children}</Link>
      ) : (
        <a href={href}>{children}</a>
      )}
    </span>
  );
};

export default Button;
