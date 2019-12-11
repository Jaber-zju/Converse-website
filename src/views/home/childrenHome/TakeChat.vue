<template>
  <div class="chat">
    <div class="img"></div>
    <div class="text">聊聊吧</div>
  </div>
</template>

<script>
  export default {
    name: "TakeChat"
  }
</script>

<style scoped>
  .chat{
    height: 90px;
    width: 90px;
    background-color: #000000;

    background-image: url('../../../assets/images/common/chat.svg');
    background-size:44px 44px;
    background-repeat: no-repeat;
    background-position: 50% 20%;

  }
  .text{
    text-align: center;
    color: white;
    padding-top: 60px;
    font-size: 14px;
  }
</style>