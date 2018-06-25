import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Allposts from '../pages/allposts'
import About from '../pages/about'
import Contact from '../pages/contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/allposts',
      name: 'Allposts',
      component: Allposts
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
