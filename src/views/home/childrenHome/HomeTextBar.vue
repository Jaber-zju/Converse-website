<template>
  <div class="text-bar">
    <div class="text" >
      <span v-for="item in texts" >{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeTextBar",
    props:{
      texts:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .text-bar{
    width: 100%;
    height: 40px;
    margin-bottom: 40px;
  }
  .text{
    padding-top: 12px;
    text-align: center;
    color: #999999;
    font-size: 16px;

  }
  span{
    margin-left: 15px;
  }
  span:hover{
    color: black;
    font-weight: bolder;
    border-top: solid 1px black;
    padding-top: 5px;
  }
</style>