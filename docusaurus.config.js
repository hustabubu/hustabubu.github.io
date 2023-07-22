// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

//  引入 KaTex 插件
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '臭皮囊的个人网站',
  tagline: '不仅仅是笔记',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hustabubu.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hustabubu', // Usually your GitHub org/user name.
  projectName: 'hustabubu.github.io', // Usually your repo name.仓库名

  // 上传代码时，两个注意事项：
  // 1. deploymentBranch 来制定分支！
  // 2. 还需要在本地电脑配置一个环境变量：GIT_USER:github的用户名
  deploymentBranch:"gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
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
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 在 docs 中添加使用 KaTex
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 在 blog 中添加使用 KaTex
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
      //此处是导航栏，第一个是首页，后面的 item 中，一个对象对应于一栏
      image: 'img/docusaurus-social-card.jpg',
      navbar: { 
        title: '首页',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [  
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '笔记',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {to: '/blog', label: '休闲', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // 此处是页脚
      footer: {
        style: 'dark',    // 主题颜色
        links: [          // 有几个对象就有几栏
          {
            title: '文档',
            items: [      // 几个item，就有几项。三个属性：label,to,herf
              {
                label: '笔记',
                to: '/docs',
              },
            ],
          },
          {
            title: '常用网站',
            items: [
              {
                label: '李立超个人网站',
                href: 'https://www.lilichao.com/',
              },
              {
                label: '白月黑羽',
                href: 'https://www.byhy.net/',
              },
              {
                label: 'MDN',
                href: 'https://developer.mozilla.org/zh-CN/',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/zh-CN/',
              },              
              {
                label: 'unDraw',
                href: 'https://undraw.co/',
              },
              {
                label: 'iconfont',
                href: 'https://www.iconfont.cn/',
              },
              {
                label: 'Vant Weapp',
                href: 'https://youzan.github.io/vant-weapp/#/home',
              },
              {
                label: 'SheetJS',
                href: 'https://docs.sheetjs.com/docs/',
              },
            ],
          },
          {
            title: '更多',
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
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    // add mermaid (changed by me)
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],

    // 添加 KaTex 的样式
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],

};

module.exports = config;
