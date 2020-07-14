import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
import App from './App'


import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'
Vue.config.productionTip = false

//TEMPORÁRIO!!
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6Ik1hcmNvc01hY2hhZG8iLCJlbWFpbCI6Im1hcmNvc21hY2hhZG9AY29kM3IuY29tIiwiYWRtaW4iOnRydWUsImlhZCI6MTU5MjE1MjAzNSwiZXhwIjoxNTkyNDExMjM1fQ.5s5h-G_uyyF3NvVMct9o02zWWRUHlTuwxAPSprUQWsI'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')