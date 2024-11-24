<template>
  <section class="date-picker">
    <div class="calendar">
      <date-picker
        v-model="time"
        valueType="format"
        format="DD MMM"
        @pick="setDate"
        placeholder="Add Date"
      ></date-picker>
    </div>
  </section>
</template>
<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data() {
    return {
      time: null,
      startDate: false,
      endDate: null,
      startInput: null,
      endInput: null,
    };
  },
  methods: {
    setDate(input) {
      console.log("setDate/date-picker",input);//naama
      this.$emit("startDate", input);
      this.$emit("endDate", input);
    },
  },
};
</script>