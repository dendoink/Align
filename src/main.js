// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import Landing from './Landing'
import router from './router';
import './assets/docs.scss';
// 不关心打包体积时一次引入全部图标
import 'vue-awesome/icons';
/* 任选一种注册组件的方式 */
import Icon from 'vue-awesome/components/Icon';
import moment from 'moment';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.prototype.$moment = moment;
Vue.use(iView);
// 全局注册（在 `main .js` 文件中）
Vue.component('awesome-icon', Icon);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
