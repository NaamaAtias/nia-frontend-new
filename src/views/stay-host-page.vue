<template>
<section>
  <h1>Host page</h1>
  <ul>
    <li for="order in orders">{{order}}</li>
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
    this.currentUser = this.$store.getters.loggedinUser;
    const filterBy = { filterType: 'host', filter: this.currentUser._id };
    this.$store.dispatch({type: 'setOrdersFilter', filterBy})
    this.orders = this.$store.getters.orders;

  }

}
</script>

<style>

</style>