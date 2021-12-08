<template>
  <div>
    <div @click="isOnPriceFilter = !isOnPriceFilter" class="onPriceFilter-btn">
      Price
    </div>
    <div v-if="isOnPriceFilter"><price-filter /></div>
    <p v-if="isLoading">Loading...</p>
    <stay-list></stay-list>
  </div>
</template>

<script>
import stayList from "@/cmps/stay-list";
import PriceFilter from "../cmps/price-filter.vue";
export default {
  name: "stay",
  data() {
    return {
      isOnPriceFilter: false,
    };
  },
  components: {
    stayList,
    PriceFilter,
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>