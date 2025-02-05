<script setup>
import { ref } from 'vue';

const features = ref([
  {
    title: '社群媒體行銷',
    description: '專業的社群媒體經營與內容策劃，建立品牌形象，提升粉絲互動與轉換率。',
    icon: '📱'
  },
  {
    title: '內容行銷',
    description: '製作優質且吸引人的內容，透過故事行銷與價值傳遞，提升品牌知名度。',
    icon: '✍️'
  },
  {
    title: '廣告投放',
    description: '精準的廣告投放策略，針對目標受眾進行最佳化行銷，提高投資報酬率。',
    icon: '🎯'
  },
  {
    title: '成效分析',
    description: '全方位的數據追蹤與分析，持續優化行銷策略，確保行銷效益最大化。',
    icon: '📊'
  }
]);
</script>

<template>
  <div class="min-h-screen py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block">專業的</span>
          <span class="block text-indigo-600">數位行銷服務</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          運用創新的數位行銷策略，幫助您的品牌在數位時代脫穎而出。
        </p>
      </div>

      <!-- Features Section -->
      <div class="mt-20">
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          <div v-for="feature in features" :key="feature.title" class="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <div class="flex-shrink-0">
                <span class="text-4xl">{{ feature.icon }}</span>
              </div>
              <h3 class="ml-4 text-2xl font-bold text-gray-900">{{ feature.title }}</h3>
            </div>
            <p class="text-gray-500 text-lg">
              {{ feature.description }}
            </p>
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
                  準備好提升您的品牌影響力了嗎？
                </h2>
                <p class="mt-4 text-lg leading-6 text-indigo-100">
                  立即與我們聯繫，讓專業的數位行銷團隊為您服務！
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