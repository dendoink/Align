<template>
  <div id="app">
    <div class="header">
      <div class="menu_bar">
        <p class="menu_bar_list">
          <span v-on:click="handleRouter('home')" class="menu_tags ">HOME</span>
          <span v-on:click="handleRouter('categories')" class="menu_tags">CATEGORIES</span>
          <span v-on:click="handleRouter('about')" class="menu_tags ">ABOUT</span>
          <span v-on:click="handleRouter('tags')" class="menu_tags ">TAGS</span>
        </p>
      </div>
    </div>
    <div class="post_list">
       <router-view/>
    </div>
  </div>
</template>

<script>
import { postData } from "./utils/data.js";
import { getAllCategories } from "./utils/datafilter.js";
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleRouter: function(dir, postname = "", categorie = "", tag = "") {
      let path;
      if (tag) {
        path = `/${dir}/${tag}/${postname}`;
      } else if (postname) {
        // 当存在post的名称的时候path = 详情页面
        path = `/${dir}/${categorie}/${postname}`;
      } else if (categorie) {
        path = `/${dir}/${categorie}/all`;
      } else {
        path = `/${dir}/`;
      }
      this.$router.push(path);
    },
    handleSelect: function() {
      return false;
    }
  },
  computed: {
    categories: function() {
      return Array.from(new Set(getAllCategories(JSON.parse(postData))));
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f5f8f9;
}
.avatar {
  height: 3rem;
  width: 3rem;
  background-image: url("./assets/avatar.png");
  background-size: cover;
  display: block;
  border-radius: 50%;
  margin: auto;
}
.el-submenu__title {
  font-family: Arial, Helvetica, sans-serif;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
}
.post_list .content > h2 {
  display: none;
}
.info_title {
  font-size: 12px;
}
.menu_bar_list {
  padding: 0px 10px;
}
.menu_bar_list li{
  display: inline-block;
}
.menu_bar_list .menu_tags{
  padding: 5px 10px;
  cursor: pointer;
}
.menu_tags:hover{
  box-shadow: 0px 2px #cccccc;
}
</style>
