import axios from './axios.js'
//首页接口
export function gethomedata (data){
    return axios({
        url:'/index/index',
        method:'get',
        params:data
    })
}