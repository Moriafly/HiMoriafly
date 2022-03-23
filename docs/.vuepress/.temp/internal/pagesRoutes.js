import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-3444465e","/android-dev/",{"title":"Android Dev"},["/android-dev/index.html","/android-dev/README.md"]],
  ["v-b405a220","/android-dev/tips.html",{"title":"Tips"},["/android-dev/tips","/android-dev/tips.md"]],
  ["v-d939f39a","/dream-diary/dev.html",{"title":"3-20 / 开发版本 1"},["/dream-diary/dev","/dream-diary/dev.md"]],
  ["v-39d7c34f","/dream-diary/",{"title":"愿望日记"},["/dream-diary/index.html","/dream-diary/README.md"]],
  ["v-95c63da8","/moriafly/coroutine.html",{"title":"Coroutine"},["/moriafly/coroutine","/moriafly/coroutine.md"]],
  ["v-36d883b0","/moriafly/history.html",{"title":"历史"},["/moriafly/history","/moriafly/history.md"]],
  ["v-7174336b","/moriafly/",{"title":"作者介绍"},["/moriafly/index.html","/moriafly/README.md"]],
  ["v-890948a4","/max/Android.html",{"title":"Android"},["/max/Android","/max/Android.md"]],
  ["v-d6307a7e","/max/formats.html",{"title":"音频格式"},["/max/formats","/max/formats.md"]],
  ["v-7449d5c4","/max/",{"title":"Moriafly's Audio X"},["/max/index.html","/max/README.md"]],
  ["v-65b5623e","/salt-player/download.html",{"title":"下载"},["/salt-player/download","/salt-player/download.md"]],
  ["v-c65a4870","/salt-player/help.html",{"title":"使用帮助"},["/salt-player/help","/salt-player/help.md"]],
  ["v-7c3fd216","/salt-player/lyrics.html",{"title":"歌词"},["/salt-player/lyrics","/salt-player/lyrics.md"]],
  ["v-53938a5f","/salt-player/OPEN.html",{"title":"开放文档"},["/salt-player/OPEN","/salt-player/OPEN.md"]],
  ["v-6f09a8ce","/salt-player/open_source.html",{"title":"开源部分"},["/salt-player/open_source","/salt-player/open_source.md"]],
  ["v-5e2cd640","/salt-player/privacy_policy.html",{"title":"椒盐音乐隐私协议"},["/salt-player/privacy_policy","/salt-player/privacy_policy.md"]],
  ["v-db709288","/salt-player/pro.html",{"title":"椒盐音乐 Pro"},["/salt-player/pro","/salt-player/pro.md"]],
  ["v-665df470","/salt-player/",{"title":"椒盐音乐 - 数十万用户选择的 Android 本地音乐播放器"},["/salt-player/index.html","/salt-player/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
