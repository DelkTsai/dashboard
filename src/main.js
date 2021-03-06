import Vue from 'vue'
import element from 'element-ui'
// import { sync } from 'vuex-router-sync'
import App from './app'
import i18n from './i18n'
import store from './store'
import router from './router'
import plugins from './plugins'

// ## Import styles
// =========================

import './assets/styles/element/index.css'
import './assets/styles/main.scss'

// ## Use plugins
// =========================

Vue.use(element)
Vue.use(plugins)
// sync(store, router, { moduleName: 'route' })

// ## Config
// =========================

Vue.config.debug = process.env.DEBUG_MODE
Vue.config.silent = !process.env.DEBUG_MODE
Vue.config.devtools = true
Vue.config.productionTip = false

// ## Initial
// =========================

// ...

// ## Root app
// =========================

const app = new Vue({
  name: 'root',
  i18n: i18n,
  store: store,
  router: router,
  render: h => h(App)
})

// ## Mount to `#app` element
// =========================

app.$mount('#app')
