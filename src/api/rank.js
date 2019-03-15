import jsonp from './jsonp'
import { commonParams, options } from './config'
const prefixUrl = 'https://c.y.qq.com/v8/fcg-bin/'

export function getTopList () {
  const url = `${prefixUrl}fcg_myqq_toplist.fcg`

  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}

export function getMusicList (topid) {
  const url = `${prefixUrl}fcg_v8_toplist_cp.fcg`

  const data = Object.assign({}, commonParams, {
    topid,
    needNewCode: 1,
    uin: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    platform: 'h5'
  })

  return jsonp(url, data, options)
}
