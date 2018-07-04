<template>
  <div>
      <div class="post-wrap">
          <div class="post-content">
              <h1>{{postName}}</h1>
              <router-view/>
          </div>
      </div>
      <div class="widget-title">
          <span class="line"></span>
          <span class="title-text">END</span>
          <span class="line"></span>
      </div>
      <div class="footer">
          <div>
              <span>上一篇</span>
              <span>下一篇</span>
          </div>
          <div class="contact">
              <span>github</span>
              <span>mail</span>
              <span>linkedin</span>
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
    margin: 2rem 6rem 0px 6rem;
    border-radius: 2px;
.post-content {
    display: block;
    overflow: hidden;
    padding: 0rem 4.5rem 4.5em 4.5rem;
    width: 100%;
  }
}
.widget-title{
  margin: 0 auto;
  height: 40px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.line {
  height: 1px;
  flex-grow: 1;
  background-color: #dfdfdf;
}
.widget-title .title-text{
  margin: 0 2rem;
  color: #9a9a9a;
  letter-spacing: 1rem;
}
</style>
