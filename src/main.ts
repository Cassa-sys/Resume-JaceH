import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Particles from '@tsparticles/vue3'

import { loadSlim } from '@tsparticles/slim'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  },
})

app.mount('#app')
