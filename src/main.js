// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Moment from 'moment' //格式化日期插件
Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/public.css'
import './assets/css/style.css'


Vue.use(MintUI)
//配置axios
Axios.defaults.baseURL = 'https://www.fastmock.site/mock/c9c674b358c99605ec70c0e21a1f340c/api';
Vue.prototype.$axios = Axios

//格式化时间
Vue.filter("coverTime",function(data,formatStr){
  return Moment(data).format(formatStr);
})

//注册全局组件
import NavBar from "@/components/Common/navbar"
Vue.component(NavBar.name,NavBar);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
