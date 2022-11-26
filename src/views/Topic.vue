<template>
 <!-- 专题 -->
 <div class="zhuanti">
    <div v-for="item in data" :key="item.id" class="box">
     <lazy-component>
     <img class="pic" v-lazy="item.scene_pic_url" alt="" />
     </lazy-component>
      <div class="title">{{ item.title }}</div>
      <div class="tip">{{ item.subtitle }}</div>
      <div class="price">{{ item.price_info}}起</div>
    </div>
    <van-pagination
      v-model="currentPage"
      :items-per-page="items_per_page"
      :page-count="totalPages"
      mode="simple"
      @change="changeFn"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import {Pagination } from 'vant';
Vue.use(Pagination)
import { GetTopicApi } from "@/api/http";
import { Lazyload } from 'vant';
import loadingImg from  '@/assets/images/loading.gif'
Vue.use(Lazyload, {
  lazyComponent: true,
  loading:loadingImg
});
export default {
  data() {
    return {
      currentPage: 1, // 当前页
      totalPages: "2", // 总页数
      items_per_page: 10, // 每页数据条数
      data: [], // 数据
    };
  },
  methods: {
    changeFn() {
      this.getPage();
    },
    // 做页面数据请求
    getPage() {
      GetTopicApi({
        page: this.currentPage,
        size: this.items_per_page,
      }).then((res) => {
        if (res.errno == 0) {
          let { totalPages, pageSize, currentPage, data } = res.data;
          this.data = data;
          this.totalPages = totalPages;
          this.items_per_page = pageSize;
          this.currentPage = currentPage;
          // 返回顶部
          document.documentElement.scrollTop = 0;
        }
      });
    },
  },
  created() {
    this.getPage();
  },
};
</script>
<style  lang="less">
.van-pagination__item {
  color: darkred;
}
.van-pagination__item--disabled {
  color: #333;
}
.van-pagination__page-desc {
  display: none;
}
.zhuanti {
  padding-bottom: 100px;
  .box {
    background-color: #fff;
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
    .pic {
      width: 100%;
      height: auto;
    }
    .title {
      font-size:8px;
      margin: 10px 0;
    }
    .tip {
      font-size: 8px;
      margin: 10px 0;
      color: rgb(31, 31, 31);
      overflow: hidden;
      text-overflow: ellipsis;
      /* 弹性伸缩盒子模型显示 */
      display: -webkit-box;
      /* 限制在一个块元素显示的文本的行数 */
      -webkit-line-clamp: 1;
      /* 设置或检索伸缩盒对象的子元素的排列方式 */
      -webkit-box-orient: vertical;
    }
    .price {
         font-size: 6px;
      color: rgb(155, 0, 0);
      margin-bottom: 5px;
    }
  }
}
</style>