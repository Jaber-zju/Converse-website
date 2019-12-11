<template>
  <div class="itembar" >
    <div class="item">
      <div class="man" @mouseover="mouseOverMan" @mouseout="mouseOutMan">
        <div class="text" >男的</div>
        <img class="arrow" src="../../../assets/images/向下.svg">
      </div>
      <div class="woman" @mouseover="mouseOverWoman" @mouseout="mouseOutWoman">
        <div class="text" >女的</div>
        <img class="arrow" src="../../../assets/images/向下.svg">
      </div>
      <div class="child" @mouseover="mouseOverChild" @mouseout="mouseOutChild" >
        <div class="text">儿童</div>
        <img class="arrow" src="../../../assets/images/向下.svg">
      </div>
      <div class="coopration">
        <div class="text" >联合合作款</div>
        <img class="arrow" src="../../../assets/images/向下.svg">
      </div>
      <div class="shop">
        <div class="text" >店铺分布</div>
        <img class="arrow" src="../../../assets/images/向下.svg">
      </div>

    </div>
    <div class="moreItem">
      <div class="manmore" v-show="isShowMan">
        <div class="firstRowItem">
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/M_B_FTW_190416.jpg?2019091901" alt="">
            <div>踩的</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/M_B_APP_190416.jpg?2019091901" alt="">
            <div>穿的</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/M_B_TEE_190416.jpg?2019091901" alt="">
            <div>T恤</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/M_B_ACC_190416.jpg?2019091901" alt="">
            <div>戴的</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/new_icon.jpg?2019091901" alt="">
            <div>新产品</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/discount_icon.jpg?2019091901" alt="">
            <div>优惠</div>
          </div>
        </div>
        <div class="secondRowItem">
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/_drop_down_men_06_30.jpg?2019091901" alt="">
            <div>经典款</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/chuck_70_190416.jpg?2019091901" alt="">
            <div>CHUCK 70</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/onestar_190416.jpg?2019091901" alt="">
            <div>ONE STAR</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/allstar_190416.jpg?2019091901" alt="">
            <div>ALL STAR</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/cons_190530.jpg?2019091901" alt="">
            <div>CONS</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/jp_190416.jpg?2019091901" alt="">
            <div>JACK PURCELL</div>
          </div>
        </div>
      </div>

      <div class="womanmore" v-show="isShowWoman">
        <div class="firstRowItem">
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/W_B_FTW_190416.jpg?2019091901" alt="">
            <div>踩的</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/W_B_APP_190416.jpg?2019091901" alt="">
            <div>穿的</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/W_B_TEE_190416.jpg?2019091901" alt="">
            <div>T恤</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/W_B_ACC_190416.jpg?2019091901" alt="">
            <div>戴的</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/new_icon.jpg?2019091901" alt="">
            <div>新产品</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/discount_icon.jpg?2019091901" alt="">
            <div>优惠</div>
          </div>
        </div>
        <div class="secondRowItem">
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/_drop_down_men_06_30.jpg?2019091901" alt="">
            <div>经典款</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/f_chuck_70_190416.jpg?2019091901" alt="">
            <div>CHUCK 70</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/f_onestar_190416.jpg?2019091901" alt="">
            <div>ONE STAR</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/f_allstar_190416.jpg?2019091901" alt="">
            <div>ALL STAR</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/f_cons_190416.jpg?2019091901" alt="">
            <div>CONS</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/f_jp_190416.jpg?2019091901" alt="">
            <div>JACK PURCELL</div>
          </div>
        </div>
      </div>

      <div class="childmore" v-show="isShowChild">
        <div class="firstRowItem">
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/1-4-v1.jpg?2019091901" alt="">
            <div>(1-4岁)</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/4-8-v1.jpg?2019091901" alt="">
            <div>(4-8岁)</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/4-12-v1.jpg?2019091901" alt="">
            <div>(4-12岁)</div>
          </div>
          <div>
            <img src="https://image.converse.com.cn/static/home/nav/8-12.jpg?2019091901" alt="">
            <div>(8-12岁)</div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeItemBar",
    data(){
      return {
        isShowMan:false,
        isShowWoman:false,
        isShowChild:false,

      }
    },
    methods:{
      mouseOverMan(){
        this.isShowMan = true
      },
      mouseOutMan(){
        this.isShowMan = false
      },
      mouseOverWoman(){
        this.isShowWoman = true
      },
      mouseOutWoman(){
        this.isShowWoman = false
      },
      mouseOverChild(){
        this.isShowChild = true
      },
      mouseOutChild(){
        this.isShowChild = false
      },

    },
  }
</script>

<style scoped>
  .itembar{
    width: 100%;
    height: 50px;
    background-color: #464646;
    color: white;
    font-size: 20px;
    z-index: 9;
    position: fixed;
    top: 80px;
  }
  .item{
    width: 40%;
    height: 50px;
    text-align: center;
    display: flex;
    padding-top: 10px;
    margin: auto;
  }
  .man,.woman,.child,.coopration,.shop{
    flex: 1;

  }
  .arrow{
    height: 15px;
    width: 15px;
    margin-bottom: 10px;
    padding-top: 2px;
  }

  .moreItem{
    background-color: #fff;
    z-index: 1000;
  }
  .firstRowItem,.secondRowItem{
    display: flex;
    width: 50%;
    margin: auto;
  }
  .childmore>.firstRowItem{
    display: flex;
    width: 30%;
    margin: auto;
  }
  .firstRowItem{
    border-bottom: 1px solid #b7b7b7;
  }
  .firstRowItem>div,.secondRowItem>div{
    color: black;
    height: 140px;
    width: 140px;
    font-size: 14px;
    font-weight: bolder;
    text-align: center;

    margin: auto;
    margin-left: 0;
    margin-bottom: 40px;

  }
  .firstRowItem>div:hover,.secondRowItem>div:hover{
    text-decoration: underline;
    color: #999999;
  }
  .secondRowItem>div{
    margin-top: 10px;
  }
  .firstRowItem img,.secondRowItem img{
    height:  130px;
    width:  130px;

  }
  .manmore,.womanmore,.childmore,.moreItem{
    animation-name: changeColor;
    animation-duration: 2s;
  }
  @keyframes changeColor {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
</style>