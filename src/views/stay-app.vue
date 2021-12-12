<template>
  <div>
    <div class="main-layout">
      <div class="filter-stayApp-container-main main-layout">
        <div class="filter-btns-stayApp-container">
          <div @click="isOnPriceFilter = !isOnPriceFilter" class="onFilter-btn">
            Price <i class="fa fa-angle-down" style="font-size: 14px"></i>
          </div>
          <div @click="isOnTypeFilter = !isOnTypeFilter" class="onFilter-btn">
            Type <i class="fa fa-angle-down" style="font-size: 14px"></i>
          </div>
          <span>|</span>
          <div
            @click.stop="filterListBy('amenities', 'wifi')"
            class="onFilter-btn"
          >
            Wifi
          </div>
          <div
            @click.stop="filterListBy('amenities', 'tv')"
            class="onFilter-btn"
          >
            TV
          </div>
          <div
            @click.stop="filterListBy('amenities', 'smoking')"
            class="onFilter-btn"
          >
            Smoking allowed
          </div>
          <div
            @click.stop="filterListBy('amenities', 'kitchen')"
            class="onFilter-btn"
          >
            Kitchen
          </div>
          <div
            @click.stop="filterListBy('amenities', 'pets')"
            class="onFilter-btn"
          >
            Pets allowed
          </div>
        </div>
        <div v-if="isOnPriceFilter"><price-filter /></div>
        <div v-if="isOnTypeFilter" class="type-filter-container">
          <div
            @click.stop="filterListBy('type', 'castle')"
            class="onFilter-btn"
          >
            Castle
          </div>
          <div
            @click.stop="filterListBy('type', 'houseboat')"
            class="onFilter-btn"
          >
            Houseboat
          </div>
          <div @click.stop="filterListBy('type', 'luxe')" class="onFilter-btn">
            Luxe
          </div>
          <div
            @click.stop="filterListBy('type', 'apartment')"
            class="onFilter-btn"
          >
            Apartment
          </div>
        </div>
      </div>
    </div>
    <p v-if="isLoading">Loading...</p>
    <stay-list></stay-list>
  </div>
</template>

<script>
import stayList from "@/cmps/stay-list";
import PriceFilter from "../cmps/price-filter.vue";
export default {
  created() {
    window.scrollTo(0, 0);
  },
  name: "stay",
  data() {
    return {
      isOnPriceFilter: false,
      isOnTypeFilter: false,
    };
  },
  components: {
    stayList,
    PriceFilter,
  },
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },
  methods: {
    filterListBy(filterType, filter) {
      // console.log(filter);
      const filterBy = { filterType: filterType, filter: filter };
      this.$store.dispatch({ type: "setFilter", filterBy });
    },
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>