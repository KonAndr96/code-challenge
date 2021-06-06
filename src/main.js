import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth === true && store.state.isAuthenticated === false) {
    return '/login'
  }
})

router.beforeEach((to, from) => {
  if (from.path !== '/home' && to.path === '/login') {
    to.meta.transition = 'fade'
  }
})

createApp(App).use(store).use(router).mount('#app')
