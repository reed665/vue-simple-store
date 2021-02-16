import Vue from 'vue'
import './plugins/composiiton-api'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
