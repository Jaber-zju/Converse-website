<template>
  <div class="backtop" @click="topClick">
    UP
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods:{
      topClick(){
        this.$emit('topClick')
      }
    },

  }
</script>

<style scoped>
  .back-top{
    height: 60px;
    width: 60px;
    background-color: black;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    color: white;
    border-radius: 10px;
  }

</style>