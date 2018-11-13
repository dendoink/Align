<template>
    <div class="tag_container">
      <div class="tag_page_post_list">
        <PostList v-bind:defaultTag="this.selectedTag"/>
      </div>
      <div class="tag_nav">
           <ul class="Tag-ul">
            <li v-for="tag in allTags" :key="tag">
              <a @click="select(tag)">{{ tag }}</a>
            </li>
          </ul>
      </div>
    </div>
</template>

<script>
import { postData } from '../utils/data.js'
import { getAllTags } from '../utils/datafilter.js'
export default {
  name: 'Tags',
  data() {
    return {
      allTags: getAllTags(JSON.parse(postData)),
      // sliceTags: sliceArray(getAllTags(JSON.parse(postData))),
      selectedTag: 'Git'
    }
  },
  components: {
    PostList: () => import('../components/PostList')
  },
  methods: {
    select: function(tag) {
      this.selectedTag = tag
    }
  }
}
</script>

<style scoped>
.post_list {
  margin-top: 6rem;
}
.tag_container {
  font-family: 'Lato', sans-serif;
  max-width: 800px;
  width: 800px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tag_page_post_list {
  width: 65%;
}
.tag_nav {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100vh;
}
.tag_nav ul {
  padding-left: 1rem;
  list-style: none;
  margin-top: 2rem;
}
.tag_nav ul li {
  list-style-type: none;
  margin-right: 0.5rem;
  padding-bottom: 1rem !important;
  box-sizing: border-box;
  display: inline-block;
}
.tag_nav ul li a {
  cursor: pointer;
  border-radius: 6.1875rem;
  font-size: 0.6875rem;
  font-weight: 300;
  padding: 0.4375rem 0.9375rem;
  color: #343a40b5;
  background-color: #f8fafd75;
  border-color: #5394f5;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid #4caf506e;
  line-height: 1.5;
  transition: all 0.3s ease-in-out;
}
.tag_nav ul li a:hover {
  font-weight: 900;
  background: #fbfbfb75;
  box-shadow: 0 4px 11px rgba(248, 250, 253, 0.35);
  transition: all 0.3s ease-in-out;
}
</style>
