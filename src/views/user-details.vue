<template>
  <section v-if="user">
    <h1>User Details - {{ user.fullname }}</h1>
    <h3>{{ user.userName }} score: {{ user.score }}</h3>
    <ul>
      <li v-for="review in user.givenReviews" :key="review._id">
        {{ review.txt }}
        <router-link :to="`/user/${review.aboutUser._id}`">
          About {{ review.aboutUser.fullname }}
        </router-link>
      </li>
    </ul>

    <details>
      <summary>Full JSON</summary>
      <pre>{{ user }}</pre>
    </details>
  </section>
</template>

<script>
//User profile including owned, visited and liked stays - Todo!!!!!

// import {userService} from '../services/user.service';

export default {
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      // user: null
    };
  },
  async created() {
    // const user = await userService.getById(id);
    // this.user = user
  },
  watch: {
    userId: {
      handler() {
        this.$store.dispatch({ type: "loadAndWatchUser", userId: this.userId });
      },
      immediate: true,
    },
  },
  computed: {
    user() {
      return this.$store.getters.watchedUser;
    },
    userId() {
      return this.$route.params.id;
    },
  },
};
</script>