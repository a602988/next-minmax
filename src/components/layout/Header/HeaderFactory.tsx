import { SimpleHeader, FullHeader } from './index';
import { CommonHeaderProps } from './HeaderTypes';

type HeaderType = 'simple' | 'full';

interface HeaderFactoryProps extends CommonHeaderProps {
  type: HeaderType;
}

export default function HeaderFactory({
  type,
  showLogo = true,
  showLanguageSwitcher = true,
  customClass = '',
}: HeaderFactoryProps) {
  const commonProps: CommonHeaderProps = {
    showLogo,
    showLanguageSwitcher,
    customClass,
  };

  switch (type) {
    case 'simple':
      return <SimpleHeader {...commonProps} />;
    case 'full':
      return <FullHeader {...commonProps} />;
    default:
      return <SimpleHeader {...commonProps} />;
  }
}
