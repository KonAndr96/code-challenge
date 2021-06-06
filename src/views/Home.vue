<template>
  <div class="home_wrapper">
    <div class="top_wrapper">
      <div class="title_wrapper">
        <h1 style="color: #745098">Welcome</h1>
        <h1 style="color: #ac66cc; margin-left: 1%">{{ username }}!</h1>
      </div>
      <div class="record_wrapper">
        <SingleRecord
        v-for="record in records"
        :key="record.id"
        :record="record"
        />
      </div>
    </div>
    <RecordsIllustration class="records_ill" />
  </div>
</template>

<script>
import records from '../assets/records.js'
import RecordsIllustration from '../components/RecordsIllustration.vue'
import SingleRecord from '../components/SingleRecord.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'Home',
  components: { RecordsIllustration, SingleRecord },
  setup () {
    const store = useStore()
    const username = computed(() => store.getters.getUsername)
    return { records, username }
  }
}
</script>

<style>
.record_wrapper {
  align-content: center;
  justify-content: center;
  padding: 2% 5%;
  display: grid;
  height: 40vh;
  grid-template-rows: repeat(2, 50%);
  grid-template-columns: repeat(5, 20%);
  row-gap: 6%;
  column-gap: .6%;
}
.title_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.2rem;
}
.home_wrapper {
  display: flex;
  flex-direction: column;
  widows: 100vw;
  height: 100vh;
  background-color: #b4aee8;
}
.top_wrapper {
  width: 100vw;
  height: 60vh;
}
.records_ill {
  height: 40vh;
  width: 570px;
  padding-bottom: 0.1%;
  align-self: flex-end;
}
</style>
