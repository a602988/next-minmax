import SocialLink from '@/components/social/Link'
import { FaFacebook } from 'react-icons/fa'

export default function FacebookLink() {
  const facebookData = {
    href: 'https://facebook.com/yourpage',
    icon: <FaFacebook />,
    label: 'Facebook'
  }

  return (
      <SocialLink
        className="mr-4 text-blue-500 hover:text-blue-700"
        href={facebookData.href}
        icon={facebookData.icon}
        label={facebookData.label}
      />
  )
}
