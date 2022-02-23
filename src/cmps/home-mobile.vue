<template>
  <section>
    <div class="home-explore main-layout">
      <div class="explore-location-mobile">
        <h1>Top rated</h1>
        <div class="explore-locations top">
          <div class="top-rated-locations">
            <el-carousel trigger="click" :autoplay="false" :loop="false">
              <el-carousel-item v-for="item in topRated" :key="item.id">
                <div class="carousel-top explore-location-mobile" @click.stop="goToDetails(item.id)">
                  <img :src="item.url" alt="" ref="img" />
                  <h6>
                    <i
                      class="fas fa-star"
                      style="font-size: 14px; color: rgb(255, 55, 92)"
                    ></i
                    ><span>{{ item.avg }}</span>
                    <span class="reviewsInTopRated"
                      >({{ item.reviews }} reviews)</span
                    ><br />
                    {{ item.title }}
                  </h6>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div class="explore-location-mobile">
        <h1>Popular destinations</h1>
        <div class="explore-locations">
          <div
            class="explore-location-mobile"
            @click.stop="goToStays('city', 'London')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304295/London/pexels-oleg-magni-1837591_mtowma.jpg"
              alt=""
            />
            <h6>London</h6>
          </div>
          <div
            class="explore-location-mobile"
            @click.stop="goToStays('city', 'New York')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304324/New%20York/pexels-vlada-karpovich-4451427_xxasuw.jpg"
              alt=""
            />
            <h6>New York</h6>
          </div>

          <div
            class="explore-location-mobile"
            @click.stop="goToStays('city', 'Budapest')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638307521/Budapest/pexels-timi-keszthelyi-2350351_sunbyl.jpg"
              alt=""
            />
            <h6>Budapest</h6>
          </div>
          <div
            class="explore-location-mobile"
            @click.stop="goToStays('city', 'Jerusalem')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638345455/Jerusalem/jerusalem_bl5unz.jpg"
              alt=""
            />
            <h6>Jerusalem</h6>
          </div>
        </div>
      </div>
      <div class="explore-location-mobile">
        <h1>Unique stays</h1>
        <div class="explore-locations">
          <div
            class="explore-location-mobile"
            @click.stop="goToStays('type', 'houseboat')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638305217/boats/pexels-nadi-lindsay-4874899_wrxfks.jpg"
              alt=""
            />
            <h6>Houseboat</h6>
          </div>
          <div
            class="explore-location-mobile"
            @click.stop="goToStays('type', 'castle')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638306558/castle/pexels-alesia-kozik-6022633_f6yxrk.jpg"
              alt=""
            />
            <h6>Castle</h6>
          </div>
          <div
            class="explore-location-mobile"
            @click.stop="goToStays('type', 'luxe')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638307307/Paris/pexels-maria-orlova-4916534_jyewl6.jpg"
              alt=""
            />
            <h6>Luxe</h6>
          </div>
          <div
            class="explore-location-mobile"
            @click.stop="goToStays('type', 'apartment')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304886/New%20York/pexels-max-vakhtbovych-6969866_pajfoi.jpg"
              alt=""
            />
            <h6>Apartment</h6>
          </div>
        </div>
      </div>

      <div class="questions-about-hosting-container">
        <router-link to="/stay/edit/:id">
          <img src="../assets/img/host-home.jpg" alt=""
        /></router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    window.scrollTo(0, 0);
  },
  name: "home",
  data() {
    return {
      isScroll: false,
      avgStayRateJerusalem: "",
      reviewsJerusalem: "",
      avgStayRateNY: "",
      reviewsNY: "",
      avgStayRateLondon: "",
      reviewsLondon: "",
      avgStayRateBoutique: "",
      reviewsBoutique: "",
      topRated: [
        {
          id: "61b20f7868826438744c6dbb",
          url: "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304311/London/pexels-connor-danylenko-3075532_ulswcp.jpg",
          title: "Holy City, Jerusalem",
          avg: this.avgStayRateJerusalem,
          reviews: this.reviewsJerusalem,
        },
        {
          id: "61b20f7868826438744c6dcb",
          url: "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304898/New%20York/pexels-max-vakhtbovych-7195534_mqb90n.jpg",
          title: "Life in New York, New York",
          avg: this.avgStayRateNY,
          reviews: this.reviewsInTopRated,
        },
        {
          id: "61b20f7868826438744c6dc3",
          url: "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304278/London/pexels-daria-shevtsova-3326213_hwgyif.jpg",
          title: "Boutique studio, Budapest",
          avg: this.avgStayRateBoutique,
          reviews: this.reviewsBoutique,
        },
        {
          id: "61b2f4c8f6d9df0cb72a14a1",
          url: "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304311/London/pexels-connor-danylenko-3075532_ulswcp.jpg",
          title: "London Bridge, London",
          avg: this.avgStayRateLondon,
          reviews: this.reviewsLondon,
        },
      ],
    };
  },
  async created() {
    // console.log("clear filter");
    this.$store.dispatch({ type: "clearFilter" });
    window.addEventListener("scroll", this.handleScroll);
    var rateJerusalem = await this.$store.dispatch({
      type: "getRateById",
      stayId: "61b20f7868826438744c6dbb",
    });
    this.avgStayRateJerusalem = rateJerusalem.rate;
    this.reviewsJerusalem = rateJerusalem.reviews;
    var rateNY = await this.$store.dispatch({
      type: "getRateById",
      stayId: "61b20f7868826438744c6dc3",
    });
    this.avgStayRateNY = rateNY.rate;
    this.reviewsNY = rateNY.reviews;
    var rateLondon = await this.$store.dispatch({
      type: "getRateById",
      stayId: "61b2f4c8f6d9df0cb72a14a1",
    });
    this.avgStayRateLondon = rateLondon.rate;
    this.reviewsLondon = rateLondon.reviews;
    var rateBoutique = await this.$store.dispatch({
      type: "getRateById",
      stayId: "61b20f7868826438744c6dc3",
    });
    this.avgStayRateBoutique = rateBoutique.rate;
    this.reviewsBoutique = rateBoutique.reviews;
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      this.isScroll = window.scrollY !== 0 ? true : false;
    },
    goToDetails(stayId) {
      this.$router.push("/stay/" + stayId);
    },
    goToStays(filterType, filter) {
      const trip = { location: filter };
      this.$store.commit({ type: "setCurrTrip", trip });
      const filterBy = { filterType: filterType, filter: filter };
      this.$store.dispatch({ type: "setFilter", filterBy });
      this.$router.push("/stay/");
    },
  },
  computed: {},
};
</script>