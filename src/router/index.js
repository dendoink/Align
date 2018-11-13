import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import About from '../pages/About'
import Tags from '../pages/Tags'
import pageroutes from './page'
import Post from '../pages/Post'
import Landing from '../pages/Landing'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Landing'
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/tags',
      name: 'Tags',
      component: Tags
    }, {
      path: '/categories',
      name: 'Categories',
      component: Categories
    }, {
      path: '/post',
      name: 'Post',
      component: Post,
      children: [
        ...pageroutes
      ]
    }
  ]
})
