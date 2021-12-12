<template>
  <div>
    <div class="screen" @click="orderDone()"></div>
    <div class="order-modal">
      <p class="fs28 confirmation">Reserved</p>
      <p class="fs22 bold">We can't wait for your visit</p>
      <hr />
      <div class="trip-details">
        <p class="fs18"><span>Stay name: </span><span>{{ order.stay.name }}</span></p>
        <p class="fs18"><span>Dates:</span><span>{{ order.startDate }} - {{ order.endDate }}</span></p>
        <p class="fs18"><span>Guests number: </span><span><span>{{ order.persons }}</span>
            <span v-if="order.pets > 0">+ {{ order.pets }}</span></span></p>
         <p class="fs18 bold"><span>Total price:</span> <span>${{ totalPrice }}</span></p>
      </div>
      <p class="order-note fs 14 bold">Please make sure to recive the host confirmation</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    orderDone() {
      this.$store.commit({ type: "cleanScreen" });
    },
  },
  computed: {
    order() {
      return this.$store.getters.showCurrOrder;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style>
</style>