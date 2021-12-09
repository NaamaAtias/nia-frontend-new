<template>
  <section class="stay-rate main-layout">
    <div class="rate-category flex space-between align-center" v-for="(value, name) in categoryRateMap" :key="name">
      <h1>{{ name }}</h1>
      <div>
      <div class="rate-bar">
        <div class="inner" :style="{ width: value * 20 + '%' }"></div>
      </div>
      <span>{{ value }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["reviews"],
  computed: {
    categoryRateMap() {
      var map = this.reviews.reduce((acc, review) => {
        for (const aspect in review.category) {
          if (!acc[aspect]) acc[aspect] = 0;
          acc[aspect] = acc[aspect] + review.category[aspect];
        }
        return acc;
      }, {});
      for (const aspect in map) {
        map[aspect] = (map[aspect] / this.reviews.length).toFixed(1);
      }
      return map;
    },
  },
};
</script>