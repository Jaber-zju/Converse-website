<template>
  <div class="navbar">
    <img src="../../../assets/images/convers-logo.png" alt="">

    <div class="item">
      <div class="left">
        <span>登录</span>
        <span>/</span>
        <span>注册</span>
        <img src="../../../assets/images/用户.svg" alt="">
      </div>
      <div class="center">
        <span>购物车</span>
        <span></span>
      </div>
      <div class="right">
        <img src="../../../assets/images/信息.svg" alt="">
        <img src="../../../assets/images/搜索--1.svg" alt="">
        <img src="../../../assets/images/问号.svg" alt="">
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "HomeNavBar"
  }
</script>

<style scoped>
  .navbar{
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .item{
    position: relative;
    width: 35%;
    display: flex;
    margin-left: 1200px;
    line-height: 80px;

  }

  .left,.center,.right{
    text-align: center;
    display: flex;
  }
  .right{
    margin-left: 20px;
    flex: 2;
  }
  .center{
    margin-left: 40px;
  }
  .left img,.center img,.right img{
    width: 28px;
    height: 28px;
    margin-left: 10px;
    margin-top: 23px;
    background-color: #464646;
    border-radius: 50%;
  }
  .right img{
    margin-left: 40px;
  }
  span{
    color: white;
    font-size: 14px;
  }
</style>