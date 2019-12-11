<template>
  <div class="recommend">
    <div class="text">街头先行</div>

    <div class="itemList">
      <div class="firstitem">
        <div class="a1"><a href=""></a></div>
        <a href="" class="a2">她的想象 无限力量</a>
        <a href="" class="a3">查看更多</a>
      </div>
      <div class="seconditem">
        <div class="a1"><a href=""></a></div>
        <a href="" class="a2">更多选择 更新登场</a>
        <a href="" class="a3">查看更多</a>
      </div>
    </div>

    <div class="text">至酷精选 玩转潮流</div>

    <div class="seconditemList">
      <div class="firstitem">
        <div class="a1-2"><a href=""></a></div>
        <a href="" class="a2-2">迷彩印花 城市丛林</a>
        <a href="" class="a3-2">查看更多</a>
      </div>
      <div class="seseconditem">
        <div class="a1-2"><a href=""></a></div>
        <a href="" class="a2-2">复古系列 旧日时光</a>
        <a href="" class="a3-2">查看更多</a>
      </div>
      <div class="thirditem">
        <div class="a1-2"><a href=""></a></div>
        <a href="" class="a2-2">经典集结 复古无限</a>
        <a href="" class="a3-2">查看更多</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "HomeRecommend"
  }
</script>

<style scoped>
  .recommend{

  }
  .text{
    margin-top: 100px;
    height: 40px;
    background-color: #464646;
    color: white;
    line-height: 40px;
    padding-left: 20px;
  }
  .itemList{
    display: flex;
    margin-bottom: 40px;
  }
  .firstitem,.seconditem{
    flex: 1;

  }
  .a1{
    height: 370px;
    width: 470px;
    border: 1px solid black;
    margin-top: 20px;
    margin-bottom: 10px;

  }
  .seconditem{
    margin-left: 20px;
  }
  .a2,.a3,.a2-2,.a3-2{
    display: block;
    height: 50px;
    width: 200px;
    line-height: 50px;
  }
  .a2,.a2-2{
    color: #000000;
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
  .a2:hover,.a2-2:hover{
    text-decoration-line: underline;
    color: #999999;
  }
  .a3,.a3-2{
    background-color: black;
    text-align: center;
    border: solid 1px black;
  }
  .a3,.a3-2{
    color: white;
  }
  .a3:hover,.a3-2:hover{
    background-color: white;
    color: black;
  }

  .itemList + div{
    margin-top: 0;
  }

  .seconditemList{
    display: flex;
    margin-top: 20px;
  }
  .a1-2{
    height: 240px;
    width: 310px;
    border: 1px solid black;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .seseconditem{
    margin-left: 15px;
    margin-right: 15px;
  }

</style>