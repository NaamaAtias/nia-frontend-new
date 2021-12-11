<template>
<section class="host-orders-list">
  <h1>Host page</h1>
  <ul>
    <li v-for="order in orders" :key="order._id">{{order}}</li>
  </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currUser: {},
      orders: []
    }
  },
  created() {
    this.currUser = this.$store.getters.loggedinUser;
    const filterBy = { filterType: 'host', filter: this.currUser._id };
    this.$store.dispatch({type: 'setOrdersFilter', filterBy})
    // this.$store.dispatch({type: 'setHostFilter', filterByHostId: this.currUser._id})
    this.orders = this.$store.getters.orders;
    console.log('orders', this.orders)

  }

}
</script>

<style>

</style>