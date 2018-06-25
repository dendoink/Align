<template>
  <div id="app">
    <div class="personal_info">
      <div class="avatar">
      </div>
      <div class="info_title">Wusu</div>
    </div>
    <div class="header">
      <div class="menu_bar">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" v-on:click="handleRouter('/')">Home</el-menu-item>
          <el-submenu index="2">
            <template slot="title">Category</template>
            <el-menu-item index="2-1">HTML5</el-menu-item>
            <el-menu-item index="2-2">JavaScript</el-menu-item>
            <el-menu-item index="2-3">React</el-menu-item>
            <el-menu-item index="2-3">Git</el-menu-item>
          </el-submenu>
          <el-menu-item v-on:click="handleRouter('/allposts')" index="3">
            All posts
          </el-menu-item>
          <el-menu-item index="4"  v-on:click="handleRouter('/about')">About</el-menu-item>
          <el-menu-item index="5" v-on:click="handleRouter('/contact')">Contact</el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleRouter: function (path) {
      // this.$route.push(path)
      this.$router.push(path)
    },
    handleSelect: function () {
      return false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.avatar{
  height: 6rem;
  width: 6rem;
  background-image: url('./assets/avatar.png');
  background-size: cover;
  display: block;
  border-radius: 50%;
  margin: auto;
}
.el-submenu__title{
  font-family: Arial, Helvetica, sans-serif;
}
.header .menu_bar, .personal_info{
  display: inline-block;
}
</style>
