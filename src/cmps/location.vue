<template>
  <section>
    <div class="location-container">
      <div @click="Budapest" class="location-card">
        <img
          src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_100,w_100,g_face/v1638307521/Budapest/pexels-timi-keszthelyi-2350351_sunbyl.jpg"
          alt=""
        />
        <div>
          <span class="location-city">Budapest</span>,
          <span class="location-country">Hungary</span>
        </div>
      </div>
      <div @click="Jerusalem" class="location-card">
        <img
          src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_100,w_100,g_face/v1638345455/Jerusalem/jerusalem_bl5unz.jpg"
          alt=""
        />
        <div>
          <span class="location-city">Jerusalem</span>,
          <span class="location-country">Israel</span>
        </div>
      </div>
      <div @click="London" class="location-card">
        <img
          src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_100,w_100,g_face/v1638304295/London/pexels-oleg-magni-1837591_mtowma.jpg"
          alt=""
        />
        <div>
          <span class="location-city">London</span>,
          <span class="location-country">England</span>
        </div>
      </div>
      <div @click="NewYork" class="location-card">
        <img
          src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_100,w_100,g_face/v1638307319/Paris/pexels-alex-azabache-4039924_pm8b22.jpg"
          alt=""
        />
        <div>
          <span class="location-city">New York</span>,
          <span class="location-country">United States</span>
        </div>
      </div>
      <div @click="Paris" class="location-card">
        <img
          src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,h_100,w_100,g_face/v1638304324/New%20York/pexels-vlada-karpovich-4451427_xxasuw.jpg"
          alt=""
        />
        <div>
          <span class="location-city">Paris</span>,
          <span class="location-country">France</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: null,
    };
  },
  methods: {
    Budapest() {
      this.selectedCity = "Budapest";
      this.sendCity()
    },
    Jerusalem() {
      this.selectedCity = "Jerusalem";
      this.sendCity()
    },
    London() {
      this.selectedCity = "London";
      this.sendCity()
    },
    NewYork() {
      this.selectedCity = "New York";
      this.sendCity()
    },
    Paris() {
      this.selectedCity = "Paris";
      this.sendCity()
    },
    sendCity() {
      this.$emit("selectedCity", this.selectedCity);      
    },
  },
  computed: {},
};
</script>
