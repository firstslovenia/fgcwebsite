import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: '𝐹𝐼𝑅𝑆𝑇 Global Slovenia',
    tagline: 'To inspire and solve challenges through robotics',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://fgc.firsttech.si',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'firstslovenia', // Usually your GitHub org/user name.
    projectName: 'fgcwebsite', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'sl'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            sl: {
                label: 'Slovenščina',
            },
        },
    },

    presets: [
        [
            'classic',
            {
                docs: false,
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'past-teams',
                path: 'past-teams',
                routeBasePath: 'past-teams',
                sidebarPath: './sidebars.ts',
            },
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: '𝐹𝐼𝑅𝑆𝑇 Global Slovenia',
            logo: {
                alt: 'FIRST Slovenia Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: "docsVersion",
                    docsPluginId: "past-teams",
                    position: "left",
                    label: "Past teams",
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'projectsSidebar',
                //     position: 'left',
                //     label: 'Past teams',
                // },
                {
                    to: "sponsors",
                    position: "left",
                    label: "Sponsors",
                },
                {
                    to: "contact",
                    position: "left",
                    label: "Contact",
                },
                {
                    href: 'https://firsttech.si',
                    label: '𝐹𝐼𝑅𝑆𝑇 Tech Slovenia',
                    position: 'right',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Brand domains',
                    items: [
                        {
                            label: 'Maven Repository',
                            href: 'https://maven.firsttech.si/',
                            target: "_blank"
                        },
                        {
                            label: '𝐹𝐼𝑅𝑆𝑇 Tech Slovenia',
                            href: 'https://firsttech.si/',
                            target: "_blank",
                        },
                    ],
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/firstslovenia',
                            target: "_blank"
                        },
                        {
                            label: 'Instagram',
                            href: 'https://instagram.com/first.slovenia',
                            target: "_blank",
                        },
                        {
                            label: 'YouTube',
                            href: 'https://youtube.com/@FIRSTSlovenia',
                            target: "_blank",
                        },
                    ],
                },
                {
                    title: 'Contact us',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/MRuywyFjTQ',
                            target: "_blank",
                        },
                        {
                            label: 'PO Box',
                            to: 'contact',
                        },
                    ],
                },
            ],
            copyright: `Copyright © 2017-${new Date().getFullYear()} 𝐹𝐼𝑅𝑆𝑇 Slovenia. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
