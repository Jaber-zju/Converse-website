import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(ElementUI);




new Vue({
  render: h => h(App),
}).$mount('#app')
