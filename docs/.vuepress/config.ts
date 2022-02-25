import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    base: '/HiMoriafly/',
    lang: 'en-US',
    title: 'Hi, Moriafly',
    description: '不要糖醋放椒盐 🕊️🐯🍨',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/ic_moriafly.png',

        navbar: [
            // NavbarItem
            {
              text: '椒盐音乐',
              link: '/salt-player/',
            },
            {
                text: '作者介绍',
                link: '/moriafly/',
            }
            // NavbarGroup
            // {
            //   text: 'Group',
            //   children: ['/group/foo.md', '/group/bar.md'],
            // },
            // // 字符串 - 页面文件路径
            // '/bar/README.md',
          ],

        // 侧边栏对象
        // 不同子路径下的页面会使用不同的侧边栏
        sidebar: {
            '/salt-player/': [
                {
                    text: '椒盐音乐',
                    children: [
                        '/salt-player/README.md',
                        '/salt-player/download.md',
                        '/salt-player/help.md',
                        '/salt-player/lyrics.md',
                        '/salt-player/pro.md',
                        '/salt-player/OPEN.md',
                        '/salt-player/open_source.md'
                    ],
                },
            ],
            '/moriafly/': [
                {
                    text: '作者介绍',
                    children: [
                        '/moriafly/README.md',
                        '/moriafly/history.md'
                    ],
                },
            ],
        },
    },
    // plugins: [
    //     ['@vuepress/search', {
    //       searchMaxSuggestions: 10
    //     }]
    //   ]
})