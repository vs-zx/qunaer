<template>
    <ul class="list">
        <li class="item" 
            v-for="item in letters" 
            :key="item"
            @click='handleLetterClick'
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            :ref="item"
        >{{item}}</li>
    </ul>
</template>

<script>
export default {
    name: "CityAlphabet",
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false,
            startY:0,
            timer:null      //  节流
        }
    },
    updated: function(){
        this.startY=this.$refs['A'][0].offsetTop
    },
    computed: {
        letters () {
            const letters=[];
            // 只需要城市的区域字母
            for(let i in this.cities){
                letters.push(i);
            }
            return letters;
        }
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change',e.target.innerHTML);
        },
        handleTouchStart () {
            this.touchStatus=true;
        },
        handleTouchMove (e) {
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer);
                }
                this.timer=setTimeout(()=>{
                    const touchY=e.touches[0].clientY-79;
                    const index=Math.floor((touchY-this.startY)/22);
                    if(index>=0&&index<this.letters.length){
                        this.$emit('change',this.letters[index]);
                    }
                },8);
            }
        },
        handleTouchEnd () {
            this.touchStatus=false;
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list{
    display:flex;
    flex-direction:column;
    justify-content: center;
    // align-items: center;
    position:absolute;
    top:1.58rem;
    right:0;
    bottom:0;
    width:.4rem;

    .item{
        line-height:.45rem;
        color:$bgColor;
        text-align:center;
    }
}

</style>
