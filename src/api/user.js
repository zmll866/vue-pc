import request from '@/utils/request'
// 登录请求
export function login (data) {
  return request({
    method: 'POST',
    url: 'sys/login',
    data
  })
}
// 获取用户信息
export function getInfo (token) {
  return request({
    // url: '/vue-admin-template/user/info',
    // method: 'get',
    // params: { token }
  })
}
// 退出
export function logout () {
  return request({
    // url: '/vue-admin-template/user/logout',
    // method: 'post'
  })
}
