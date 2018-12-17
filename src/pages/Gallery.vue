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
        <div class="single-photo-parent" v-for="(item,index) in firstColumnPhotos" :key="index">
          <img :src="item.url" :alt="item.description" class="img-responsive">
          <div class="photo-info">
            <span
              v-for="(tag,index)
              in
              item.tags"
              :key="`${tag}-${index}`"
            >{{tag}}</span>
          </div>
        </div>
      </div>
      <div class="photo-list">
        <div class="single-photo-parent" v-for="(item,index) in secondColumnPhotos" :key="index">
          <img :src="item.url" :alt="item.description" class="img-responsive">
          <div class="photo-info">
            <span
              v-for="(tag,index)
              in
              item.tags"
              :key="`${tag}-${index}`"
            >{{tag}}</span>
          </div>
        </div>
      </div>
      <div class="photo-list">
        <div class="single-photo-parent" v-for="(item,index) in thirdColumnPhotos" :key="index">
          <img :src="item.url" :alt="item.description" class="img-responsive">
          <div class="photo-info">
            <span
              v-for="(tag,index)
              in
              item.tags"
              :key="`${tag}-${index}`"
            >{{tag}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { photoData } from "../utils/photoData";
export default {
  // 主页
  name: "Gallery",
  props: {},
  data() {
    return {
      firstColumnPhotos: [],
      secondColumnPhotos: [],
      thirdColumnPhotos: []
    };
  },
  computed: {},
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
  created() {
    if (photoData) {
      for (let x = 0; x < photoData.length; x += 3) {
        if (photoData[x]) {
          this.firstColumnPhotos.push(photoData[x]);
        }
        if (photoData[x + 1]) {
          this.secondColumnPhotos.push(photoData[x + 1]);
        }
        if (photoData[x + 2]) {
          this.thirdColumnPhotos.push(photoData[x + 2]);
        }
      }
    }
  }
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
  justify-content: space-around;
  color: #cccccc;
}

.single-photo-parent:hover .photo-info {
  display: flex;
  opacity: 1;
  cursor: pointer;
}
.photo-info span {
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid #ffffff;
  font-size: 0.8rem;
}
.single-photo-parent:hover span {
  border-bottom-color: #cccccc;
  color: #8d8d8d;
}
</style>
