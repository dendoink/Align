---
name: 2018-12-07-Translate
layout: post
title: "[译]Devtools tips day1 :The console dollars"
date:  2018-12-07
categories: Site
tags: [Tutorial,Chrome,Tools]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cly1fxy5vnqgpyj218g0tmtbn.jpg"
info: "本文是作者 [Tomek Sułkowski](https://twitter.com/sulco) 发布在 [medium](https://medium.com) 上的一个系列。"
---

> 本文同步连接[掘金](https://juejin.im/post/5c09a80151882521c81168a2)

## 特别声明
本文是作者 [Tomek Sułkowski](https://twitter.com/sulco) 发布在 [medium](https://medium.com) 上的一个系列。<br>
版权归原作者所有。<br>
译者在翻译前已经和作者沟通得到了翻译整个系列的许可。<br>
为了不影响大家阅读，获得许可的记录会放在本文的最后~


## 正文

在马上就要迎来假期的这24天里，我将会发布一系列短篇的文章，关于如何将开发工具使用得更加有意思，让我们一起来看看吧！

### 1. $0
在Chrome的`Elements`面板中，$0关联到当前我们选中的`html`节点。

理所当然，$1 是我们上一次选择的节点，$2是在那之前选择的节点，等等。一直到 $4

你可以用以上的补充参考来尝试一些相关的操作(例子: $1.appendChild($0))


![](https://user-gold-cdn.xitu.io/2018/12/7/16785c75b56d3a80?w=1332&h=802&f=gif&s=2504927)

### 2. `$` 和 `$$`

在你还没有在app中定义 `$`变量的情况下(例如 jQuery)，`$`在`console`中是冗长的函数`document.querySelector`的一个别名。

但是`$$` 能节省更多的时间，因为它不仅仅执行`document.QuerySelectorAll`并且返回的是一个节点的数组，而不是一个Node list

从本质上说:`Array.from(document.querySelectorAll('div')) === $$('div')`,但是`$$('div')`要简短太多了！


### 3. `$_`

`$_`变量是关联上次执行的结果。


![](https://user-gold-cdn.xitu.io/2018/12/7/16785d333e7c1d7f?w=1014&h=368&f=png&s=76376)

### 4. $i

在`Console Importer`的`Chrome`插件的帮助之下，你可以快速的在`console`中引入和把玩一些`npm`库。

直接运行例如 `$i('lodash')` 或者 `$i('moment') ` 然后在几秒钟之后，你就可以获取到`lodash / momentjs`了。

![](https://user-gold-cdn.xitu.io/2018/12/7/16785da0dea963fb?w=1332&h=802&f=gif&s=1817520)

这就是今天的内容啦，简短但是暖心~
惯例： 如果你从这里学到了一些新东西

→ 你可以点个赞再走嘛~<br>
→ 关注我的Twitter [Tomek Sułkowski](https://twitter.com/sulco)


## 其他系列

其他此系列的文章，马上就会翻译出来，到时会贴出对应的链接在此处。

- [【译】你不知道的Chrome调试工具技巧 第一天：console中的'$'](https://juejin.im/post/5c09a80151882521c81168a2)
- [【译】你不知道的Chrome调试工具技巧 第二天：copying & saving](https://juejin.im/post/5c0a0d5ff265da61117a1c75)

## 写在最后
如果你对我的翻译表示肯定，也可以关注我一波哦~
顺便我的开源项目，求一波 star→ [看这里, 美丽的博客系统](https://github.com/DendiSe7enGitHub/vue-blog-generater)


## 许可记录

![](https://user-gold-cdn.xitu.io/2018/12/7/16785bf236522479?w=648&h=675&f=png&s=103687)


