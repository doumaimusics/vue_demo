import Vue from 'vue'
import App from './App'

import router from '@/router/pcRouter'
import '@/assets/public.css' // 引入css样式


new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: {
    App
  }
})
