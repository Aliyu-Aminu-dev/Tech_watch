<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section class="bg-white shadow-sm py-12 text-center">
      <h1 class="text-4xl font-bold text-gray-800">Our Blog</h1>
      <p class="mt-2 text-gray-600">Insights, tutorials, and stories</p>
    </section>

    <!-- Blog Grid -->
    <section class="max-w-6xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :body="post.body"
        :id="post.id"
      />
    </section>
  </div>
</template>

<script setup>
import { usePostsStore } from '../store/posts'
import { onMounted } from 'vue'
import PostCard from '../components/PostCard.vue'

const store = usePostsStore()
onMounted(() => store.fetchPosts())
const posts = store.posts
</script>
