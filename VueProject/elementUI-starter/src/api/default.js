import request from './request';

export function TestConnect() {
  return request({
    url: '/api/Default/TestConnect',
    method: 'get'
  })
}

export function TestConnect2(query) {
  return request({
    url: '/api/Default/TestConnect2',
    method: 'get',
    params: query
  })
}

export function TestConnect3(query) {
  return request({
    url: '/api/Default/TestConnect2',
    method: 'get',
    params: query,
	timeout:5*60*1000
  })
}
