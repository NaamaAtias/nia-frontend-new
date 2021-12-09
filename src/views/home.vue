<template>
  <section>
    <div :style="homeBgc">
      <div class="home main-layout">
        <router-link to="/stay">
          <img src="../assets/img/home-img.jpg" />
        </router-link>
      </div>
    </div>
    <div class="home main-layout">
      <div class="explore-location">
        <h1>Popular destinations</h1>
        <div class="explore-locations">
          <div
            class="explore-location"
            @click.stop="goToStays('city', 'London')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304295/London/pexels-oleg-magni-1837591_mtowma.jpg"
              alt=""
            />
            <h6>London</h6>
          </div>
          <div
            class="explore-location"
            @click.stop="goToStays('city', 'New York')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304324/New%20York/pexels-vlada-karpovich-4451427_xxasuw.jpg"
              alt=""
            />
            <h6>New York</h6>
          </div>

          <div
            class="explore-location"
            @click.stop="goToStays('city', 'Budapest')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638307521/Budapest/pexels-timi-keszthelyi-2350351_sunbyl.jpg"
              alt=""
            />
            <h6>Budapest</h6>
          </div>
          <div
            class="explore-location"
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
      <div class="explore-location">
        <h1>Unique stays</h1>
        <div class="explore-locations">
          <div
            class="explore-location"
            @click.stop="goToStays('type', 'houseboat')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638305217/boats/pexels-nadi-lindsay-4874899_wrxfks.jpg"
              alt=""
            />
            <h6>Houseboat</h6>
          </div>
          <div
            class="explore-location"
            @click.stop="goToStays('type', 'castle')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638306558/castle/pexels-alesia-kozik-6022633_f6yxrk.jpg"
              alt=""
            />
            <h6>Castle</h6>
          </div>
          <div class="explore-location" @click.stop="goToStays('type', 'luxe')">
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638307307/Paris/pexels-maria-orlova-4916534_jyewl6.jpg"
              alt=""
            />
            <h6>Luxe</h6>
          </div>
          <div
            class="explore-location"
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
      <div class="explore-location">
        <h1>Top rated</h1>
        <div class="explore-locations top">
          <div
            class="explore-location"
            @click.stop="goToDetails('61b20f7868826438744c6dbb')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638306503/castle/pexels-super-claudioo-6697718_lxbsuh.jpg"
              alt=""
            />
            <h6>
              <i
                class="fas fa-star"
                style="font-size: 14px; color: rgb(255, 55, 92)"
              ></i
              ><span>{{ avgStayRateJerusalem }}</span>
              <span class="reviewsInTopRated"
                >({{ reviewsJerusalem }} reviews)</span
              ><br />
              Holy City, Jerusalem
            </h6>
          </div>
          <div
            class="explore-location"
            @click.stop="goToDetails('61b20f7868826438744c6dcb')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304898/New%20York/pexels-max-vakhtbovych-7195534_mqb90n.jpg"
              alt=""
            />
            <h6>
              <i
                class="fas fa-star"
                style="font-size: 14px; color: rgb(255, 55, 92)"
              ></i
              ><span>{{ avgStayRateNY }}</span>
              <span class="reviewsInTopRated">({{ reviewsNY }} reviews)</span
              ><br />
              Life in New York, New York
            </h6>
          </div>
          <div
            class="explore-location"
            @click.stop="goToDetails('61b20f7868826438744c6dc3')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304278/London/pexels-daria-shevtsova-3326213_hwgyif.jpg"
              alt=""
            />
            <h6>
              <i
                class="fas fa-star"
                style="font-size: 14px; color: rgb(255, 55, 92)"
              ></i
              ><span>{{ avgStayRateBoutique }}</span>
              <span class="reviewsInTopRated"
                >({{ reviewsBoutique }} reviews)</span
              ><br />
              Boutique studio, Budapest
            </h6>
          </div>
          <div
            class="explore-location"
            @click.stop="goToDetails('61b20f7868826438744c6dae')"
          >
            <img
              src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_300,w_257,g_face/v1638304311/London/pexels-connor-danylenko-3075532_ulswcp.jpg"
              alt=""
            />
            <h6>
              <i
                class="fas fa-star"
                style="font-size: 14px; color: rgb(255, 55, 92)"
              ></i
              ><span>{{ avgStayRateLondon }}</span>
              <span class="reviewsInTopRated"
                >({{ reviewsLondon }} reviews)</span
              ><br />
              London Bridge, London
            </h6>
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
    };
  },
  async created() {
    console.log("clear filter");
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
      stayId: "61b20f7868826438744c6dcb",
    });
    this.avgStayRateLondon = rateLondon.rate;
    this.reviewsLondon = rateLondon.reviews;
    var rateBoutique = await this.$store.dispatch({
      type: "getRateById",
      stayId: "61b20f7868826438744c6dae",
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
      const filterBy = { filterType: filterType, filter: filter };
      this.$store.dispatch({ type: "setFilter", filterBy });
      this.$router.push("/stay/");
    },
  },
  computed: {
    homeBgc() {
      return this.isScroll
        ? "background-color: #fff"
        : "background-color: #000000";
    },
  },
};
</script>