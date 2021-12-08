<template>
  <header class="full main-layout" :style="bgc">
    <div>
      <nav :style="bgc">
        <router-link class="logo" :style="bgc" to="/">
          <div v-if="home && !isScroll">
            <img src="../assets/img/logo-cloud.jpg" alt="" />
          </div>
          <div v-else>
            <img src="../assets/img/logo-cloud-white.jpg" alt="" />
          </div>
          <div class="logo-txt">niabnb</div>
        </router-link>

        <div
          class="small-filter"
          v-if="isSmallFilter"
          :style="smallFilter"
          @click="isSmallFilter = !isSmallFilter"
        >
          <span class="small-filter-txt">{{ searchLocation }}</span>
          <span :style="isTrip" class="small-filter-txt">{{
            searchDates
          }}</span>
          <span :style="isTrip" class="small-filter-txt">{{
            searchGuests
          }}</span>
          <button class="small-filter-explore">
            <i class="fas fa-search"></i>
          </button>
        </div>

        <div class="header-right">
          <router-link class="hover" :style="routerClr" to="/stay"
            >Explore</router-link
          >
          <router-link class="hover" :style="routerClr" to="/stay/edit/:id"
            >Become a Host</router-link
          >
          <div class="login-btn" @click="isMenuOpen = !isMenuOpen">
            <div class="bar">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div class="user-img">
              <img
                src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_100,h_100,g_face/v1638252722/cats/nmlj2xgdlobdsrf7q22y.jpg"
                alt=""
              />
            </div>
            <div>
              <login-menu v-if="isMenuOpen" />
            </div>
          </div>
        </div>
      </nav>
      <div v-if="!isSmallFilter" :style="bigFilter">
        <stay-filter key="filter" />
      </div>
    </div>
  </header>
</template>
<script>
import stayFilter from "./stay-filter.vue";
import loginMenu from "./login-menu.vue";
export default {
  data() {
    return {
      home: null,
      isScroll: false,
      isMenuOpen: false,
      isSmallFilter: false,
      trip: null,
      isTripSet: false,
    };
  },
  components: {
    stayFilter,
    loginMenu,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      this.isScroll = window.scrollY !== 0 ? true : false;
      this.isSmallFilter = !this.home || this.isScroll ? true : false;
    },
  },

  watch: {
    "$route.name": {
      handler() {
        this.home = this.$route.name === "home" ? true : false;
        this.isSmallFilter = this.home ? false : true;
      },
      immediate: true,
    },
  },
  computed: {
    bgc() {
      return this.$route.name !== "home" || this.isScroll
        ? "background-color: #fff; color: rgb(255, 55, 92)"
        : "background-color: #000000; color: #fff";
    },
    routerClr() {
      return this.$route.name !== "home" || this.isScroll
        ? "color: #000000"
        : "color: #fff";
    },
    bigFilter() {
      return !this.isSmallFilter ? "display: block;" : "display: none;";
    },
    smallFilter() {
      return this.isSmallFilter ? "display: block;" : "display: none;";
    },
    searchLocation() {
      this.trip = this.$store.getters.trip;
      this.isTripSet = this.trip.location ? true : false;
      console.log(this.trip);
      return this.isTripSet ? this.trip.location : "Start your search";
    },
    searchDates() {
      return this.trip.startDate
        ? this.trip.startDate + " - " + this.trip.endDate
        : "Dates";
    },
    searchGuests() {
      return this.trip.persons
        ? this.trip.persons + " guests " : "Guests";
    },
    isTrip() {
      console.log(this.isTripSet);
      return this.isTripSet ? "" : "display: none;";
    },
  },
};
</script>