// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Common Core Ontologies (CCO)',
  tagline: 'A suite of eleven ontologies which, collectively, comprise a mid-level ontology',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://commoncoreontology.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CommonCoreOntology', // Usually your GitHub org/user name.
  projectName: 'commoncoreontology.github.io', // Usually your repo name.
  trailingSlash: false,

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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          editUrl:
            'https://github.com/CommonCoreOntology/cco-webpage/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/CommonCoreOntology/cco-webpage/tree/main/website/',
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
      navbar: {
        title: 'CCO',
        logo: {
          alt: 'Common Core Ontologies Logo',
          src: 'img/cco-logo.png',
          srcDark: 'img/cco-logo.png',
        },
        items: [
          {
            to: '/docs/about/board',
            position: 'right',
            label: 'About',
            activeBasePath: '/docs/about',
          },
          {
            to: '/docs/support/office-hours',
            position: 'right',
            label: 'Support',
            activeBasePath: '/docs/support',
          },
          {
            to: '/docs/design-patterns/geospatial-tracking',
            position: 'right',
            label: 'Design Patterns',
            activeBasePath: '/docs/design-patterns',
          },
          {
            href: 'https://github.com/CommonCoreOntology/CommonCoreOntologies',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'NCOR',
            items: [
              {
                html: `
                  <p style="text-align: left; max-width: 300px; margin-top: -5px;">
                    National Center for Ontological Research (NCOR) is an international organization that promotes interdisciplinary research on the theory and application of ontologies.
                  </p>
                `,
              },
            ],
          },
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'About',
                to: '/docs/about/mission',
              },
              {
                label: 'Research',
                to: '/docs/about/publications',
              },
              {
                label: 'Events',
                to: '/docs/support/office-hours',
              },
              {
                label: 'People',
                to: '/docs/about/board',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Publications',
                to: '/docs/about/publications',
              },
              {
                label: 'Ontologies',
                to: '/docs/get-started',
              },
              {
                label: 'Tools',
                to: '/docs/support/useful-links',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CommonCoreOntology/CommonCoreOntologies',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                html: `
                  <div style="display: flex; align-items: flex-start; margin-bottom: 8px;">
                    <svg style="min-width: 20px; margin-right: 8px; margin-top: 4px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#adbac7"/>
                    </svg>
                    <span>
                      500 Seneca Street<br/>
                      Buffalo, NY 14204<br/>
                      United States
                    </span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <svg style="min-width: 20px; margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#adbac7"/>
                    </svg>
                    <a href="mailto:info@ncor.us">info@ncor.us</a>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} National Center for Ontological Research. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700;900&display=swap',
      type: 'text/css',
    },
  ],
};

export default config;
