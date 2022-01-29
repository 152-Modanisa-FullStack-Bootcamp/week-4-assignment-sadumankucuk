import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home";
import Watch from "@/views/Watch";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'watch',
    path: "/watch",
    component: Watch
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
