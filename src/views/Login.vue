<template>
  <div class="wrapper">
    <div class="svg_wrapper">
      <LoginIllustration class="illustration" />
    </div>
    <div class="login_wrapper">
      <LoginWindow />
    </div>
  </div>
</template>

<script>
import LoginIllustration from '../components/LoginIllustration.vue'
import LoginWindow from '../components/LoginWindow/LoginWindow.vue'
export default {
  name: 'Login',
  components: { LoginIllustration, LoginWindow },
  setup () {
    return {}
  }
}
</script>

<style>
.illustration {
  width: 100%;
  height: 100%;
  align-self: center;
}
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.svg_wrapper {
  width: 40vw;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #b4aee8;
  padding: 2%;
}
.login_wrapper {
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ffe3fe;
}
</style>
