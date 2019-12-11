<template>
  <div class="sell-goods">
    <div class="titlelist">
      <el-divider><span class="title">热卖单品</span></el-divider>
    </div>

    <div class="itemlist">
      <div class="man-shoes" @mouseover="mouseOverMan" @mouseout="mouseOutMan">
        <div class="text">男的踩的</div>
        <div class="img"><img src="https://image.converse.com.cn/static/home/homepage/top_02_1203.jpg?2019091901" alt=""></div>
      </div>
      <div class="woman-shoes" @mouseover="mouseOverWoman" @mouseout="mouseOutWoman">
        <div class="text">女的踩的</div>
        <div class="img"><img src="https://image.converse.com.cn/static/home/homepage/top_01_1203.jpg?2019091901" alt=""></div>
      </div>
      <div class="clothes" @mouseover="mouseOverDress" @mouseout="mouseOutDress">
        <div class="text">穿的</div>
        <div class="img"><img src="https://image.converse.com.cn/static/home/homepage/top_01_05.jpg?2019091901" alt=""></div>
      </div>
      <div class="wear" @mouseover="mouseOverWear" @mouseout="mouseOutWear">
        <div class="text">戴的</div>
        <div class="img"><img src="https://image.converse.com.cn/static/home/homepage/top_01_07.jpg?2019091901" alt=""></div>
      </div>
    </div>

    <div class="moreitem">
      <div class="manmore" v-show="isShowMan">
        <div class="firstRowItem">
          <div>
            <img src="https://image.converse.com.cn/resources/product/165926C001/165926C001_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk 70</span>
            <span class="price">￥699</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/165931C032/165931C032_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk 70 Bosey</span>
            <span class="price">￥699</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/165923C001/165923C001_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk 70</span>
            <span class="price">￥839</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/165933C242/165933C242_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk Taylor All Star Winter</span>
            <span class="price">￥769</span>
          </div>
        </div>

        <div class="secondRowItem">
          <div>
            <img src="https://image.converse.com.cn/resources/product/166522C032/166522C032_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男款】Star Series RN</span>
            <span class="price">￥569</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/166521C049/166521C049_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男款】Star Series RN</span>
            <span class="price">￥569</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/166518C032/166518C032_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男款】Star Series BB</span>
            <span class="price">￥699</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/166517C049/166517C049_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男款】Star Series BB</span>
            <span class="price">￥699</span>
          </div>
        </div>
      </div>

      <div class="womanmore" v-show="isShowWoman">
        <div class="firstRowItem">
          <div>
            <img src="https://image.converse.com.cn/resources/product/165930C090/165930C090_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk 70 Bosey</span>
            <span class="price">￥699</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/165927C036/165927C036_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk 70</span>
            <span class="price">￥699</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/165922C447/165922C447_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk 70</span>
            <span class="price">￥839</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/165934C447/165934C447_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk Taylor All Star Winter</span>
            <span class="price">￥769</span>
          </div>
        </div>
        <div class="secondRowItem">
          <div>
            <img src="https://image.converse.com.cn/resources/product/566167C251/566167C251_1B_NEW.png?2019091901" alt="">
            <span class="desc">【女款】VLTG</span>
            <span class="price">￥569</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/566231C001/566231C001_1B_NEW.png?2019091901" alt="">
            <span class="desc">【女款】Star Series RN</span>
            <span class="price">￥439</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/165910C117/165910C117_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】ERX260</span>
            <span class="price">￥699</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/165046C100/165046C100_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】ERX260</span>
            <span class="price">￥699</span>
          </div>
        </div>
      </div>

      <div class="dressmore" v-show="isShowDress">
        <div class="firstRowItem">
          <div>
            <img src="https://image.converse.com.cn/resources/product/10018304001/10018304001_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男款】Chunk 70 Bosey</span>
            <span class="price">￥499</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10019174102/10019174102_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男款】Chunk 70</span>
            <span class="price">￥469</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10019324001/10019324001_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk 70</span>
            <span class="price">￥749</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10019004467/10019004467_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk Taylor All Star Winter</span>
            <span class="price">￥369</span>
          </div>
        </div>
        <div class="secondRowItem">
          <div>
            <img src="https://image.converse.com.cn/resources/product/10018039001/10018039001_1B_NEW.png?2019091901" alt="">
            <span class="desc">【女款】VLTG</span>
            <span class="price">￥569</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10019324103/10019324103_1B_NEW.png?2019091901" alt="">
            <span class="desc">【女款】Star Series RN</span>
            <span class="price">￥749</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10019176102/10019176102_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】ERX260</span>
            <span class="price">￥439</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10017650001/10017650001_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】ERX260</span>
            <span class="price">￥369</span>
          </div>
        </div>
      </div>

      <div class="wearmore" v-show="isShowWear">
        <div class="firstRowItem">
          <div>
            <img src="https://image.converse.com.cn/resources/product/10017273331/10017273331_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男款】Chunk 70 Bosey</span>
            <span class="price">￥499</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10017262010/10017262010_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男款】Chunk 70</span>
            <span class="price">￥469</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10017937001/10017937001_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk 70</span>
            <span class="price">￥749</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10017957102/10017957102_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】Chunk Taylor All Star Winter</span>
            <span class="price">￥369</span>
          </div>
        </div>
        <div class="secondRowItem">
          <div>
            <img src="https://image.converse.com.cn/resources/product/10008479653/10008479653_1B_NEW.png?2019091901" alt="">
            <span class="desc">【女款】VLTG</span>
            <span class="price">￥569</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10018018653/10018018653_1B_NEW.png?2019091901" alt="">
            <span class="desc">【女款】Star Series RN</span>
            <span class="price">￥749</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10018020001/10018020001_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】ERX260</span>
            <span class="price">￥439</span>
          </div>
          <div>
            <img src="https://image.converse.com.cn/resources/product/10018038036/10018038036_1B_NEW.png?2019091901" alt="">
            <span class="desc">【男女同款】ERX260</span>
            <span class="price">￥369</span>
          </div>
        </div>
      </div>

    </div>

    <div class="button">
      <span>查看所有商品</span>
      <img src="../../../assets/images/common/尖括号-粗大-右.svg" alt="" class="img">
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeSellGoods",
    data(){
      return {
        isShowMan:true,
        isShowWoman:false,
        isShowDress:false,
        isShowWear:false,
      }
    },
    methods:{
      mouseOverMan(){
        this.isShowWoman = false
        this.isShowMan = true
        this.isShowDress = false
        this.isShowWear = false
      },
      mouseOutMan(){
        this.isShowWoman = false
        this.isShowMan = true
        this.isShowDress = false
        this.isShowWear = false
      },

      mouseOverWoman(){
        this.isShowWoman = true
        this.isShowMan = false
        this.isShowDress = false
        this.isShowWear = false
      },
      mouseOutWoman(){
        this.isShowWoman = true
        this.isShowMan = false
        this.isShowDress = false
        this.isShowWear = false
      },

      mouseOverDress(){
        this.isShowWoman = false
        this.isShowMan = false
        this.isShowDress = true
        this.isShowWear = false
      },
      mouseOutDress(){
        this.isShowWoman = false
        this.isShowMan = false
        this.isShowDress = true
        this.isShowWear = false
      },

      mouseOverWear(){
        this.isShowWoman = false
        this.isShowMan = false
        this.isShowDress = false
        this.isShowWear = true
      },
      mouseOutWear(){
        this.isShowWoman = false
        this.isShowMan = false
        this.isShowDress = false
        this.isShowWear = true
      },


    }
  }
