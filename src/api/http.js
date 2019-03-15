/*
 * @Author: laifeipeng 
 * @Date: 2019-03-15 21:31:55 
 * @Last Modified by: laifeipeng
 * @Last Modified time: 2019-03-15 22:03:46
 */

import axios from 'axios'
const TIME_OUT = 3000
// qq音乐
axios.defaults.baseURL = 'https://c.y.qq.com/'
axios.defaults.headers.referer = 'https://c.y.qq.com/'
axios.defaults.headers.host = 'c.y.qq.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export function doPost(url, param) {
  return axios({
    method: 'post',
    url: url,
    data: param || {},
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: TIME_OUT,
  })
    .then(res => {
      if (res.status === 200) {
        return Promise.resolve(res.data || {})
      } else {
        return Promise.reject(res)
      }
    })
    .catch(e => {
      return Promise.reject(`[${e}]，post请求获取数据失败,请稍后再试`)
    })
}

export function doGet(url, param) {
  return axios({
    method: 'get',
    url: url,
    params: param,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: TIME_OUT,
  })
    .then(res => {
      if (res.status === 200) {
        return Promise.resolve(res.data || {})
      } else {
        return Promise.reject(res)
      }
    })
    .catch(e => {
      return Promise.reject(`[${e}]，get请求获取数据失败,请稍后再试`)
    })
}

/* 请求拦截器 */
axios.interceptors.request.use(function (config) {
  return config
}, function (err) {
  console.log(`axios请求拦截器-报错: ${err}`)
  return Promise.reject(err)
})

/* 响应拦截器 */
axios.interceptors.response.use(function (response) {
  return response
}, function (err) {
  console.log(`axios响应拦截器--报错: ${err}`)
  return Promise.reject(err)
})
