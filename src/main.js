// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
//配置axios
Axios.defaults.baseURL = 'http://wwww.sinya.online/api/';
Vue.prototype.$axios = Axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
