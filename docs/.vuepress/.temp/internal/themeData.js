export const themeData = {
  "logo": "/images/ic_moriafly.png",
  "navbar": [
    {
      "text": "椒盐音乐",
      "link": "/salt-player/"
    },
    {
      "text": "MAX 音频知识",
      "link": "/max/"
    },
    {
      "text": "作者介绍",
      "link": "/moriafly/"
    }
  ],
  "sidebar": {
    "/salt-player/": [
      {
        "text": "椒盐音乐",
        "children": [
          "/salt-player/README.md",
          "/salt-player/download.md",
          "/salt-player/help.md",
          "/salt-player/lyrics.md",
          "/salt-player/pro.md",
          "/salt-player/OPEN.md",
          "/salt-player/open_source.md",
          "/salt-player/privacy_policy.md"
        ]
      }
    ],
    "/max/": [
      {
        "text": "MAX 音频知识",
        "children": [
          "/max/README.md",
          "/max/Android.md",
          "/max/formats.md"
        ]
      }
    ],
    "/moriafly/": [
      {
        "text": "作者介绍",
        "children": [
          "/moriafly/README.md",
          "/moriafly/history.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
