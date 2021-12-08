<template>
  <section class="stay-order-form flex column justify-center">
  <div class="sticky-div">
   <div class="order-header flex row space-between align-center">
    <p><span class="price-span">${{currStay.price}} </span>/ night</p>
    <p v-if="currStay.reviews.length">
          <span class="star"
            ><i
              class="fas fa-star"
              style="font-size: 12.5px; color: rgb(255, 55, 92)"
            ></i></span>
            <strong class="rate-span fs14"> {{ avgRate }} <span class="reviews-span">({{ currStay.reviews.length }} reviews)</span></strong>
        </p>
   </div>
   <div class="order-box">
    <form @submit.prevent="sendOrder" class="order-input flex column">
      <div class="order-dates flex">
               <div  class="check-in-order flex column">
        <label @click="datePicker = !datePicker">
          Check in
            <date-picker @startDate="changeStartDate"></date-picker>
        </label>
          </div>
          <div  class="check-out-order flex column">
        <label @click="datePicker = !datePicker">
          Check out
            <date-picker @endDate="changeEndDate" />
        </label>
          </div>
       </div>
        <div class="order-guests flex column">
          <label name="guests">Guests
            <input @click="isOnGuests = !isOnGuests" id="guests" type="text" :placeholder="guests" />
          </label>
        </div>
        <guests class="guests-order-box" v-if="isOnGuests" @totalPers="setcurrGuests" />
      <button ref="btn" class="order-btn">Check availability</button>
      <div class="price-details">
        <p class="fs14">You won't be charged yet</p>
        <div class="flex row">
        <p class="prices-display-left flex column">${{currStay.price}} x {{currTrip.nights}} nights<br> Cleaning fee <br> Service fee </p>
        <p class="prices-display-right">${{totalPriceNoFees}} <br> ${{price.cleaningFee}} <br> ${{price.serviceFee}} </p>
        </div>
        <hr>
        <div class="total-price-display flex"><span class="display-left">Total </span><span class="display-right">${{totalPrice}}</span></div>
      </div>
    </form>
   </div>
   </div>
  </section>
</template>

<script>
import datePicker from "./date-picker.vue";
import guests from "./guests.vue";

export default {
  data() {
    return {
      currTrip: null,
      currStay: {},
      datePicker: false,
      isOnGuests: false,
      startDate: 0,
      endDate: 0,
      avgRate: 0,
    };
  },
  created() {
    this.currTrip = this.$store.getters.trip;
    this.currStay = this.$store.getters.currStay;
    this.avgRate = this.$store.getters.avgStayRate;
  },
  mounted() {
    const button = this.$refs.btn;
    console.log(button);
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = ((e.clientX - rect.left) * 100) / button.clientWidth;
      const y = ((e.clientY - rect.top) * 100) / button.clientHeight;
      button.style.setProperty("--mouse-x", x);
      button.style.setProperty("--mouse-y", y);
    });
  },
  computed: {
    guests() {
      if(!this.currTrip.persons) return 'Add guests';
      else if (this.currTrip.persons > 1) return `${this.currTrip.persons} guests + ${this.currTrip.pets} pets`
      else return `${this.currTrip.persons} guest + ${this.currTrip.pets} pets`
    },
    price() {
      return this.$store.getters.currPrice;
    },
    totalPriceNoFees() {
      return this.$store.getters.totalPriceNoFees;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    }
  },
  components: {
    datePicker,
    guests,
  },
  methods: {
    sendOrder() {
      this.currTrip.stay = {
        _id: this.currStay._id,
        name: this.currStay.name,
        price: this.currStay.price,
      };
      this.$store.commit({ type: "setOrder", order: this.currTrip });
      this.currTrip = {};
    },
    changeStartDate(date) {
      this.startDate = date.getTime();
      const dataStr = date.toString();
      this.currTrip.startDate = dataStr.slice(4, 10);
    },
    changeEndDate(date) {
      this.endDate = date.getTime();
      const dataStr = date.toString();
      this.currTrip.endDate = dataStr.slice(4, 10);
      this.currTrip.nights =
        (this.endDate - this.startDate) / (1000 * 3600 * 24);
    },
    setcurrGuests(guests) {
      this.currTrip.persons = guests.totalPers;
      this.currTrip.pets = guests.pets;
    },
  },
};
</script>



     