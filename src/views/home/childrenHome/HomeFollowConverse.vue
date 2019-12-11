<template>
  <div class="follow-converse">
    <div class="title">关注Converse</div>
    <div class="desc">Converse同时活跃在各类社交网络平台，点击下列你所喜爱的常用社交平台，密切关注Converse的最新产品与资讯。</div>
    <div class="social">
      <div class="weibo"></div>
      <div class="weixin"></div>
      <div class="tengxun"></div>
      <div class="renren"></div>
      <div class="douban"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeFollowConverse"
  }
</script>

<style scoped>
  .follow-converse{
    height: 360px;
    width: 100%;
    background-color: #464646;
    margin-top: 90px;
  }
  .title{
    color: #ffffff;
    font-size: 32px;
    text-align: center;
    padding-top: 70px;
  }
  .desc{
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    padding-top: 35px;
  }
  .social{
    display: flex;
    width: 30%;
    margin: auto;
    margin-top: 40px;
  }
  .social div{
    height: 74px;
    width: 74px;
    margin-right: 30px;
    border: 1px solid black;
    background-color: white;

    background-size:54px 54px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .weibo{
    background-image: url(../../../assets/images/software/beforeHover/wb.svg);
  }
  .weixin{
    background-image: url(../../../assets/images/software/beforeHover/wx.svg);
  }
  .tengxun{
    background-image: url(../../../assets/images/software/beforeHover/txwb.svg);
  }
  .renren{
    background-image: url(../../../assets/images/software/beforeHover/rr.svg);
  }
  .douban{
    background-image: url(../../../assets/images/software/beforeHover/db.svg);
  }

  .social div:hover{
    background-color: black;
  }
  .weibo:hover{
    background-image: url(../../../assets/images/software/hover/wb.svg);
  }
  .weixin:hover{
    background-image: url(../../../assets/images/software/hover/wx.svg);
  }
  .tengxun:hover{
    background-image: url(../../../assets/images/software/hover/txwb.svg);
  }
  .renren:hover{
    background-image: url(../../../assets/images/software/hover/rr.svg);
  }
  .douban:hover{
    background-image: url(../../../assets/images/software/hover/db.svg);
  }




</style>