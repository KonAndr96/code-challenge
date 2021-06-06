<template>
  <div class="login_window" @keydown.enter="login">
    <h1 class="welcome">Welcome!</h1>
    <div class="input_wrapper">
      <UserIcon class="svg" />
      <input
        type="text"
        placeholder="Username"
        v-model="username"
      />
    </div>
    <div class="input_wrapper">
      <LockIcon class="svg" />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        >
    </div>
    <button @click="login">
      <DoorIcon class="login_svg"/>
      <span>Login</span>
    </button>
    <transition name="slide-down">
    <h3
      v-if="showError"
      class="error">
      Username/Password should not be empty
    </h3>
    </transition>
  </div>
</template>

<script>
import DoorIcon from '../Icons/DoorIcon.vue'
import LockIcon from '../Icons/LockIcon.vue'
import UserIcon from '../Icons/UserIcon.vue'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import './LoginWindow.css'
export default {
  name: 'LoginWindow',
  components: { DoorIcon, LockIcon, UserIcon },
  setup () {
    const router = useRouter()
    const store = useStore()
    const username = ref('')
    const password = ref('')
    const showError = ref(false)

    onMounted(() => {
      store.dispatch('authenticate', { value: false, username: '' })
    })

    const login = async () => {
      if (username.value.length && password.value.length) {
        await store.dispatch('authenticate', { value: true, username: username.value })
        username.value = ''
        password.value = ''
        router.push('/home')
      } else {
        showError.value = true
        setTimeout(() => {
          showError.value = false
        }, 2000)
      }
    }

    return { username, password, login, showError }
  }
}
</script>
