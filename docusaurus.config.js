// @ts-check

const config = {
    title: '洛谷开放平台文档',
    favicon: 'img/favicon.ico',

    url: 'https://docs.lgapi.cn/',
    baseUrl: '/open/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        ['@docusaurus/preset-classic', {
            blog: false,
            pages: false,
            docs: {
                routeBasePath: '/'
            }
        }],
        ['redocusaurus', {
            specs: [
                { id: 'open', spec: './openapi/_api.yaml', route: '/openapi' }
            ]
        }]
    ],

    themeConfig: {
        navbar: {
            title: '洛谷开放平台',
            logo: {
                alt: 'Luogu',
                src: 'img/logo.png'
            },
            items: [{
                position: 'left',
                // type: 'doc',
                to: '/',
                activeBaseRegex: '^/open/?$',
                label: '介绍'
            }, {
                position: 'left',
                to: '/judge/',
                activeBaseRegex: '^/open/judge/',
                label: '评测能力'
            }, {
                position: 'right',
                to: '/openapi',
                label: 'OpenAPI'
            }],
        },
        footer: {
            style: 'dark',
            copyright: `
                Copyright © ${new Date().getFullYear()} 上海洛谷网络科技有限公司. Built with Docusaurus.<br />
                <small><a href="http://beian.miit.gov.cn" target="_blank">沪ICP备18008322号</a></small>
            `
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula')
        }
    },
};

module.exports = config;
