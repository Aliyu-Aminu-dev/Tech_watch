<template>
  <div>
    <h1 class="text-2xl font-bold">Blog Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { usePostsStore } from '../store/posts'
import { onMounted } from 'vue'

const store = usePostsStore()
onMounted(() => store.fetchPosts())
const posts = store.posts
</script>
