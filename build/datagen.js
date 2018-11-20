const path = require('path')
const fs = require('fs')
const rm = require('rimraf')
const { genRoutesFile } = require('./routegen')
const matter = require('gray-matter');
// 先移除存放博客信息的data.js文件
const FILE_DATE_PATH = path.resolve(__dirname, '../src/utils/data.js');
const DEFAULT_SOURCE_DIR = path.resolve(__dirname, '../src/posts/');
module.exports = async function getData() {
  rm(FILE_DATE_PATH, err => {
    if (err) throw err
    fs.readdir(DEFAULT_SOURCE_DIR,function(err,files){
      if(err){
          console.warn(err)
      }else{
         // 用来存放所有文章信息的数组
        var posts = [];
        var routes = [];
        for(filename in files){
          if((/\.md$/).test(files[filename])){
            var filedir = path.join(DEFAULT_SOURCE_DIR,files[filename]);
            var data = fs.readFileSync(filedir, 'utf8')
            if (err) throw err;
            var result = matter(data);
            var post = Object.assign({}, result.data)
            // var date = new Date(`${post.date}`.replace(/-/g, "/"));
            // var currentDate = new Date();
            // var days = currentDate.getTime() - date.getTime();
            // post.daysAgo = parseInt(days / (1000 * 60 * 60 * 24));
            // 当文章的内容不为空时，添加文章对象到数组中
            if (post.contents  !== '') {
              post.contents = '';
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
        }
        genRoutesFile(routes).then(routesCode => {
          rm(path.resolve(__dirname, '../src/router/page.js'), err => {
            if (err) throw err
            fs.writeFile(path.resolve(__dirname, '../src/router/page.js'), routesCode, { 'flag': 'a' }, function (err) {
              if (err) {
                return console.error(err);
              }
            });
          })
        });
        let postsStr = `export let postData = '${JSON.stringify(posts)}'`
        // 将数组对象存入data.js
        fs.writeFile(path.resolve(__dirname, '../src/utils/data.js'), postsStr, { 'flag': 'a' }, function (err) {
          if (err) {
            return console.error(err);
          }
        });
      }
    });
  })
}

