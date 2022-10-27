// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HiMoriafly',
  tagline: 'Dinosaurs are cool',
  url: 'https://moriafly.xyz',
  baseUrl: '/HiMoriafly/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ic_moriafly_ico.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Moriafly', // Usually your GitHub org/user name.
  projectName: 'HiMoriafly', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
      navbar: {
        title: 'HiMoriafly',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ic_moriafly_200.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: '文档',
          // },
          // {to: '/docs/moriafly', label: 'Moriafly', position: 'left'},
          { to: '/docs/salt-player/', label: '椒盐音乐', position: 'left' },
          { to: '/docs/salt-note/', label: '椒盐笔记', position: 'left' },
          { to: '/docs/max-audio/', label: 'MAX Audio', position: 'left' },
          // {to: '/about', label: 'about', position: 'right'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              { to: '/docs/salt-player/', label: '椒盐音乐' },
              { to: '/docs/salt-note/', label: '椒盐笔记' },
              { to: '/docs/android-dev/', label: 'Android Dev' },
              { to: '/docs/max-audio/', label: "Moriafly's Audio X" },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '不要糖醋放椒盐 QQ 频道',
                href: 'https://pd.qq.com/s/9ev310',
              },
              {
                label: '椒盐音乐 Telegram',
                href: 'https://t.me/saltplayerupdate',
              },
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: 'Moriafly',
                to: 'https://github.com/Moriafly',
              },
              {
                label: 'SaltPlayerSource',
                href: 'https://github.com/Moriafly/SaltPlayerSource',
              },
            ],
          },
        ],
        copyright: `Copyright © 2020-${new Date().getFullYear()} Moriafly`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;