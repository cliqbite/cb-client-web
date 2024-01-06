export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'CliqBite',
  description: 'Food ordering application.',
  navItems: [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Pricing',
      href: '/pricing'
    },
    {
      label: 'Blog',
      href: '/blog'
    },
    {
      label: 'About',
      href: '/about'
    }
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile'
    },
    {
      label: 'Dashboard',
      href: '/dashboard'
    },
    {
      label: 'Settings',
      href: '/settings'
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback'
    },
    {
      label: 'Logout',
      href: '/logout'
    }
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/'
  }
}
