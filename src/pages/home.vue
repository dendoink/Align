<template>
<div>
    <div class="container">
        <template v-for="post in allPosts">
            <div class="post_container" :key="post.title">
              <h1 class="post_title">{{post.title}}</h1>
              <div class="post_meta">
                  <span class="post_date">{{post.daysAgo}}</span>
                  <template v-for="tag in post.tags">
                    <span class="tag" :key="tag">{{tag}}</span>
                  </template>
              </div>
              <div class="post_entry">
                  <a href="#">
                      <img v-bind:src="post.coverimg" v-bind:alt="post.title">
                  </a>
                  <p class="post_info">
                     {{post.info}}
                  </p>
                  <p class="post_read_more">
                      <a href="www.baidu.com">Read more</a>
                  </p>
              </div>
            </div>
        </template>
    </div>
</div>
</template>

<script>
import { postData } from "../utils/data.js";
import { getAllCategories } from "../utils/datafilter.js";
export default {
  // 主页
  name: "Home",
  data() {
    return {
      allPosts: JSON.parse(postData),
      categories: getAllCategories(JSON.parse(postData))
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  width: 800px;
  margin: 0 auto;
  position: relative;
}
.post_container {
  margin-top: 2rem;
  padding: 1rem;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;
}
.post_container:hover{
  box-shadow: -3px 3px #ececec;
}
.post_container h1 {
  color: #5a5b5a;
  font-weight: 600;
  line-height: 1.125;
  margin: 1rem 0px 2rem 0px;
  padding: 0;
  text-align: left;
}
.post_entry > a {
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  line-height: 0;
  max-width: 100%;
}
.post_entry img {
  height: auto;
  max-width: 100%;
}
.post_meta {
  text-align: left;
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
}
.post_info {
  text-align: left;
  letter-spacing: 0.5px;
  color:#a3a3a3;
}
.post_info:hover{
  color: #434343;
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
</style>
