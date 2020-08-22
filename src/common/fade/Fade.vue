<template>
    <transition>
        <slot></slot>
    </transition>

</template>

<script>
export default {
    name: "CommonFade",
}
</script>

<style lang="stylus" scoped>
.v-enter-active,.v-leave-active{
    transition:opacity .5s;
}

.v-enter,.v-leave-to{
    opacity:0
}
.v-enter-to,.v-leave{
    opacity:1
}
</style>
