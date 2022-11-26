<template>
 <div class="zhuanti">
    <!-- <div v-for="item in topichomeArr" :key="item.id" class="box">
      <img class="pic" :src="item.scene_pic_url" alt="" />
      <div class="title">{{ item.title }}</div>
      <div class="tip">{{ item.subtitle }}</div>
      <div class="price">{{ item.price_info}}起</div>
    </div> -->
    <van-swipe :loop="false" :width="300" :touchable="true"

:show-indicators="false" >
  <van-swipe-item
  v-for="item in topichomeArr" :key="item.id" class="box"
  >
    <img class="pic" :src="item.scene_pic_url" alt="" />
      <div class="title">{{ item.title }}  <span class="price">{{ item.price_info}}起</span></div>
      <div class="tip">{{ item.subtitle }}</div>
    
  
  </van-swipe-item>
 
</van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
  export default {
    name:'',
    props:['topichomeArr'],
    data () {
      return {

      };
    },


  }

</script>
<style lang="less" scoped>
// .zhuanti{
//   display: block;
//   width: 370px;
//     // display: flex;
//     // overflow: hidden;
   
// }
//  .box{
//       padding:5px;
//     }
.pic{
    width:95%;
    height: 80px;
    padding: 5px 5px;
}
.title{
    font-size: 7px;
    text-align: center;
}
.tip{
    font-size: 7px;
      text-align: center;
      
}
.price{
    font-size: 6px;
     color: rgb(155, 0, 0);
}
</style>