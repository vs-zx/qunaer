<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <i class="iconfont header-abs-back">&#xe624;</i>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
      timer: null,
    };
  },
  methods: {
    handleScroll() {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 60) {
        const opacity = opacity > 1 ? 1 : top / 140;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else if (top > 140) {
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  z-index:10;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  font-size: 0.32rem;
  color: #fff;
  text-align: center;
  background: $bgColor;

  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    font-size: 0.4rem;
    color: #fff;
    text-align: center;
  }
}
</style>
