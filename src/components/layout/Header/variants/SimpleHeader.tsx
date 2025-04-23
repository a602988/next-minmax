import { CommonHeaderProps } from '../HeaderTypes';
import Logo from '@/components/ui/Logo';

export default function SimpleHeader({ showLogo, customClass }: CommonHeaderProps) {
  return (
    <header className={`flex items-center justify-between ${customClass}`}>
      {showLogo && <Logo siteName="Your Site Name" />}
    </header>
  );
}
