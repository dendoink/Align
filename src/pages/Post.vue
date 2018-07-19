<template>
  <div>
      <div class="post-wrap">
          <div class="post-content">
              <div class="post-header">
                <h1>{{currentPost.title}}</h1>
                <span class="post-time">
                    {{currentPost.date}}
                </span>
              </div>
              <router-view :key="key"/>
          </div>
      </div>
      <div class="widget-title">
          <span class="line"></span>
          <span class="title-text">END</span>
          <span class="line"></span>
      </div>
      <div class="footer">
          <div class="previous" @click="handlePostLink(previous.index)">
              <div class="previous-arrow"></div>
              <span>上一篇: {{previous.title}}</span>
          </div>
          <div class="next" @click="handlePostLink(next.index)">
              <span>下一篇 {{next.title}}</span>
              <div class="next-arrow"></div>
          </div>
      </div>
  </div>
</template>

<script>
import "highlight.js/styles/atom-one-dark.css";
import fecha from "fecha";
import { postData } from "../utils/data.js";
export default {
  name: "Post",
  data() {
    return {
      index: this.$route.query.index,
      currentPost: {},
      previous: {},
      next: {}
    };
  },
  computed: {
    allPosts: function() {
      let result = JSON.parse(postData);
      if (this.defaultCate) {
        result = getAllPostsByCategories(result, this.defaultCate);
      }
      if (this.defaultTag) {
        result = getAllPostsByTag(result, this.defaultTag);
      }
      return result;
    },
    key() {
      return this.$route.query.index !== undefined
        ? this.$route.query.index + new Date()
        : 0 + new Date();
    }
  },
  created() {
    var a  = fecha.format(new Date(), "dddd MMMM Do, YYYY")
    this.allPosts = this.allPosts.map(item => {
      item.date = fecha.format(new Date(item.date), "dddd MMMM Do, YYYY");
    })
    let index = this.$route.query.index;
    this.currentPost = this.allPosts[index];
    // 所有文档长度为1
    if (this.allPosts.length === 1) {
      this.previous = this.allPosts[0];
      this.previous.index = 0;
      this.next = this.allPosts[0];
      this.next.index = 0;
    } else if (index === 0) {
      // 第一个元素
      this.previous = this.allPosts[this.allPosts.length - 1];
      this.previous.index = this.allPosts.length - 1;
      this.next = this.allPosts[index + 1];
      this.next.index = index + 1;
    } else if (index === this.allPosts.length - 1) {
      // 最后一个元素
      this.previous = this.allPosts[index - 1];
      this.previous.index = index - 1;
      this.next = this.allPosts[0];
      this.next.index = 0;
    } else {
      // 中间元素
      this.previous = this.allPosts[index - 1];
      this.previous.index = index - 1;
      this.next = this.allPosts[index + 1];
      this.next.index = index + 1;
    }
  },
  methods: {
    handlePostLink: function(index, dir = "post") {
      let postName = this.allPosts[index].name;
      this.$router.push({
        path: `/${dir}/${postName}`,
        query: {
          index: index
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      let index = this.$route.query.index;
      this.currentPost = this.allPosts[index];
      // 所有文档长度为1
      if (this.allPosts.length === 1) {
        this.previous = this.allPosts[0];
        this.previous.index = 0;
        this.next = this.allPosts[0];
        this.next.index = 0;
      } else if (index === 0) {
        // 第一个元素
        this.previous = this.allPosts[this.allPosts.length - 1];
        this.previous.index = this.allPosts.length - 1;
        this.next = this.allPosts[index + 1];
        this.next.index = index + 1;
      } else if (index === this.allPosts.length - 1) {
        // 最后一个元素
        this.previous = this.allPosts[index - 1];
        this.previous.index = index - 1;
        this.next = this.allPosts[0];
        this.next.index = 0;
      } else {
        // 中间元素
        this.previous = this.allPosts[index - 1];
        this.previous.index = index - 1;
        this.next = this.allPosts[index + 1];
        this.next.index = index + 1;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.post-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.post-time {
  text-align: left;
  letter-spacing: 2px;
  color: #00000078;
  cursor: pointer;
}
.post-time:hover {
  color: #42b983;
}
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
.widget-title .title-text {
  margin: 0 2rem;
  color: #9a9a9a;
  letter-spacing: 1rem;
}
.footer {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}
.previous,
.next {
  width: 50%;
  display: flex;
}
.next {
  justify-content: flex-end;
}
.previous {
  margin-left: 0rem;
}
.previous span {
  line-height: 24px;
  margin-left: 2rem;
  color: #00000078;
  cursor: pointer;
}
.next span {
  line-height: 24px;
  margin-right: 2rem;
  color: #00000078;
  cursor: pointer;
}

.previous:hover span,
.next:hover span {
  color: #42b983;
}

.previous:hover .previous-arrow {
  border-right-color: #42b983;
}
.next:hover .next-arrow {
  border-left-color: #42b983;
}

.previous-arrow {
  width: 12px;
  height: 12px;
  border: 12px solid #fff;
  /* border-bottom-color: #58e39e; */
  /* border-left-color: #fa7d7d; */
  border-right-color: #00000078;
  border-radius: 0px;
  margin-left: 8rem;
}

.next-arrow {
  width: 12px;
  height: 12px;
  border: 12px solid #fff;
  border-left-color: #00000078;
  border-radius: 0px;
  margin-right: 8rem;
}
</style>
