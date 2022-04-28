<template><h1 id="歌词" tabindex="-1"><a class="header-anchor" href="#歌词" aria-hidden="true">#</a> 歌词</h1>
<p>椒盐音乐致力于为用户带来优秀的歌词体验，在使用上不输于一些流媒体平台。</p>
<h2 id="歌词来源" tabindex="-1"><a class="header-anchor" href="#歌词来源" aria-hidden="true">#</a> 歌词来源</h2>
<h4 id="内嵌歌词" tabindex="-1"><a class="header-anchor" href="#内嵌歌词" aria-hidden="true">#</a> 内嵌歌词</h4>
<p>ID3 标签嵌入歌词，暂时仅支持 MP3 和 FLAC 格式。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>仅支持 UTF-8 编码</p>
<p>若你有其他支持内嵌歌词的音频文件，暂时推荐使用 LRC 歌词文件</p>
<p>问题跟踪：<a href="https://github.com/Moriafly/SaltPlayerSource/issues/105" target="_blank" rel="noopener noreferrer">https://github.com/Moriafly/SaltPlayerSource/issues/105<ExternalLinkIcon/></a></p>
</div>
<h4 id="lrc-歌词" tabindex="-1"><a class="header-anchor" href="#lrc-歌词" aria-hidden="true">#</a> LRC 歌词</h4>
<p>.lrc 歌词文件，需要歌词文件和歌曲同文件名。支持多种文本编码。</p>
<h4 id="网络歌词" tabindex="-1"><a class="header-anchor" href="#网络歌词" aria-hidden="true">#</a> 网络歌词</h4>
<p>当椒盐音乐无法获取内嵌和 LRC 歌词后会尝试获取网络歌词。网络歌词可能无法完全正确匹配，你可以在设置里关闭它。</p>
<h2 id="歌词体验" tabindex="-1"><a class="header-anchor" href="#歌词体验" aria-hidden="true">#</a> 歌词体验</h2>
<h4 id="歌词界面" tabindex="-1"><a class="header-anchor" href="#歌词界面" aria-hidden="true">#</a> 歌词界面</h4>
<p>椒盐音乐歌词界面位于播放界面的右边，竖屏下右滑即可。</p>
<h4 id="桌面歌词" tabindex="-1"><a class="header-anchor" href="#桌面歌词" aria-hidden="true">#</a> 桌面歌词</h4>
<p>椒盐音乐支持桌面歌词，需要提供悬浮窗权限。</p>
<h2 id="相关问题解答" tabindex="-1"><a class="header-anchor" href="#相关问题解答" aria-hidden="true">#</a> 相关问题解答</h2>
<h4 id="歌词的获取逻辑是怎么样的" tabindex="-1"><a class="header-anchor" href="#歌词的获取逻辑是怎么样的" aria-hidden="true">#</a> 歌词的获取逻辑是怎么样的？</h4>
<p>前提：确保椒盐音乐拥有读取外部存储的权限。</p>
<p>椒盐音乐会先尝试获取歌曲文件的内嵌歌词（仅当文件格式为 MP3 或 FLAC），且需要内嵌歌词的编码格式为 UTF-8（更改编码可以使用音乐标签的编码修复功能）。若无法获取内嵌则尝试获取同目录下和歌曲文件同名的 LRC（拓展名为 .lrc） 文件，支持多种编码格式。最后尝试获取网络歌词，注意网络歌词匹配无法做到 100% 准确（受匹配源和本地音乐内部元数据标签影响），会持续优化，请勿因为网络匹配错误反馈。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>网络歌曲服务可能仅在国内提供。</p>
</div>
<h4 id="歌词来源含义" tabindex="-1"><a class="header-anchor" href="#歌词来源含义" aria-hidden="true">#</a> 歌词来源含义</h4>
<p>EMBEDDED（或 JAUDIOTAG 等）：内嵌歌词</p>
<p>LRC FILE（后接编码歌词）：LRC 文件歌词</p>
<p>INTERENT：网络歌词</p>
<p>UNKNOWN：未知歌词来源（保留选项）</p>
<h4 id="歌词翻译" tabindex="-1"><a class="header-anchor" href="#歌词翻译" aria-hidden="true">#</a> 歌词翻译</h4>
<p>椒盐音乐支持同时间戳翻译（3.6.0 开始支持网络歌词翻译，若有），如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[00:10:15]我爱你
[00:10:15]I love you
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如上翻译在歌词界面显示为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>我爱你
I love you
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但是音乐标签默认可能是这样的：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[00:10:15]我爱你 I love you
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>请在音乐标签应用中，点击设置 - 下载翻译 - 歌词格式，修改成为你喜欢的。</p>
<h4 id="时间戳格式说明" tabindex="-1"><a class="header-anchor" href="#时间戳格式说明" aria-hidden="true">#</a> 时间戳格式说明</h4>
<p>歌词时间戳只支持一至六位毫秒格式（3.6.0 版本前只支持二或三位），如以下类型都是支持的：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[00:28.55]雪花飘 青山遇绝壁
[00:28.6]雪花飘 青山遇绝壁
[00:28.54449]雪花飘 青山遇绝壁
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注意时间戳的格式，最后的分隔是 “ . ” （点）而不是 “ : ” （冒号）。</p>
<h4 id="已配置-lrc-歌词为什么不显示" tabindex="-1"><a class="header-anchor" href="#已配置-lrc-歌词为什么不显示" aria-hidden="true">#</a> 已配置 lrc 歌词为什么不显示？</h4>
<p>lrc 文件必须和歌曲文件同名且在同一个文件夹下。且注意，若你配置了内嵌歌词（MP3、FLAC 格式），且此歌词格式不符合需求（无时间戳标识），那么页面会显示暂无歌词，标识为 EMBEDDED（或 JAUDIOTAG 等）。</p>
</template>
