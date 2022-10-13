import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./common.css"
import "./utils/px2rem.js"
import Directives from "./directives/index.js"
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import GlobalCommponent from "./globalComponents/index.js"
import Print from "./utils/print.js"
import Network from "./utils/network.js"
import * as Z from './common.js'
import SlideVerify from 'vue-monoplasty-slide-verify'
// import * as echarts from 'echarts'
Vue.config.productionTip = false
Vue.use(Directives) // 引入自定义指令
Vue.use(ViewUI) // 引入iview
Vue.use(GlobalCommponent) // 批量注册全局组件
Vue.use(Print) // 引入打印功能
Vue.use(Network) // axios全局挂载vue实例
Vue.prototype.$Z = Z // 全局挂载自定义函数库
Z.reWriteLog() // 关闭生产环境的console.log
Vue.use(SlideVerify) // 极验验证
Vue.config.ignoredElements = ['wx-open-launch-weapp']
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
