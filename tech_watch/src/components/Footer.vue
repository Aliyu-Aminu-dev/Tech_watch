<template>
  <footer class="bg-gray-900 text-gray-300 py-12 mt-12">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-2xl font-bold text-white mb-2">Let’s get started on something great</h2>
        <p class="mb-4">Join over 4,000+ startups already growing with Tech Watch.</p>
        <div class="space-x-4">
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Chat to us</button>
          <button class="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200">Get started</button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold text-white mb-2">Product</h3>
          <ul class="space-y-1">
            <li><router-link to="/blog">Overview</router-link></li>
            <li><router-link to="/blog">Features</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-white mb-2">Company</h3>
          <ul class="space-y-1">
            <li><router-link to="/about">About us</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center mt-8 text-sm text-gray-500">
      © 2026 Tech Watch. All rights reserved.
    </div>
  </footer>
</template>
