<!-- 我的 -->
<template>
  <div class="user">
    <!-- 头部 -->
    <div class="user_top">
      <img :src="handImg" width="70" alt="" />
      <h3 v-if="ifLogined">{{ username }}</h3>
      <h3 @click="ifShowModal = true" v-else>点击登录</h3>
      <van-icon :name="ifLogined ? 'cross' : 'arrow'" @click="loginout" />
    </div>
    <!-- 九宫格部分 -->
      <van-grid square :column-num="3">
      <van-grid-item
        v-for="item in gridArr"
        :key="item.id"
        :icon="item.icon"
        :text="item.type"
      />
    </van-grid> 
    <!-- 模态框 -->
  <div class="modal" v-show="ifShowModal">
  <!-- 遮罩层 -->
      <div class="modal_bg" @click="ifShowModal = false"></div>
     <!-- 表单 -->
     <div class="modal_content">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="danger" native-type="submit"
              >提交</van-button>
          </div>
        </van-form>
      </div>
    </div> 
  </div>
</template>

<script>
import Vue from 'vue';
import { Button,Grid,GridItem,Field,Icon,Form,Dialog } from 'vant';
import handImg from "@/assets/images/touxiang.webp"
Vue.use(Button),
Vue.use(Grid),
Vue.use(GridItem),
Vue.use(Field),
Vue.use(Icon)
Vue.use(Form)
Vue.use(Dialog)
// 引入登录接口
import { LoginFn } from "@/api/http";
export default {
  name:'User',
  props:[""],
  data() {
    return {
      ifLogined:false, // 登录状态
       gridArr: [
        // grid数组
        { id: 0, icon: "label-o", type: "我的订单" },
        { id: 1, icon: "bill-o", type: "优惠券" },
        { id: 2, icon: "goods-collect-o", type: "礼品卡" },
        { id: 3, icon: "location-o", type: "我的收藏" },
        { id: 4, icon: "flag-o", type: "我的足迹" },
        { id: 5, icon: "contact", type: "会员福利" },
        { id: 6, icon: "aim", type: "地址管理" },
        { id: 7, icon: "warn-o", type: "账号安全" },
        { id: 8, icon: "service-o", type: "联系客服" },
        { id: 9, icon: "question-o", type: "帮助中心" },
        { id: 10, icon: "smile-comment-o", type: "意见反馈" },
      ],
      ifShowModal:false, // 是否显示模态框
      username: "", // 用户名
      password: "", // 密码
      handImg:handImg
    };
  },
  created() {
    // 登陆前先看本人是否登陆过
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      this.ifLogined = true;
      userInfo = JSON.parse(userInfo);
      this.username = userInfo.username;
      // this.avatarSrc = userInfo.avatar;
    }
  },
  methods: {
    loginout() {
      //退出登录
      if (this.ifLogined) {
        this.$dialog
          .confirm({
            title: "退出账号确认",
            message: "您是否想要退出当前账号？",
          })
          .then(() => {
            // 清除token
            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
            // 刷新当前页
            this.$router.go(0);   
          });
      } else {
        // 代表未登录，要打开模态框
        this.ifShowModal = true;
       
      }
    },
    onSubmit(values) {
      // 点击提交
      console.log("submit", values);
      LoginFn({username:values["用户名"],pwd:values["密码"]})
      .then((res) => { 
      console.log(res);
 console.log( res.data.token)
      if (res.errno == 0) {
      
          // 存储token
      localStorage.setItem("token", res.data.token);
         
      // 存储userInfo
      localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo));
      // 关闭模态框
      this.ifShowModal = false;
     console.log(111)
        // 修改头像和用户名
        this.username = res.data.userInfo.username;
              // 修改为已经登录
      this.ifLogined = true;


        }
      });
    },

  
  },
};
</script>
<style lang="less" >
.user {
  .user_top {
    background: #333;
    color: #fff;
    padding: 10px 10px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      border-radius: 50%;
      margin-right: 10px;
    }
    h3 {
      flex: 1;
      font-size: 6px;
    }
  }
  .modal {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99; 
    left: 0;
    top: 0;
    .modal_bg {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
    .modal_content {
      width: 90%;
      height: 100px;
      position: absolute;
      background: #fff;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      padding-top: 20px;
    }
  }
}
</style>