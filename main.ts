import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
const instance = new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
