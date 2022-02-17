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
                        '/salt-player/OPEN.md'
                    ],
                },
            ],
            '/reference/': [
                {
                    text: 'Reference',
                    children: ['/reference/cli.md', '/reference/config.md'],
                },
            ],
        },
    },
})