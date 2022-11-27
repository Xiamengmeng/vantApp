import Vue from 'vue'

import VueRouter from 'vue-router';

Vue.use(VueRouter);
//routes 名字固定不能随意修改 和vue3一样
const routes = [
{path:'/',
   redirect:'/menuTips'
},
{
    path:'/menuTips',
    name:"menuTips",
    component:() => import ('@/views/menuTips.vue'),
    
    meta: {
        isshowtabbar: true
    }
},
{
    
    path:'/seniorSearch',
    name:"seniorSearch",
    component:() => import ('@/views/seniorSearch.vue'),
    
    meta: {
        isshowtabbar: true
    }
},
{
    path:'/home',
    name:"home",
    component:() => import ('@/views/HomeView.vue'),
    
    meta: {
        isshowtabbar: true
    }
},
{
    path:'/topic',
    name:"topic",
    component:() => import ('@/views/Topic.vue'),
    meta: {
        isshowtabbar: true
    }
},
{
    path:'/category',
    name:"category",
    component:() => import ('@/views/Category.vue'),
    meta: {
        isshowtabbar: true
    }

},
{
    path:'/cart',
    name:"cart",
    component:() => import ('@/views/Cart.vue'),
    meta: {
        isshowtabbar: true
    }
},
{
    path:'/user',
    name:"user",
    component:() => import ('@/views/User.vue'),
    meta: {
        isshowtabbar: true
    }
},

]
//创建路由对象
const router = new VueRouter({
    routes,
    mode:'history'//制定路由模式为H5 history 默认是hash模式
})
export default router


// 路由前置守卫
router.beforeEach((to, from, next) => {
     // 有token就表示已经登录  
      // 想要进入购物车页面，必须有登录标识token 
    // console.log('to:', to)  
     // console.log('from:', from)    
    let token = localStorage.getItem('token')   
    if (to.path == '/cart') { 
        // 此时必须要有token     
        if (token) { next(); 
            // next()去到to所对应的路由界面  
    } else { Vue.prototype.$toast('请先登录'); 
    // 定时器            
    setTimeout(() => {next('/user'); 
    // 强制去到"/user"所对应的路由界面      
               }, 1000);  } 
             } else { 
            // 如果不是去往购物车的路由，则直接通过守卫，去到to所对应的路由界面   
            next()
         }
        })

//         // 解决router版本过高 重复点击路由控制台报错问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
// return originalPush.call(this, location).catch(err => err)
// }