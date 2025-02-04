<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const handleSubmit = () => {
  // Here you can implement the form submission logic
  console.log('Form submitted:', form.value);
};
</script>

<template>
  <div class="min-h-screen py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center mb-16">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">聯絡我們</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          與我們開始對話
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          填寫以下表單，我們將盡快與您聯繫，為您提供專業的諮詢服務。
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
              <div class="mt-1">
                <input
                  id="name"
                  type="text"
                  required
                  v-model="form.name"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">電子郵件</label>
              <div class="mt-1">
                <input
                  id="email"
                  type="email"
                  required
                  v-model="form.email"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">電話</label>
              <div class="mt-1">
                <input
                  id="phone"
                  type="tel"
                  v-model="form.phone"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">訊息內容</label>
              <div class="mt-1">
                <textarea
                  id="message"
                  rows="4"
                  required
                  v-model="form.message"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                送出訊息
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-lg font-medium text-gray-900">電話諮詢</p>
              <p class="mt-1 text-gray-500">週一至週五 9:00-18:00</p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-lg font-medium text-gray-900">電子郵件</p>
              <p class="mt-1 text-gray-500">我們將在24小時內回覆</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>