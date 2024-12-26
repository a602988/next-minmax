import { useEffect, useState } from 'react';
import { getWebData } from '@/services/getWebData';
import { WebDataType } from '@/types/WebDataType';

interface LogoData {
  path: string;
  content?: string;
}

export function useLogoData(defaultLogo: string) {
  const [webData, setWebData] = useState<WebDataType | null>(null);
  const [logoSrc, setLogoSrc] = useState(defaultLogo);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await getWebData();
        setWebData(data);
        if (data.system_logo) {
          const logoData: LogoData | null = JSON.parse(data.system_logo)[0];
          setLogoSrc(logoData?.path || defaultLogo);
        }
      } catch (error) {
        console.error('Error fetching web data:', error);
        // 在出錯時保持默認 logo
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [defaultLogo]);

  return { webData, logoSrc, isLoading };
}