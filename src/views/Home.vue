<script setup>
import { ref } from 'vue';

const features = ref([
  {
    title: '工程師直做',
    description: '由專業工程師團隊執行，深入了解搜尋引擎技術層面。',
    icon: '💻'
  },
  {
    title: '120天保證',
    description: '120天不達標全額退費，讓您的投資零風險。',
    icon: '✅'
  },
  {
    title: '透明報告',
    description: '定期提供詳細的排名和流量報告，讓您掌握最新進度。',
    icon: '📊'
  }
]);

const services = ref([
  {
    title: '網站結構優化',
    description: '優化網站架構，提升搜尋引擎友好度',
    icon: '🔧'
  },
  {
    title: '關鍵字研究',
    description: '精準鎖定最具價值的目標關鍵字',
    icon: '🎯'
  },
  {
    title: '連結策略',
    description: '建立高品質的自然連結，提升網站權重',
    icon: '🔗'
  },
  {
    title: '內容優化',
    description: '優化網站內容，提升關鍵字排名',
    icon: '📝'
  }
]);

const faqs = ref([
  {
    question: 'SEO 見效速度要多久？',
    answer: '一般來說，3-4個月內可以看到明顯的排名提升，但具體時間會因關鍵字競爭度而異。'
  },
  {
    question: '排名能否保證一定穩定在前幾名？',
    answer: 'SEO排名會因競爭度與演算法更新而有所波動，但我們會持續優化以維持穩定排名。'
  },
  {
    question: '若120天內沒達標，如何退費？',
    answer: '若未達到約定的排名目標，我們將全額退還您的投資，過程簡單透明。'
  },
  {
    question: '中途想終止合作怎麼辦？',
    answer: '我們提供彈性的合作方案，可隨時討論調整或終止合作。'
  }
]);

const testimonials = ref([
  {
    name: '王小明',
    company: '電商平台',
    content: '透過SEO優化後，我們的網站流量增加了300%，轉換率也明顯提升。',
    position: '營運長'
  },
  {
    name: '李美玲',
    company: '教育機構',
    content: '專業的團隊、即時的回應，讓我們在短時間內就看到了成效。',
    position: '行銷總監'
  }
]);
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <div class="bg-gray-50 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block">4個月快速衝高您的網站排名</span>
            <span class="block text-indigo-600">120天不達標全額退費！</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            工程師直做 + 透明報告 + 全程保證，讓您輕鬆擁有穩定流量。
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <RouterLink to="/contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                立即免費諮詢
              </RouterLink>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <RouterLink to="/services" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                了解服務內容
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">為什麼選擇我們</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            專業團隊，值得信賴
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            我們擁有專業的技術團隊，提供最完整的SEO優化服務。
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.title" class="relative">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <span class="text-4xl">{{ feature.icon }}</span>
                </div>
                <div>
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    {{ feature.title }}
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    {{ feature.description }}
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">服務項目</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            完整的SEO優化方案
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            從網站結構到內容優化，我們提供全方位的SEO服務。
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="service in services" :key="service.title" class="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="text-center">
                <span class="text-4xl">{{ service.icon }}</span>
                <h3 class="mt-4 text-lg font-medium text-gray-900">{{ service.title }}</h3>
                <p class="mt-2 text-base text-gray-500">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">客戶見證</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            真實成功案例
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-gray-50 p-6 rounded-lg shadow">
              <p class="text-gray-600 italic">"{{ testimonial.content }}"</p>
              <div class="mt-4">
                <p class="font-medium text-gray-900">{{ testimonial.name }}</p>
                <p class="text-gray-500">{{ testimonial.position }} - {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">常見問題</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            您想了解的都在這裡
          </p>
        </div>

        <div class="mt-10">
          <div class="space-y-6">
            <div v-for="faq in faqs" :key="faq.question" class="bg-white p-6 rounded-lg shadow">
              <h3 class="text-lg font-medium text-gray-900">{{ faq.question }}</h3>
              <p class="mt-2 text-base text-gray-500">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final CTA Section -->
    <div class="py-12 bg-indigo-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            準備好提升您的網站排名了嗎？
          </h2>
          <p class="mt-4 text-xl text-indigo-100">
            立即預約免費諮詢，獲得專業的SEO診斷建議。
          </p>
          <div class="mt-8">
            <RouterLink to="/contact" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10">
              立即聯繫我們
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>