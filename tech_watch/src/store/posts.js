import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore('posts', {
  state: () => ({ posts: [] }),
  actions: {
    async fetchPosts() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts = res.data
    }
  }
})
