// @ts-check
// Docusaurus configuration

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'David MacVicar',
  tagline: 'Knowledge Management & Technical Writing',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xmacvicar.github.io',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'xmacvicar',
  projectName: 'xmacvicar.github.io',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/xmacvicar/portfolio/tree/main/',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'writing',
          showReadingTime: true,
          blogTitle: 'Writing',
          blogDescription: 'Essays on knowledge management, content governance, and technical writing.',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // Second docs plugin instance for Case Studies
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'case-studies',
        path: 'case-studies',
        routeBasePath: 'case-studies',
        sidebarPath: require.resolve('./sidebars-case-studies.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'David MacVicar',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Sample Docs',
          },
          {
            to: '/case-studies/intro',
            label: 'Case Studies',
            position: 'left',
          },
          {to: '/writing', label: 'Writing', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/xmacvicar',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Portfolio',
            items: [
              {label: 'Sample Docs', to: '/docs/intro'},
              {label: 'Case Studies', to: '/case-studies/intro'},
              {label: 'Writing', to: '/writing'},
            ],
          },
          {
            title: 'Connect',
            items: [
              {label: 'GitHub', href: 'https://github.com/xmacvicar'},
              {label: 'LinkedIn', href: 'https://www.linkedin.com/in/davidmacvicar/'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} David MacVicar. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
