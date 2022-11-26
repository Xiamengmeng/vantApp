<template>
  <div class="category" > 
    <!-- 搜索框 -->
 <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
  <!-- 下方内容 -->
  <div class="bottom_box">
    <!-- 左侧侧边栏 -->
    <van-sidebar v-model="activeKey" >
  <van-sidebar-item 
  :title="item.name" 
  v-for="item in categoryList" 
  :key="item.id"
  @click="onChange(item.id)"/>
</van-sidebar>
    <!-- 右边 -->
      <div class="right">
  <div class="right_img">
 <img style="width:100%;height:100%;display:block;border-radius: 5% 5%;" :src="currentCategory.banner_url" alt="">
    <div class="right_bottom">
    </div>
    <h6 class="right_item">{{currentCategory.front_name}}</h6> 
    </div>
      <h3 class="zhuti">__{{currentCategory.name}}__</h3>
          <van-grid :column-num="3">
          <van-grid-item v-for="item in currentCategory.subCategoryList"
          :key="item.id" 
          :icon="item.banner_url"
           :text="item.name" />
          </van-grid>
        </div>
  </div>
  </div>
</template>

<script>
import {GetCateGory,GetCurrentCateGory} from '@/api/http'
import Vue from 'vue';
import { Search,Sidebar, SidebarItem,Grid,GridItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);

  export default {
    name:'Category',
    data () {
      return {
        value:'',//搜索框关键字
activeKey:0 ,//默认的导航索引,
categoryList:[],//左边侧栏
currentCategory:{},//当前分类
show:true,



      };
    },
    created(){
this.getData()
    },
    methods:{
      onChange(id){
        // this.activeKey=index;
        console.log(id)
GetCurrentCateGory({id:id})
.then(res =>{
  console.log(res)
  this.currentCategory = res.data.currentCategory;
})
 },
      getData(){
        GetCateGory().then(res=>{
  console.log(res)
  this.categoryList = res.data.categoryList
this.currentCategory = res.data.currentCategory

})
      }
    }


  }

</script>
<style lang="less" scoped>
.bottom_box{
display: flex;
.right{
  flex:1;
}
h3{
  text-align: center ;
}
  
}
.right_img{
  width: 100%;
  height: 60px;
position: relative;
 
  .right_bottom{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5% 5%;
    top:0;
    background-color:#333;
    opacity: 0.6;
  }
  .right_item{
    display:block;
    position:absolute;
    top: 50%;
    left: 30%;
color:white;
font-size: 6px;

  }
}
.zhuti{
  font-size: 6px;
  display: block;
  margin: 10px auto;
}
</style>