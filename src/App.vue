<template>
<div class="global_wrapper">
<router-view class="page" v-slot="{ Component }">
  <transition :name="route.meta.transition">
  <component :is="Component"/>
  </transition>
</router-view>
</div>
</template>
<script>
import { useRoute } from 'vue-router'
import './index.css'
export default {
  name: 'App',
  setup () {
    const route = useRoute()
    return {
      route
    }
  }
}
</script>
