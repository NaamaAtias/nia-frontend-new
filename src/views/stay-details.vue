<template>
  <section class="main-layout" v-if="stay">
    <div class="stay-details">
      <h1 class="big-font">{{ stay.name }}</h1>
      <div class="details-header align-center">
        <div class="">
          <span
            ><i
              class="fas fa-star"
              style="font-size: 14px; color: rgb(255, 55, 92)"
            ></i
          ></span>
          <span> {{ avgStayRate }}</span
          ><span>
            ({{ stay.reviews.length }} <span class="underline">reviews</span> )
          </span>
          <span class="dote"> · </span>
          <span class="underline"> {{ stay.loc.city }}</span>
        </div>
        <div class="details-btns flex align-center">
          <label class="share-btn" @click="share">
            <img class="icon-btn" src="@/assets/img/share.jpg" />
            <button>Share</button>
          </label>
          <label class="share-btn" @click="save">
            <img class="icon-btn" src="@/assets/img/heart.png" />
            <button>Save</button>
          </label>
        </div>
      </div>
      <div class="stay-details-imgs-container main-layout">
        <img
          v-for="(img, idx) in stay.imgUrls"
          :class="'stay-img' + idx"
          :src="img"
          :key="idx"
        />
      </div>
      <section class="main-details-container main-layout">
        <section class="flex">
          <section class="text-details">
            <div>
              <div>
                <h2 class="big-font">{{ stay.summary }}</h2>
              </div>
              <div>
                <span>{{ stay.capacity }} guests</span
                ><span class="dote"> · </span
                ><span> {{ stay.bedroom }} bedrooms</span
                ><span class="dote"> · </span><span> {{ stay.bed }} beds</span
                ><span class="dote"> · </span><span> {{ stay.bath }} bath</span>
              </div>

              <hr />
              <div>
                <h2 class="big-font">What this place offers</h2>
                <stay-amenity
                  v-for="item in stay.amenities"
                  :key="item"
                  :item="item"
                />
              </div>
            </div>
            <section>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                aliquid distinctio ratione itaque at fugit fuga et laboriosam
                laudantium cupiditate sequi, alias quia deleniti in hic non!
                Voluptas, laudantium sapiente.
              </p>
            </section>
          </section>
          <section class="order-form-cmp">
            <stay-order-form :stayId="stay._id"></stay-order-form>
          </section>
        </section>
      </section>
      <hr />
      <span
        ><i
          class="fas fa-star"
          style="font-size: 14px; color: rgb(255, 55, 92)"
        ></i
      ></span>
      <span> {{ avgStayRate }}</span>
      <span class="dote"> · </span>
      <span> {{ stay.reviews.length }} <span>reviews</span> </span>
      <stay-rate :reviews="stay.reviews" />
      <stay-review
        v-for="review in stay.reviews"
        :key="review.id"
        :review="review"
      />
      <hr />
      <section class="main-layout map">
        <GmapMap
          :center="{ lat: stay.loc.lat, lng: stay.loc.lng }"
          :zoom="13"
          map-type-id="terrain"
          style="width: 1120px; height: 480px"
        >
        </GmapMap>
      </section>
    </div>
  </section>

  <!-- Itzik -->
</template>

<script>
import stayAmenity from "@/cmps/stay-amenity";
import stayReview from "@/cmps/stay-review";
import stayOrderForm from "@/cmps/stay-order-form";
import stayRate from "@/cmps/stay-rate";
export default {
  data() {
    return {
      stay: null,
    };
  },
  methods: {
    save() {
      console.log("saved");
    },
    share() {
      console.log("shared");
    },
  },
  computed: {
    avgStayRate() {
      return this.$store.getters.avgStayRate;
    },
  },
  watch: {
    "$route.params.stayId": {
      async handler() {
        try {
          const stayId = this.$route.params.id;
          await this.$store.dispatch({ type: "loadStay", stayId });
          this.stay = JSON.parse(JSON.stringify(this.$store.getters.currStay));
        } catch (err) {
          console.log(err);
        }
      },
      immediate: true,
    },
  },
  components: {
    stayAmenity,
    stayReview,
    stayOrderForm,
    stayRate,
  },
};
</script>

<style>
.stay-details {
  margin-top: 200px;
}
.underline {
  text-decoration-line: underline;
}
.icon-btn {
  height: 16px;
  margin-inline-end: 8px;
}
button {
  font-weight: 400;
  background-color: transparent;
  border: none;
  text-decoration-line: underline;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
}
.share-btn {
  display: flex;
  margin-inline-start: 8px;
  margin-bottom: 0px;
}
.share-btn :hover {
  cursor: pointer;
}
.details-btns {
  display: flex;
  margin-bottom: 0px;
}
.details-header {
  display: flex;
  justify-content: space-between;
}
.star {
  background-color: rgb 255.55.92;
}
.big-font {
  font-size: 22px;
}
.dote {
  margin: 0 5px;
}
hr {
  border-top-width: 1px !important;
  border-top-style: solid !important;
  color: rgb(221, 221, 221);
}
</style>