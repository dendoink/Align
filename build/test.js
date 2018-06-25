// const { getAllPosts, getAllPostsByCategories, getAllPostsByTag } =  require('./postUtils');

const { getAllPosts,getAllPostsByTag } = require('../src/utils/postUtils');
var allPosts = getAllPosts().then((posts)=>{
    console.log(posts);
});