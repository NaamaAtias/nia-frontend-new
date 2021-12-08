<template>
  <div class="price-filter-container">
    <HistogramSlider
      primaryColor="#717171"
      labelColor="none"
      holderColor="#DDDDDD"
      handleColor="rgb(255, 55, 92)"
      :hideFromTo="true"
      :handleSize="20"
      :line-height="1"
      :histSliderGap="0"
      :barRadius="1"
      :grid="false"
      :min="0"
      :max="400"
      :width="200"
      :bar-height="100"
      :data="data"
      @change="getPrice"
    />
    <div class="price-min-max-container">
      <input
        @input="filterByPrice"
        type="number"
        v-model="price.minPrice"
        placeholder="min price"
      />
      <input
        @input="filterByPrice"
        type="number"
        v-model="price.maxPrice"
        placeholder="max price"
      />
    </div>
  </div>
</template>

<script>
import HistogramSlider from "vue-histogram-slider";
import "vue-histogram-slider/dist/histogram-slider.css";
//Vue.component(HistogramSlider.name, HistogramSlider);
export default {
  data() {
    return {
      price: { minPrice: 0, maxPrice: 400 },
      data: [
        76, 80, 90, 90, 90, 304, 333, 234, 53, 99, 99, 65, 45, 444, 23, 89, 66,
        567, 234, 234, 453, 90, 90, 90, 304, 333, 234, 53, 99, 99, 65, 45, 444,
        23, 89, 66, 567, 234, 234, 453, 234, 234, 256, 345, 345, 4567, 66, 54,
        304, 333, 234, 53, 99, 99, 65, 45, 444, 23, 89, 66, 567, 234, 234, 453,
        90, 90, 90, 304, 333, 234, 53, 99, 99, 65, 45, 444, 23, 89, 66, 567,
        234, 234, 453, 234, 234, 256, 345, 345, 4567, 66, 54, 234, 256, 345,
        345, 4567, 66, 54, 304, 333, 234, 53, 99, 99, 65, 45, 444, 23, 89, 66,
        567, 234, 234, 453, 90, 90, 90, 304, 333, 234, 53, 99, 99, 65, 45, 444,
        23, 89, 66, 567, 234, 234, 453, 234, 234, 256, 345, 345, 4567, 66, 54,
        45, 444, 23, 89, 66, 567, 234, 234, 453, 234, 234, 256, 345, 345, 4567,
        66, 54, 200, 200, 180, 170, 180, 200, 200, 180, 170, 180, 200, 200, 180,
        170, 180, 200, 200, 180, 170, 180, 200, 200, 180, 170, 180, 200, 200,
        180, 170, 180, 300, 290, 280, 300, 200, 200, 180, 170, 180, 200, 200,
        180, 170, 180, 200, 200, 180, 170, 180, 200, 200, 180, 170, 180, 200,
        200, 180, 170, 180, 200, 200, 180, 170, 180, 300, 290, 280, 300, 200,
        200, 180, 170, 180, 200, 200, 180, 170, 180, 200, 200, 180, 170, 180,
        200, 200, 180, 170, 180, 200, 200, 180, 170, 180, 200, 200, 180, 170,
        180, 300, 290, 280, 300, 200, 200, 180, 170, 180, 200, 200, 180, 170,
        180, 200, 200, 180, 170, 180, 200, 200, 180, 170, 180, 200, 200, 180,
        170, 180, 200, 200, 180, 170, 180, 300, 290, 280, 300, 200, 200, 180,
        170, 180, 200, 200, 180, 170, 180, 200, 200, 180, 170, 180, 200, 200,
        180, 170, 180, 200, 200, 180, 170, 180, 200, 200, 180, 170, 180, 300,
        290, 280, 300, 270,
      ],
    };
  },
  components: {
    HistogramSlider,
  },
  methods: {
    filterByPrice() {
      console.log(this.price);
      const filterBy = { filterType: "price", filter: this.price };
      this.$store.dispatch({ type: "setFilter", filterBy });
      this.$router.push("/stay/");
    },
    getPrice(value) {
      // console.log(value);
      this.price = {
        minPrice: value.from,
        maxPrice: value.to,
      };

      this.filterByPrice();
    },
  },
};
</script>

<style>
</style>