<template>
<div> 
    <van-card 
    v-for="item in hotgoodsArr"
    :key="item.id"
    :price= "`${item.retail_price}.00元`"
    :desc="item.goods_brief"
    :title="item.name"
    :thumb="item.list_pic_url"
/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Card } from 'vant';
Vue.use(Card);
  export default {
    name:'',
    props:['hotgoodsArr'],
    data () {
      return {

      };
    }


  }

</script>
<style scoped>
.van-card__price{
  color: brown;
}
</style>