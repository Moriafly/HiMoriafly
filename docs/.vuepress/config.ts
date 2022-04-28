import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'

// .vuepress/config.js
module.exports = {
    chainWebpack(config) {
      config.externals([/^(vue|vue-router)$/])
    }
  }

export default defineUserConfig({
    // 站点配置
    base: '/HiMoriafly/',
    lang: 'en-US',
    title: 'Hi, Moriafly',
    description: '不要糖醋放椒盐',

    bundler:
        // specify bundler via environment variable
        viteBundler(),
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
                        '/salt-player/privacy_policy.md'
                    ],
                },
            ],
            '/max/': [
                {
                    text: 'MAX 音频知识',
                    children: [
                        '/max/README.md',
                        '/max/Android.md',
                        '/max/formats.md'
                    ],
                },
            ],
            '/android-dev/': [
                {
                    text: 'Android Dev',
                    children: [
                        '/android-dev/README.md',
                        '/android-dev/tips.md'
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