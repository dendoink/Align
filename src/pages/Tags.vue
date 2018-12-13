<template>
  <div class="tag_container">
    <div class="tag_nav">
      <ul class="Tag-ul">
        <li
          v-for="tag in allTags"
          :key="tag"
        >
          <a @click="select(tag)">{{ tag }}</a>
        </li>
      </ul>
    </div>
    <div class="tag_page_post_list">
      <PostList v-bind:defaultTag="this.selectedTag" />
    </div>
  </div>
</template>

<script>
import { postData } from "../utils/data.js";
import { getAllTags } from "../utils/datafilter.js";
export default {
  name: "Tags",
  data() {
    return {
      allTags: getAllTags(JSON.parse(postData)),
      // sliceTags: sliceArray(getAllTags(JSON.parse(postData))),
      selectedTag: "Git"
    };
  },
  components: {
    PostList: () => import("../components/PostList")
  },
  methods: {
    select: function(tag) {
      this.selectedTag = tag;
    }
  }
};
</script>

<style scoped>
.post_list {
  margin-top: 6rem;
}
.tag_container {
  font-family: "Lato", sans-serif;
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
  list-style: none;
  margin-top: 2rem;
  padding-left: 2px;
  padding-right: 2px;
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
  font-size: 1rem;
  font-weight: 600;
  padding: 0.4375rem 0.9375rem;
  color: #343a40b5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.5;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.tag_nav ul li a:hover {
  font-weight: 900;
  background: #4caf506e;
  color: #ffffff;
  border: 0px;
  box-shadow: 0 4px 11px rgba(248, 250, 253, 0.35);
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 1000px) and (min-width: 300px) {
  .tag_container {
    flex-direction: column;
    width: 100%;
  }
  .tag_container .tag_page_post_list {
    width: 100%;
  }
  .tag_container .tag_nav {
    height: auto;
    width: 100%;
  }
  .tag_nav ul li a {
    font-size: 0.5rem;
  }
  .tag_nav ul li a:hover {
    font-weight: auto;
    background: #4caf506e;
    color: #ffffff;
    border: 0px;
    box-shadow: 0 4px 11px rgba(248, 250, 253, 0.35);
    transition: all 0.3s ease-in-out;
  }
}
</style>
