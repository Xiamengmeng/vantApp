<template>
  <div class="box">
    <van-checkbox-group v-model="result">
  <van-checkbox :name="item" v-for="item in cartList" :key="item.id" @click="singlecheckFn"> <van-card
      :num="item.number"
      :price="item.retail_price"
      :title="item.goods_name"
      :thumb="item.list_pic_url"
    /></van-checkbox>
 
</van-checkbox-group>
   <van-submit-bar  :price="totalPrice"  button-text="提交订单" @submit="onSubmit">

  <van-checkbox v-model="checked" @click="checkAllFn">全选</van-checkbox>
  <template #tip>
    你的收货地址不支持同城送, <span>修改地址</span> 
  </template>
</van-submit-bar>  

  </div>
</template>

<script>
import {getCartData} from "@/api/http";
import Vue from "vue";
import { Card ,Checkbox, CheckboxGroup ,SubmitBar,Toast} from "vant";
Vue.use(Toast);
Vue.use(Checkbox);
Vue.use(CheckboxGroup );
Vue.use(Card);
Vue.use(SubmitBar);

export default {
  name: "Cart",
  props:[''],
  data() {
    return {
 
         result: [],//选中的集合
         cartList:[],
         checked:false,
         
    };
  },created(){
getCartData().then((res) => {
        console.log(res); 
         this.cartList = res.data.cartList
         console.log(this.cartList) 
       
      });
  },
  computed: {
//依赖数据发生变化，计算属性会重新计算
totalPrice(){
//根据选中项的单价*数量 累加就是总价
let sum = 0
this.result.forEach((item) => {
  sum += item.retail_price * item.number * 100;
});
return sum;

}
  },
  methods: {
   onSubmit(){
     //提交订单
     Toast('跳转支付')
   },
   checkAllFn(){
     //全选事件
console.log(this.checked)
if(this.checked){
this.result = this.cartList;
 }else{
   this.result = [];
 }
   },
   singlecheckFn(){
    if(this.result.length == this.cartList.length 
    && this.cartList.length != 0){
      this.checked = true
    }else{
      this.checked = false
    }
   },
  
  }
};
</script>
<style lang="less" scoped>

/deep/.van-checkbox__label{
  flex:1

}
.van-submit-bar{
  margin-bottom: 50px;
}

</style>