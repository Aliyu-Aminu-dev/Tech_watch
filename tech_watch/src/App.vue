<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <div class="pt-16">
    <RouterView />
  </div>
</template>
