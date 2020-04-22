import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import yqVueUi from './packages/index'

Vue.use(yqVueUi);

new Vue({
  render: h => h(App),
}).$mount('#app')
