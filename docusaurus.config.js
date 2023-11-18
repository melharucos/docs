// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SubServer',
  tagline: 'Правила и документация',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://subserver.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'melharucos', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
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
            'https://github.com/melharucos/docs/tree/master/',
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
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SubServer',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Вики',
          },
          {
            href: 'https://karta.subserver.ru',
            label: 'Карта',
            position: 'right',
          },
          {
            href: 'https://github.com/melharucos/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.twitch.tv/melharucos',
            label: 'Twitch',
            position: 'right',
          },
          {
            href: 'https://t.me/melhagram',
            label: 'Telegram',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Вики',
            items: [
              {
                label: 'Документация',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              {
                label: 'Discord',
                href: 'https://ds.subserver.ru',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/melhagram',
              },
              {
                label: 'ВКонтакте',
                href: 'https://vk.com/melharucos_group',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} ©  SubServer.ru. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
