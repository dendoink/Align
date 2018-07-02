/**
 * @description 按Categories查询文章
 * @param {String} tag
 */
export const getAllPostsByTag = (allPosts, tag) => {
  var tagResult = allPosts.filter(item => {
    return item.tags.indexOf(trimStr(tag)) >= 0
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
    // 没有tag 默认返回 No-Tag-Posts
    // TODO:读取也要考虑为空的情况
    let temp = tags.length === 0 ? ['No-Tag-Posts'] : [...post.tags]
    tags.push(temp)
    // 再把set转变成array 去除重复
    tags = Array.from(new Set(tags))
  }
  return tags
}
/**
 * @description 返回所有的Categories
 */
export const getAllCategories = (allPosts) => {
  var categories = []
  for (let post of allPosts) {
    // 没有Categories 默认返回 Others
    // TODO:读取也要考虑为空的情况
    let temp = post.categories ? post.categories : ['Others']
    categories.push(temp)
  }
  return categories
}
function trimStr (str) { return str.replace(/(^\s*)|(\s*$)/g, '') }