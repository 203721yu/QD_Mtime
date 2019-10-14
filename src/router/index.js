import Vue from 'vue'
import Router from 'vue-router'

//引入头部
import Home from "./home"
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    Home
  ]
})
