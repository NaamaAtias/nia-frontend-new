<template>
  <div v-if="currentUser" class="host-page main-layout">
    <h1>Pending / Accepted</h1>
    <div>
      <span>{{ numNewItems }}</span>
      <span> new items</span><span class="dote"> · </span>
      <span>{{ responseRate }}%</span>
      <span> response rate</span>
    </div>
    <div class="host-flex">
      <host-orders-list></host-orders-list>      
      <div class="hosting-summary-container">
          <h2>Hosting summary</h2>
        <div class="Fantastic-job">
          <div class="title">Fantastic job</div>
          <div class="v-img"><img src="../assets/img/check.png" alt="" /></div>
        </div>
        <div class="Fantastic-job">Guests love what you're doing. keep up the great work!</div>
        <div class="Fantastic-job">View details</div>
        <hr>
        <div class="Fantastic-job">
          <div>December earnings</div>
          <div>{{ earnings }}$</div>
        </div>
        <div class="Fantastic-job">
          <div>30-day views</div>
          <div>{{ views }}</div>
        </div>
        <hr>
        <div class="Fantastic-job"> 
          <div>Overall rating </div>
          <div class="border-line">{{ rating }} <i
              class="fas fa-star"
              style="font-size: 14px; color: rgb(255, 55, 92)"></i></div>
        </div>
        <div class="Fantastic-job">
          <div>Total reviews</div>
          <div>{{ reviews }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hostOrdersList from "../cmps/host-orders-list.vue";
export default {
  data() {
    return {
    };
  },
  created() {
    const filterBy = { filterType: "host", filter: this.currentUser._id };
    this.$store.commit({type: "setOrders", orders: ''})
    this.$store.dispatch({ type: "setOrdersFilter", filterBy });
  },
  computed: {
    currentUser(){
      return this.$store.getters.loggedinUser;
    },
    orders(){
      return this.$store.getters.orders;
    },
    numNewItems() {
      return this.orders.length;
    },
    responseRate() {
      var totalApproved = 0;
      this.orders.map((order) => {
        if (order.isApproved) totalApproved++;
      });
      return (totalApproved/this.orders.length)*100;
    },
    earnings() {
      var sum = 0;
      this.orders.map((order) => {
        var totalPrice = order.nights * order.stay.price;
        sum += totalPrice;
      });
      return sum;
    },
    views() {
      return " 678"; //todo
    },
    rating() {
      return " 4.9"; //todo
    },
    reviews() {
      return " 30"; //todo
    },
  },
  components: {
    hostOrdersList,
  },
};
</script>

<style>
</style>