import { LINKS } from './links'
import { IMAGES } from './images'

export const PROJECTS = [
  {
    title: 'Self-serve onboarding for Credit Card Customers',
    subtitle: '2021 - Roadmap Project at Razorpay',
    cta: 'read case study',
    accentColor: '#5ca2f7',
    bgColor: 'rgb(238, 245, 254)',
    link: LINKS.razorpayCaseStudy,
    external: true,
    images: IMAGES.razorpay,
  },
  {
    title: 'Notifications that help focus on what\'s important',
    subtitle: '2020 - Academic Design Project',
    cta: 'read case study',
    accentColor: '#7e5cd7',
    bgColor: 'rgb(242, 239, 250)',
    link: LINKS.notificationsCaseStudy,
    external: true,
    images: IMAGES.notifications,
  },
  {
    title: 'Enhancing UX of E-commerce Platforms',
    subtitle: '2021 - Research Publication',
    cta: 'view research',
    accentColor: '#fe68a8',
    bgColor: 'rgb(253, 241, 247)',
    link: '/work/e-commerce',
    external: false,
    images: IMAGES.ecommerce,
  },
  {
    title: 'Investigating the E-Reading Experience',
    subtitle: '2022 - Research Publication',
    cta: 'view research',
    accentColor: '#70bfa2',
    bgColor: 'rgb(243, 248, 246)',
    link: '/work/e-reading',
    external: false,
    images: IMAGES.ereading,
  },
]
