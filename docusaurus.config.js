// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ReentryGuide GR',
  tagline: 'Your Local Resource Navigator',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ReentryGuide-GR.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ReentryGuide-GR', // Usually your GitHub org/user name.
  projectName: 'ReentryGuide-GR.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
          className: 'navbar__logo',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/ReentryGuide-GR',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.reentryreimagined.org/',
            label: 'Reentry Reimagined',
            position: 'right',
          },
          // {
          //   type: 'html',
          //   position: 'left',
          //   value: `
          //     <a href="https://github.com/ReentryGuide-GR" style="padding-left: 11px" target="_blank" rel="noopener noreferrer">
          //       <img src="img/reentry_reimagined_logo.png" alt="Reentry Reimagined Logo" style="height: 50px;"/>
          //     </a>
          //   `,
          // },
        ],
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                html: `
                <div style="margin-top:-20px; display: flex; flex-direction: column; align-items: flex-start; text-align: left;">
                  <img src="/img/reentry_reimagined_logo_white.png" alt="Reentry Reimagined Logo" style="height: 70px; width: auto; margin-bottom: 10px;" />
                  <span>A project by</br><a href="https://www.reentryreimagined.org/" style="color: inherit; text-decoration: underline;">Reentry Reimagined</a></span>
                </div>
                `,
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Developer Guide',
                to: 'docs/category/developer-guide',
              },
            ],
          },
          // {
          //   title: 'Organization',
          //   items: [
          //     {
          //       label: 'Reentry Reimagined',
          //       href: 'https://www.reentryreimagined.org/',
          //     },
          //   ],
          // },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/ReentryGuide-GR',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy-policy',
              },
            ],
          },
        ],
        copyright: ` © ${new Date().getFullYear()} by Reentry Reimagined. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        disableSwitch: true, // Disable the theme toggle switch
      },
    }),

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800;900&family=Red+Hat+Display:wght@400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],
};

export default config;
