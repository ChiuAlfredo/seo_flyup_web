<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref({ success: false, message: '' });

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = { success: false, message: '' };

  try {
    await emailjs.send(
      'service_4rhl6dm', // Replace with your EmailJS service ID
      'template_3vjurbm', // Replace with your EmailJS template ID
      {
        to_email: 'petercy32@gmail.com',
        from_name: form.value.name,
        from_email: form.value.email,
        phone: form.value.phone,
        message: form.value.message
      },
      'FPdj02WkwEtmTld54' // Replace with your EmailJS public key
    );

    submitStatus.value = {
      success: true,
      message: '訊息已成功送出！我們將盡快與您聯繫。'
    };
    
    // Reset form after successful submission
    form.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  } catch (error) {
    submitStatus.value = {
      success: false,
      message: '抱歉，訊息傳送失敗。請稍後再試。'
    };
    console.error('Email sending failed:', error);
  } finally {
    isSubmitting.value = false;
  }
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
                :disabled="isSubmitting"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {{ isSubmitting ? '傳送中...' : '送出訊息' }}
              </button>
            </div>

            <!-- Status Message -->
            <div v-if="submitStatus.message" class="mt-4 p-4 rounded-md" :class="{
              'bg-green-50 text-green-800': submitStatus.success,
              'bg-red-50 text-red-800': !submitStatus.success
            }">
              {{ submitStatus.message }}
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-lg font-medium text-gray-900">電話諮詢</p>
              <p class="mt-1 text-gray-500">0966-680-565</p>
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
              <p class="mt-1 text-gray-500">petercy32@gmail.com</p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-lg font-medium text-gray-900">LINE</p>
              <p class="mt-1 text-gray-500">peter4101</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>