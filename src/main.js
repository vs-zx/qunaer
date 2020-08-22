// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store"
import VueAwesomeSwiper from "vue-awesome-swiper";
// import "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css";
import 'swiper/swiper-bundle.css'
import "styles/reset.css";
import "styles/border.css";
import "styles/iconfont.css";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,      // 在根实例中使用 仓库 
    components: { App },
    template: "<App/>"
});

