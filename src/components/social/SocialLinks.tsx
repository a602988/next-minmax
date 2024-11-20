import SocialLink from '@/components/social/Link'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function SocialLinks() {
  const socialData = [
    { href: 'https://twitter.com/youraccount', icon: <FaTwitter />, label: 'Twitter' },
    { href: 'https://facebook.com/yourpage', icon: <FaFacebook />, label: 'Facebook' },
    { href: 'https://linkedin.com/in/yourprofile', icon: <FaLinkedin />, label: 'LinkedIn' },
  ]

  return (
    <div className="social-links">
        <SocialLink
          className="mr-4 text-blue-500 hover:text-blue-700"
          href={social.href}
          icon={social.icon}
          key={index}
          label={social.label}
        />
    </div>
  )
}
