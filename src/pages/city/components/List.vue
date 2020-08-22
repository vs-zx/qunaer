<template>
    <div class="list" ref="wrapper">
        <div class="content">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ this.currentCity }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                        class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleClick(item.name)"
                    >
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>

            <div
                class="area"
                v-for="(item, key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div
                        class="item border-bottom"
                        v-for="info of item"
                        :key="info.id"
                        @click="handleClick(info.name)"
                    >
                        {{ info.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";

import {mapState,mapMutations} from 'vuex'

export default {
    name: "CityList",
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    methods: {
        handleClick (city) {
            this.changeCity(city);
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        ...mapState({
            currentCity:'city'
        })
    },
    watch: {
        letter: function() {
            if (this.letter) {
                // 获取想要到达的位置的 DOM 元素对象
                const el = this.$refs[this.letter][0]; // 循环时 letter 是数组
                // console.log(el);
                this.scroll.scrollToElement(el);
            }
            // console.log(this.letter);
        }
    },
    mounted: function() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
        });
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';


.border-topbottom:before,
.border-topbottom::after{
    border-color:#ccc;
}
.border-bottom::before{
    border-color:#ccc;
}
.list{
    overflow:hidden;
    position:absolute;
    top:1.58rem;
    right:0;
    bottom:0;
    left:0;

    .title {
        line-height: 0.4rem;
        padding: 0.2rem;
        font-size: .26rem;
        color:#666;
        background: #eee;
    }

    .button-list{
        overflow: hidden;
        padding: .1rem .6rem .1rem .1rem;

        .button-wrapper{
            float:left;
            width:33.3%;

            .button{
                margin: .1rem;
                padding:.1rem 0;
                text-align:center;
                border:.02rem solid #ccc;
                border-radius: .06rem;
            }
        }
    }

    .item-list{
        .item{
            line-height: .76rem;
            padding-left:.2rem;
        }
    }
}
</style>
