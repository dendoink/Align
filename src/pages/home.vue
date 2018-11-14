<template>
  <div class="home_post_list">
      <PostList rowsNumber = '1'/>
      <PostList rowsNumber = '2'/>
      <PostList rowsNumber = '3'/>
  </div>
</template>

<script>
import { postData } from '../utils/data.js'
import { getAllCategories } from '../utils/datafilter.js'
export default {
  // 主页
  name: 'Home',
  data() {
    return {
      allPosts: JSON.parse(postData),
      categories: getAllCategories(JSON.parse(postData))
    }
  },
  components: {
    PostList: () => import('../components/PostList')
  },
  methods: {
    // handlePostLink: function (postName, dir = 'post') {
    //   this.$router.push({path: `/${dir}/${postName}`, query: { postname: postName }})
    // }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  width: 800px;
  margin: 0 auto;
  position: relative;
}
.home_post_list {
  display: flex;
}
@media screen and (max-width: 600px) and (min-width: 300px) {
  .home_post_list {
    display: flex;
    flex-direction: column;
  }
}
</style>
