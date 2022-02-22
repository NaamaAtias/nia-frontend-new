<template>
  <header>
    <div class="header-mobile" :style="bgcMobile">
      <div
        class="mobile-small-filter"
        v-if="isMobileSmallFilter"
        :style="mobileSmallFilter"
        @click="isMobileSmallFilter = !isMobileSmallFilter"
      >
        <span class="small-filter-txt">{{ searchLocation }}</span>
        <span :style="isTrip" class="small-filter-txt">{{ searchDates }}</span>
        <span :style="isTrip" class="small-filter-txt">{{ searchGuests }}</span>
        <button class="small-filter-explore">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div v-if="!isMobileSmallFilter && !isMenuOpen && (home || explore)">
        <stay-filter key="filter" />
      </div>
      <div
        v-if="isMobileSmallFilter"
        class="login-btn"
        @click="isMenuOpen = !isMenuOpen"
      >
        <div class="bar">
          <i
            v-if="home"
            class="fa fa-bars"
            aria-hidden="true"
            :style="colorBar"
          ></i>
        </div>
        <div>
          <login-menu v-if="isMenuOpen" />
        </div>
      </div>
      <div v-if="isMobileSmallFilter" class="back-btn" @click="backToPrev()">
        <div class="bar">
          <i
            v-if="!home"
            class="fa fa-solid fa-chevron-right"
            :style="colorBar"
          ></i>
        </div>
      </div>
    </div>

    <div class="full main-layout" :style="bgc">
      <nav :style="bgc">
        <div>
          <router-link class="logo" :style="bgc" to="/">
            <div class="logo-img" :style="bImg">
              <img src="../assets/img/logo-cloud.jpg" alt="" />
            </div>
            <div class="logo-img" :style="wImg">
              <img src="../assets/img/logo-cloud-white.jpg" alt="" />
            </div>
            <div class="logo-txt">niabnb</div>
          </router-link>
        </div>
        <div
          class="small-filter"
          v-if="(isSmallFilter && this.home) || this.explore"
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
              <img :src="currUser" />
            </div>
          </div>
          <div>
            <login-menu v-if="isMenuOpen" />
          </div>
        </div>
      </nav>
      <div
        v-if="
          (!isSmallFilter && !isMenuOpen) ||
          (!isMobileSmallFilter && !isMenuOpen)
        "
        :style="bigFilter"
      >
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
      explore: false,
      home: false,
      isScroll: false,
      isMenuOpen: false,
      isSmallFilter: true,
      trip: null,
      isTripSet: false,
      isMobileSmallFilter: true,
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
      this.isMobileSmallFilter =
        this.home || this.explore || this.isScroll ? true : false;
    },
    backToPrev() {
      console.log(this.$route);
      this.$router.go(-1);
    },
  },

  watch: {
    "$route.name": {
      handler() {
        this.home = this.$route.name === "home" ? true : false;
        this.explore = this.$route.name === "stayApp" ? true : false;
        this.isSmallFilter = this.home ? false : true;
        this.isMobileSmallFilter = this.home ? false : true;
      },
      immediate: true,
    },
  },
  computed: {
    bImg() {
      return this.$route.name === "home" && !this.isScroll
        ? "display: block;"
        : "display: none;";
    },
    wImg() {
      return (this.$route.name === "home" && this.isScroll) ||
        this.$route.name !== "home"
        ? "display: block;"
        : "display: none;";
    },

    bgc() {
      return this.$route.name !== "home" || this.isScroll
        ? "background-color: #fff; color: rgb(255, 55, 92)"
        : "background-color: #000000; color: #fff";
    },
    bgcMobile() {
      return (this.$route.name == "home" && this.isScroll) || this.$route.name == "stayApp"
        ? "background-color: #fff; color: rgb(255, 55, 92)"
        : "background-color: transparent; color: #fff";
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
    mobileSmallFilter() {
      return this.isMobileSmallFilter && (this.home || this.explore)
        ? "display: block;"
        : "display: none;";
    },
    searchLocation() {
      this.trip = this.$store.getters.trip;
      this.isTripSet = this.trip.location ? true : false;
      // console.log(this.trip);
      return this.isTripSet ? this.trip.location : "Start your search";
    },
    searchDates() {
      return this.trip.startDate
        ? this.trip.startDate + " - " + this.trip.endDate
        : "Dates";
    },
    searchGuests() {
      return this.trip.persons ? this.trip.persons + " guests " : "Guests";
    },
    isTrip() {
      // console.log(this.isTripSet);
      return this.isTripSet ? "" : "display: none;";
    },
    currUser() {
      // console.log(this.$store.getters.loggedinUser);
      const user = this.$store.getters.loggedinUser;
      return user
        ? user.imgUrl
        : "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_100,h_100,g_face/v1638252722/cats/nmlj2xgdlobdsrf7q22y.jpg";
    },
    colorBar() {
      return this.$route.name !== "home" || this.isScroll
        ? "color: #000000"
        : "color: #fff";
    },
  },
};
</script>