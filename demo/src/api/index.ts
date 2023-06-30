import request from '@/request'
interface user {
  username: string
  password: string
  remember?: boolean
}
export const _login = (user: user) => request.post('/api/login', user)
export const _enroll = (user: user) => request.post('/api/enroll', user)
export const _goodsAll = () => request.get('/api/getGoodsAll')
export const _goodsSearch = (search: string) => request.post('/api/getGoodsSearch', search)
export const _banner = () => request.post('/api/getBanner')
export const _tabSorter = () => request.get('/api/getTabSort')
