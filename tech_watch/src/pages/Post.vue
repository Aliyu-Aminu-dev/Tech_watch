<template>
  <div class="max-w-3xl mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ post?.title }}</h1>
    <p class="text-gray-600 leading-relaxed">{{ post?.body }}</p>
    <router-link
      to="/blog"
      class="mt-6 inline-block text-blue-600 hover:text-blue-800"
    >
      ← Back to Blog
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePostsStore } from '../store/posts'
import { computed, onMounted } from 'vue'

const route = useRoute()
const store = usePostsStore()

onMounted(() => {
  if (!store.posts.length) {
    store.fetchPosts()
  }
})

const post = computed(() =>
  store.posts.find(p => p.id === parseInt(route.params.id))
)
</script>
