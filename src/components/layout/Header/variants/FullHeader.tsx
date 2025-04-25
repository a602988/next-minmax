import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';

interface FullHeaderProps {
  className?: string;
}

export default function FullHeader({
  className,
}: FullHeaderProps) {
  return (
    <header className={`${className} flex items-center justify-between px-4 py-2`}>
      <h1>Full Header</h1>
      <LanguageSwitcher variant="dropdown" />
    </header>
  );
}
