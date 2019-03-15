/*
 * @Desc： 自动注册全局组件
 * @Author: laifeipeng
 * @Date: 2019-03-15 15:16:44
 * @Last Modified by: laifeipeng
 * @Last Modified time: 2019-03-15 15:25:58
 */

import Vue from 'vue'
const contexts = require.context('.', false, /\.vue$/)
contexts.keys().forEach(component => {
  const componentEntity = contexts(component).default
  Vue.component(componentEntity.name, componentEntity)
})
