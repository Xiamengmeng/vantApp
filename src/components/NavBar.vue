<template>
    <!-- <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
        @click-right="onClickRight" /> -->
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>

<script>
export default {
    name: '',
    data() {
        return {
        };
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)

        },
        onClickRight() {

        }
    }


}

</script>
<style scoped>

</style>