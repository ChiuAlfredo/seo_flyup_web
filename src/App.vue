<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <RouterLink to="/home" class="text-xl font-bold text-indigo-600">確克</RouterLink>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <RouterLink to="/home" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900" active-class="border-b-2 border-indigo-500 text-indigo-600">首頁</RouterLink>
              <RouterLink to="/about" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900" active-class="border-b-2 border-indigo-500">關於我們</RouterLink>
              <RouterLink to="/services" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900" active-class="border-b-2 border-indigo-500">服務項目</RouterLink>
              <RouterLink to="/contact" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900" active-class="border-b-2 border-indigo-500">聯絡我們</RouterLink>
            </div>
          </div>

          <div class="-mr-2 flex items-center sm:hidden">
            <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">開啟選單</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="isMenuOpen" class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <RouterLink to="/home" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" active-class="bg-indigo-50 border-l-4 border-indigo-500 text-indigo-700">首頁</RouterLink>
          <RouterLink to="/about" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" active-class="bg-indigo-50 border-l-4 border-indigo-500 text-indigo-700">關於我們</RouterLink>
          <RouterLink to="/services" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" active-class="bg-indigo-50 border-l-4 border-indigo-500 text-indigo-700">服務項目</RouterLink>
          <RouterLink to="/contact" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" active-class="bg-indigo-50 border-l-4 border-indigo-500 text-indigo-700">聯絡我們</RouterLink>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main>
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="mt-8 md:mt-0">
          <p class="text-center text-base text-gray-400">&copy; 2025 確克行銷整合有限公司. 版權所有.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
