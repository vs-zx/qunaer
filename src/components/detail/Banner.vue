<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-title">{{ sightName }}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe635; </span>
                    {{ this.gallaryImgs.length }}
                </div>
            </div>
        </div>
        <!-- 大图预览 -->
        <common-fade>
            <common-gallary
                :imgs="gallaryImgs"
                v-show="showGallary"
                @close="handleGallaryClose"
            ></common-gallary>
        </common-fade>
    </div>
</template>

<script>
import CommonGallary from "../common/gallary/Gallary";
import CommonFade from "../common/fade/Fade";

export default {
    name: "DetailBanner",
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array,
    },
    data() {
        return {
            showGallary: false,
        };
    },
    components: {
        CommonGallary,
        CommonFade,
    },
    methods: {
        handleBannerClick() {
            this.showGallary = true;
        },
        handleGallaryClose() {
            this.showGallary = false;
        },
    },
};
</script>

<style lang="stylus" scoped>
.banner{
    overflow:hidden;
    height:0;
    padding-bottom:55%;
    position:relative;

    .banner-img{
        width:100%;
    }

    .banner-info{
        display:flex;
        position:absolute;
        left:0;
        bottom:0;
        right:0;
        line-height:.6rem;
        color:#fff;
        background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.8));

        .banner-title{
            flex:1;
            font-size:.32rem;
            padding:0 .2rem;
        }
        .banner-number{
            padding:0 .4rem;
            margin-top:.14rem;
            height:.32rem;
            line-height:.32rem;
            font-size:.24rem;
            border-radius:.2rem;
            background:rgba(0,0,0,.8);
            .banner-icon{
                font-size:.24rem;
            }
        }
    }
}
</style>
