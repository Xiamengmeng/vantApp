<template>
 <van-grid :column-num="channelArr.length" :border="false">
        <van-grid-item  
        v-for="item in channelArr"
        :key="item.id"
        :icon="item.icon_url" 
        :text="item.name" />
    </van-grid>
</template>

<script>
import Vue from 'vue';
import {Grid ,GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
  export default {
    name:'',
    props:['channelArr'],
    data () {
      return {

      };
    },


  }

</script>
<style scoped>

</style>