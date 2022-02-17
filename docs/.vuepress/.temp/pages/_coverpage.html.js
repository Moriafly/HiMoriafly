export const data = {
  "key": "v-38fd13d9",
  "path": "/_coverpage.html",
  "title": "测试",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1600674469000,
    "contributors": [
      {
        "name": "Moriafly",
        "email": "62319450+Moriafly@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "_coverpage.md"
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
