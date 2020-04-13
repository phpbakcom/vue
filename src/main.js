import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.$base64 = require('js-base64').Base64
Vue.prototype.route = router
new Vue({
  router,
    store,
  render: h => h(App)
}).$mount('#app')
