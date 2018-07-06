import request from '@/utils/request'

export function login(username, password) {
  const response = {"code":20000,"data": {"token":"admin"}}
  return Promise.resolve(response)
  // return request({
  //   url: '/user/login',
  //   method: 'post',
  //   data: {
  //     username,
  //     password
  //   }
  // })
}

export function getInfo(token) {
  const response = {"code":20000,"data":{"roles":["admin"],"name":"admin","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}}
  return Promise.resolve(response)
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
