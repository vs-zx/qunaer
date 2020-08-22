<template>
    <div class="city">
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list
            :hot="hotCities"
            :cities="cities"
            :letter="letter"
        ></city-list>
        <city-alphabet
            :cities="cities"
            @change="handleLetterChange"
        ></city-alphabet>
    </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";

import axios from "axios";

export default {
    name: "City",
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data() {
        return {
            hotCities: [],
            cities: {},
            letter: ""
        };
    },
    methods: {
        getCityInfo: function() {
            axios.get("/api/city.json").then(this.getCityInfoSucc);
        },
        getCityInfoSucc: function(res) {
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data;
                // console.log(data);
                this.hotCities = data.hotCities;
                this.cities = data.cities;
            }
        },
        handleLetterChange(val) {
            // console.log(val);
            this.letter = val;
        }
    },
    mounted() {
        this.getCityInfo();
    }
};
</script>

<style lang="stylus" scoped></style>
