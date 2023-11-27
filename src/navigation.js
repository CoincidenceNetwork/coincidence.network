import { getPermalink, getAsset } from './utils/permalinks';

// export const headerData = {
//   links: [
//     {
//       text: 'Homes',
//       links: [
//         {
//           text: 'SaaS',
//           href: getPermalink('/homes/saas'),
//         },
//         {
//           text: 'Startup',
//           href: getPermalink('/homes/startup'),
//         },
//         {
//           text: 'Mobile App',
//           href: getPermalink('/homes/mobile-app'),
//         },
//         {
//           text: 'Personal',
//           href: getPermalink('/homes/personal'),
//         },
//       ],
//     },
//     {
//       text: 'Pages',
//       links: [
//         {
//           text: 'Features (Anchor Link)',
//           href: getPermalink('/#features'),
//         },
//         {
//           text: 'Services',
//           href: getPermalink('/services'),
//         },
//         {
//           text: 'Pricing',
//           href: getPermalink('/pricing'),
//         },
//         {
//           text: 'About us',
//           href: getPermalink('/about'),
//         },
//         {
//           text: 'Contact',
//           href: getPermalink('/contact'),
//         },
//         {
//           text: 'Terms',
//           href: getPermalink('/terms'),
//         },
//         {
//           text: 'Privacy policy',
//           href: getPermalink('/privacy'),
//         },
//       ],
//     },
//     {
//       text: 'Landing',
//       links: [
//         {
//           text: 'Lead Generation',
//           href: getPermalink('/landing/lead-generation'),
//         },
//         {
//           text: 'Long-form Sales',
//           href: getPermalink('/landing/sales'),
//         },
//         {
//           text: 'Click-Through',
//           href: getPermalink('/landing/click-through'),
//         },
//         {
//           text: 'Product Details (or Services)',
//           href: getPermalink('/landing/product'),
//         },
//         {
//           text: 'Coming Soon or Pre-Launch',
//           href: getPermalink('/landing/pre-launch'),
//         },
//         {
//           text: 'Subscription',
//           href: getPermalink('/landing/subscription'),
//         },
//       ],
//     },
//     {
//       text: 'Blog',
//       links: [
//         {
//           text: 'Blog List',
//           href: getBlogPermalink(),
//         },
//         {
//           text: 'Article',
//           href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
//         },
//         {
//           text: 'Article (with MDX)',
//           href: getPermalink('markdown-elements-demo-post', 'post'),
//         },
//         {
//           text: 'Category Page',
//           href: getPermalink('tutorials', 'category'),
//         },
//         {
//           text: 'Tag Page',
//           href: getPermalink('astro', 'tag'),
//         },
//       ],
//     },
//     {
//       text: 'Widgets',
//       href: '#',
//     },
//   ],
//   actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
// };

export const footerData = {
  links: [
    {
      title: 'Contact',
      links: [
        { text: 'Email', href: 'mailto:team@coincidence.network' },
        {
          text: 'Anonymous feedback',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSeYM5u7k2G3ynVysPw8CD2IsuOX92i5jAcIRbr0vu0yGWWwxQ/viewform?usp=sf_link',
        },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Matrix', href: 'https://matrix.to/#/#coincidence:matrix.org' },
        { text: 'Twitter', href: 'https://twitter.com/TeamCoincidence' },
        { text: 'Github', href: 'https://github.com/CoincidenceNetwork/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Manifesto', href: '/manifesto' },
        { text: 'About', href: '/manifesto' },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Terms of service', href: getPermalink('/terms') }],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/TeamCoincidence' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/CoincidenceNetwork/' },
  ],
  footNote: `
  Coincidence (c) 2023
  `,
};
