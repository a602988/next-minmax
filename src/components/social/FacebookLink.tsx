import { useEffect, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import SocialLink from '@/components/social/Link';
import { getWebData } from '@/services/getWebData';

export default function FacebookLink() {
  const [facebookData, setFacebookData] = useState({
    href: '',
    label: 'Facebook'
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWebData();
        if (data.social_facebook) {
          setFacebookData(prev => ({
            ...prev,
            href: data.social_facebook
          }));
        }
      } catch (error) {
        console.error('Error fetching Facebook data:', error);
      }
    }

    fetchData();
  }, []);

  if (!facebookData.href) {
    return null; // 如果沒有 Facebook 連結，不顯示任何內容
  }

  return (
    <SocialLink
      className="social-facebook"
      href={facebookData.href}
      label={facebookData.label}
    >
      <FaFacebookF />
    </SocialLink>
  )
}
