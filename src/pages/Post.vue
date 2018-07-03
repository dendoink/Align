<template>
  <div>
    <div class="post-wrap">
      <div class="post-content">
        <h1>{{postName}}</h1>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/atom-one-dark.css'
export default {
  name: 'Post',
  data () {
    return {
      postName: this.$route.query.postname
    }
  }
}
</script>

<style scoped lang="scss">
.post-wrap {
    display: flex;
    width: 100%;
    background-color: #fff;
.post-content {
    display: block;
    overflow: hidden;
    padding: 0rem 4.5rem 4.5em 4.5rem;
    width: 100%;
  }
}
</style>
