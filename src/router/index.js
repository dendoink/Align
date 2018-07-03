import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import About from '../pages/About'
import Tags from '../pages/Tags'
import pageroutes from './page'
// import { routes } from '../utils/data'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
    },
    ...pageroutes
  ]
})
