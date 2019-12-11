<template>
  <div>
    <swiper class="big-swiper">
      <swiper-item v-for="item in imgs">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from '../../../components/common/swiper/Swiper'
  import SwiperItem from '../../../components/common/swiper/SwiperItem'

  export default {
    name: "HomeBigSwiper",
    components:{
      Swiper,
      SwiperItem,

    },
    props:{
      imgs:{
        type:Array,
        default(){
          return []
        }
      }
    },


  }
</script>

<style scoped>
  .big-swiper{
    width: 100%;
    height: 742px;
    overflow: hidden;

  }

</style>