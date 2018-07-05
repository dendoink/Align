<template>
  <div id="app">
    <div class="header">
      <div class="menu_bar">
        <div class="menu_bar_list">
          <span v-on:click="handleRouter('home')" class="menu_tags ">HOME</span>
          <span v-on:click="handleRouter('about')" class="menu_tags ">ABOUT</span>
          <span v-on:click="handleRouter('tags')" class="menu_tags ">TAGS</span>
          <div class="dropdown">
            <span class="dropbtn">CATEGORIES</span>
            <div class="dropdown-content">
              <span v-for="cate in categories" :key="cate" @click="handleRouter('categories',cate)">{{cate}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="post_list">
       <router-view/>
    </div>
  </div>
</template>

<script scoped>
import { postData } from "./utils/data.js"
import { getAllCategories } from "./utils/datafilter.js"
export default {
  name: "App",
  data () {
    return {
    }
  },
  methods: {
    handleRouter: function (dir, categorie = "") {
      let path
     if (categorie) {
        path = `/${dir}?${dir}=${categorie}`
      } else {
        path = `/${dir}`
      }
      this.$router.push(path)
    }
  },
  computed: {
    categories: function () {
      return Array.from(new Set(getAllCategories(JSON.parse(postData))))
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  justify-content: flex-end;
  align-items: center;
}
.info_title {
  font-size: 12px;
}
.menu_bar{
  margin-top: 2rem;
}
.menu_bar_list {
  padding: 0px 10px;
}
.menu_bar_list .menu_tags{
  padding: 5px 10px;
  cursor: pointer;
  color: #35505b;
  margin: 1rem;
  font-weight: 100;
}
.menu_tags:hover{
  color: #5a8492;
  border-bottom:1px solid #5a8492;
}
.dropbtn {
    color:#35505b;
    padding: 16px;
    font-size: 16px;
    border: none;
    background: none;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    opacity: 0;
    position: absolute;
    min-width: 100%;
    z-index: 100;
}

.dropdown-content span{
    color: #5a8492;
    padding: 10px 16px;
    text-decoration: none;
    display: block;
    font-weight: 100;
    cursor: pointer;
    font-size: 1.2rem;
    text-align: right;
}
.dropdown-content span:hover{
    color: #35505b;
    border-bottom:1px solid #5a8492;
    padding-right:2rem;
    letter-spacing:1px;
    font-size: 1.3rem;
    transition: all 0.3s ease-out;
}

/* .dropdown-content a:hover {} */

.dropdown:hover .dropdown-content {opacity: 1;transition: all 0.4s ease-in-out;}

.dropdown:hover .dropbtn {color: #5a8492;}
</style>
