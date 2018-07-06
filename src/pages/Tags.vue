<template>
  <div>
    <div class="container">
      <nav class="Tag-nav">
        <template v-for="tags in sliceTags">
          <ul :style="{'justify-content' : tags.length === 7 ? 'space-around' : 'flex-start'}" class="Tag-ul" :key="tags">
            <li v-for="tag in tags" :key="tag">
              <span @click="select(tag)">{{ tag }}</span>
            </li>
          </ul>
        </template>
      </nav>
      <hr>
      <PostList v-bind:defaultTag="this.selectedTag"/>
    </div>
  </div>
</template>

<script>
import { postData } from "../utils/data.js"
import { getAllTags, sliceArray } from "../utils/datafilter.js"
export default {
  name: 'Tags',
  data () {
    return {
      sliceTags: sliceArray(getAllTags(JSON.parse(postData))),
      selectedTag: 'Git'
    }
  },
  components: {
    PostList: () => import('../components/PostList')
  },
  methods:{
    select: function(tag){
      this.selectedTag = tag
    }
  }
}
</script>

<style scoped>
.post_list{
  margin-top: 6rem;
}
.container{
  font-family: 'Lato', sans-serif;
  max-width: 800px;
  width: 800px;
  margin: 0 auto;
  position: relative;
}
.Tag-nav {
    text-align: left;
    list-style: none;
    margin: 0px auto;
    margin-top: 2em;   
    padding: 10px 0px;
    width: 100%;
}
.Tag-nav ul {
    padding: 0 !important;
    display: flex;
    justify-content: space-around;
}
.Tag-nav ul li {
    display: inline;
}
.Tag-nav ul li > span {
    text-decoration: none;
    text-align: center;
    position: relative;
    color: #000;
    padding: 10px 20px;
    width: 104%;
    z-index: 1;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 100;
}
.Tag-nav li > span:hover {color: #fff;border: none;}
.Tag-nav li:first-child > span:after {background-color: #3498db;}
.Tag-nav li:nth-child(2) > span:after {background-color: #ffd071;}
.Tag-nav li:nth-child(3) > span:after {background-color: #f0776c;}
.Tag-nav li:nth-child(4) > span:after {background-color: #343a40;}
.Tag-nav li:nth-child(5) > span:after {background-color: #17a2b8;}
.Tag-nav li:nth-child(6) > span:after {background-color: #dc3545;}
.Tag-nav li:nth-child(7) > span:after {background-color: #1abc9c;}
/*------ Tag-nav ------*/
.Tag-nav li:first-child > span {color:#3498db;}
.Tag-nav li:nth-child(2) > span {color: #ffd071;}
.Tag-nav li:nth-child(3) > span {color: #f0776c;}
.Tag-nav li:nth-child(4) > span {color: #343a40;}
.Tag-nav li:nth-child(5) > span {color: #17a2b8;}
.Tag-nav li:nth-child(6) > span {color: #dc3545;}
.Tag-nav li:nth-child(7) > span {color: #1abc9c;}

.Tag-nav li > span:after {
    content: "";
    position: absolute;
    left: 40px;
    width: 10%;
    height: 3px;
    opacity: 0; 
    top: 45px;
}
.Tag-nav ul li:hover span:first-child {color: #fff;z-index: 1;}
.Tag-nav ul li:hover span:nth-child(2) {color: #fff;z-index: 1;}
.Tag-nav ul li:hover span:nth-child(3) {color: #fff;z-index: 1;}
.Tag-nav ul li:hover span:last-child {color: #fff;z-index: 1;}
.Tag-nav li > span:hover:after {
  content: "";
  height: 118%;
  top: -4px;
  left: 0;
  opacity: 1;
  width: 100%;
  z-index: -1;
	transition: all 0.2s ease;
}
</style>
