import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
  })
}

export function getHomeMultidata2(type,page) {
  return request({
    url: '/api/mn/home/data',
    params: {
      type,
      page
    }
  })
}