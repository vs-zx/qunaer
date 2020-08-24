<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./city/Header"
import CitySearch from "./city/Search"
import CityList from "./city/List"
import CityAlphabet from "./city/Alphabet"

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      letter: "",
    };
  },
  methods: {
    getCityInfo: function () {
      this.$axios.get("/api/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc: function (res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.hotCities = data.hotCities;
        this.cities = data.cities;
      }
    },
    handleLetterChange(val) {
      this.letter = val;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style></style>
