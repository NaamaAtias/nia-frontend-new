<template>
  <div class="screen-login">
    <div class="login-main-container">
      <h2>Login</h2>
      <form @submit.prevent="doLogin">
        <div>
          <input
            type="text"
            v-model="loginCred.userName"
            placeholder="User name"
          />
        </div>
        <div>
          <input
            type="password"
            v-model="loginCred.password"
            placeholder="Password"
          />
        </div>
        <button>Login</button>
      </form>
      <br />
      <form @submit.prevent="doSignup">
        <h2>Signup</h2>
        <div>
          <input
            type="text"
            v-model="signupCred.fullname"
            placeholder="Your full name"
          />
        </div>
        <div>
          <input
            type="password"
            v-model="signupCred.password"
            placeholder="Password"
          />
        </div>
        <div>
          <input
            type="text"
            v-model="signupCred.userName"
            placeholder="email@email.com"
          />
        </div>
        <button>Signup</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.scrollTo(0, 0);
    this.loadUsers();
  },
  name: "test",
  data() {
    return {
      msg: "",
      loginCred: { userName: "", password: "" },
      signupCred: { userName: "", password: "", email: "" },
    };
  },
  computed: {
    users() {
      // console.log(this.$store.getters.users);
      return this.$store.getters.users;      
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
    async doLogin() {
      // console.log(this.loginCred);
      if (!this.loginCred.userName) {
        this.msg = "Please enter userName/password";
        return;
      }
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
        this.msg = "Failed to login";
      }
    },
    doLogout() {
      this.$store.dispatch({ type: "logout" });
    },
    async doSignup() {
      if (
        !this.signupCred.fullname ||
        !this.signupCred.password ||
        !this.signupCred.userName
      ) {
        this.msg = "Please fill up the form";
        return;
      }
      await this.$store.dispatch({ type: "signup", userCred: this.signupCred });
      this.$router.push("/");
    },
    loadUsers() {
      this.$store.dispatch({ type: "loadUsers" });
    },
    async removeUser(userId) {
      try {
        await this.$store.dispatch({ type: "removeUser", userId });
        this.msg = "User removed";
      } catch (err) {
        this.msg = "Failed to remove user";
      }
    },
  },
};
</script>