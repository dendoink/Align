<template>
  <div class="gallery-container">
    <div class="gallery-header">
      <div class="logo">
        <span class="name">Dendoink</span>
        <span class="text">Photography</span>
      </div>
    </div>
    <div class="gallery-photo-container">
      <div class="photo-list">
        <div class="single-photo-parent">
          <img
            data-v-54c1ae8e=""
            src="http://ww1.sinaimg.cn/large/88b26e1cgy1fy6fmcsh4zj22ep30d1kz.jpg"
            alt="[译]Devtools tips day11 :style editors continued"
            class="img-responsive"
          >
          <div class="photo-info">
            <span>tag1</span>
            <span>tag2</span>
            <span>tag3</span>
          </div>
        </div>
        <div class="single-photo-parent">
          <img
            data-v-54c1ae8e=""
            src="http://ww1.sinaimg.cn/large/88b26e1cgy1fy6fmcsh4zj22ep30d1kz.jpg"
            alt="[译]Devtools tips day11 :style editors continued"
            class="img-responsive"
          >
        </div>
        <div class="single-photo-parent">
          <img
            data-v-54c1ae8e=""
            src="http://ww1.sinaimg.cn/large/88b26e1cgy1fy6fmcsh4zj22ep30d1kz.jpg"
            alt="[译]Devtools tips day11 :style editors continued"
            class="img-responsive"
          >
        </div>
        <div class="single-photo-parent">
          <img
            data-v-54c1ae8e=""
            src="http://ww1.sinaimg.cn/large/88b26e1cgy1fy6fmcsh4zj22ep30d1kz.jpg"
            alt="[译]Devtools tips day11 :style editors continued"
            class="img-responsive"
          >
        </div>
        <div class="single-photo-parent">
          <img
            data-v-54c1ae8e=""
            src="http://ww1.sinaimg.cn/large/88b26e1cgy1fy6fmcsh4zj22ep30d1kz.jpg"
            alt="[译]Devtools tips day11 :style editors continued"
            class="img-responsive"
          >
        </div>
        <div class="single-photo-parent">
          <img
            data-v-54c1ae8e=""
            src="http://ww1.sinaimg.cn/large/88b26e1cgy1fy6fmcsh4zj22ep30d1kz.jpg"
            alt="[译]Devtools tips day11 :style editors continued"
            class="img-responsive"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  // 主页
  name: "Gallery",
  props: {},
  data() {
    return {
      thirdColumnPosts: []
    };
  },
  computed: {
    allPosts: function() {
      return {};
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
  created() {}
};
</script>

<style scoped>
.gallery-container {
  margin-top: 3rem;
  padding: 2rem 3rem;
}
.gallery-header {
  margin-bottom: 2rem;
}
.gallery-header .logo {
  color: #000000;
}
.gallery-photo-container {
  display: flex;
}
.gallery-header .logo .name {
  display: block;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 2px;
}
.gallery-header .logo .text {
  display: block;
  text-transform: uppercase;
  font-size: 0.55rem;
  letter-spacing: 8.6px;
  opacity: 0.3;
}
.photo-list {
  max-width: 33%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.photo-list .single-photo-parent {
  display: inline-block;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.single-photo-parent img {
  height: auto;
  max-width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-top-right-radius: calc(0.25rem - 1px);
  border-top-left-radius: calc(0.25rem - 1px);
}

.single-photo-parent:hover {
  -webkit-box-shadow: 0 18px 32px -18px #000;
  box-shadow: 0 18px 32px -18px #000;
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}
.single-photo-parent .photo-info {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
  border: 1px solid #cccccc75;
  padding: 1rem 2rem;
  display: flex;
  opacity: 0;
  justify-content: space-between;
}

.single-photo-parent:hover .photo-info {
  display: flex;
  opacity: 1;
  cursor: pointer;
}
</style>
