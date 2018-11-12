<template>
    <div class="post_list_container">
        <div v-show="rowsNumber === '1'" class="post_container" v-for="(post, index) in firstColumnPosts" :key="post.title">
            <header class="post_header">
              <span class="post_date">{{post.daysAgo}}</span>
              <h4 @click="handlePostLink(index)">{{post.title}}</h4>
            </header>
            <div class="post_entry">
              <img class="img-responsive" @click="handlePostLink(index)" v-bind:src="post.coverimg" v-bind:alt="post.title">
            </div>
            <div class="post_meta">
                <p class="post_info">
                        {{post.info}}
                </p>
                <template v-for="tag in post.tags">
                  <span class="tag" :key="tag">{{tag}}</span>
                </template>
            </div>
        </div>
        <div v-show="rowsNumber === '2'" class="post_container" v-for="(post, index) in secondColumnPosts" :key="post.title">
            <header class="post_header">
              <span class="post_date">{{post.daysAgo}}</span>
              <h4 @click="handlePostLink(index)">{{post.title}}</h4>
            </header>
            <div class="post_entry">
              <img class="img-responsive" @click="handlePostLink(index)" v-bind:src="post.coverimg" v-bind:alt="post.title">
            </div>
            <div class="post_meta">
                <p class="post_info">
                        {{post.info}}
                </p>
                <template v-for="tag in post.tags">
                  <span class="tag" :key="tag">{{tag}}</span>
                </template>
            </div>
        </div>
        <div v-show="rowsNumber === '3'" class="post_container" v-for="(post, index) in thirdColumnPosts" :key="post.title">
            <header class="post_header">
              <span class="post_date">{{post.daysAgo}}</span>
              <h4 @click="handlePostLink(index)">{{post.title}}</h4>
            </header>
            <div class="post_entry">
              <img class="img-responsive" @click="handlePostLink(index)" v-bind:src="post.coverimg" v-bind:alt="post.title">
            </div>
            <div class="post_meta">
                <p class="post_info">
                  {{post.info}}
                </p>
                <template v-for="tag in post.tags">
                  <span class="tag" :key="tag">{{tag}}</span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { postData } from '../utils/data.js'
import {
  getAllCategories,
  getAllTags,
  getAllPostsByCategories,
  getAllPostsByTag
} from '../utils/datafilter.js'
export default {
  // 主页
  name: 'PostList',
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
    },
    rowsNumber: {
      type: String
    }
  },
  data() {
    return {
      tags: getAllTags(JSON.parse(postData)),
      firstColumnPosts: [],
      secondColumnPosts: [],
      thirdColumnPosts: []
    }
  },
  computed: {
    allPosts: function() {
      let result = JSON.parse(postData)
      if (this.defaultCate) {
        result = getAllPostsByCategories(result, this.defaultCate)
      } else if (this.defaultTag) {
        result = getAllPostsByTag(result, this.defaultTag)
      } else {
        return result
      }
      return result
    }
  },
  methods: {
    handlePostLink: function(index, dir = 'post') {
      let postName = this.allPosts[index].name
      this.$router.push({
        path: `/${dir}/${postName}`,
        query: {
          index: index
        }
      })
    },
    sliceArray: function(array) {
      for (let x = 0; x < array.length; x += 3) {
        if (array[x]) {
          this.firstColumnPosts.push(array[x])
        }
        if (array[x + 1]) {
          this.secondColumnPosts.push(array[x + 1])
        }
        if (array[x + 2]) {
          this.thirdColumnPosts.push(array[x + 2])
        }
      }
    }
  },
  created() {
    this.sliceArray(this.allPosts)
  }
}
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
.post_header {
  width: 100%;
  padding: 0.75rem 10%;
  margin-bottom: 0;
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
  text-align: left;
}
.post_header h4 {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.2;
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
  margin-bottom: 1rem;
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
  content: ' DAYS AGO';
}
.tag {
  color: #ffacac;
  border-radius: 5px;
  font-weight: 600;
  padding: 0px 0.5rem;
  margin-right: 1rem;
  float: left;
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
  content: '...';
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
</style>
