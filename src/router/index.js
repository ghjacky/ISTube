import VueRouter from 'vue-router'
import { MainPageRouter } from './home'
import Vue from 'vue'

Vue.use(VueRouter)

export const constantRoutes = [
  MainPageRouter
]

export const router = new VueRouter({
  routes: constantRoutes,
  mode: 'history'
})