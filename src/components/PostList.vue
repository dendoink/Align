<template>
    <div>
        <div v-for="post in allPosts" :key="post.title">
            <div class="post_container" @click="handlePostLink(post.name)">
                <div class="post_entry">
                    <div class="hovereffect">
                        <img class="img-responsive" v-bind:src="post.coverimg" v-bind:alt="post.title">
                        <div class="overlay" @click="handlePostLink(post.name)">
                          <h2>{{post.title}}</h2>
                          <p class="post_info">
                            {{post.info}}
                           </p>
                        </div>
                    </div>
                </div>
                <div class="post_meta">
                    <template v-for="tag in post.tags">
                      <span class="tag" :key="tag">{{tag}}</span>
                    </template>
                    <span class="post_date">{{post.daysAgo}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { postData } from "../utils/data.js"
import { getAllCategories, getAllTags, getAllPostsByCategories, getAllPostsByTag } from "../utils/datafilter.js"
export default {
  // 主页
  name: "PostList",
  props: {
    defaultCate: {
      type: String,
      default: ''
    },
    defaultTag: {
      type: String,
      default: ''
    },
    defaultDate: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tags: getAllTags(JSON.parse(postData))
    }
  },
  computed: {
    allPosts: function () {
      let result = JSON.parse(postData)
      if (this.defaultCate) {
        result = getAllPostsByCategories(result, this.defaultCate)
      } else if(this.defaultTag){
        result = getAllPostsByTag(result, this.defaultTag)
      } else{
        return result
      }
      return result
    }
  },
  methods: {
    handlePostLink: function (postName, dir = 'post') {
      this.$router.push({path: `/${dir}/${postName}`, query: { postname: postName }})
    }
  }
}
</script>

<style scoped>
.post_container {
  margin-top: 2rem;
  padding: 1rem;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(150,150,150,0.3);
}
.post_container:hover{
  box-shadow: -3px 3px #ececec;
}
.post_container h1 {
  color:#6b6b6b;
  font-weight: 600;
  line-height: 1.125;
  margin: 1rem 0px 0px 0px;
  padding: 0;
  text-align: left;
}
.post_container h1:hover{
  color:#ff7878;
  text-decoration:underline;
}
.post_container a {
  text-decoration:none;
}
.post_entry {
  display: inline-block;
}

.post_entry .hovereffect {
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  max-width: 100%;
  line-height: 1.4rem;
  cursor: pointer;
}
.post_entry img {
  height: auto;
  max-width: 100%;
}
.post_meta {
  text-align: right;
  margin-top: 4px;
  margin-bottom: 1rem;
}
.post_date {
  font-weight: 500;
  color: #2c3e50ba;
}
.post_date + span {
  margin-left: 2rem;
}
.post_date::after{
  content: " DAYS AGO";
}
.tag {
  background: #ff7878;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  padding: 0px 0.5rem;
  margin-left: 1rem;
  float: left;
}
.post_info {
  text-align: left;
  letter-spacing: 0.5px;
}
.post_info::after {
  font-size: 1.5rem;
  content: "...";
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
}
.post_read_more {
  margin: 3rem 0px 0px 0px;
}
.post_read_more a {
  text-decoration: none;
  color: #898989;
}
.post_read_more a:hover{
  color:  #434343;
  box-shadow: 0px 2px #cccccc;
}

.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  background:#a09b9b;
}



.hovereffect .overlay {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  padding: 3rem 3rem;
}

.hovereffect img {
  display: block;
  position: relative;
  max-width: none;
  width: calc(100% + 20px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-10px,0,0);
  transform: translate3d(-10px,0,0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.hovereffect:hover img {
  opacity: 0.4;
  filter: alpha(opacity=40);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 2.3rem;
  overflow: hidden;
  padding: 1em 0;
  background-color: transparent;
  opacity: 1;
}

.hovereffect h2:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  content: '';
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(-100%,0,0);
  transform: translate3d(-100%,0,0);
}

.hovereffect:hover h2:after {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.hovereffect a, .hovereffect p {
  color: #FFF;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}

.hovereffect:hover a, .hovereffect:hover p {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
</style>
