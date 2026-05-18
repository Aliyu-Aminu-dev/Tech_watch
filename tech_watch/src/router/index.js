import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../pages/Blog.vue'
import Post from '../pages/Post.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Blog },
  { path: '/post/:id', component: Post },
  { path: '/about', component: About }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
