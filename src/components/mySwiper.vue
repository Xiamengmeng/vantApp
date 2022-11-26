<template>
  
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
  <van-swipe-item v-for="item in bannerArr" :key="item.id">
  <img :src="item.image_url" alt="">
      </van-swipe-item>
  
</van-swipe>
 

</template>

<script>
import Vue from 'vue';
import {Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
  export default {
    name:'',
    props:{
        bannerArr:{
            type:Array, //参数数据类型
            default:[] //参数的默认值
        }
    },
    data () {
      return {

      };
    },


  }

</script>
<style  lang="less" scoped>
.my-swipe {
  img {
    width: 100%;
    height:auto;
    display: block;
}
}
</style>