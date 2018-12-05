<template>
  <div>
    <div class="container">
      <div class="cate_header">
        <span class="cate_title">{{categories}}</span>
        <hr>
      </div>
      <PostList v-bind:defaultCate="this.categories" />
    </div>
  </div>
</template>

<script>
export default {
  // Tags
  name: "Categories",
  components: {
    PostList: () => import("../components/PostList")
  },
  data() {
    return {
      categories: this.$route.query.categories
    };
  },
  watch: {
    $route(to, from) {
      if (to.query.categories !== from.query.categories) {
        this.categories = to.query.categories;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.container {
  font-family: "Lato", sans-serif;
  max-width: 800px;
  width: 800px;
  margin: 2rem auto;
  position: relative;
}
.cate_header {
  text-align: left;
}
.cate_title {
  text-align: left;
  letter-spacing: 2px;
  color: #ffd071;
  padding: 0.5rem;
  font-weight: 100;
  cursor: pointer;
  font-size: 2.5rem;
}

.cate_title:hover {
  background: #ffd071;
  color: #ffffff;
}
</style>
