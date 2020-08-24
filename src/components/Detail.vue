<template>
  <div id="detail">
    <detail-header></detail-header>
    <detail-banner 
        :sightName="sightName" 
        :bannerImg="bannerImg" 
        :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./detail/Banner";
import DetailHeader from "./detail/Header";
import DetailList from "./detail/List";

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      categoryList: [],
    };
  },
  methods: {
    getDetailInfo() {
      this.$axios
        .get("/api/detail.json?id=", {
          params: {
            id: this.$route.params.id,
          },
        })
        .then(this.getDetailInfoSucc);
    },
    getDetailInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.categoryList = data.categoryList;
      }
    },
  },
  mounted() {
    this.getDetailInfo();
  },
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
