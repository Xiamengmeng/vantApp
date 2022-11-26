import Vue from 'vue';
import App from './App.vue';
//引入amfe-flexible.js 插件，引入后会自动设置html的font-size 屏幕高度
import 'amfe-flexible';
//引入全局的重置样式表 去掉标签自带的样式 做一个浏览器的兼容
//vue2中脚手架@vue/cli 中默认做了路径别名配置 @ 所以可以直接引入src
import '@/assets/css/reset.css';
//引入less
import less from 'less';
Vue.use(less)
import { NavBar, Cell, CellGroup, Picker,ActionSheet  } from 'vant';
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Picker)
Vue.use(ActionSheet )//动作面板
Vue.use(NavBar)//导航栏

//引入路由对象 router
import router from '@/router'

const app = new Vue({
  render: h => h(App),
  router//将router注册到跟实例中 每个组件都可以使用
}).$mount('#app')
