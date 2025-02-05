<script setup>
import { ref } from 'vue';

const testimonials = ref([
  {
    company: '知名服飾品牌',
    content: '在合作初期，我們針對網站結構、內容優化與外部連結進行了全方位調整。隨著策略的逐步推行，網站訪問量穩步上升，各關鍵指標均達到預期目標，進一步提升了品牌曝光與用戶互動。',
    position: '主理人'
  },
  {
    company: '某教育機構',
    content: '我們為客戶量身訂製了一系列SEO優化方案，從關鍵字規劃到內容調整，持續追蹤數據變化。結果顯示，重點課程頁面的曝光率大幅改善，招生成效也隨之顯現，讓整體行銷策略更具說服力。',
    position: '行銷長'
  }
]);

const faqs = ref([
  {
    question: 'SEO 見效速度要多久？',
    answer: '一般來說，3-4個月內才能看到明顯的排名提升，但具體時間會因關鍵字競爭度與市場環境而有所不同。'
  },
  {
    question: '如何監控和評估 SEO 成效？',
    answer: '我們提供定期且詳細的報告，涵蓋網站流量、關鍵字排名等指標，協助您隨時掌握成效。'
  },
  {
    question: 'SEO 優化需要投入多少預算？',
    answer: '預算會根據您的行業、競爭狀況以及具體優化需求而定，我們會根據個案提供量身定制的方案與報價。'
  },
  {
    question: '如果效果不佳，是否有退款保障？',
    answer: '我們對服務效果充滿信心，並提供效果保證政策；若達不到預期效果，將依具體條款進行調整或補救。'
  }
]);

const features = ref([
  {
    title: '關鍵字優化',
    description: '透過專業的關鍵字研究與分析，找出最具效益的目標關鍵字，優化網站內容以提升搜尋引擎排名。',
    icon: '🎯'
  },
  {
    title: '網站結構優化',
    description: '優化網站架構與技術層面，確保搜尋引擎能有效爬取與索引您的網站內容。',
    icon: '🔧'
  },
  {
    title: '內容策略',
    description: '制定專業的內容行銷策略，創作優質且具有價值的內容，提升網站權威性與自然流量。',
    icon: '📝'
  },
  {
    title: '數據分析',
    description: '持續監控與分析網站流量數據，優化SEO策略，確保達到最佳成效。',
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
          <span class="block text-indigo-600">SEO 優化服務</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          運用最新的SEO技術與策略，幫助您的網站在搜尋引擎中脫穎而出。我們的專業團隊將為您提供全方位的SEO優化服務，從技術層面到內容策略，確保您的網站能夠獲得更好的排名與持續增長的有效流量。
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
                  準備好提升您的網站排名了嗎？
                </h2>
                <p class="mt-4 text-lg leading-6 text-indigo-100">
                  立即與我們聯繫，讓專業的SEO團隊為您服務！
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

      <!-- Testimonials Section -->
      <div class="mt-20">
        <div class="lg:text-center mb-12">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">客戶見證</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            真實成功案例
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div v-for="testimonial in testimonials" :key="testimonial.company" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p class="text-gray-600 italic">"{{ testimonial.content }}"</p>
            <div class="mt-4">
              <p class="text-gray-500">{{ testimonial.position }} - {{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20">
        <div class="lg:text-center mb-12">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">常見問題</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            了解更多關於 SEO 優化
          </p>
        </div>
        <div class="space-y-8">
          <div v-for="faq in faqs" :key="faq.question" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-lg font-medium text-gray-900">{{ faq.question }}</h3>
            <p class="mt-2 text-gray-500">{{ faq.answer }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>