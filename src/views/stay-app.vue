<template>
<div>
    <price-filter/>
    <p v-if="isLoading">Loading...</p>
    <stay-list></stay-list>
</div>
  
</template>

<script>
import stayList from '@/cmps/stay-list';
import PriceFilter from '../cmps/price-filter.vue';
export default {
    name: "stay",

    components: {
    stayList,
    PriceFilter        
  },
   computed: {
     isLoading() {
      return this.$store.getters.isLoading;
    },
  },

}
</script>