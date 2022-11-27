<template>
    <div class="senior-search-content">
        <van-nav-bar title="高级搜索" left-text="返回" right-text="筛选" left-arrow @click-left="onClickLeft"
        @click-right="onClickRight" />
        <div>
            {{msg}}
        </div>
    </div>
</template>
<script>
export default{
    name:'menuTips',
    props:[""],
    data() {
        return {
            msg:'搜索内容'
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        onClickRight(){

        }
    }
}
</script>
<style>
.senior-search-content{

}
</style>