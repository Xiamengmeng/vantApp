
<template>
<div>
    <van-cell class="menu-tips-content" title="单元格" is-link value="内容" @click='goDetail'/>
</div>
</template>
<script>
export default{
    name:'menuTips',
    props:[""],
    data() {
        return {
            mesg:"我的新页面"
        }
    },
    methods:{
        goDetail(){
            console.log('即将跳转至详情页面')
            this.$router.push({path:'/home',query:''})
        }
    }
}

</script>
<style>
.menu-tips-content{
    width: 100%;
    height: 50px;
    border:1px solid red;
}
</style>
