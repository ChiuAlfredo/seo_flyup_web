<script setup>
import { ref } from 'vue';

const whyNeedSeo = ref([
  {
    title: '提升品牌曝光率',
    content: '大多數線上體驗都始於搜尋引擎。透過SEO優化，您的網站能在搜尋結果中獲得更高的可見度，增加品牌的曝光機會，讓潛在客戶更容易找到您，進一步強化品牌知名度與信任感。',
    icon: '🎯'
  },
  {
    title: '增加網站流量與潛在客戶',
    content: 'SEO優化可以帶來穩定且持續的自然流量，吸引精準的目標受眾。優化後的網站不僅提高點擊率，更能提升轉換率，為企業帶來穩定的潛在客戶，促進業績增長。',
    icon: '📈'
  },
  {
    title: '降低行銷成本，提升投資報酬率',
    content: 'SEO是一項長期的行銷投資，與短期廣告投放相比，自然搜尋的流量無需額外點擊費用，能大幅降低行銷支出。同時，SEO帶來的長期穩定流量能持續創造價值，提高投資報酬率。',
    icon: '💰'
  },
  {
    title: '建立網站權威性與信任感',
    content: '出現在搜尋結果首頁的網站，通常被視為更具信任度與專業性。SEO優化能幫助您的網站穩居搜尋引擎首頁，提升品牌的專業形象與市場權威性，贏得潛在客戶的信任。',
    icon: '🏆'
  },
  {
    title: '提升用戶體驗',
    content: 'SEO不僅僅是為了提升搜尋排名，更包括網站結構、速度與內容的全方位優化。網站載入速度快、行動裝置友善設計以及高品質的內容，能提升訪客的使用體驗，延長停留時間並增加互動。',
    icon: '👥'
  },
  {
    title: '因應搜尋引擎演算法更新',
    content: '搜尋引擎的演算法不斷變化，未經優化網站可能因演算法更新而影響排名。透過持續的SEO優化，您的網站能隨時符合最新的搜尋引擎標準，保持穩定且優越的排名，避免流量波動。',
    icon: '🔄'
  }
]);

const performanceMetrics = ref([
  { metric: '關鍵字排名', before: '平均第6頁', after: '平均第1頁', growth: '提升5頁' },
  { metric: '每月網站流量', before: '100次', after: '500次', growth: '成長500%' },
  { metric: '頁面平均停留時間', before: '20秒', after: '60秒', growth: '增加3倍' },
  { metric: '轉換率', before: '10%', after: '25%', growth: '提升150%' },
]);

const researchData = ref([
  {
    source: 'Chitika Insights (2013)',
    content: 'Google搜尋結果首頁的第一個結果約佔總點擊率的32.5%，而第二頁的點擊率僅佔不到5%。'
  },
  {
    source: 'Advanced Web Ranking (2019)',
    content: 'SEO優化後的網站平均點擊率提升了200%以上，尤其是長尾關鍵字的使用顯著提高了轉換率。'
  },
  {
    source: 'HubSpot (2020)',
    content: '透過SEO優化網站在12個月內的流量成長幅度可達到150%以上，且網站停留時間與互動率同步上升。'
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
    title: '關鍵字研究',
    description: '精準挑選高效關鍵字，鎖定目標客群。透過專業的關鍵字研究與分析，找出最具效益的目標關鍵字。',
    icon: '🔍',
    details: [
      {
        subtitle: '精準鎖定目標關鍵字',
        content: '深入挖掘潛在客戶搜尋習慣，篩選最符合品牌與產品的高效關鍵字，確保網站精準觸及正確受眾。'
      },
      {
        subtitle: '專業工具分析',
        content: '運用 Google Keyword Planner、Ahrefs 和 SEMrush 等專業工具，精確識別具潛力的熱門關鍵字。'
      },
      {
        subtitle: '長尾關鍵字策略',
        content: '選用具針對性的長尾關鍵字，提高搜尋精準度，吸引具明確需求的目標客群，提升轉換率。'
      },
      {
        subtitle: '競爭對手分析',
        content: '分析競爭對手的關鍵字策略與成效，找出差異化優化方向，建立獨特競爭優勢。'
      }
    ]
  },
  {
    title: '網站內容優化',
    description: '提升網站內容品質，增加搜尋引擎友善度。創作優質且具有價值的內容，提升網站權威性。',
    icon: '📝',
    details: [
      {
        subtitle: '自然融合關鍵字',
        content: '巧妙融入關鍵字於內容中，保持語句自然流暢，避免關鍵字堆砌，確保良好用戶體驗。'
      },
      {
        subtitle: '標題與描述優化',
        content: '優化網頁標題、Meta Description、標題標籤與圖片Alt屬性，提升搜尋排名與點擊率。'
      }
    ]
  },
  {
    title: '技術調整',
    description: '優化網站架構和速度，提升用戶體驗。確保搜尋引擎能有效爬取與索引您的網站內容。',
    icon: '⚙️',
    details: [
      {
        subtitle: '結構化網站設計',
        content: '建立清晰的網站架構，搭配合理的內部連結，幫助搜尋引擎高效索引，提升排名。'
      },
      {
        subtitle: '網站速度優化',
        content: '優化圖片與程式碼，加快網站載入時間，提升用戶體驗與搜尋引擎排名。'
      },
      {
        subtitle: '行動裝置優化',
        content: '確保網站在各種行動裝置上的瀏覽體驗順暢，提升行動搜尋排名表現。'
      }
    ]
  },
  {
    title: '外部連結建設',
    description: '增加高權重外部連結，提高網站權威性。建立優質的外部連結網絡，強化網站在搜尋引擎中的地位。',
    icon: '🔗',
    details: [
      {
        subtitle: '權威反向連結',
        content: '與高權重網站建立反向連結，提升網站可信度與排名，強化網路影響力。'
      },
      {
        subtitle: '社群媒體曝光',
        content: '透過社群平台分享優質內容，增加引用與分享機會，擴大外部連結來源。'
      }
    ]
  },
  {
    title: '流量分析報告',
    description: '定期提供數據分析，調整最佳化策略。持續監控與分析網站流量數據，確保SEO策略達到最佳成效。',
    icon: '📊',
    details: [
      {
        subtitle: '數據分析驅動',
        content: '運用 Google Analytics 與 Search Console，追蹤網站表現，評估優化效果。'
      },
      {
        subtitle: '策略持續優化',
        content: '依據數據結果與市場動態，持續調整關鍵字與內容策略，確保排名穩定提升。'
      }
    ]
  }
]);

