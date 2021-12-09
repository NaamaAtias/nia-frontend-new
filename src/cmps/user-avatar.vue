<template>
  <div class="user-avatar-container">
    <!-- <h2>Profile picture</h2> -->
    <img v-if="imgUrl" :src="imgUrl" alt="">
    <img v-else :src="require('../assets/img/user-portrait.jpg')" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
    }
  }
}
</script>

<style>
.user-avatar-container img {
  object-fit: cover;
  border-radius: 50%;  
  height: 80px;
  width: 80px;
}
</style>