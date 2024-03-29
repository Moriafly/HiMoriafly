# 使用帮助 FQA

[[toc]]

## 扫描歌曲不全？

1. 需要给椒盐音乐读取外部存储权限（确保，可以在系统应用设置查看是否授予此权限）。

2. 椒盐音乐会读取系统媒体库（com.android.providers.media）的音频文件，存储在 Alarms/、Audiobooks/、Music/、Notifications/、Podcasts/ 和 Ringtones/ 目录中。此外，系统还可以识别 Music/ 或 Movies/ 目录中的音频播放列表，以及 Recordings/ 目录中的录音。系统将这些文件添加到 MediaStore.Audio 表格中。录音目录在 Android 11（API 级别 30）及更低版本中不可用。若你的一些歌曲文件路径位于无法被扫描的文件夹下（以 . 开头的隐藏文件夹、包含 .nomedia 文件的文件夹、其他应用的私有目录），那么无法出现在椒盐音乐的歌曲列表中。建议移动音频文件到 Music 文件夹下或者你自建的文件夹（注意此文件夹不得以 . 开头，父目录和自身目录下不含 .nomedia 文件）；
              
3. 不被你手机内置的解码支持的格式（包含安卓提供的媒体解码和手机厂商提供的解码，请在椒盐音乐【设置】-【音频输出】-【此设备提供的媒体解码】查看具体支持的格式，如部分手机不支持扫描 APE、DSD 格式音频文件）将不会出现在列表中（虽然椒盐音乐可能支持此音频格式解码播放）。当然你可以用些格式转换工具转换音频格式使得让系统支持扫描此音乐。   

4. 特别说明一些流媒体应用（如某 Q、某云等），其 VIP 收费歌曲格式可能加密，此受到数字版权保护，椒盐音乐无法提供支持。
                            
5. 若以上方法未解决你的问题（确保正确尝试），那么可能是你的系统媒体库未重新扫描文件，可以尝试重新启动手机（注意不是软重启），或者下载椒盐音乐推荐的媒体重新扫描应用：https://foyou.lanzoui.com/inR3iuarmaj ，此软件会对全文件进行扫描来刷新系统媒体库。

## 音质问题

#### 椒盐音乐的音质会比其他软件更好或者更差吗？

