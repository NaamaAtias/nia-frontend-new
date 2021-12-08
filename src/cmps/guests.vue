<template>
  <div class="guests-main-container">
    <div class="guests-container">
      <div class="guests-titles">
        <div>
          <div class="guests-title">Adults</div>
          <div class="guests-note">Ages 13 or above</div>
        </div>
        <div>
          <div class="guests-title">Children</div>
          <div class="guests-note">Ages 2–12</div>
        </div>
        <div>
          <div class="guests-title">Infants</div>
          <div class="guests-note">Under 2</div>
        </div>
        <div>
          <div class="guests-title">Pets</div>
          <div class="guests-note bold">Bringing an assistance animal?</div>
        </div>
      </div>
      <div class="guests-btns">
        <div>
          <button type="button" class="guests-btn" @click="addAdults">+</button>
          <span class="quantity">{{ quantityAdults }}</span>
          <button type="button" class="guests-btn" @click="reduceAdults">-</button>
        </div>
        <div>
          <button type="button" class="guests-btn" @click="addChildren">+</button>
          <span class="quantity">{{ quantityChildren }}</span>
          <button type="button" class="guests-btn" @click="reduceChildren">-</button>
        </div>
        <div>
          <button type="button" class="guests-btn" @click="addInfants">+</button>
          <span class="quantity">{{ quantityInfants }}</span>
          <button type="button" class="guests-btn" @click="reduceInfants">-</button>
        </div>
        <div>
          <button type="button" class="guests-btn" @click="addPets">+</button>
          <span class="quantity">{{ quantityPets }}</span>
          <button type="button" class="guests-btn" @click="reducePets">-</button>
        </div>
      </div>
      <div></div>
    </div>
    <div class="guests-note">
      If you're lucky enough to have more than 2 pets with you, be sure to let
      your host know.
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      quantityAdults: 0,
      quantityChildren: 0,
      quantityInfants:0,
      quantityPets:0,
    };
  },
  methods: {
    addAdults() {
      this.quantityAdults++;
      this.sumTotalPers()
    },
    reduceAdults() {
      if (this.quantityAdults) this.quantityAdults--;
      this.sumTotalPers()
    },
        addChildren() {
      this.quantityChildren++;
      this.sumTotalPers()
    },
    reduceChildren() {
      if (this.quantityChildren) this.quantityChildren--;
      this.sumTotalPers()
    },
        addInfants() {
      this.quantityInfants++;
      this.sumTotalPers()
    },
    reduceInfants() {
      if (this.quantityInfants) this.quantityInfants--;
      this.sumTotalPers()
    },
        addPets() {
      this.quantityPets++;
      this.sumTotalPers()
    },
    reducePets() {
      if (this.quantityPets) this.quantityPets--;
      this.sumTotalPers()
    },
    sumTotalPers(){
      const totalPers = this.quantityAdults + this.quantityChildren + this.quantityInfants;
      this.$emit("totalPers", {totalPers: totalPers, pets: this.quantityPets});
    }
  },
};
</script>