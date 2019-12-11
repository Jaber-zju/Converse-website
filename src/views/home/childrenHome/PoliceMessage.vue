<template>
  <div class="police-message">
    <el-popover
            class="message"
            placement="bottom"
            width="260"
            trigger="hover"
            content="亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。">
      <el-button slot="reference" class="button"></el-button>
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: "PoliceMessage",

  }
</script>

<style scoped>
  .message{
    color: red;
    font-size: 12px;
  }
  .button{
    height: 32px;
    width: 60px;
    background-image: url('https://image.converse.com.cn/images/cautionIcon.png');
    background-size:60px 32px ;
    margin-left: calc(50% - 30px);
  }
</style>