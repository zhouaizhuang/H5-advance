import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./common.css"
import "./utils/px2rem.js"
Vue.config.productionTip = false
// 使用自定义指令
import Directives from "./directives/index.js"
Vue.use(Directives)
// import {url2JSON, JSON2url} from "./common"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
