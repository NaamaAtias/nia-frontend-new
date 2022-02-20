<template>
  <section
    class="stay-order-form-mobile flex row justify-center"
    :class="toggleFooter"
  >
    <div class="order-header flex column align-center">
      <p class="price-footer">
        <span class="price-span">${{ currStay.price }} </span>/ night
      </p>
      <p v-if="currStay.reviews.length">
        <span class="star"
          ><i
            class="fas fa-star"
            style="font-size: 12.5px; color: rgb(255, 55, 92)"
          ></i
        ></span>
        <strong class="rate-span fs14">
          {{ avgRate }}
          <span class="reviews-span"
            >({{ currStay.reviews.length }} reviews)</span
          ></strong
        >
      </p>
    </div>
    <div class="order-box">
      <button
        ref="btn"
        class="order-btn"
        @click.prevent="checkAvailability($event)"
      >
        Check availability
      </button>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      currStay: {},
    };
  },
  created() {
    this.currStay = this.$store.getters.currStay;
    this.avgRate = this.$store.getters.avgStayRate;
  },
  mounted() {
    const button = this.$refs.btn;
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = ((e.clientX - rect.left) * 100) / button.clientWidth;
      const y = ((e.clientY - rect.top) * 100) / button.clientHeight;
      button.style.setProperty("--mouse-x", x);
      button.style.setProperty("--mouse-y", y);
    });
  },
  computed: {
    isMobileFooter() {
      return this.$store.getters.isMobileFooter;
    },
    toggleFooter() {
      return {
        "toggle-hide": !this.isMobileFooter,
        "toggle-show": this.isMobileFooter,
      };
    },
  },
  components: {},
  methods: {
    checkAvailability(ev) {
      this.$store.commit({ type: "toggleMobileForm" });
      console.log('footer', this.isMobileFooter);
    },
  },
};
</script>



     