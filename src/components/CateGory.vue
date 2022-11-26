<template>
 
 
 <div class="box">
    <ul  v-for="item in categoryArr" :key="item.id">
     <li class="name" >{{ item.name }}</li> 
   <van-row type="flex" gutter="5">
  <van-col  class="box1"  span="12"  v-for="item1 in item.goodsList" :key="item1.id">
<lazy-component>
  <img v-lazy="item1.list_pic_url" width="180px"
  height="150px" alt="">
</lazy-component>
  <div class="title">{{ item1.name }}</div>
    <div class="price">¥{{ item1.retail_price}}.00元</div>
  </van-col>
 
</van-row>
 </ul> 
  </div>
 
</template>

<script>
import Vue from 'vue';
import {Row ,Col} from 'vant';
import { Lazyload } from 'vant';
import loadingImg from  '@/assets/images/loading.gif'
Vue.use(Lazyload, {
  lazyComponent: true,
  loading:loadingImg
});
Vue.use(Row);
Vue.use(Col);
export default {
  name: "",
  props: ["categoryArr"],
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style  lang="less" scoped>

.name{
    text-align: center;
    font-size: 8px;
    margin: 10px auto;
}
.title{

font-size: 6px;
  text-align: center;
     
}
.price{
    display: block;
   text-align: center;
    font-size: 6px;
    
    margin-top: 8px;
    color: rgb(155, 0, 0);
}
</style>