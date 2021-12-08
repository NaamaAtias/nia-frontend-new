<template>
    <div class="max-filter">
      <div class="filter-hover filter-location">
        <div @click="isOnLocation = !isOnLocation" class="filter-title">
          Location
        </div>
        <div @click="isOnLocation = !isOnLocation" class="filter-input">
          {{ selectedLocation }}
        </div>
      </div>
      <div class="filter-space"></div>
      <div class="filter-hover filter-check-in">
        <div @click="datePicker = !datePicker" class="filter-title">
          Check in
        </div>
        <div class="filter-input">
          <date-picker @startDate="addStartDate"></date-picker>
        </div>
      </div>
      <div class="filter-space"></div>
      <div class="filter-hover filter-check-out">
        <div @click="datePicker = !datePicker" class="filter-title">
          Check out
        </div>
        <div class="filter-input">
          <date-picker @endDate="addEndDate" />
        </div>
      </div>
      <div class="filter-space"></div>
      <div class="filter-hover filter-guests">
        <div>
          <div @click="isOnGuests = !isOnGuests" class="filter-title">
            Guests
          </div>
          <div @click="isOnGuests = !isOnGuests" class="filter-input">
            {{ addGuests }}
          </div>
        </div>
        <div class="search-btn-container">
          <router-link to="/stay">
            <button @click="search" class="filter-explore">
              <a href="#/explore"><i class="fas fa-search"></i></a>
            </button>
          </router-link>
        </div>
      </div>
      <div v-if="isOnLocation">
        <location @selectedCity="selectedCity" />
      </div>

      <div class="guests" v-if="isOnGuests">
        <guests @totalPers="totalPers" />
      </div>
    </div>
</template>
<script>
import datePicker from "./date-picker.vue";
import location from "./location.vue";
import guests from "./guests.vue";
import { storageService } from "../services/async-storage.service.js";

export default {
  data() {
    return {
      isScroll: false,
      datePicker: false,
      isOnLocation: false,
      isOnGuests: false,
      startDate: 0,
      endDate: 0,
      addGuests: "Add guests",
      selectedLocation: "Where are you going?",
      nights: 0,
      persons: 0,
      pets: 0,
      searchData: {
        location: null,
        startDate: null,
        endDate: null,
        nights: 0,
        persons: 0,
        pets: 0,
      },
    };
  },
  components: { datePicker, location, guests },
  methods: {
    addStartDate(date) {
      this.startDate = date.getTime();
      const dataStr = date.toString();
      this.searchData.startDate = dataStr.slice(4, 10);
    },
    addEndDate(date) {
      this.endDate = date.getTime();
      const dataStr = date.toString();
      this.searchData.endDate = dataStr.slice(4, 10);
      this.nights = (this.endDate - this.startDate) / (1000 * 3600 * 24);
    },
    totalPers(total) {
      this.addGuests = total.totalPers + " guests + " + total.pets + " pets";
      this.persons = total.totalPers;
      this.pets = total.pets;
    },
    selectedCity(selectedCity) {
      this.selectedLocation = selectedCity;
      this.isOnLocation = false;
    },
    search() {
      this.isOnGuests = false;
      this.searchData.location = this.selectedLocation;
      this.searchData.nights = this.nights;
      this.searchData.persons = this.persons;
      this.searchData.pets = this.pets;
      console.log("searchData:", this.searchData);
      this.$store.commit({type: 'setCurrTrip', trip: this.searchData})

    },
  }
};
</script>



     