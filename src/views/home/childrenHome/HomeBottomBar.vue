<template>
  <div class="bottom-bar">
    <div class="titles">
      <a>关于我们</a>
      <a>帮助和购物指南</a>
      <a>隐私政策</a>
      <a>使用规则</a>
    </div>

    <div class="logo">
      <a href=""><img src="../../../assets/images/common/logo.png" alt=""></a>
    </div>

    <div class="explain">
      <span>@匡威体育用品（中国）有限公司 保留所有权利</span>
      <span>沪ICP备11044134号-2</span>
      <a href="">沪公网安备 31011002001667号</a>
      <a href="">电子营业执照</a>
      <a href="">公司证照</a>
    </div>

    <div class="message">
      <police-message/>
    </div>
<!--    <div class="police">-->
<!--      <img src='https://image.converse.com.cn/images/cautionIcon.png' alt="">-->
<!--    </div>-->
  </div>
</template>

<script>
  import PoliceMessage from '../childrenHome/PoliceMessage'
  export default {
    name: "HomeBottomBar",
    data(){
      return {

      }
    },
    components:{
      PoliceMessage,

    },

  }
</script>

<style scoped>
  .bottom-bar{
    width: 100%;
    background-color: black;
    padding-bottom: 10px;
  }
  .titles{
    text-align: center;
    padding-top: 30px;
    margin-bottom: 10px;
  }
  .titles a,.explain a,.explain span{
    color: white;
    padding-left: 20px;
    font-size: 12px;
  }
  .logo a{
    margin-left: calc(50% - 38.5px);
  }
  .explain{
    text-align: center;
    padding-bottom: 10px;
  }
  .police{
    background-repeat: no-repeat;

  }
  .police img{
    height: 32px;
    width: 60px;
    margin-left: calc(50% - 30px);
  }
</style>