<template>
  <div v-if="order">
    <div class="screen" @click="orderDone()"></div>
    <div class="order-modal">
      <p class="fs26 bold">Great Choice!</p>
      <p class="fs22 bold">We can't wait for your visit</p>
      <hr />
      <p class="fs16 bold">Your trip details:</p>
      <p class="fs18">Stay name: {{order.stay.name}}</p>
      <p class="fs18">Dates: {{order.startDate}} - {{order.endDate}}</p>
      <p class="fs18">Guests number: {{order.persons}} <span v-if="order.pets > 0">+ {{order.pets}}</span></p>
      <!-- <p class="fs18">Total price: {{totalPrice}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        orderDone() {
            this.$store.commit({type:'cleanScreen'});
        },
    },
    computed: {
        order() {
           return this.$store.getters.showCurrOrder;
        }
    }
};
</script>

<style>
</style>