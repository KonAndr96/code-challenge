<template>
  <div class="record">
    <div class="title_wrapper">
    <span>{{record.id}}.</span>
    <span class="value" style="text-decoration:underline;">{{record.createdTimestamp}}</span>
    </div>
    <div class="row_wrapper">
    <span>First Name:</span>
    <span class="value">{{record.firstName}}</span>
    </div>
    <div class="row_wrapper">
    <span>Last Name:</span>
    <span class="value">{{record.lastName}}</span>
    </div>
    <div class="row_wrapper">
    <span class="value">{{record.isAdmin ? 'Admin' : 'User'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleRecord',
  props: ['record'],
  setup () {
    return { }
  }
}
</script>

<style scoped>
.value {
  color: #93329e;
}
.row_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 1rem;
}
.title_wrapper {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  font-size: 1rem;
}
.record {
  background-color: #ffe3fe;
  padding: 2%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: scale(100%);
  transition: all .5s ease-in-out;
}
.record:hover {
  transform: scale(105%);
  transition: all .3s ease-in-out;
}
span {
  margin-top: 2%;
  margin-left: 2%;
  margin-right:2%;
  color: #745098;
  font-weight: 600;
}
</style>