const expandedFeature = ref(null);

const toggleFeature = (index) => {
  expandedFeature.value = expandedFeature.value === index ? null : index;
};
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

       <!-- Why SEO Section -->
       <div class="mt-20">
        <div class="lg:text-center mb-12">
          <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">為什麼您的網站需要 SEO 優化？</h2>
            
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="benefit in whyNeedSeo" :key="benefit.title" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <span class="text-3xl mr-3">{{ benefit.icon }}</span>
              <h3 class="text-xl font-bold text-gray-900">{{ benefit.title }}</h3>
            </div>
            <p class="text-gray-600">{{ benefit.content }}</p>
          </div>
        </div>
      </div>

      <!-- Performance Metrics Section
      <div class="mt-20">
        <div class="lg:text-center mb-12">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">成效數據</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            實際優化成效
          </p>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">指標</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">優化前</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">優化後</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">成長幅度</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="metric in performanceMetrics" :key="metric.metric" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ metric.metric }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ metric.before }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ metric.after }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-semibold">{{ metric.growth }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->

      <!-- Performance Metrics Section -->
      <div class="mt-20">
        <div class="lg:text-center mb-12">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">SEO 優化效益</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            實際案例數據與研究支持
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Performance Metrics Table -->
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">指標</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">優化前</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">優化後</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">成長幅度</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="metric in performanceMetrics" :key="metric.metric" class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ metric.metric }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ metric.before }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ metric.after }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-semibold">{{ metric.growth }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- Research Data -->
            <div class="prose prose-lg max-w-none border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0 lg:pl-8">
              <div v-for="data in researchData" :key="data.source" class="mb-6 last:mb-0">
                <p class="text-gray-600">{{ data.content }}</p>
                <p class="text-sm text-indigo-600 font-semibold mt-2">— {{ data.source }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="mt-20">
        <div class="lg:text-center mb-12">
          <h3 class="text-2xl font-bold text-gray-900 sm:text-3xl">我們的SEO服務內容</h3>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            全方位的SEO優化服務，助您的網站在搜尋引擎中脫穎而出
          </p>
        </div>
        <div class="grid grid-cols-1 gap-10">
          <div v-for="(feature, index) in features" 
               :key="feature.title" 
               class="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-6 cursor-pointer" @click="toggleFeature(index)">
              <div class="flex-shrink-0">
                <span class="text-4xl">{{ feature.icon }}</span>
              </div>
              <h3 class="ml-4 text-2xl font-bold text-gray-900">{{ feature.title }}</h3>
              <div class="ml-auto">
                <span class="text-2xl transition-transform duration-300" 
                      :class="{ 'rotate-180': expandedFeature === index }">
                  ▼
                </span>
              </div>
            </div>
            <p class="text-gray-500 text-lg mb-4">
              {{ feature.description }}
            </p>
            <div v-if="expandedFeature === index" 
                 class="mt-6 space-y-4 transition-all duration-300">
              <div v-for="detail in feature.details" 
                   :key="detail.subtitle" 
                   class="border-l-4 border-indigo-500 pl-4 py-2">
                <h4 class="text-lg font-semibold text-gray-800 mb-2">{{ detail.subtitle }}</h4>
                <p class="text-gray-600">{{ detail.content }}</p>
              </div>
            </div>
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