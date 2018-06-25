<template>
  <div>
    <div class="container">
      <ul>
        <li v-for="post in allPosts" :key="post.name">{{post.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import postData from '../utils/data.js'
export default {
  // 主页
  name: 'Home',
  data () {
    return {
      allPosts: JSON.parse(postData)
    }
  }
}
</script>

<style scoped>
.el-submenu__title{
  font-family: Arial, Helvetica, sans-serif
}
.header .menu_bar, .personal_info{
  display: inline-block
}
</style>
