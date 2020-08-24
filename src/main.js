import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/css/swiper.css'
import 'styles/reset.css'
// import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.use(VueAwesomeSwiper)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
