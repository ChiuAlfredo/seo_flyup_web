<script setup>
import { ref } from 'vue';

const features = ref([
  {
    title: '工程師直營',
    description: '由專業工程師團隊提供一條龍服務，提供全方位搜尋引擎技術解析，協助您掌握市場趨勢。',
    icon: '💻'
  },
  {
    title: '實戰成效保證',
    description: '我們以先進技術為後盾，承諾交付實際成效，讓您只對有價值的服務買單。',
    icon: '✅'
  },
  {
    title: '數據全公開',
    description: '我們定期發布精細化的排名與流量報告，讓您第一時間掌握網站動態與成效數據。',
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
    question: '網站是否需要重新設計才能進行 SEO 優化？',
    answer: '並非必須，但一個結構合理、內容豐富的網站更有助於 SEO 效果。我們會根據現有網站狀況提出相應的改進建議。'
  },
  {
    question: 'SEO 優化後如何保持長期成效？',
    answer: 'SEO 是一個持續優化的過程，我們建議定期更新內容、調整策略並密切關注搜索引擎演算法變化，以確保長期成效。'
  },
  {
    question: '如果效果不佳，是否有退款保障？',
    answer: '我們對服務效果充滿信心，並提供效果保證政策；若達不到預期效果，將依具體條款進行調整或補救。'
  }
]);

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
  },
  {
    company: '知名寵物美容',
    content: '我們與客戶密切合作，針對市場動態及用戶行為進行數據監控。經過數輪優化後，網站流量與用戶互動均呈現穩健增長，進一步鞏固了品牌在國際市場上的競爭力。',
    position: '創辦人'
  },
  {
    company: '知名酒商',
    content: '在深入了解客戶需求後，我們從網站結構、內容品質及外部推廣等多角度入手，實現了搜索排名的穩定提升。持續的數據追蹤與策略調整，讓整體效益逐步顯現，為客戶帶來長期價值。',
    position: '市場主管'
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
            <span class="block">穩步提升網站排名</span>
            <span class="block text-indigo-600">不達標全額退費！</span>
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
              <RouterLink to="/services/seo" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
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
            <div v-for="testimonial in testimonials" :key="testimonial.company" class="bg-gray-50 p-6 rounded-lg shadow">
              <p class="text-gray-600 italic">"{{ testimonial.content }}"</p>
              <div class="mt-4">
                <!-- <p class="font-medium text-gray-900">{{ testimonial.name }}</p> -->
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