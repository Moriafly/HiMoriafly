import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    // 站点配置
    base: '/HiMoriafly/',
    lang: 'en-US',
    title: 'Hi, Moriafly',
    description: '不要糖醋放椒盐',

    bundler:
        // specify bundler via environment variable
        process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),
        // process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

    // 主题和它的配置
    theme: defaultTheme({
        logo: '/images/ic_moriafly.png',

        navbar: [
            // NavbarItem
            {
                text: '椒盐音乐',
                link: '/salt-player/',
            },
            {
                text: '椒盐笔记',
                link: '/salt-note/',
            },
            {
              text: 'MAX 音频知识',
              link: '/max/',
            },
            {
                text: 'Android Dev',
                link: '/android-dev/',
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
                        '/salt-player/open_source.md',
                        '/salt-player/privacy_policy.md',
                        '/salt-player/terms_of_user.md',
                        '/salt-player/hearusy_spectrum.md'
                    ],
                },
            ],
            '/salt-note': [
                {
                    text: '椒盐笔记',
                    children: [
                        '/salt-note/README.md',
                        '/salt-note/terms_of_user.md',
                        '/salt-note/privacy_policy.md'
                    ],
                },
            ],
            '/max/': [
                {
                    text: 'MAX 音频知识',
                    children: [
                        '/max/README.md',
                        '/max/Android.md',
                        '/max/formats.md',
                        '/max/android_audio.md'
                    ],
                },
            ],
            '/android-dev/': [
                {
                    text: 'Android Dev',
                    children: [
                        '/android-dev/README.md',
                        '/android-dev/tips.md',
                        '/android-dev/MIUI-notification-bug.md',
                        '/android-dev/flyme-lyrics-noti.md',
                    ],
                }
            ],
            '/moriafly/': [
                {
                    text: '作者介绍',
                    children: [
                        '/moriafly/README.md',
                        '/moriafly/dev.md',
                        '/moriafly/history.md'
                    ],
                },
            ],
        },
    }),
    // plugins: [
    //     ['@vuepress/search', {
    //       searchMaxSuggestions: 10
    //     }]
    //   ]
})