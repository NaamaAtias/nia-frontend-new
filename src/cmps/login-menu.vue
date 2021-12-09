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
    const timeStamp = Date.now() // "created at": Date.now()
    var date = new Date(timeStamp)
    date = date.toString()
    console.log(date.slice(4,7) + ' ' + date.slice(11,15)) //date to sho: MMM YYYY (Dec 2021)
  },
  methods: {},
};
</script>