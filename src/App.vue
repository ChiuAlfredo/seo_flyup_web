<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const isServicesDropdownOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const showServicesDropdown = () => {
  isServicesDropdownOpen.value = true;
};

const hideServicesDropdown = () => {
  isServicesDropdownOpen.value = false;
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <RouterLink to="/home" class="text-xl font-bold text-indigo-600">確克</RouterLink>
            </div>
            <div class="hidden sm:ml-8 sm:flex sm:items-center sm:space-x-8">
              <RouterLink to="/home" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600" active-class="text-indigo-600 border-indigo-600">首頁</RouterLink>
              <RouterLink to="/about" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600" active-class="text-indigo-600 border-indigo-600">關於我們</RouterLink>
              <!-- Services Dropdown -->
              <div class="relative" @mouseover="showServicesDropdown" @mouseleave="hideServicesDropdown">
                <span class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 group cursor-pointer" active-class="text-indigo-600 border-indigo-600">
                  服務項目
                  <svg class="ml-1 w-4 h-4 transition-transform" :class="{ 'rotate-180': isServicesDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div v-if="isServicesDropdownOpen" class="absolute z-10 left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 -mt-0.5">
                  <RouterLink to="/services/seo" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">SEO 優化</RouterLink>
                  <span class="block px-4 py-2 text-sm text-gray-400">網站開發</span>
                  <span class="block px-4 py-2 text-sm text-gray-400">數位行銷</span>
                  <span class="block px-4 py-2 text-sm text-gray-400">系統整合</span>
                </div>
              </div>
              <RouterLink to="/contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600" active-class="text-indigo-600 border-indigo-600">聯絡我們</RouterLink>
            </div>
          </div>

          <div class="-mr-2 flex items-center sm:hidden">
            <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
          <RouterLink to="/home" @click="isMenuOpen = false" class="block px-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" active-class="text-indigo-600 bg-indigo-50">首頁</RouterLink>
          <RouterLink to="/about" @click="isMenuOpen = false" class="block px-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" active-class="text-indigo-600 bg-indigo-50">關於我們</RouterLink>
          <div class="space-y-1">
            <RouterLink to="/services" @click="isMenuOpen = false" class="block px-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" active-class="text-indigo-600 bg-indigo-50">服務項目</RouterLink>
            <RouterLink to="/services/seo" @click="isMenuOpen = false" class="block pl-8 pr-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">SEO 優化</RouterLink>
            <span class="block pl-8 pr-4 py-2 text-sm font-medium text-gray-400">網站開發</span>
            <span class="block pl-8 pr-4 py-2 text-sm font-medium text-gray-400">數位行銷</span>
            <span class="block pl-8 pr-4 py-2 text-sm font-medium text-gray-400">系統整合</span>
          </div>
          <RouterLink to="/contact" @click="isMenuOpen = false" class="block px-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" active-class="text-indigo-600 bg-indigo-50">聯絡我們</RouterLink>
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
