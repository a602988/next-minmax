import SocialLink from '@/components/social/Link'
import { Facebook } from '@ricons/fa'

interface FacebookLinkProps {
  className?: string;
}

export default function FacebookLink({ className = '' }: FacebookLinkProps) {
  const facebookData = {
    href: 'https://facebook.com/yourpage',
    icon: <Facebook />,
    label: 'Facebook'
  }

  return (
    <SocialLink
      className={className}
      href={facebookData.href}
      icon={facebookData.icon}
      label={facebookData.label}
    />
  )
}
