import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//加载通用样式main.scss文件
import "./stylesheets/main.scss"
//引入rem文件
import "./modules/rem"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
