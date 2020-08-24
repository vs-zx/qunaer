<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-back">&#xe624;</i>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <i class="iconfont icon-arrow">&#xe64a;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
// 映射数据
import { mapState, mapGetters } from "vuex";

export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"]),
    ...mapGetters(["doubleCity"]),
  },
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  background: #00bcd4;
  color: #fff;

  .header-left {
    width: 0.64rem;

    .icon-back {
      display: block;
      font-size: 0.4rem;
      text-align: center;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    color: #ccc;
    background-color: #fff;
    border-radius: 5px;
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    text-align: center;
    color: #fff;

    .icon-arrow {
      font-size: 0.24rem;
    }
  }
}
</style>
