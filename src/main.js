import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import './index.css'
import './registerServiceWorker'

createApp(App).use(store).mount('#app')
