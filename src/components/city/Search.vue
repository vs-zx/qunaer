<template>
  <div>
    <!-- 输入地名关键字 -->
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyWord" />
    </div>
    <!-- 展示搜索信息 -->
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleClick(item.name)"
        >{{ item.name }}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  data() {
    return {
      keyWord: "",
      list: [],
      timer: null,
    };
  },
  methods: {
    // 下拉城市项点击跳转首页
    handleClick(city) {
       this.$store.commit("changeCity", city);
      this.$router.push("/");
    },
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  watch: {
    // 根据关键字检索相关地名
    keyWord() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyWord) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            // 检索每一个城市的名字，拼音，是否包含有输入的关键字，包含就将其放入数组中
            if (
              item.spell.indexOf(this.keyWord) > -1 ||
              item.name.indexOf(this.keyWord) > -1
            ) {
              result.push(item);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
  mounted() {
    // 使用better-scroll让下拉城市项可以滚动
    this.scroll = new BScroll(this.$refs.search, {
      click: true,
    });
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    padding: 0 0.1rem;
    color: #666;
    text-align: center;
    border-radius: 0.06rem;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  left: 0;
  background: #eee;
  z-index: 1;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>
