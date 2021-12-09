<template>
  <section class="flex align-center">
    <img class="amenities-icons" :src="symbol" alt="" />
    <span class="amenity-item">{{ item }}</span>
  </section>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    symbol() {
      var symbol = "";
      if (this.item === "TV")
        symbol =
          "https://res.cloudinary.com/db0wqgy42/image/upload/v1638527053/logo/tv_cki4xg.png";
      if (this.item === "Wifi")
        symbol =
          "https://res.cloudinary.com/db0wqgy42/image/upload/v1638527054/logo/wifi_qrznjr.png";
      if (this.item === "Kitchen")
        symbol =
          "https://res.cloudinary.com/db0wqgy42/image/upload/v1638527052/logo/kitchen_ljppwj.png";
      if (this.item === "Smoking allowed")
        symbol =
          "https://res.cloudinary.com/db0wqgy42/image/upload/v1638527052/logo/smoking_vbat2h.png";
      if (this.item === "Pets allowed")
        symbol =
          "https://res.cloudinary.com/db0wqgy42/image/upload/v1638527050/logo/paws_d6fxll.png";
      return symbol;
    },
  },
};
</script>

<style>

</style>