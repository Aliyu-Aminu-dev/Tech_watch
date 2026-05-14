<template>
  <div class="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col">
    <img :src="image" alt="Post image" class="w-full h-40 object-cover" />
    <h2 class="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{{ title }}</h2>
    <p class="text-gray-600 flex-grow line-clamp-3">{{ body }}</p>
    <router-link
      :to="`/post/${id}`"
      class="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800"
    >
      Read More →
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  body: String,
  image: String,   // ✅ add image prop
  author: String,  // optional if you want to show author
  date: String     // optional if you want to show date
})
</script>
