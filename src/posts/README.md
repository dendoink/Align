---
layout: post
title:  "README?"
date:   2017-12-21
desc: "git 使用简介"
keywords: "Tutorial,Jekyll,gh-pages,website,blog,Git"
categories: HTML5
tags: [Git]
name: README
coverimg: "https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/salt-lake.jpg"
info: "为了避免将多线程的复杂性呈现在网络开发者面前，HTML和DOM API被设计成这样:没有脚本可以察觉到任何其他同时执行的脚本。即便是通过workers接口。
这样设计的意图是:所有实现的行为，可以被认为是在浏览的上下文环境中，完全序列化的脚本执行"
---
- [JS代码高亮](#js代码高亮)
- [标注](#标注)
- [标题](#标题)
- [H1H1H1H1H1H1H1](#h1h1h1h1h1h1h1)
    - [H2H2H2H2H2H2](#h2h2h2h2h2h2)
        - [H3H3H3H3H3H3H3](#h3h3h3h3h3h3h3)
            - [H4H4H4H4H4H4H4](#h4h4h4h4h4h4h4)
                - [H5H5H5H5H5H5H5](#h5h5h5h5h5h5h5)
                    - [H6H6H6H6H6H6H6](#h6h6h6h6h6h6h6)
        - [代码高亮](#代码高亮)
    - [无序列表](#无序列表)
    - [有序列表](#有序列表)
    - [图片](#图片)
    - [链接](#链接)
    - [说明](#说明)
    - [表格](#表格)
## JS代码高亮
```js
import { Panel， MediaBox } from 'we-vue'
Vue.component(Panel.name, Panel)
Vue.component(MediaBox.name, MediaBox)
```

## 标注

:::warning
media-box 仅与 panel 结合使用
:::

:::danger
media-box 仅与 panel 结合使用
:::

:::tip
media-box 仅与 panel 结合使用
:::

## 标题
# H1H1H1H1H1H1H1
## H2H2H2H2H2H2
### H3H3H3H3H3H3H3
#### H4H4H4H4H4H4H4
##### H5H5H5H5H5H5H5
###### H6H6H6H6H6H6H6

### 代码高亮

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```


## 无序列表

- panel
- media-box

## 有序列表

1. a
2. b

## 图片

![](http://ww1.sinaimg.cn/large/88b26e1cgy1frpr39hxhnj20sg0lctha.jpg)

## 链接
[这是一个链接](http://ww1.sinaimg.cn/large/88b26e1cgy1frpr39hxhnj20sg0lctha.jpg)

## 表格
|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| type  | String  |  类型   |  'appmsg', 'small-appmsg'    |   'appmsg'     |
| thumb  | String  |  图标图片地址   |      |        |
| title  | String  |  标题   |      |        |
| description  | String  |  描述   |      |        |
| to  | String 或 Object  |  vue-router 跳转地址   |      |        |
| url  | String  |  url 跳转地址   |      |        |

