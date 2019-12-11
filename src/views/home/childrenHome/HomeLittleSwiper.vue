<template>
  <div class="little-swiper">
    <swiper>
      <swiper-item>
        <div class="text">
          尊敬的顾客您好，我们店铺是不会泄露您的消费信息的，请放心。另外我们也不会要求获取、收集、使用任何与消费者金融消费类（如：信用卡）信息，如果接到以上信息电话，是属于诈骗电话，请勿相信，以防钱财损失。如您对订单有疑问，请联系在线客服。
        </div>
      </swiper-item>
      <swiper-item>
        <div class="text">
          CONVERSE匡威官方商城不会以任何误设置扣款以及优惠券理由，要求您提供银行卡以及取消等操作，如果有问题请及时联系在线客服，感谢您的谅解和支持。
        </div>
      </swiper-item>
      <swiper-item>
        <div class="text">
          加入CONVERSE会员玩享，畅享全部订单免费配送！点击了解更多会员福利。
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from '../../../components/common/swiper/Swiper'
  import SwiperItem from '../../../components/common/swiper/SwiperItem'

  export default {
    name: "HomeLittleSwiper",
    components:{
      Swiper,
      SwiperItem,

    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },

  }
</script>

<style scoped>
  .little-swiper{
    height: 60px;
    width: 100%;
    background-color: white;
    position: relative;
    margin-top: 130px;

  }
  .text{
    padding-bottom: 10px;
    color: black;
    font-size: 14px;
    text-align: center;
    line-height: 60px;
  }
</style>