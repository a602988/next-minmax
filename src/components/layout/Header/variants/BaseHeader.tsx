import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';
import Logo from '@/components/ui/Logo';

interface SimpleHeaderProps {
  className?: string;

}

export default function BaseHeader({
   className,
}: SimpleHeaderProps) {
  return (
    <header className={`${className} flex justify-between items-center p-4`}>
      <h1>base</h1>
      <Logo />
      <LanguageSwitcher variant="dropdown" />
    </header>
  );
}
