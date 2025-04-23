import { CommonHeaderProps } from '../HeaderTypes';
import Logo from '@/components/ui/Logo';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher/LanguageSwitcher';

export default function FullHeader({
  showLogo,
  showLanguageSwitcher,
  customClass
}: CommonHeaderProps) {
  return (
    <header className={`flex items-center justify-between ${customClass}`}>
      {showLogo && <Logo siteName="Your Site Name" />}
      <div className="flex items-center">
        {showLanguageSwitcher && <LanguageSwitcher />}
      </div>
    </header>
  );
}
