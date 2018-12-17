<template>
  <div class="post_list_container">
    <div
      v-show="rowsNumber === '1'"
      class="post_container"
      v-for="(post, index) in firstColumnPosts"
      :key="post.title"
    >
      <header class="post_header">
        <!-- 这里加一个filter来显示对应的daysago的信息 -->
        <span class="post_date">{{post.date | daysAgo}}</span>
        <h4 @click="handlePostLink(index)">{{post.title}}</h4>
      </header>
      <div class="post_entry">
        <img
          class="img-responsive"
          @click="handlePostLink(index)"
          v-bind:src="post.coverimg"
          v-bind:alt="post.title"
        >
      </div>
      <div class="post_meta">
        <p class="post_info">{{post.info}}</p>
        <template v-for="tag in post.tags">
          <span class="tag" :key="tag">{{tag}}</span>
        </template>
      </div>
    </div>
    <div
      v-show="rowsNumber === '2'"
      class="post_container"
      v-for="(post, index) in secondColumnPosts"
      :key="post.title"
    >
      <header class="post_header">
        <span class="post_date">{{post.date | daysAgo}}</span>
        <h4 @click="handlePostLink(index)">{{post.title}}</h4>
      </header>
      <div class="post_entry">
        <img
          class="img-responsive"
          @click="handlePostLink(index)"
          v-bind:src="post.coverimg"
          v-bind:alt="post.title"
        >
      </div>
      <div class="post_meta">
        <p class="post_info">{{post.info}}</p>
        <template v-for="tag in post.tags">
          <span class="tag" :key="tag">{{tag}}</span>
        </template>
      </div>
    </div>
    <div
      v-show="rowsNumber === '3'"
      class="post_container"
      v-for="(post, index) in thirdColumnPosts"
      :key="post.title"
    >
      <header class="post_header">
        <span class="post_date">{{post.date | daysAgo}}</span>
        <h4 @click="handlePostLink(index)">{{post.title}}</h4>
      </header>
      <div class="post_entry">
        <img
          class="img-responsive"
          @click="handlePostLink(index)"
          v-bind:src="post.coverimg"
          v-bind:alt="post.title"
        >
      </div>
      <div class="post_meta">
        <p class="post_info">{{post.info}}</p>
        <template v-for="tag in post.tags">
          <span class="tag" :key="tag">{{tag}}</span>
        </template>
      </div>
    </div>
    <div v-show="!rowsNumber" class="post_info_list">
      <ul class="post_info_ul">
        <li class="post_info_item" v-for="(post, index) in allPosts" :key="post.title + index">
          <div class="post_info_head" @click="handlePostLink(index)">{{post.title}}</div>
          <div class="post_info_date">{{post.date | moment}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { postData } from "../utils/data.js";
import moment from "moment";
import {
  getAllTags,
  getAllPostsByCategories,
  getAllPostsByTag
} from "../utils/datafilter.js";
export default {
  // 主页
  name: "PostList",
  props: {
    defaultCate: {
      type: String,
      default: ""
    },
    defaultTag: {
      type: String,
      default: ""
    },
    defaultDate: {
      type: String,
      default: ""
    },
    rowsNumber: {
      type: String
    },
    maxNumber: {
      type: String
    }
  },
  data() {
    return {
      tags: getAllTags(JSON.parse(postData)),
      firstColumnPosts: [],
      secondColumnPosts: [],
      thirdColumnPosts: []
    };
  },
  computed: {
    allPosts: function() {
      let result = JSON.parse(postData);
      if (this.defaultCate) {
        result = getAllPostsByCategories(result, this.defaultCate);
      } else if (this.defaultTag) {
        result = getAllPostsByTag(result, this.defaultTag);
      } else {
        result.sort((a, b) => {
          return new Date(b.date) - new Date(a.date) !== 0
            ? new Date(b.date) - new Date(a.date)
            : b.name.split("-").pop() - a.name.split("-").pop();
        });
        return result;
      }
      result.sort((a, b) => {
        return new Date(b.date) - new Date(a.date) !== 0
          ? new Date(b.date) - new Date(a.date)
          : b.name.split("-").pop() - a.name.split("-").pop();
      });
      return result;
    },
    currentPosts: function() {
      let result = this.allPosts;
      switch (this.rowsNumber) {
        case "1":
          result = this.firstColumnPosts;
          break;
        case "2":
          result = this.secondColumnPosts;
          break;
        case "3":
          result = this.thirdColumnPosts;
          break;
        default:
          break;
      }
      return result;
    }
  },
  methods: {
    handlePostLink: function(index, dir = "post") {
      window.localStorage.setItem(
        "currentPosts",
        JSON.stringify(this.currentPosts)
      );
      let postName = this.currentPosts[index].name;
      this.$router.push(`/${dir}/${postName}`);
    },
    sliceArray: function(array) {
      let max = this.maxNumber ? this.maxNumber : array.length;
      for (let x = 0; x < max; x += 3) {
        if (array[x]) {
          this.firstColumnPosts.push(array[x]);
        }
        if (array[x + 1]) {
          this.secondColumnPosts.push(array[x + 1]);
        }
        if (array[x + 2]) {
          this.thirdColumnPosts.push(array[x + 2]);
        }
      }
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    daysAgo: function(date) {
      let days = new Date() - new Date(date);
      return parseInt(days / (1000 * 60 * 60 * 24));
    }
  },
  created() {
    if (this.rowsNumber) {
      this.sliceArray(this.allPosts);
    }
  }
};
</script>

<style scoped>
.post_list_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.3%;
}
.post_container {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: transparent;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  margin-bottom: 1.5rem !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.tag_container .post_list_container {
  width: 100%;
}
.tag_container .post_list_container .post_info_list {
  width: 100%;
}
.post_info_list .post_info_ul {
  width: 100%;
  margin-top: 1rem;
}
.post_info_ul .post_info_item {
  display: flex;
  justify-content: space-between;
  line-height: 4rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.post_info_item .post_info_head {
  cursor: pointer;
  text-align: left;
  min-width: 50%;
  font-size: 0.9rem;
  font-weight: 400;
  color: #1f1a31a6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media screen and (min-width: 1001px) {
  .post_info_item :hover {
    color: #42b983;
  }
  .post_info_item .post_info_date:hover {
    color: #42b983;
  }
}

.post_info_item .post_info_date {
  font-size: 0.7rem;
  color: #9a9797;
  min-width: 30%;
  text-align: right;
}

.post_header {
  width: 100%;
  padding: 0.75rem 10%;
  margin-bottom: 0;
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
  text-align: left;
}
.post_header h4 {
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 2;
  color: inherit;
}
.post_header h4:hover {
  color: #42b983;
}
.post_container h1 {
  color: #6b6b6b;
  font-weight: 600;
  line-height: 1.125;
  margin: 1rem 0px 0px 0px;
  padding: 0;
  text-align: left;
}
.post_container h1:hover {
  color: #ff7878;
  text-decoration: underline;
}
.post_container a {
  text-decoration: none;
}
.post_entry {
  display: inline-block;
  width: 80%;
}

.post_entry img {
  height: auto;
  max-width: 100%;
}
.post_meta {
  text-align: right;
  margin-top: 4px;
  padding: 0% 10%;
}
.post_date {
  font-weight: 500;
  color: #2c3e50ba;
}
.post_date + span {
  margin-left: 2rem;
}
.post_date::after {
  content: " DAYS AGO";
}
.tag {
  color: #ffacac;
  border-radius: 5px;
  font-weight: 600;
  padding: 0px 0.5rem;
  margin-right: 1rem;
  float: left;
  margin-bottom: 0.5rem;
}
.post_info {
  text-align: left;
  letter-spacing: 0.5px;
  padding: 10px 4%;
  font-size: 0.9rem;
}
.post_info::first-letter {
  color: #42b983;
  font-size: 1.3rem;
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
.post_read_more a:hover {
  color: #434343;
  box-shadow: 0px 2px #cccccc;
}
.post_entry img {
  transition: all 0.2s ease-in-out;
  width: 100%;
  border-radius: calc(0.25rem - 1px);
  vertical-align: middle;
  border-style: none;
}
.post_entry img:hover {
  box-shadow: 0 18px 32px -18px #000;
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}
@-webkit-keyframes bounce-left {
  0% {
    -webkit-transform: translateX(-48px);
    transform: translateX(-48px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateX(-26px);
    transform: translateX(-26px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateX(-13px);
    transform: translateX(-13px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateX(-6.5px);
    transform: translateX(-6.5px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateX(-4px);
    transform: translateX(-4px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87%,
  98% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
@keyframes bounce-left {
  0% {
    -webkit-transform: translateX(-48px);
    transform: translateX(-48px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateX(-26px);
    transform: translateX(-26px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateX(-13px);
    transform: translateX(-13px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateX(-6.5px);
    transform: translateX(-6.5px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateX(-4px);
    transform: translateX(-4px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87%,
  98% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2018-11-14 1:7:28
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation bounce-right
 * ----------------------------------------
 */
@-webkit-keyframes bounce-right {
  0% {
    -webkit-transform: translateX(48px);
    transform: translateX(48px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateX(26px);
    transform: translateX(26px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateX(13px);
    transform: translateX(13px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateX(6.5px);
    transform: translateX(6.5px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87%,
  98% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
@keyframes bounce-right {
  0% {
    -webkit-transform: translateX(48px);
    transform: translateX(48px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateX(26px);
    transform: translateX(26px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateX(13px);
    transform: translateX(13px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateX(6.5px);
    transform: translateX(6.5px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87%,
  98% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
@media screen and (max-width: 1000px) and (min-width: 300px) {
  #dolldiscussion {
    display: none;
  }
  .post_list_container {
    flex-direction: column;
    width: 100%;
  }
  .tag_page_post_list .post_list_container .post_info_list .post_info_ul {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .post_info_ul .post_info_item {
    flex-direction: column;
    border: 1px solid #f1f1f1;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    background-color: white;
    box-shadow: 2px -2px whitesmoke;
    margin-bottom: 0.5rem;
  }
  .post_info_ul .post_info_item .post_info_date {
    line-height: 1.5rem;
  }
  .post_header h4 {
    font-size: 1rem;
  }
}
</style>
