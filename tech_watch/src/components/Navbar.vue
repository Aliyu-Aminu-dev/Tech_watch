<template>
  <nav class="bg-white shadow-md fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-2xl font-bold text-blue-600">
            Tech Watch
          </router-link>
        </div>

        <!-- Links -->
        <div class="hidden md:flex space-x-6 items-center">
          <router-link to="/" class="text-gray-700 hover:text-blue-600">Home</router-link>
          <router-link to="/blog" class="text-gray-700 hover:text-blue-600">Blog</router-link>
          <router-link to="/about" class="text-gray-700 hover:text-blue-600">About</router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-700 hover:text-blue-600 focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-white shadow-md">
      <router-link to="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</router-link>
      <router-link to="/blog" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blog</router-link>
      <router-link to="/about" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
</script>
