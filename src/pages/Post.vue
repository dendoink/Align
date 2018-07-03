<template>
  <div>
    <div class="post-wrap">
      <div class="post-content">
        <h1>{{postName}}</h1>
        <router-view/>
      </div>
    </div>
    <p class="widget-title">
      <span>END</span>
    </p>
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
.widget-title {
    color: #000;
    font: 11px Montserrat, arial, sans-serif;
    letter-spacing: 2rem;
    margin: 0 6rem 5px;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    border-top: 1px solid #e1dddd91;
}
.widget-title span {
    position: relative;
    top: -7px;
    padding: 0 10px;
    background: #fff;
}
</style>
