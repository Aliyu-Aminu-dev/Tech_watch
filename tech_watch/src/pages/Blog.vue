<script setup>
import { usePostsStore } from '../store/posts'
import PostCard from '../components/PostCard.vue'
import Footer from '../components/Footer.vue'

const store = usePostsStore()
const posts = store.posts
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Featured Post -->
    <section class="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
      <img src="/src/assets/featured.jpg" alt="Featured" class="rounded-lg shadow-md w-full h-80 object-cover" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-4">
          Breaking Into Product Design: Advice from Untitled Founder, Frankie
        </h1>
        <p class="text-gray-600 mb-6">
          You don’t need a fancy Bachelor’s Degree to get into Product Design. We sat down with Frankie Sullivan to talk about gatekeeping in product design and how anyone can get into this growing industry.
        </p>
        <router-link to="/post/1" class="text-blue-600 font-semibold hover:text-blue-800">
          Read More →
        </router-link>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <PostCard
  v-for="post in posts"
  :key="post.id"
  :id="post.id"
  :title="post.title"
  :body="post.body"
  :image="post.image"
  :author="post.author"
  :date="post.date"
/>

    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>
