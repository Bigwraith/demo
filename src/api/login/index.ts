import { request } from 'until/request'

const test = (data: any) => {
  return request({
    url: 'permission/getUserPermissionByToken',
    method: 'GET',
    params: data
  })
}

const login = async (data: any) => {
  return await request({
    url: 'login',
    method: 'POST',
    data
  })
}

export { test, login }
