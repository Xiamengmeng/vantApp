<template>
  <van-tabbar v-model="active" :route="true"  v-if="$route.meta.isshowtabbar" class="box">
  <van-tabbar-item  icon="star" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="like" to="/topic" >专题</van-tabbar-item>
  <van-tabbar-item icon="coupon" to="/category" >分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart" to="/cart" >购物车</van-tabbar-item>
   <van-tabbar-item icon="manager" to="/user">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
import Vue, { readonly } from 'vue';
import {Tabbar ,TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
  export default {
    name:'',
    data () {
      return {
  active:0,
      };
    }
    

  }

</script>
<style scoped>

</style>