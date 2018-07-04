<template>
  <div>
    <div class="container">
      <nav class="category-nav">
          <ul class="category-ul">
            <li v-for="categorie in categories" :key="categorie">
              <span @click="select(categorie)">{{ categorie }}</span>
            </li>
          </ul>
      </nav>
      <hr>
      <PostList v-bind:defaultCate="this.selectedCategories"/>
    </div>
  </div>
</template>

<script>
import { postData } from "../utils/data.js"
import { getAllCategories } from "../utils/datafilter.js"
export default {
  name: 'Categories',
  data () {
    return {
      categories: getAllCategories(JSON.parse(postData)),
      selectedCategories: 'HTML5'
    }
  },
  components: {
    PostList: () => import('../components/PostList')
  },
  methods:{
    select: function(categorie){
      this.selectedCategories = categorie
    }
  }
}
</script>

<style scoped>
.container{
  font-family: 'Lato', sans-serif;
}
.category-nav {
    text-align: left;
    list-style: none;
    margin: 0px auto;
    margin-top: 2em;   
    padding: 10px 0px;
    width: 100%;
}
.category-nav ul {
    padding: 0 !important;
    display: initial;
}
.category-nav ul li {
    display: inline;
}
.category-nav ul li > span {
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
.category-nav li > span:hover {color: #fff;border: none;}
.category-nav li:first-child > span:after {background-color: #3498db;}
.category-nav li:nth-child(2) > span:after {background-color: #ffd071;}
.category-nav li:nth-child(3) > span:after {background-color: #f0776c;}
.category-nav li:last-child > span:after {background-color: #1abc9c;}
/*------ category-nav ------*/
.category-nav li:first-child > span {color:#3498db;}
.category-nav li:nth-child(2) > span {color: #ffd071;}
.category-nav li:nth-child(3) > span {color: #f0776c;}
.category-nav li:last-child > span {color: #1abc9c;}

.category-nav li > span:after {
    content: "";
    position: absolute;
    left: 40px;
    width: 10%;
    height: 3px;
    opacity: 0; 
    top: 45px;
}
.category-nav ul li:hover span:first-child {color: #fff;z-index: 1;}
.category-nav ul li:hover span:nth-child(2) {color: #fff;z-index: 1;}
.category-nav ul li:hover span:nth-child(3) {color: #fff;z-index: 1;}
.category-nav ul li:hover span:last-child {color: #fff;z-index: 1;}
.category-nav li > span:hover:after {
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
