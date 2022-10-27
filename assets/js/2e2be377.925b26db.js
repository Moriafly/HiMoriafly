"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6597],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,y=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5805:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const a={},i="Moriafly \u53d1\u5c55\u8ba1\u5212",l={unversionedId:"moriafly/dev",id:"moriafly/dev",title:"Moriafly \u53d1\u5c55\u8ba1\u5212",description:"\u4ea7\u54c1\u8def\u7ebf\u56fe",source:"@site/docs/moriafly/dev.md",sourceDirName:"moriafly",slug:"/moriafly/dev",permalink:"/docs/moriafly/dev",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/moriafly/dev.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Coroutine",permalink:"/docs/moriafly/coroutine"},next:{title:"\u5386\u53f2",permalink:"/docs/moriafly/history"}},c={},u=[{value:"\u4ea7\u54c1\u8def\u7ebf\u56fe",id:"\u4ea7\u54c1\u8def\u7ebf\u56fe",level:2},{value:"\u6392\u671f",id:"\u6392\u671f",level:2},{value:"\u4ea7\u54c1\u95ee\u9898\u53cd\u9988",id:"\u4ea7\u54c1\u95ee\u9898\u53cd\u9988",level:2}],p={toc:u};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"moriafly-\u53d1\u5c55\u8ba1\u5212"},"Moriafly \u53d1\u5c55\u8ba1\u5212"),(0,o.kt)("h2",{id:"\u4ea7\u54c1\u8def\u7ebf\u56fe"},"\u4ea7\u54c1\u8def\u7ebf\u56fe"),(0,o.kt)("p",null,"\u7ecf\u8fc7 2022 \u5e74 4 \u6708\u4efd\u8c03\u6574\uff0cMoriafly \u8f6f\u4ef6\u4ea7\u54c1\u5927\u7248\u672c\u66f4\u65b0\u4f1a\u8fdb\u884c\u5185\u90e8\u7ec4\u8ba8\u8bba\u6d4b\u8bd5\u786e\u5b9a\u9884\u53d1\u5e03\u529f\u80fd\u548c\u89c4\u5212\uff08\u4e0d\u5bf9\u5916\u516c\u5e03\uff09\uff0c\u7ecf\u8fc7\u89c4\u5212\u540e\u8fdb\u884c\u516c\u5f00\u4e24\u8f6e\u6d4b\u8bd5\uff0c\u9762\u5411 QQ \u7fa4\u804a\u548c Telegram \u9891\u9053\uff08\u4e3b\u8981\u4e3a Telegram \u9891\u9053\uff09\u7684 alpha \u7248\u672c\u63a8\u9001\u548c\u9762\u5411\u66f4\u591a\u7528\u6237\u7684 beta \u7248\u672c\u63a8\u9001\u3002"),(0,o.kt)("h2",{id:"\u6392\u671f"},"\u6392\u671f"),(0,o.kt)("p",null,"\u8be6\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Moriafly/SaltPlayerSource/issues"},"Github/SaltPlayerSource")," \u4ed3\u5e93\u7b49\u3002"),(0,o.kt)("h2",{id:"\u4ea7\u54c1\u95ee\u9898\u53cd\u9988"},"\u4ea7\u54c1\u95ee\u9898\u53cd\u9988"),(0,o.kt)("p",null,"\u63a8\u8350\u6e20\u9053\uff1a\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Moriafly/SaltPlayerSource/issues"},"Github/SaltPlayerSource")," \u63d0\u4ea4\u53cd\u9988\uff0c\u4f5c\u8005\u5c1d\u8bd5\u4f1a\u89c4\u5219\u8ddf\u8fdb\u3002\u6216\u8005\u4f7f\u7528\u90ae\u7bb1 ",(0,o.kt)("a",{parentName:"p",href:"mailto:moriafly@163.com"},"moriafly@163.com")," / QQ 2456860197 \u8054\u7cfb\uff0c\u4f1a\u5c3d\u5feb\u4e0e\u4f60\u53d6\u5f97\u8054\u7cfb\u3002\uff08\u5076\u5c14\u4f5b\u7cfb\uff0c\u89c1\u8c05\uff09"))}f.isMDXComponent=!0}}]);