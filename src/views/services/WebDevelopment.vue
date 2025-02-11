<script setup>
import { ref } from 'vue';

const features = ref([
  {
    title: '響應式設計',
    description: '打造完美適配各種裝置的網站，從手機、平板到桌面電腦，提供最佳的使用者體驗。',
    icon: '📱'
  },
  {
    title: '客製化開發',
    description: '根據您的業務需求，量身打造獨特的網站功能與設計，展現品牌特色。',
    icon: '⚙️'
  },
  {
    title: '效能優化',
    description: '採用最新技術架構，確保網站載入速度快速，提供流暢的瀏覽體驗。',
    icon: '⚡'
  },
  {
    title: '安全防護',
    description: '實施完整的資安防護措施，保護您的網站與用戶資料安全。',
    icon: '🔒'
  }
]);
</script>

<template>
  <div class="min-h-screen py-16 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block">專業的</span>
          <span class="block text-indigo-600">網站開發服務</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          運用最新的網站開發技術，為您打造專業、高效能且安全的網站。
        </p>
      </div>

      <!-- Features Section -->
      <div class="mt-20">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="feature in features" :key="feature.title" class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <span class="text-3xl mr-3">{{ feature.icon }}</span>
              <h3 class="text-xl font-bold text-gray-900">{{ feature.title }}</h3>
            </div>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-20">
        <div class="bg-indigo-600 rounded-lg shadow-xl overflow-hidden">
          <div class="px-6 py-12 max-w-7xl mx-auto sm:px-12 lg:px-16 lg:py-16">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div class="lg:col-span-2 text-center">
                <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  準備好打造您的專業網站了嗎？
                </h2>
                <p class="mt-4 text-lg leading-6 text-indigo-100">
                  立即與我們聯繫，讓專業的網站開發團隊為您服務！
                </p>
                <div class="mt-8">
                  <div class="inline-flex rounded-md shadow">
                    <RouterLink to="/contact" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10">
                      免費諮詢
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>