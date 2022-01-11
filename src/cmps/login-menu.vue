<template>
  <section>
    <div @click="isMenuOpen=!isMenuOpen" class="login-menu" :style="showMenu">
      <div class="login-menu-btn bold">
        <router-link to="/login">Sing up</router-link>
      </div>
      <div class="login-menu-btn">
        <router-link to="/login">Log in</router-link>
      </div>
      <div class="login-menu-btn border">
        <router-link to="/host">Host page</router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "login-menu",
  components: {},
  data() {
    return {
      isMenuOpen: true
    };
  },
  methods: {},
  computed: {
    showMenu(){
      return this.isMenuOpen? "display: block;" : "display: none;";
    }
  }
};
</script>