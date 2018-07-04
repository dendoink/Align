---
layout: post
title:  "W3C WebAPI EventLoop"
date:   2018-05-30
desc: "在路上"
keywords: "W3C,translate,eventloop,WebAPI,html5,Jekyll,gh-pages,website,blog"
categories: Html
tags: [HTML5,Translate]
name: 2018-05-30-EventLoop
coverimg: "http://ww1.sinaimg.cn/large/88b26e1cgy1frtsa3wqgmj20sg0lcq9n.jpg"
info: "类似于开始这样的文章我已经写过了很多篇,那为什么会有了这篇博文呢.
因为这也真的是一个新的值得记录的开始."
---

:::tip
本文是根据[W3C最新WebAPI标准](https://www.w3.org/TR/2017/REC-html52-20171214/webappapis.html#event-loops)翻译而来。部分内容有作者自己的理解。
禁止用于商业用途，转载请注明出处。
:::

# 目录
---
<!-- TOC -->

- [目录](#目录)
- [Event loops](#event-loops)
    - [定义](#定义)
        - [browsing contexts event loop](#browsing-contexts-event-loop)
        - [workers event loop](#workers-event-loop)
        - [Task queues & event loop](#task-queues--event-loop)
    - [处理过程模型](#处理过程模型)

<!-- /TOC -->

# Event loops
- - - -

## 定义

为了协调事件，用户交互，脚本，渲染，网络系统之类的。用户代理必须用`event loop`来描述。有两种`event loop`机制，在browsing contexts环境中的和在workers环境中的的。

### browsing contexts event loop
在每一个用户代理中，至少要有一个browsing context `event loop`，并且最多只能有一个unit of related similar-origin browsing contexts `event loop`。

:::tip
[browsing contest](https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context)是文档对象被用来展示给用户的环境。(现在通常是一个标签页，但也可能是页面内的一个window或者frame)
[Web Workers](https://www.w3.org/TR/workers/#worker))就是一个运行在后台的JavaScript线程，不会影响页面的响应
当存在不止一个unit of related browsing contexts 对应的 `event loop`的时候，冲突将会发生。
:::

当存在于那个group中的browsing context 被导航到时，会导致他将从一个similar-origin browsing contexts 中切换到另一个类似的similar-origin browsing contexts 。
当前的规范不会现在讲述怎样来解决这样的冲突  

:::warning
一个`browsing context event loop`至少要有一个对应的浏览器上下文环境，如果它对应的上下文环境都已经没有了，那`event loop`也结束了。
:::

### workers event loop
相对于`browsing context event loop`来说，`workers event loop`会简单很多.
每一个`workers`有一个`event loop`并且`worker processing model `来管理`event loop`的生命周期

### Task queues & event loop
一个`event loop`有一个或者多个任务队列，一个任务队列是一系列命令的列表，用来执行类似于以下类型工作的计算:

* Events
在特殊的`EventTarget`对象中调用一个Event对象总是由专用的任务来完成。
(并非所有的events都是通过任务队列来调用的，有一些是通过其他的任务来调用)
* Parsing
HTML parser 令牌化一个或者多个字节，然后加工一些`resulting tokens`，是一个典型的任务。
* Callbacks
调用一个回调，经常是由专用的任务来完成的。
* Using a resource
当算法逻辑请求资源，如果是非阻塞式的请求，一旦资源(全部或者部分)能够被请求到。
随后会通过任务，开始对资源的加工。
* Reacting to DOM manipulation
* 当一些元素元素被插入到文档中时，它拥有触发响应DOM操作的任务。

在`browsing context event loop`中，每个任务都与一个`Document `相关联:

1.当任务被加入到一个`context of an element` 的队列中，那么与之关联的Document是文档元素节点
2.当任务被加入到`context of a browsing context`的队列中，那么这个任务被加入到了这个`browsing context`中当前状态为`active `的`document`对象中。
3.当任务被加到脚本中，那么与之对应的`document`其实是由脚本的`setting object`负责的文档中。

`Task `被创建的目的是进入到其对应的`event loop`:`event loop`为这个`task`关联的`Document`或`Worker`处理任务。

当一个用户代理把任务排到队列中时，他必须把拿到的`task`加入到相关联的`event loop`其中的一个任务队列中。
每个任务都被定义为来自于特殊的任务来源。从一个任务来源来的所有任务，都会被加入到对应的`event loop`中，同时也会被加入到相同的任务队列中。但是不同来源的任务会被加入到不同的任务队列中。

:::tip
例如:  
一个用户代理有一个`task`队列，专门针对的是鼠标和键盘的事件(用户交互事件)。  
其他的所有事件都是走另一个task队列，那么这个用户代理在3/4的时间里，给与鼠标键盘事件超过其他事件上的优先权，保持鼠标键盘的接口的响应但并不是完全不响应除此之外的其他的任务队列，并且绝对不会颠倒顺序的来处理任何一个任务来源  
:::

每一个`event loop`都有一个`running task`。 初始状态下，这个`task `为空，这个被用来处理重入(reentrancy)。

并且每一个`event loop`都有一个`performing a microtask checkpoint flag`(译者理解为对`microtask `的一个标记)，这个标记被初始化为`false`，它用来预防来自于`performing a microtask checkpoint`运算的重入调用。

换句话说，在一个`performing a microtask checkpoint`调用未完成之前。

`performing a microtask checkpoint flag`的值被设置为`true` 而在此时，如果再进行调用，则会被拒绝。


## 处理过程模型

当下面这些步骤存在时，一个`event loop`必须一直按照这些步骤保持执行：

* 选取在`event loop`的`task queues`中存在时间最久的一个`task`，如果已经选取过的话，那就忽略刚刚说的步骤。
为什么我们可能需要一个这样的步骤呢？因为在上下文环境为`browsing context`的`event loop`中，与`Document`对应的`tasks`并不是完全活跃的。用户代理可能选择任意一个`task queue`,当没有`task`可以选择的时候，那么下一步，我们将跳转到下面的`Microtasks step`。

* 将上一步中我们选出的来的`task`设置为`event loop`的`running task`

* *Run*: 执行选中的`task`。

* 执行完刚刚选中的`task`之后，将`event loop`的`running task`设置为`null`。

* 将我们在`Run`这个步骤中执行完的`task`，从它所在的`task queue`移出。

* *`Microtasks`*:执行一个`microtasks checkpoint`

* *`更新渲染`*: 

:::tip
当`event loop `为 `browsing context event loop`时，执行下面的步骤：
1.将now设置为`Performance object`的now()方法的返回值
:::


:::warning
本文版权归译者所有。禁止用于商业用途，转载请注明出处。
:::