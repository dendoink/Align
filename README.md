# Vue-Blog-Generater

> A beautiful blog generator

### 项目说明

[->本站链接](http://www.dendoink.com/#/post/2018-11-14-Life?index=0)<br>
[->掘金](https://juejin.im/post/5b53f9c4e51d4513ee6dcd3f)<br>
[->segmentfault](https://segmentfault.com/a/1190000015721550?_ea=5230379)<br>

### 推送配置

1. dist推送:在目录`@/config/index.js`中配置如下字段:

```javascript
module.exports = {
  // commit messgae
  commitMessage: process.argv.length === 3 ? `${process.argv[2]}:[${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}]` : `AutoUpdate:[${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}]`,
  // 编译后的目录 对应的远程仓库，默认你有配置过远程仓库的SSH key
  distOriginSSh:'git@github.com:xxx/xxx-blog-xxx.git',
}
```
> 配置好之后，`npm run build` 将会把`dist`下的代码推送到地址`git@github.com:xxx/xxx-blog-xxx.git`对应的仓库中


2. 主仓库推送: 未提供配置字段，当前仓库默认为主仓库

3. 服务器配置:自动拉取更新后的代码[待补充]


### 快速开始

```bash
# install dependencies
yarn

# 调试
yarn dev

# 打包推送代码到对应仓库
yarn build
```


### Blog 使用的 Markdown 语法说明

[->语法说明链接](https://github.com/DendiSe7enGitHub/vue-blog-generater/blob/master/markdown.md)

### 开发中的功能

<table>
  <tr>
    <th>功能</th>
    <th>进度</th>
  </tr>
  <tr>
    <td>Resume简历页面</td>
    <td>开发完成</td>
  </tr>
  <tr>
    <td>评论系统</td>
    <td>2018-12-06完成:已接入[utteranc](https://utteranc.es/)</td>
  </tr>
  <tr>
    <td>友链</td>
    <td>样式和形式待定</td>
  </tr>
  <tr>
    <td>Reward页</td>
    <td>样式和形式待定</td>
  </tr>
  <tr>
    <td>自动化部署</td>
    <td>2018-12-05完成:在npm run build 之后，会自动推送到对应仓库，结合对应的托管平台的hooks，已经实现本地编译->远程服务器更新</td>
  </tr>
</table>

有更多好的建议，欢迎 pr 或者 issue，这个博客生成系统还有许多的不足，会一直维护下去的。<br>

大家可以在我的 [掘金账号](https://juejin.im/user/585a2f52128fe10069ba1b95)找到我，也欢迎邮件`dendise7en@gmail.com`与我沟通
