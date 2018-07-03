const path = require('path')
const jdown = require('jdown')
const fs = require('fs')
const rm = require('rimraf')
const { genRoutesFile } = require('./routegen')
// 先移除存放博客信息的data.js文件
module.exports = async function getData() {
  rm(path.resolve(__dirname, '../src/utils/data.js'), err => {
    if (err) throw err
    // 移除成功后，读取博客目录下的文章信息
    jdown(path.resolve(__dirname, customDir = '../src/posts/')).then(blogList => {
      // 用来存放所有文章信息的数组
      var posts = [];
      var routes = [];
      // 遍历把每一篇文章的关键信息存到对象中
      for (postName in blogList) {
        var { ...post } = blogList[postName];
        var date = new Date(`${post.date}`.replace(/-/g, "/"));
        var currentDate = new Date();
        var days = currentDate.getTime() - date.getTime();
        post.daysAgo = parseInt(days / (1000 * 60 * 60 * 24));
        post.contents = ''
        // 当文章的内容不为空时，添加文章对象到数组中
        if (blogList[postName].content !== '') {
          var route = {};
          posts.push(post);
          route.name = post.name;
          route.pagePath = `/${post.categories}/${route.name}`;
          routes.push(route);
          var origin = {
            name: post.name,
            pagePath: `/post/${post.name}`
          }
          routes.push(origin);
          for (var tag of post.tags) {
            var route = {}
            route.name = post.name;
            if(tag !== post.categories){
              route.pagePath = `/${tag}/${route.name}`;
              routes.push(route);
            }
          }
        }
      }
      return {
        posts: posts,
        routes: routes
      };
    }).then(results => {
      genRoutesFile(results.routes).then(routesCode => {
        rm(path.resolve(__dirname, '../src/router/page.js'), err => {
          if (err) throw err
          fs.writeFile(path.resolve(__dirname, '../src/router/page.js'), routesCode, { 'flag': 'a' }, function (err) {
            if (err) {
              return console.error(err);
            }
          });
        })
      });
      // 将数组对象转成json
      let postsStr = `export let postData = '${JSON.stringify(results.posts)}'`
      // 将数组对象存入data.js
      fs.writeFile(path.resolve(__dirname, '../src/utils/data.js'), postsStr, { 'flag': 'a' }, function (err) {
        if (err) {
          return console.error(err);
        }
      });
    });
  })
}

