import {request} from "@/network/request";

/**
 * 请求轮播图、推荐相关的数据
 * @returns {*}
 */
export function getHomeMultidata() {
  return request({
    url: 'values/get'
  })
}

/**
 * 请求首页商品相关的数据
 * @param type
 * @param page
 * @returns {*}
 */
export function getHomeGoods(type, page) {
  return request({
    url: '/values/data',
    params:{
      type,
      page
    }
  })
}
