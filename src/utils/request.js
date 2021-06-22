import axios from 'axios'

const baseURL = 'http://ihrm-java.itheima.net/api/'

const instance = axios.create({
  baseURL,
  // 延迟，超过5秒后 报错，不会一直发送请求
  timeout: 5000
})

export default (options) => {
  return instance({
    // 请求方式
    method: options.method || 'GET',
    // 请求地址
    url: options.url,
    // post put 发送数据方式上
    data: options.data,
    // get 请求体
    params: options.params,
    // 请求头
    headers: options.headers
  })
}
