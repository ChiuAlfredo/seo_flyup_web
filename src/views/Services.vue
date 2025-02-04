<script setup>
import { ref } from 'vue';

const services = ref([
  {
    title: '網站開發',
    description: '打造專業的企業網站，提供最佳的用戶體驗和功能性。',
    icon: '💻'
  },
  {
    title: '數位行銷',
    description: '全方位的數位行銷策略，幫助您的品牌在線上市場脫穎而出。',
    icon: '📱'
  },
  {
    title: '系統整合',
    description: '專業的系統整合服務，優化您的業務流程。',
    icon: '🔄'
  },
  {
    title: '技術諮詢',
    description: '提供專業的技術諮詢服務，協助您做出最佳的技術決策。',
    icon: '📊'
  }
]);
</script>

<template>
  <div class="min-h-screen py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center mb-16">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">我們的服務</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          全方位解決方案
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          為您的企業提供最完整的數位化服務，助您在競爭中保持領先。
        </p>
      </div>

      <div class="mt-10">
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          <div v-for="service in services" :key="service.title" class="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <div class="flex-shrink-0">
                <span class="text-4xl">{{ service.icon }}</span>
              </div>
              <h3 class="ml-4 text-2xl font-bold text-gray-900">{{ service.title }}</h3>
            </div>
            <p class="text-gray-500 text-lg">
              {{ service.description }}
            </p>
            <div class="mt-6">
              <a href="/contact" class="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                了解更多
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action Section -->
      <div class="mt-20 text-center">
        <h3 class="text-3xl font-extrabold text-gray-900">準備開始您的數位轉型之旅？</h3>
        <p class="mt-4 text-xl text-gray-500">
          聯繫我們，讓我們一起討論如何幫助您的企業成長。
        </p>
        <div class="mt-8">
          <a href="/contact" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10">
            立即諮詢
          </a>
        </div>
      </div>
    </div>
  </div>
</template>