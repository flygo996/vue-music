/*
 * @Author: laifeipeng 
 * @Date: 2019-03-15 23:34:11 
 * @Last Modified by: laifeipeng
 * @Last Modified time: 2019-03-15 23:46:48
 */
export const bigNumFormat = num => {
  const m = num / 10000
  // 如果达到万，则返回'xx万'，否则原样返回str
  return m > 1 ? `${m.toFixed(1)}万` : `${num}`
}
