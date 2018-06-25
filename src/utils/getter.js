/**
 * @description 按Categories查询文章
 * @param {String} tag 
 */
const getAllPostsByTag = async (tag) => {
    var allPosts = await this.getAllPosts();
    var tagResult =  allPosts.filter(item => {
      return item.tags.indexOf(trimStr(tag)) >= 0;
    });
    return tagResult;
  }
  /**
   * @description 按Categories查询文章
   * @param {String} categories 
   */
  const getAllPostsByCategories = async (categories) => {
    var allPosts = await this.getAllPosts();
    var categoriesResult =  allPosts.filter(item => {
      return item.categories === tag;
    });
    return categoriesResult;
  }
  
  /**
   * @description 返回所有的Tag
   */
  const getAllTags = async () => {
    var allPosts = await this.getAllPosts();
    var tags = [];
    for(post in allPosts){
      tags.push(...post.tags)
      tags = Array.from(new Set(tags)) // 再把set转变成array 
    }
    return tags;
  }
  /**
   * @description 返回所有的Categories
   */
  const getAllCategories = async () => {
    var allPosts = await this.getAllPosts();
    var categories = [];
    for(post in allPosts){
      categories.push(post.categories)
    }
    return categories;
  }
  
  function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}