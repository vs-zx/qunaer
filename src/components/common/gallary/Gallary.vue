<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="swiper-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommomGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        observer: true,
        observeParents: true,
      },
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  z-index: 99;
  display: flex;
  align-items: center;

  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;

    .swiper-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
      z-index: 100;
    }
  }
}
</style>
