/**
 * LogoIndex Component 負責數據獲取和處理邏

 * @example
 * <LogoIndex className="w-[234px] h-[50px] p-1"/>
 */

import LogoClient from '@/components/logo/LogoClient';
import { getWebData } from '@/services/getWebData';

interface Props {
  className?: string;
  link?: boolean;
}

async function LogoIndex({ className = '', link = true }: Props) {
  const webData = await getWebData();
  const logoData = JSON.parse(webData.system_logo);
  const logoSrc = logoData[0]?.path || '';

  return (
    <LogoClient
      className={className}
      data={{ ...webData, logoSrc }}
      link={link}
    />
  );
}

export default LogoIndex;
