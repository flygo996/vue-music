/*
 * @Author: laifeipeng 
 * @Date: 2019-03-15 17:43:13 
 * @Last Modified by: laifeipeng
 * @Last Modified time: 2019-03-15 17:50:25
 */

// 和命令行进行交互 获取的创建的模块名称
process.stdin.on('data', (chunk) => {
  console.log(chunk)
  console.log(chunk.toString())
  console.log(chunk.toString().length)
  const a = chunk.slice(0, -2)
  const b = chunk.toString().trim()
  console.log(a)
  console.log(b)
  console.log(a.toString() === b)//true
})

/*
//输入"aba 123"得到:
<Buffer 61 62 61 20 31 32 33 0d 0a>
aba 123

9
<Buffer 61 62 61 20 31 32 33>
aba 123
true
*/

// 说明chunk后面会多出2个东东，要去掉，可以采用上面a\b其中一种，本人使用第二种`chunk.toString().trim()`
