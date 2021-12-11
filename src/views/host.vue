<template>
  <div class="host-page main-layout">
    <h1>Pending / Accepted</h1>
    <div>
      <span>{{ numNewItems }}</span>
      <span>new items</span><span class="dote"> · </span>
      <span>{{ responseRate }}</span>
      <span>response rate</span>
    </div>
    <div class="host-flex">
      <div class="reservation-list">reservation-list</div>
      <div class="hosting-summary">
        <h2>Hosting summary</h2>
        <h4>Fantastic job <span>V</span></h4>
        <span>Gusts love wat you're doing. keep up the great work!</span>
        <br/><br/>
        <span>View details</span>
        <br><br>
        <hr>
        <br>
        <span>November earning</span><span>{{earning}}</span>
        <br/><br>
        <span>30-day views</span><span>{{views}}</span>
        <br><br>
        <hr>
        <br>
        <span>Overall rating</span><span>{{rating}}</span>
        <br/><br>
        <span>Total reviews</span><span>{{reviews}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    numNewItems() {
      return "4 "; //todo
    },
    responseRate() {
      return "75% "; //todo
    },
    earning(){
        return " 2570$" //todo
    },
    views(){
        return " 678" //todo
    },
        rating(){
        return " 4.9*" //todo
    },
        reviews(){
        return " 30" //todo
    }
  },
};
</script>

<style>
</style>