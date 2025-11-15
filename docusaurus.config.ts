import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as PrismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default {
    title: '洛谷开放平台文档',
    favicon: 'img/favicon.ico',

    url: 'https://docs.lgapi.cn/',
    baseUrl: '/open/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans']
    },

    markdown: {
        mdx1Compat: {
            comments: false,
            admonitions: false,
            headingIds: true /* until they provide a new syntax */
        }
    },

    presets: [
        ['@docusaurus/preset-classic', {
            blog: false,
            pages: false,
            docs: {
                sidebarPath: './sidebars.ts',
                routeBasePath: '/',
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex]
            },
            theme: {
                customCss: './src/style.css'
            }
        } satisfies Preset.Options],
        /*['redocusaurus', {
            specs: [
                { id: 'open', spec: './openapi/_api.yaml', route: '/openapi' }
            ]
        } satisfies Preset.Options]*/ // TODO: replacement
    ],

    stylesheets: [{
        href: 'https://cdn.luogu.com.cn/assets/katex:0.16.7/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-3UiQGuEI4TTMaFmGIZumfRPtfKQ3trwQE2JgosJxCnGmQpL/lJdjpcHkaaFwHlcI',
        crossorigin: 'anonymous',
    }],

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
            theme: PrismThemes.github,
            darkTheme: PrismThemes.dracula
        }
    } satisfies Preset.ThemeConfig
} satisfies Config;