/*
 * @Author: laifeipeng 
 * @Date: 2019-03-15 16:03:42 
 * @Last Modified by: laifeipeng
 * @Last Modified time: 2019-03-15 18:39:36
 */
const path = require('path')
const reslove = file => path.resolve(__dirname, '../src', file)
const { defaultLog, formatHyphen, formatPascal, generateFile } = require('./utils')

const tpl = module => (
  `<template>
  <div class="${formatHyphen(module)}">
    
  </div>
</template>

<script>
export default {
  name: '${formatHyphen(module)}',
  props: {
    name: {
      type: String,
      default: 'laifeipeng'
    },
    test: {
      type: String | Array,
      required: true
    },
  },
  data() {
    return {
      show: false
    }
  },
  created() {
    
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .${formatHyphen(module)}{
    color: blue;
  }
</style>
`)

defaultLog(`请输入全局组件名称(英文)：`)

// 和命令行进行交互
process.stdin.on('data', async (chunk) => {
  const input = chunk.toString().trim()
  const name = formatPascal(input) //大驼峰组件名字
  defaultLog(`global components name is '${name}' (自动转成大驼峰)`)
  const filePath = path.join(reslove('components/global'), `${name}.vue`)
  await generateFile(filePath, tpl(name))
  process.stdin.emit('end')
  process.exist()
})
process.stdin.on('end', () => {
  defaultLog('create global components success!')
  process.exit(0)
})
