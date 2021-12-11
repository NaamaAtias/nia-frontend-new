
<template>
  <section class="stay-preview">
    <div class="preview-crousel">
      <el-carousel
        trigger="click"
        :autoplay="false"
        :loop="false"
      >
        <el-carousel-item v-for="imgUrl in stay.imgUrls" :key="imgUrl">
           <span class="heart-favorite" @click.stop="isFavorite=!isFavorite"
          ><i
            class="fas fa-heart"
            :style="heartColor"
          ></i
        ></span>
          <img :src="imgUrl" alt="" ref="img" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <section class="preview-text">
      <div class="preview-rate">
        <p v-if="stay.reviews.length">
          <span class="star"
            ><i
              class="fas fa-star"
              style="font-size: 12.5px; color: rgb(255, 55, 92)"
            ></i></span
          ><strong> {{ avgRate }}</strong
          ><span> ({{ stay.reviews.length }} reviews) </span>
        </p>
        <p v-else-if="stay.reviews.length < 3">
          ❤ {{ stay.reviews.length }} reviews
        </p>
        <!-- <p v-else-if="newStay&&!stay.reviews.length">⭐ New</p> -->
        <p v-else>No reviews yet</p>
      </div>
      <div class="preview-details">
        <p>
          {{ stay.type }} • {{ stay.loc.city }}<br />
          {{ stay.name }}<br />
          <strong>${{ stay.price }}</strong> / night
        </p>
        <!-- <p v-if="filterby.dates">{{totalPrice}}</p> -->
        <!-- <p v-if="filterby.dates">{{dates}}</p> -->
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "stay-preview",
  props: {
    stay: Object,
  },
  data() {
    return {
      avgRate: 0,
      currStay: this.stay,
      isWide: true,
      // isMid: false,
      isNarrow: true,
      isFavorite: false
    };
  },
  created() {
    this.$store.commit({ type: "setCurrStay", stay: this.currStay });
    this.avgRate = this.$store.getters.avgStayRate;
  //   window
  //     .matchMedia("(min-width: 750px)")
  //     .addEventListener("change", this.handleWide);
  //   window
  //     .matchMedia("(max-width: 425px)")
  //     .addEventListener("change", this.handleWide);
  //   window
  //     .matchMedia("(min-width: 425px)")
  //     .addEventListener("change", this.handleNarrow);
  //   window
  //     .matchMedia("(max-width: 750px)")
  //     .addEventListener("change", this.handleNarrow);
  // },
  // mounted() {},
  // methods: {
    // handleWide(mql) {
    //   if (mql.matches) this.isWide = true;
    //   else this.isWide = false;
    // },
    // handleNarrow(mql) {
    //   if (mql.matches) this.isNarrow = true;
    //   else this.isNarrow = false;
    // },
  },
  computed: {
    // height() {
    //     if (this.isWide) return "190px";
    //   else if (this.isNarrow) return "300px";
    // },

    heartColor() {
      return this.isFavorite ? "color: #ff375c; opacity: 100%" : "color: #222222; opacity: 70%";
    }
  },
  watch: {},
};
</script>
<style>
</style>