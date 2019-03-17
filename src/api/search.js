import jsonp from './jsonp'
import { commonParams, options } from './config'
import { doGet } from './http'

// const debug = process.env.NODE_ENV !== 'production'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}

export function search(query, page) {
  const w = query.trim()
  const url = `https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=${page}&n=30&w=${w}`

  // const data = Object.assign({}, commonParams, {
  //   w: query,
  //   p: page,
  //   perpage,
  //   n: perpage,
  //   flag_qc: 0,
  //   catZhida: zhida ? 1 : 0,
  //   zhidaqu: 1,
  //   t: 0,
  //   flag: 1,
  //   ie: 'utf-8',
  //   sem: 1,
  //   aggr: 0,
  //   remoteplace: 'txt.mqq.all',
  //   uin: 0,
  //   needNewCode: 1,
  //   platform: 'h5',
  //   format: 'json'
  // })

  return doGet(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