软件保持和 [foobar2000](https://www.foobar2000.org/) 开发者一致观点，即当排除软件自身压低音质或添加音效处理的情况下软件输出后，若两个后续被系统处理和硬件行为一致，那么不存在任何音质差别。

> Q: Does foobar2000 sound better than other players?
>
> A: No. Most of “sound quality differences” people “hear” are placebo effect (at least with real music), as actual differences in produced sound data are below their noise floor (1 or 2 last bits in 16bit samples). foobar2000 has sound processing features such as software resampling or 24bit output on new high-end soundcards, but most of the other mainstream players are capable of doing the same by now.

关于 Android 平台的特殊性详见： [Android 音频输出（以椒盐音乐说明）](../max/android_audio.md) 

#### 我在某些时候感觉到椒盐音乐音质比一些软件更差？

- 特定情况，在某些可以通过支持高分辨率的通道或者独占 USB 设备的软件上，若你属于喜欢在非专业音频的移动平台听音乐的发烧友，你会听到一些差别，但是它不是很大的。这属于系统和硬件层面，如使用海贝、安桥等音乐软件。当然若你的设备无特定的限制，那么你不会听到差别，而更多是心理因素（在某些论坛被多次提及的 Android SRC，则属于大多数手机的限制，而非 Android 的固有特性）。

- 使用 OpenSL ES / AAudio 下会和一些仅使用 AudioTrack 的软件听感有差异，第一点：后者一般会通过系统的默认混音处理，这部分系统会应用一些音效链，如 MIUI 的音质音效（杜比、音质增强等），这些都属于音效范围，而与软件本身其实无太大关系，毕竟音乐软件最基本的就是负责解码。如一款解压软件，它不应该出现数据丢失的问题。第二点：在多数厂商下，OpenSL ES / AAudio 的音量会比 AudioTrack 小，这会让你感觉到音质问题，但这仅和响度相关，通常在音量更大的情况下，人们会听到更多的细节，这不具有对比性。

#### 我应该追求无损音乐吗？

说明补充来自：[https://thewelltemperedcomputer.com](https://thewelltemperedcomputer.com)

当然你能找到音源是最好的，但 320 kbps 的 MP3 并没有想象的那么差。

在音频论坛上，他们会以非常怀疑的态度告诉您，在盲听测试中，没有人能够听到原始 CD 质量和 MP3 之间的区别。
在典型的发烧友论坛上，他们会告诉您存在巨大差异，MP3 是一种耻辱。听起来真的很可怕。
现在发烧友和揭穿者有一个共同点，他们确实讨厌细微差别。

将 CD 翻录为无损格式并将其转换为例如 64、128、256 和 320 kbps MP3。

如果您没有听到 CD 质量和 64 kbps 之间的差异，请去看医生；
如果您没有听到与 128 kbps 的区别，请购买更好的设备；
如果您在 192 kbps 处没有听到差异，那么您并不孤单；
在 256 kbps 时，您可能会难以区别，而在 320 kbps 时，您可能会更加难以区别。

仍然在 320 kbps，您可以听到差异。这被称为**杀手样本**。
通常这是用 Kraftwerk 之类的电子设备制作的音乐，即使在 320 kbps 时，您也可以听到诸如预回声之类的人工制品。而在椒盐音乐的部分测试，多数用户无法区分 320 kbps MP3 与 CD 的差别。

## 常见问题

#### HQ、SQ 和 Hi-Res 标识是什么意思？

HQ 表示高品质音乐，通常指比特率大于等于 320 kbps 的音频；SQ 表示超高品质音乐；Hi-Res 表示高解析度音频，通常指高于 CD 格式（采样率 44.1位 / 位深 16 bit）的音频。常见可达到高解析的音频格式：FLAC / DSD (DFF / DSF) / WAV / AIFF 。

#### 部分 WAV 歌曲信息（元数据）无法读取？

部分 WAV 格式不支持元数据，安卓媒体库似乎不支持读取 WAV 音频外挂 ID3 标签信息。椒盐音乐 7.0.0-dev0423 开始支持 WAV 音频信息。

#### 此设备不支持均衡器是什么意思？

椒盐音乐会调用系统均衡器，此定制系统可能不含有内置均衡器应用。

#### 无歌曲封面或者歌曲显示的封面不是内嵌封面？

椒盐音乐 7.0 开始默认优先读取内嵌封面。

尝试使用其他音乐编辑软件更改添加封面图片。歌曲封面按照专辑封面显示，若歌曲专辑一致（专辑名相同且专辑艺术家相同），则会显示相同的封面。可以尝试在应用设置中开启忽略媒体库存储。

#### 没有音乐通知栏？

进入系统设置查看是否允许椒盐音乐通知，椒盐音乐的通知类别为 Salt Music Notification （已知 ColorOS 机型可能会默认关闭，需手动开启）。

#### 网络歌词、网络专辑信息不对？

无法保证完全正确，可以在设置中禁用相关功能（网络匹配不准确请勿向开发者反馈）。

#### 打开 QQ 后椒盐音乐被暂停？

此为 QQ 的短视频小世界乱请求音频焦点（用户不使用的时候也请求），暂时有两个方法解决：1. 关闭 QQ 的短视频功能；2. 关闭椒盐音乐的音频焦点功能。

## 系统适配相关

#### 小米 MIUI

- **小米妙播** 一般需要 MIUI 12 以上版本，提高椒盐音乐播放界面右上角按钮自动跳转，若无法开启等出现异常情况，请向 MIUI 反馈。

- **MIUI 小部件** 此需要小米审核且要企业资质，椒盐音乐暂时无法做到。

#### 华为鸿蒙

- **音乐控制中心** 华为通过白名单（一个记录了支持软件包名和版本号的 XML 文件）的控制，开发者无法理解华为这么做的意义，但是事实如此。

#### vivo OriginOS / Funtouch OS

- **Hi-Fi 模式** 部分 vivo 的设备支持高达 384 kHz 的音频输出，若支持列表不含椒盐音乐，你可以通过 adb 的方式添加对椒盐音乐的支持，输入 `settings put global game_support_hifi_list com.salt.music` 。

#### OPPO ColorOS

- **音乐通知** 一般会默认屏蔽椒盐音乐的通知权限，而连授权对话框也不会提供（需要和厂商合作），即便是 AOSP Android 13，媒体通知也是豁免的。那么只能用户到软件设置手动授予椒盐音乐通知权限。

#### 魅族 Flyme

- **OpenSL ES** 部分设备（多见于 16 系列）使用 OpenSL ES 输出可能会异常暂停。