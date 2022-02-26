export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "/images/ic_moriafly.png",
    "footer": "Copyright © 2020-2022 Moriafly"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "椒盐音乐",
      "slug": "椒盐音乐",
      "children": []
    },
    {
      "level": 3,
      "title": "Dso Music",
      "slug": "dso-music",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1645775854000,
    "contributors": [
      {
        "name": "Moriafly",
        "email": "62319450+Moriafly@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "Moriafly",
        "email": "moriafly@163.com",
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
