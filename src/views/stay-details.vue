<template>
  <section class="main-layout" v-if="stay">
   <order-modal v-if="isOrdered" />
    <div class="stay-details">
      <h1 class="less-margin fs26 bold details-font">{{ stay.name }}</h1>
      <div class="details-header align-center">
        <div class="">
          <span
            ><i
              class="fas fa-star"
              style="font-size: 14px; color: rgb(255, 55, 92)"
            ></i
          ></span>
          <span class="bold"> {{ avgStayRate }}</span
          ><span class="gray-font bold details-font">
            ({{ stay.reviews.length }}
            <span class="underline bold gray-font details-font">reviews</span> )
          </span>
          <span class="dote gray-font bold"> · </span>
          <span class="underline bold gray-font details-font">
            {{ stay.loc.city }}</span
          >
        </div>
        <div class="details-btns flex align-center">
          <div>
            <label class="share-btn" @click="share">
              <img class="icon-btn" src="@/assets/img/share.jpg" />
              <button>Share</button>
            </label>
          </div>
          <div>
            <label class="share-btn" @click="save">
              <img class="icon-btn" src="@/assets/img/heart.png" />
              <button>Save</button>
            </label>
          </div>
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
      <section class="main-details-container flex">
        <section class="text-details">
          <div>
            <section class="hosted-by flex row">
              <div>
                <p class="less-margin fs22 bold">
                  {{ stay.type }} hosted by {{ stay.host.fullName }}
                </p>
                <p>
                  <span>{{ stay.capacity }} guests</span
                  ><span class="dote"> · </span
                  ><span> {{ stay.bedroom }} bedrooms</span
                  ><span class="dote"> · </span><span> {{ stay.bed }} beds</span
                  ><span class="dote"> · </span
                  ><span> {{ stay.bath }} bath</span>
                </p>
              </div>
              <user-avatar :imgUrl="stay.host.imgUrl"></user-avatar>
            </section>

            <hr class="margin" />
            <div class="stay-details-features-main fs14">
              <div class="stay-feature-container">
                <div class="stay-feature-container-left">
                  <img
                    class="stay-features"
                    src="https://res.cloudinary.com/itzikdahan/image/upload/v1639042599/nia-bnb/home_ib5ono.png"
                    alt=""
                  />
                </div>
                <div class="stay-feature-container-right">
                  <p class="bold">Entire place</p>
                  <p>You'll have the place to yourself.</p>
                </div>
              </div>
              <div class="stay-feature-container">
                <div class="stay-feature-container-left">
                  <img
                    class="stay-features"
                    src="https://res.cloudinary.com/itzikdahan/image/upload/v1639042599/nia-bnb/sparkle_m0gx4w.png"
                    alt=""
                  />
                </div>
                <div class="stay-feature-container-right">
                  <p class="bold">Enhanced Clean</p>
                  <p>
                    This host committed to niabnb's 5-step enhanced cleaning
                    process.
                  </p>
                </div>
              </div>
              <div class="stay-feature-container">
                <div class="stay-feature-container-left">
                  <img
                    class="stay-features"
                    src="https://res.cloudinary.com/itzikdahan/image/upload/v1639053179/nia-bnb/door_vozorw.png"
                    alt=""
                  />
                </div>
                <div class="stay-feature-container-right">
                  <p class="bold">Self check-in</p>
                  <p>Check yourself in with the lockbox.</p>
                </div>
              </div>
              <div class="stay-feature-container">
                <div class="stay-feature-container-left">
                  <img
                    class="stay-features"
                    src="https://res.cloudinary.com/itzikdahan/image/upload/v1639042604/nia-bnb/wifi_fa9ypi.png"
                    alt=""
                  />
                </div>
                <div class="stay-feature-container-right">
                  <p class="bold">Wifi</p>
                  <p>Guests often search for this popular amenity.</p>
                </div>
              </div>
            </div>
            <hr class="margin" />
            <section class="summary">
              <p>
                {{ stay.summary }}
              </p>
            </section>
            <hr class="margin" />
            <div>
              <p class="fs22 bold">What this place offers</p>
              <stay-amenity
                v-for="item in stay.amenities"
                :key="item"
                :item="item"
              />
            </div>
          </div>
        </section>
        <section class="order-form-cmp">
          <stay-order-form :stayId="stay._id"></stay-order-form>
        </section>
      </section>
      <hr class="margin" />

      <section class="main-layout">
        <div class="flex row fs22 bold">
          <span class="star"
            ><i
              class="fas fa-star"
              style="font-size: 16px; color: rgb(255, 55, 92)"
            ></i
          ></span>
          <span> {{ avgStayRate }}</span>
          <span class="dote"> · </span>
          <span> {{ stay.reviews.length }} <span>reviews</span> </span>
        </div>
        <stay-rate :reviews="stay.reviews" />
        <div class="review-out flex space-between">
          <stay-review
            v-for="review in stay.reviews"
            :key="review.id"
            :review="review"
          />
        </div>
        <hr class="margin" />
      </section>
      <section class="main-layout map">
        <p class="fs22 bold">Where you’ll be</p>
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
import userAvatar from "../cmps/user-avatar.vue";
import orderModal from "../cmps/order-modal.vue";

export default {
  created() {
    window.scrollTo(0, 0);
  },
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
    isOrdered() {
      return this.$store.getters.isOrdered;
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
    userAvatar,
    orderModal,
  },
};
</script>

<style>
</style>