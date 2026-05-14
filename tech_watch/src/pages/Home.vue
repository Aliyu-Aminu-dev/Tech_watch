<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section class="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 class="text-5xl font-bold text-blue-700">Welcome to Tech Watch</h1>
      <p class="mt-4 text-lg">Your daily dose of tech insights and tutorials</p>
      <router-link
        to="/blog"
        class="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
      >
        Explore Blog →
      </router-link>
    </section>
  </div>
</template>
