<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide">
        <img src="../../../assets/images/swiper/01.jpg" alt=""/>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="../../../assets/images/swiper/02.jpg" alt=""/>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="../../../assets/images/swiper/04.jpg" alt=""/>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="../../../assets/images/swiper/05.jpg" alt=""/>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="../../../assets/images/swiper/06.jpg" alt=""/>
      </swiper-slide>

      <!-- 如果需要分页器 -->
<!--      <div class="swiper-pagination"  slot="pagination"></div>-->

      <!-- 如果需要导航按钮 -->
      <div class="swiper-pagination  swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev" @click="preClick"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>

      <!-- 如果需要滚动条 -->
<!--      <div class="swiper-scrollbar"   slot="scrollbar"></div>-->

    </swiper>
  </div>

</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name:'NewSwiper',
    components:{
      swiper,
      swiperSlide
    },
    computed:{
      mySwiper(){
        return this.$refs.mySwiper.swiper
      }
  },
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 2000, //自动切换的时间间隔，单位ms
            stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
            stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换。
            disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
            reverseDirection: false, //开启反向自动轮播。
            waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
          },
          speed:1000,
          effect: 'fade',
          notNextTick:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            loop:true,
          },
          navigation: {
            nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
            prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
            hideOnClick: false, //点击slide时显示/隐藏按钮
            disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
            hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
            clickable: true,
            stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
            stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换。
            disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
            reverseDirection: false,
          },
        }
      }
    },




  }
</script>

<style scoped>
  @import "../../../assets/css/swiper.css";
  .wrapper{
    width:100%;
    height:742px;
    background: #eee;

  }
  .swiper-slide img{
    width: 100%;
    left: 0;
    right: 0;
  }
  /*样式穿透*/
  /*.wrapper >>> .swiper-pagination-bullet-active{*/
  /*  background:#bfa*/
  /*}*/
  .swiper-button-prev,.swiper-button-next{
    height: 100px;
    width: 40px;
    background-color: black;
    opacity: 0.7;

  }

</style>