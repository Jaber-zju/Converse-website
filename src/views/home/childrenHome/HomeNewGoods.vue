<template>
  <div class="new-goods">
    <div class="titlelist">
      <el-divider><span class="title">热品推荐</span></el-divider>

    </div>

    <div class="item-list">
      <div class="firstRow">
        <div>
          <img src="https://image.converse.com.cn/resources/product/165965C745/165965C745_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Chuck 70</span>
          <span class="price">￥699</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/166216C001/166216C001_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Chuck 70</span>
          <span class="price">￥699</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/165953C331/165953C331_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Chuck 70</span>
          <span class="price">￥699</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/166277C805/166277C805_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Chuck 70</span>
          <span class="price">￥699</span>
        </div>
      </div>

      <div class="secondRow">
        <div>
          <img src="https://image.converse.com.cn/resources/product/166494C805/166494C805_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Chuck 70</span>
          <span class="price">￥669</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/166495C001/166495C001_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Chuck 70</span>
          <span class="price">￥599</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/162058C001/162058C001_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Chuck 70 低帮复古帆布</span>
          <span class="price">￥539</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/162050C001/162050C001_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Chuck 70 高帮复古帆布</span>
          <span class="price">￥569</span>
        </div>
      </div>

      <div class="thirdRow">
        <div>
          <img src="https://image.converse.com.cn/resources/product/165971C447/165971C447_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Jack Purcell</span>
          <span class="price">￥439</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/165970C523/165970C523_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Jack Purcell</span>
          <span class="price">￥439</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/166511C322/166511C322_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Jack Purcell</span>
          <span class="price">￥569</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/166512C251/166512C251_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Jack Purcell</span>
          <span class="price">￥569</span>
        </div>
      </div>

      <div class="fourthRow">
        <div>
          <img src="https://image.converse.com.cn/resources/product/165947C523/165947C523_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Converse Lucky Star</span>
          <span class="price">￥599</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/165948C331/165948C331_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Converse Lucky Star</span>
          <span class="price">￥569</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/101010001/101010001_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Chuck Taylor All Star Core 常青款</span>
          <span class="price">￥439</span>
        </div>
        <div>
          <img src="https://image.converse.com.cn/resources/product/101001001/101001001_1B_NEW.png?2019091901" alt="">
          <span class="desc">【男女同款】Chuck Taylor All Star Core 常青款</span>
          <span class="price">￥399</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "HomeNewGoods"
  }
</script>

<style scoped>
  .new-goods{
    text-align: center;
    color: black;
  }
  .title{
    margin-bottom: 40px;
    font-size: 34px;

  }
  .firstRow,.secondRow,.thirdRow,.fourthRow{
    display: flex;
    flex: 1;
    border-bottom: #464646 1px dashed;
    margin-top: 40px;
    padding-bottom: 40px;

  }
  .firstRow div,.secondRow div,.thirdRow div,.fourthRow div{
    height: 300px;
    width: 250px;
    padding: 10px;

  }
  .firstRow div:hover,.secondRow div:hover,.thirdRow div:hover,.fourthRow div:hover{
    border: 1px solid #b7b7b7;
  }
  .item-list span{
    display: block;
    font-size: 14px;
    font-weight: bolder;
    padding-top: 8px;
    padding-bottom: 35px;
  }
  .item-list img{
    height: 180px;
    width: 180px;

  }
</style>