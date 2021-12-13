<template>
  <div class="host-orders-list">
    <ul class="clean-list">
      <li v-for="order in orders" :key="order._id">
        <div class="order-txt-host-page-container">
          <div class="order-txt-host-page">
            <div class="order-host-page-left">
              <div>
                <img :src="order.byUser.imgUrl" alt="" />
              </div>
              <div class="order-txt-host-page-left">
                <div class="requested-by">
                  Requested by: <span>{{ order.byUser.fullName }}</span>
                </div>
                <div>
                  {{ order.persons }} guests; {{ order.startDate }} -
                  {{ order.endDate }}; {{ order.stay.name }}
                </div>
              </div>
            </div>
          </div>
          <div>
            <span
              class="accept"
              v-if="!order.isApproved"
              @click="onAccept(order._id)"
              >accept</span
            ><span v-if="!order.isApproved"> /</span
            ><span
              class="reject"
              v-if="!order.isApproved"
              @click="onReject(order._id)"
            >
              reject</span
            ><span
              class="accept"
              v-if="order.isApproved && order.isApproved !== 'rejected'"
              >Accepted</span
            ><span class="reject" v-if="order.isApproved === 'rejected'"
              >Rejected</span
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currUser: {},
      orders: [],
    };
  },
  created() {
    this.currUser = this.$store.getters.loggedinUser;
    const filterBy = { filterType: "host", filter: this.currUser._id };
    this.$store.dispatch({ type: "setOrdersFilter", filterBy });
    this.orders = this.$store.getters.orders;
  },
  methods: {
    async onAccept(orderId) {
      await this.$store.dispatch({
        type: "approveOrder",
        orderId,
        isApproved: true,
      });
      console.log(this.$store.getters.orders);
      this.orders = this.$store.getters.orders;
    },
    async onReject(orderId) {
      await this.$store.dispatch({
        type: "approveOrder",
        orderId,
        isApproved: "rejected",
      });
      this.orders = this.$store.getters.orders;
    },
  },
};
</script>

<style>
</style>