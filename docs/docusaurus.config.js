module.exports = {
    title: 'Double-double',
    tagline: 'Pure double-double precision functions *with strict error bounds*',
    url: 'https://florissteenkamp.github.io/double-double/',
    baseUrl: '/double-double/',
    favicon: 'img/favicon.png',
    organizationName: 'florissteenkamp',
    projectName: 'double-double',
    themeConfig: {
        navbar: {
            title: 'Double-double',
            logo: {
                alt: 'Double-double Logo',
                src: 'img/favicon.png',
            },
            links: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                //{to: 'blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/FlorisSteenkamp/double-double',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Quick Links',
                    items: [
                    {
                        label: 'Docs',
                        to: 'docs/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/FlorisSteenkamp/double-double',
                    },
                    ],
                },
                /*
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
                */
               /*
                {
                    title: 'More',
                    items: [
                    {
                        label: 'Blog',
                        to: 'blog',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/facebook/docusaurus',
                    },
                    ],
                },
                */
            ],
            copyright: `Copyright © ${new Date().getFullYear()} - Built with Docusaurus.`,
        },
        },
        presets: [
        [
            '@docusaurus/preset-classic',
            {
            docs: {
                homePageId: 'index',
                sidebarPath: require.resolve('./sidebars.js'),
                //editUrl: 'https://github.com/FlorisSteenkamp/double-double',
            },
            blog: {
                showReadingTime: true,
                //editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
            },
            theme: {
                customCss: require.resolve('./src/css/custom.css'),
            },
            },
        ],
    ],
};
