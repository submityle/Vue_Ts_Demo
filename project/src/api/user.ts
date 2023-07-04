import request from '@/utils/request'
import type { dataType } from './../type/dataType.d'
import type { userTypes } from '@/type/userType'
const UrlBase = (url: string) => {
  return 'http://localhost:9000' + url
}
export const USER_LOGIN = (user: userTypes.user) => request.post(UrlBase('/login'), user)

export const USER_ENROLL = (user: userTypes.user) => {}
export const GET_GOODS_ALL = () => {
  return request.get(UrlBase('/getGoodsAll'))
}
export const ADD_GOODS = (GOOD_INFO: dataType.fromData_Type) =>
  request.post(UrlBase('/addGoods'), GOOD_INFO)
export const EDIT_GOODS = (GOOD_INFO: dataType.goodData_Type) =>
  request.post(UrlBase('/editGoods'), GOOD_INFO)
export const DELETE_GOODS = (GOOD_id: string) => {}
export const SEARCH_GOODS = (TITLE: string) => {}
// export const USER_LOGIN = (user) => {}
