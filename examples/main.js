import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入组件库
// import '../lib/index.css'
// import  votreDieu from '../lib/index.umd.min.js'
import  votreDieu from '../packages'
// 注册组件库
Vue.use( votreDieu )
new Vue({
  render: h => h(App)
}).$mount('#app')
