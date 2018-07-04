<template>
<div>
    <div class="container">
        <PostList/>
    </div>
</div>
</template>

<script>
import { postData } from "../utils/data.js"
import { getAllCategories } from "../utils/datafilter.js"
export default {
  // 主页
  name: "Home",
  data () {
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
</style>
