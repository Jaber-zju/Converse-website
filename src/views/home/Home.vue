<template>
  <div class="home" >
    <home-nav-bar class="navbar"/>
    <home-item-bar class="itembar"/>
    <home-little-swiper class="little-swiper"/>
    <new-swiper />
    <home-text-bar :texts="texts" class="text-bar" ref="scroll"/>
    <home-sell-goods class="sell-goods"/>
    <home-new-goods class="new-goods"/>
    <home-recommend class="recommend"/>
    <home-follow-converse/>
    <home-category/>
    <home-bottom-bar/>

    <take-chat v-show="isShowChat" class="chat"/>

    <back-top v-show="isShowChat" class="back-top" @topClick="topClick"/>
  </div>
</template>

<script>
  import HomeNavBar from './childrenHome/HomeNavBar'
  import HomeItemBar from './childrenHome/HomeItemBar'
  import HomeLittleSwiper from './childrenHome/HomeLittleSwiper'
  import NewSwiper from './childrenHome/NewSwiper'

  import HomeTextBar from './childrenHome/HomeTextBar'
  import HomeSellGoods from './childrenHome/HomeSellGoods'
  import HomeNewGoods from './childrenHome/HomeNewGoods'
  import HomeRecommend from './childrenHome/HomeRecommend'
  import HomeFollowConverse from './childrenHome/HomeFollowConverse'
  import HomeCategory from './childrenHome/HomeCategory'
  import HomeBottomBar from './childrenHome/HomeBottomBar'
  import BackTop from './childrenHome/BackTop'
  import TakeChat from './childrenHome/TakeChat'

  import Scroll from '../../components/common/scroll/Scroll'


  import img1 from '../../assets/images/swiper/01.jpg'
  import img2 from '../../assets/images/swiper/02.jpg'
  import img3 from '../../assets/images/swiper/03.jpg'
  import img4 from '../../assets/images/swiper/04.jpg'
  import img5 from '../../assets/images/swiper/05.jpg'
  import img6 from '../../assets/images/swiper/06.jpg'

  export default {
    name: "Home",
    components:{
      HomeNavBar,
      HomeItemBar,
      HomeLittleSwiper,
      HomeTextBar,
      HomeSellGoods,
      HomeNewGoods,
      Scroll,
      HomeRecommend,
      HomeFollowConverse,
      HomeCategory,
      HomeBottomBar,
      NewSwiper,
      TakeChat,
      BackTop,

    },
    data(){
      return {
        imgs:[
            img2,img1,img3,img4,img5,img6,
        ],
        texts:[
            'AMBUSH',
            '真的有故事',
            'JENKEM MAG',
            'FROSTED',
            'DIMENSIONS',
            'EAST VILLAGE',
            'EXPLORER',
            'VLTG',
        ],
        isShowChat:false,
        topHeight:0,

      }
    },
    mounted (){
      window.addEventListener('scroll',this.handleScroll)

    },
    methods:{
      handleScroll(){
        // let height = this.$refs.scroll.$el.scrollTop
        // console.log(height)
        this.topHeight = document.documentElement.scrollTop
        console.log(this.topHeight);
        this.isShowChat = this.topHeight > 500
      },
      topClick(){
        let timer = setInterval(() => {
          let ispeed = Math.floor(-this.topHeight / 8)
          document.documentElement.scrollTop = document.body.scrollTop = this.topHeight + ispeed
          if (this.topHeight === 0) {
            clearInterval(timer)
          }
        }, 16)
      },

    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },

  }
</script>

<style scoped>
  .home{
    width: 100%;
  }
  .sell-goods{
    width: 50%;
    margin: auto;
  }
  .new-goods{
    width: 50%;
    margin: auto;
  }
  .recommend{
    width: 50%;
    margin: auto;
  }
  .text-bar{
    margin-top: 10px;
  }
  .chat{
    position: fixed;
    right: 0;
    top: 200px;
    z-index: 100;
  }
  .back-top{
    position: fixed;
    right: 0;
    bottom: 100px;
    z-index: 100;

  }
</style>