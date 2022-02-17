export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "/images/ic_moriafly.png",
    "actions": [
      {
        "text": "椒盐音乐",
        "link": "/salt-player/",
        "type": "primary"
      },
      {
        "text": "Github",
        "link": "https://github.com/Moriafly",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "作者介绍",
        "details": "一条没有梦想的咸鱼"
      },
      {
        "title": "邮箱",
        "details": "业务来往请通过邮箱 Moriafly@163.com ~ 作者会尽快与你取得联系"
      },
      {
        "title": "QQ",
        "details": "偶尔断线的作者 QQ 2456860197"
      }
    ],
    "footer": "Copyright © 2020-2022 Moriafly"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1645081832000,
    "contributors": [
      {
        "name": "Moriafly",
        "email": "62319450+Moriafly@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
