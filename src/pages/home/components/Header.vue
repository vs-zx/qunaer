<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont icon-back">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont icon-arrow">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
// 映射数据
import {mapState,mapGetters} from 'vuex'

export default {
    name: "HomeHeader",
    computed: {
        ...mapState(['city']),
        ...mapGetters(['doubleCity'])
    }

};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header
    display:flex;
    line-height:$headerHeight;
    background:$bgColor;
    color:#fff;

    .header-left
        width:0.64rem;
        float:left;
        .icon-back{
            display:block;
            font-size:0.4rem;
            text-align:center;
        }
    .header-input
        flex:1;
        height:.64rem;
        line-height:.64rem;
        margin-top:.12rem;
        margin-left:.2rem;
        padding-left:.2rem;
        color:#ccc;
        background-color:#fff;
        border-radius:5px;
    .header-right
        min-width:1.04rem;
        padding:0 .1rem;
        float:right;
        text-align:center;
        color:#fff;
        .icon-arrow{
            font-size:.24rem;
        }
</style>
