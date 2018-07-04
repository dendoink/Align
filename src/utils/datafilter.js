/**
 * @description 按Tag查询文章
 * @param {String} tag
 */
export const getAllPostsByTag = (allPosts, tag) => {
  var tagResult = allPosts.filter(item => {
    return item.tags.indexOf(`${tag}`) >= 0
  })
  return tagResult
}
/**
 * @description 按categorie查询文章
 * @param {String} categorie
 */
export const getAllPostsByCategories = (allPosts, categorie) => {
  var categoriesResult = allPosts.filter(item => {
    return item.categories === categorie
  })
  return categoriesResult
}

/**
 * @description 返回所有的Tag
 */
export const getAllTags = (allPosts) => {
  var tags = []
  for (let post of allPosts) {
    if(post.tags.length === 0){
      tags.push('No-Tag-Posts')
    }else{
      tags.push(...post.tags)
    }
  }
  // set转变成array 去除重复
  tags = Array.from(new Set([...tags]))
  return tags
}
/**
 * @description 返回所有的Categories
 */
export const getAllCategories = (allPosts) => {
  var categories = []
  for (let post of allPosts) {
    if(post.categories){
      categories.push(post.categories)
    }else{
      categories.push('Others')
    }
  }
  categories = Array.from(new Set([...categories]))
  return categories
}
