<template>
  <section>
    <div class="login-menu">
      <div class="login-menu-btn bold">
        <router-link to="/login">Sing up</router-link>
      </div>
      <div class="login-menu-btn">
        <router-link to="/login">Log in</router-link>
      </div>
      <div class="login-menu-btn border">
        <router-link to="/stay/edit/:id">Host your home</router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "login-menu",
  components: {},
  data() {
    return {};
  },
  created() {
    // "created at": 1564640965 = timeStamp
    var milliseconds = new Date().getTime()
    console.log(milliseconds)     
    const timeStamp = milliseconds/1000 // "created at": new Date().getTime()/1000
    var date = new Date(timeStamp * 1000)
    date = date.toString()
    console.log(date)
    console.log(date.slice(4,7) + ' ' + date.slice(11,15)) //date to sho: MMM YYYY
  },
  methods: {},
};
</script>