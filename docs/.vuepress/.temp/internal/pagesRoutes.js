import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-7174336b","/moriafly/",{"title":"作者介绍"},["/moriafly/index.html","/moriafly/README.md"]],
  ["v-65b5623e","/salt-player/download.html",{"title":"下载"},["/salt-player/download","/salt-player/download.md"]],
  ["v-c65a4870","/salt-player/help.html",{"title":"使用帮助"},["/salt-player/help","/salt-player/help.md"]],
  ["v-53938a5f","/salt-player/OPEN.html",{"title":"开放文档"},["/salt-player/OPEN","/salt-player/OPEN.md"]],
  ["v-665df470","/salt-player/",{"title":"介绍"},["/salt-player/index.html","/salt-player/README.md"]],
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
