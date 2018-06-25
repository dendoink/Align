const path = require('path')
const jdown = require('jdown');
const fs = require('fs');
const rm = require('rimraf')

// 先移除存放博客信息的data.js文件
rm(path.resolve(__dirname,'../src/utils/data.js'), err => {
  if (err) throw err
  // 移除成功后，读取博客目录下的文章信息
  jdown(path.resolve(__dirname, customDir = '../src/posts/')).then(blogList => {
    // 用来存放所有文章信息的数组
    var posts = [];
    // 遍历把每一篇文章的关键信息存到对象中
    for (postName in blogList) {
      var { ...post } = blogList[postName];
      post.contents = post.contents.replace(/[\r\n]/g, '');
      // 文件名
      post.name = postName || '';
      post.postDir = __dirname + customDir + postName + '.md';
      // 当文章的内容不为空时，添加文章对象到数组中
      if (blogList[postName].content !== '') {
        posts.push(post);
      }
    }
    // 将数组对象转成json
    posts = JSON.stringify(posts);
    return `export default '${posts}'`;
  }).then(posts => {
    // 将数组对象存入data.js
    fs.writeFile(path.resolve(__dirname,'../src/utils/data.js'), posts,{ 'flag': 'a' }, function (err) {
      if (err) {
        return console.error(err);
      }
    });
  });
})