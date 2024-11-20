import { FaFacebookF } from 'react-icons/fa';
import SocialLink from '@/components/social/Link'

export default function FacebookLink() {
  const facebookData = {
    href: 'https://facebook.com/yourpage',
    label: 'Facebook'
  }

  return (
    <SocialLink
      className="mr-4 text-blue-500 hover:text-blue-700"
      href={facebookData.href}
      label={facebookData.label}
    >
      <FaFacebookF />
    </SocialLink>
  )
}