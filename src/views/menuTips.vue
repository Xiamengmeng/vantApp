
<template>
    <div>
        <NavBar/>
        <div class="menu-tips-content" v-for="(item,index) in list" :key="index">
            <van-cell :title="item.title" is-link :value="item.value" @click='goDetail(index)'/>
        </div>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default{
    name:'menuTips',
    props:[""],
    components: {
        //组件注册
        NavBar
    },
    data() {
        return {
            mesg:"我的新页面",
            list:[{title:'高级搜索',value:''},{title:'2',value:'2'}]
        }
    },
    methods:{
        goDetail(){
            console.log('即将跳转至详情页面')
            this.$router.push({path:'/seniorSearch',query:''})
        }
    }
}

</script>
<style>
.menu-tips-content{
    width: 100%;
    height: 50px;
    line-height: 50px;
    border:1px solid red;
    margin: 16px 0;
}
</style>
