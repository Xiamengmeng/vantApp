import axios from './axios.js'

//专题接口
export function GetTopicApi(data) {
    return axios ({
        url: '/topic/list',
        method: 'get',
        params:data
    })
}
//品牌接口
export function brandList(data){
    return axios({
        url:'/ brand/detail',
        method:'get',
        params:data

    })
}
//我的登录请求接口
export function LoginFn (params) {
    return axios({
        url: '/auth/loginByWeb',
        method: 'post',
        data:params
    })
}
// 购物车列表接口
export function getCartData(data) {
    return axios({
        url: '/cart/index',
        method: 'get',
        params:data,
        // headers:{
        //    ' X-Nideshop-Token':localStorage.getItem('token')
        // }
    })

}
//分类页数据接口
export function GetCateGory(data){
    return  axios({
        url:'/catalog/index',
        method:'get',
        params:data
    })
}
//当前分类数据
export function GetCurrentCateGory(data){
    return axios({
        url:'/catalog/current',
        method:'get',
        params:data
    })
}