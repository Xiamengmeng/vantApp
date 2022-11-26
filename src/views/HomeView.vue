<template>
<!-- 在vue2中必须有根标签 -->
  <div class="home">
 <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
 <!-- 轮播题 -->
 <mySwiper :bannerArr="bannerArr"></mySwiper>
<!-- 导航 -->
   <Grid :channelArr="channelArr"></Grid>
  
  <P class="brandtitle">品牌制造商直供</P>
<!-- 品牌商直供 -->
 <Brand :brandArr="brandArr"></Brand>

  <P class="goodstitle"> 周一周四.新品首发 </P>
  <!-- 新品首发 -->
  <Goods :goodsArr="goodsArr"></Goods>


<p class="hotgoodstitle"> 人气推荐</p>

<HotGoods :hotgoodsArr="hotgoodsArr"></HotGoods>
<p class="topictitle" >专题精选</p>
<TopicHome :topichomeArr="topichomeArr"> </TopicHome>
<CateGory :categoryArr="categoryArr" ></CateGory>
 </div>
</template>

<script>
import Vue from 'vue';
import { Search, } from 'vant';
import mySwiper from '@/components/mySwiper.vue';
import Grid from '@/components/Grid.vue';
import Brand from '@/components/Brand.vue';
import Goods from '@/components/Goods.vue';
import HotGoods from '@/components/HotGoods.vue';
import TopicHome from '@/components/TopicHome.vue';
import CateGory from '@/components/CateGory.vue';
//导入首页接口请求
import {gethomedata} from '@/api/homeapi'
Vue.use(Search);//相当于注册为全局组件
  export default {
    name:'HomeView', //组件名
    data () {
      return {
value:'',//搜索框关键字
bannerArr:[], //轮播图数组
channelArr:[], //导航数组
brandArr:[],//品牌直供数组
goodsArr:[],//新品首发
hotgoodsArr:[],//人气推荐
topichomeArr:[],//专题精选
categoryArr:[],//
      };
    },
    components:{
mySwiper,
Grid,
Brand,
Goods,
HotGoods,
TopicHome,
CateGory,
    },
    mounted(){
      this.gethomelist()
    },
    methods:{
        async gethomelist(){
        let res =  await gethomedata()
console.log(res)
this.bannerArr = res.data.banner
  this.channelArr = res.data.channel
  this.brandArr = res.data.brandList
  this.goodsArr = res.data.newGoodsList
  this.hotgoodsArr = res.data.hotGoodsList
  this.topichomeArr = res.data.topicList
  this.categoryArr = res.data.categoryList

  // console.log(this.categoryArr)

        }
    }


  }

</script>
<style  lang='less' scoped>

.brandtitle{
  // display: block;
  margin: 15px auto 10px ;
  text-align: center;
font-size: 8px;


}
.goodstitle{
   margin: 15px auto 10px ;
  text-align: center;
font-size: 8px;
}
.hotgoodstitle{
   margin: 15px auto 10px ;
  text-align: center;
font-size: 8px;
}

.topictitle{
   margin: 15px auto 10px ;
  text-align: center;
font-size: 8px;
}

</style>