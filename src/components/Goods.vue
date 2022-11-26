<template>

  <van-row type="flex" gutter="5">
  <van-col  class="box"  span="12"  v-for="item in goodsArr" :key="item.id">
      <van-image class="img"
  width="180px"
  height="120px"
  :src="item.list_pic_url" 
/>
  <div class="title">{{ item.name }}</div>
    <div class="price">¥{{ item.retail_price}}.00元</div>

  </van-col>
 
</van-row>
</template>

<script>
import Vue from 'vue';
import {Row ,Col ,Image} from 'vant';
Vue.use(Row);
Vue.use(Col);
Vue.use(Image);
  export default {
    name:'',
      props:{
        goodsArr:{
            type:Array, //参数数据类型
            default:[] //参数的默认值
        }},
    data () {
      return {

      };
    },
    mounted(){
      console.log(this.goodsArr)
    }


  }

</script>
<style  lang="less" scoped>
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