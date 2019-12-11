<template>
  <div class="category">
    <div class="firstRow">
      <div class="man">
        <a href="" class="title">男的</a>
        <a href="" class="secTitle">CHUCK TAYLOR ALL STAR</a>
        <a href="" class="secTitle">CONVERSE CONS</a>
        <a href="" class="secTitle">JACK PURCELL</a>
        <a href="" class="secTitle">CHUCK II</a>

        <div class="thirdTitle">
          <a href="">踩的</a>
          <a href="">穿的</a>
          <a href="">戴的</a>
          <a href="">优惠</a>
        </div>
      </div>
      <div class="woman">
        <a href="" class="title">女的</a>
        <a href="" class="secTitle">CHUCK TAYLOR ALL STAR</a>
        <a href="" class="secTitle">CONVERSE CONS</a>
        <a href="" class="secTitle">JACK PURCELL</a>
        <a href="" class="secTitle">CHUCK II</a>

        <div class="thirdTitle">
          <a href="">踩的</a>
          <a href="">穿的</a>
          <a href="">戴的</a>
          <a href="">优惠</a>
        </div>
      </div>
      <div class="child">
        <a href="" class="title">儿童</a>
        <a href="" class="secTitle">CHUCK TAYLOR ALL STAR</a>
        <a href="" class="secTitle">CONVERSE CONS</a>

        <div class="thirdTitle">
          <a href="">踩的</a>
          <a href="">穿的</a>
          <a href="">戴的</a>
          <a href="">优惠</a>
        </div>

      </div>
      <div class="global">
        <a href="" class="title">GLOBAL</a>
        <a href="" class="secTitle">CONVERSE GLOBAL SITES</a>
      </div>
    </div>

    <div class="secondRow">
      <div class="account">
        <a href="" class="title">我的账户</a>
        <div class="items">
          <a href="">会员中心</a>
          <a href="">现有订单</a>
          <a href="">过去订单</a>
          <a href="">退换货</a>
          <a href="">账户设置</a>
          <a href="">地址簿</a>
          <a href="">我的优惠券</a>
          <a href="">我的收藏</a>
          <a href="">我的评论</a>
        </div>
      </div>

      <div class="help">
        <a href="" class="title">帮助和购物指南</a>
        <div class="items">
          <a href="">账户</a>
          <a href="">订单</a>
          <a href="">尺码</a>
          <a href="">退货和退款</a>
          <a href="">换货</a>
          <a href="">配送</a>
          <a href="">联系我们</a>
          <a href="">常见问题</a>
        </div>
      </div>
      <div class="nike">
        <a href="" class="title">NIKE</a>
        <div class="items">
          <a href="">NIKE+</a>
          <a href="">JORDAN</a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeCategory"
  }
</script>

<style scoped>
  .category{
    width: 50%;
    margin: auto;
    margin-top: 90px;
    border-top: 1px solid #999999;
  }
  a{
    display: block;
  }
  .firstRow,.secondRow{
    display: flex;
  }
  .firstRow div,.secondRow div{
    margin-top: 35px;
    flex: 1;
    text-align: center;
  }
  .secondRow{
    width: 75%;
    margin: auto;
    margin-bottom: 40px;
  }
  .title{
    font-weight: bolder;
    color: black;
    margin-bottom: 20px;
  }
  .secTitle{
    margin-bottom: 5px;
    font-weight: bolder;
    font-size: 14px;
    color: black;
  }
  .thirdTitle,.account>.items,.help>.items{
    margin-top: 30px;
    font-size: 14px;
    color: black;
  }
  .thirdTitle>a,.account>.items>a,.help>.items>a,.nike>.items>a{
    margin-bottom: 5px;
  }
  .child>.thirdTitle{
    margin-top: 77px;
  }
  .nike .items {
    font-size: 14px;
    color: black;
    font-weight: bolder;
  }


</style>