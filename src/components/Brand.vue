<template>


<van-row type="flex" gutter="5">
  <van-col  class="box"  span="12"  v-for="item in brandArr" :key="item.id">
      <van-image class="img"
  width="100%"
  height="100%"
  :src="item.list_pic_url" 
/>
  <div class="title">{{ item.name }}</div>
    <div class="price">¥{{ item.floor_price}}.00元</div>

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
        brandArr:{
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
<style lang="less" scoped>
.box{


position: relative;
}
.title{
position: absolute;
font-size: 6px;
top:5px;
left: 5px;
     
}
.price{
    display: block;
    position: absolute;
    font-size: 6px;
    top: 10px;
    left: 5px; 
    margin-top: 8px;
    color: rgb(155, 0, 0);
    
}
</style>