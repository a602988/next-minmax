import HeaderClient from './HeaderClient';

interface HeaderProps{
  variant?: 'base' | 'full';
  className?: string;
}

export default function Header({
  variant = 'base',
  className = 'header',
  ...otherProps
}: HeaderProps) {
  return (
    <HeaderClient
      variant={variant}
      className={className}
      {...otherProps}
    />
  );
}