</script>

<style scoped>
  .sell-goods{
    text-align: center;
    color: black;
  }
  .title{
    font-size: 34px;
  }
  .itemlist{
    display: flex;
    margin-top: 60px;
    border-bottom: 1px solid #b7b7b7;
  }
  .itemlist div{
    flex: 1;
    font-size: 20px;
  }
  .text:hover{
    text-decoration-line: underline;
  }
  .button {
    height: 50px;
    width: 420px;
    border: solid 1px black;
    border-radius: 10px;
    margin: auto;
    line-height: 50px;
    background-color: black;
    color: white;
    margin-bottom: 60px;
  }
  .button .img{
    height: 30px;
    width: 30px;
    margin-left: 10px;
    padding-top: 12px;
  }
  .button:hover{
    animation-name: changeColor;
    animation-duration: 1s;
  }
  @keyframes changeColor {
    from{
      background-color: black;
      color: white;
    }
    to{
      color: black;
      background-color:white;
    }
  }
  .moreitem{
    background-color: #fff;
    z-index: 1000;
  }
  .firstRowItem,.secondRowItem{
    display: flex;
    flex: 1;
    margin-top: 40px;
    padding-bottom: 40px;
  }
  .firstRowItem{
    border-bottom: #464646 1px dashed;
  }
  .firstRowItem div,.secondRowItem div{
    height: 300px;
    width: 250px;
    padding: 10px;
  }
  .firstRowItem div:hover,.secondRowItem div:hover{
    border: 1px solid #b7b7b7;
  }
  .firstRowItem span,.secondRowItem span{
    display: block;
    font-size: 14px;
    font-weight: bolder;
    padding-top: 8px;
    padding-bottom: 35px;
  }
  .firstRowItem img,.secondRowItem img{
    height: 180px;
    width: 180px;
  }

  .manmore,.womanmore,.dressmore,.wearmore{
    animation-name: recover;
    animation-duration: 2s;
  }
  @keyframes recover {
    from{opacity: 0}
    to{opacity: 1}
  }
</style>