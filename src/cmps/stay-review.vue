<template>
  <section class="review-inner">
    <div>
      <div class="review-container flex">
        <user-avatar :imgUrl="review.by.imgUrl" />
        <div class="flex column">
          <p>{{ review.by.fullname }}</p>
          <p>{{ review.createdAt }}</p>
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
  computed: {},
  components: {
    userAvatar,
  },
};
</script>