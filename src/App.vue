<template>
  <div id="app">
   <!-- 定义一级路由的坑 -->
   <NavBar/>
   <router-view></router-view>
   
   <!-- 底部的tabbar -->
<!-- <Tabbar/> -->
  </div>
</template>

<script>
//引入底部tabbar组件
import Tabbar from '@/components/Tabbar.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    //组件注册
    Tabbar,
    NavBar
  }

}
</script>

<style lang="less">

</style>
