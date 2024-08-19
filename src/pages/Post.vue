<template>
  <div>
    <div class="post-wrap">
      <div class="post-content">
        <div class="post-header">
          <h1>{{currentPost.title}}</h1>
          <span class="post-time">{{currentPost.date | moment}}</span>
        </div>
        <router-view :key="key" />
      </div>
    </div>
    <div id="dolldiscussion"></div>
    <div class="footer">
      <div
        class="previous"
        @click="handlePostLink(previous.index)"
      >
        <div class="previous-arrow"></div>
        <span>上一篇: {{previous.title}}</span>
      </div>
      <div
        class="next"
        @click="handlePostLink(next.index)"
      >
        <span>下一篇 {{next.title}}</span>
        <div class="next-arrow"></div>
      </div>
    </div>
  </div>
</template>
<script>
import "highlight.js/styles/atom-one-dark.css";
import { postData } from "../utils/data.js";
import moment from "moment";
const config = require('../../config/');
export default {
  name: "Post",
  data() {
    return {
      index: this.$route.query.index,
      currentPost: {},
      previous: {},
      next: {},
      allPosts:
        window.innerWidth <= 1000
          ? JSON.parse(postData)
          : JSON.parse(window.localStorage.getItem("currentPosts") || postData)
    };
  },
  computed: {
    key() {
      return this.$route.query.index !== undefined
        ? this.$route.query.index + new Date()
        : 0 + new Date();
    }
  },
  mounted() {
    this.utterances();
  },
  created() {
    let index = this.allPosts.findIndex(item => {
      return item.name === this.$route.path.split("/")[2];
    });
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
      this.previous.index = index >= 1 ? index - 1 : index;
      this.next = this.allPosts[0];
      this.next.index = 0;
    } else {
      // 中间元素
      this.previous = this.allPosts[index - 1];
      this.previous.index = index >= 1 ? index - 1 : index;
      this.next = this.allPosts[index + 1];
      this.next.index = index + 1;
    }
  },
  methods: {
    handlePostLink: function(index, dir = "post") {
      let postName = this.allPosts[index].name;
      this.$router.push(`/${dir}/${postName}`);
    },
    utterances: function() {
      var discussion = document.getElementById("dolldiscussion");
      if (!discussion) {
        return;
      }

      if (!config.comments.repo) {
        return;
      }
      var script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      // script.setAttribute("repo", "DendiSe7enGitHub/blog-comments-repo");
      // script.setAttribute("theme", "github-light");
      script.setAttribute("repo", config.comments.repo);
      script.setAttribute("theme", config.comments.theme);
      script.setAttribute("issue-term", `${this.currentPost.title}`);
      script.setAttribute("crossorigin", "anonymous");
      discussion.appendChild(script);
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  },
  watch: {
    $route(to, from) {
      let index = this.allPosts.findIndex(item => {
        return item.name === this.$route.path.split("/")[2];
      });
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
.post-header > h1 {
  cursor: pointer;
}
.post-header > h1:hover {
  color: #42b983;
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
  margin: 6rem 6rem 0px 6rem;
  border-radius: 2px;
  justify-content: center;
  .post-content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 1000px;
    background: #ffffff94;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 50px;
    border-radius: 10px;
  }
}
.comments {
  display: flex;
  margin: 2rem 6rem 0px 6rem;
  border-radius: 2px;
  justify-content: center;
  #disqus_thread {
    width: 100%;
    max-width: 1000px;
    padding-top: 50px;
    border-radius: 10px;
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
  margin: 2rem 6rem;
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
  border-right-color: #00000078;
  border-radius: 0px;
}

.next-arrow {
  width: 12px;
  height: 12px;
  border: 12px solid #fff;
  border-left-color: #00000078;
  border-radius: 0px;
}
@media screen and (max-width: 1000px) and (min-width: 300px) {
  .post-wrap {
    margin: 1rem;
  }
  .post-wrap .post-content {
    padding: 0rem;
  }
  .post-header h1 {
    font-size: 1.4rem;
  }
  .post-header .post-time {
    font-size: 1rem;
  }
  .footer {
    margin: 0rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .previous span {
    margin-left: 0.5rem;
  }
  .next span {
    margin-right: 0.5rem;
  }
  .post_meta {
    width: 100%;
  }
}

// 小屏不显示评论信息
@media screen and (max-width: 800px) and (min-width: 300px) {
  .comments {
    display: none;
    #disqus_thread {
      display: none;
    }
  }
}
</style>
