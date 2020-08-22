<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header{
        overflow:hidden;
        height: $headerHeight;
        line-height: $headerHeight;
        font-size: .32rem;
        color:#fff;
        text-align:center;
        background:$bgColor;
        position:relative;

        .header-back{
            position:absolute;
            top:0;
            left:0;
            width: .64rem;
            font-size:.4rem;
            color:#fff;
            text-align:center;
        }
    }
</style>
