<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="swiper-img" :src="item" />
                </swiper-slide>
                <!-- <swiper-slide>
                    <img class="swiper-img" src="//imgs.qunarzz.com/sight/p0/1505/c2/c27514a93e8b8392.water.jpg_256x144_d6583df5.jpg" />
                </swiper-slide> -->
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
            default () {
                return [];
            }
        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType : 'fraction',
                observer:true,
                observeParents:true,
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close');
        }
    }
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container {
    overflow:inherit;
}
.container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background:#000;
    z-index:99;

    .wrapper{
        width:100%;
        height:0;
        padding-bottom:100%;
        // background:red;

        .swiper-img{
            width:100%;
        }

        .swiper-pagination{
            color:#fff;
            bottom:-1rem;
            z-index:100;
        }
    }
}
</style>
