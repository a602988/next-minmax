import { SimpleHeader, FullHeader, BaseHeader } from './index';
import { CommonHeaderProps } from './HeaderTypes';
import { getGlobalContext } from '@/contexts/GlobalContext';

type HeaderType = 'simple' | 'full';

interface HeaderFactoryProps extends Omit<CommonHeaderProps, 'locale' | 'siteName'> {
  type: HeaderType;
}

export default function HeaderFactory({
  type,
  showLogo = true,
  showLanguageSwitcher = true,
  customClass = '',
}: HeaderFactoryProps) {
  const { locale, siteName } = getGlobalContext();

  const commonProps = {
    showLogo,
    showLanguageSwitcher,
    customClass,
    locale,
    siteName,
  };

  switch (type) {
    case 'simple':
      return <SimpleHeader {...commonProps} />;
    case 'full':
      return <FullHeader {...commonProps} />;
    default:
      return <BaseHeader {...commonProps} />;
  }
}
