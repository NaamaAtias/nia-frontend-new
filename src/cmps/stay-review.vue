<template>
  <section class="review-inner">
    <div>
      <div class="review-container flex">
        <user-avatar :imgUrl="review.by.imgUrl" />
        <div class="flex column">
          <p class="review-name">{{ review.by.fullName }}</p>
          <p>{{ createAt }}</p>
        </div>
      </div>
      <p>{{ review.txt }}</p>
    </div>
  </section>
</template>

<script>
import userAvatar from "../cmps/user-avatar.vue";
export default {
  props: ["review"],
  computed: {
    createAt() {
      const timeStamp = new Date(this.review.created)
      var date = new Date(timeStamp * 1000);
      date = date.toString();
      return date.slice(4, 7) + " " + date.slice(11, 15);
    },
  },
  components: {
    userAvatar,
  },
};
</script>