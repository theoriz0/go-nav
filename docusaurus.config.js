// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Go Nav',
  tagline: 'Personal notes and links about Golang',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://go-nav.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'theoriz0', // Usually your GitHub org/user name.
  projectName: 'go-nav', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
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
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Go Nav',
        logo: {
          alt: 'Go Nav Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            "type": "docSidebar",
            "sidebarId": "inbox",
            "position": "left",
            "label": "Inbox"
          },
          {
            "type": "dropdown",
            "label": "Dropdown1",
            "position": "left",
            "items": [
              {
                "label": "Facebook",
                "href": "https://www.facebook.com"
              },
              {
                "type": "doc",
                "label": "Social",
                "docId": "tutorial/tutorial-basics/congratulations"
              }
            ]
          },
          {
            "type": "dropdown",
            "label": "Dropdown2",
            "position": "left",
            "items": [
              {
                "label": "Facebook",
                "href": "https://www.facebook.com"
              },
              {
                "type": "doc",
                "label": "Social",
                "docId": "tutorial/tutorial-basics/congratulations"
              }
            ]
          },
          {
            "to": "/blog",
            "label": "Blog",
            "position": "right"
          },
          {
            "href": "https://github.com/theoriz0/go-nav",
            "label": "GitHub",
            "position": "right"
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/tutorial/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Go Nav. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
