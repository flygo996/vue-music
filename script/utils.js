/*
 * @Author: laifeipeng 
 * @Date: 2019-03-15 16:06:30 
 * @Last Modified by: laifeipeng
 * @Last Modified time: 2019-03-15 18:43:39
 */

const fs = require('fs')
const chalk = require('chalk')

//loggs
const errorLog = error => console.log(chalk.red(`${error}`))
const defaultLog = log => console.log(chalk.green(`${log}`))

/**
 * generate file
 * @param {*} filePath 
 * @param {*} content 
 * @param {*} dirPath 
 */
const generateFile = async (filePath, content) => {
  try {
    if (! await fs.existsSync(filePath)) {      
      await fs.openSync(filePath, 'w') // create file
      defaultLog(`creating... ( ${filePath} ) `)
    }
    await fs.writeFileSync(filePath, content, 'utf8') // write file
  } catch (error) {
    errorLog(error)
  }
}

// 小驼峰转大驼峰
const camel2Pascal = str => {
  return str[0].toUpperCase() + str.substring(1)
}
// 大驼峰转小驼峰
const pascal2Camel = str => {
  return str[0].toLowerCase() + str.substring(1)
}

// 连字符转小驼峰
const hyphen2Camel = str => {
  return str.replace(/-(\w)/g, (...args) => {
    return args[1].toUpperCase();
  });
};

// 小驼峰转连字符
const camel2Hyphen = str => {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
};

/*
1、vue单文件组件名称默认是大驼峰
2、vue里面的template的属性名默认是连字符
*/
const formatPascal = camel2Pascal
const formatHyphen = str => camel2Hyphen(pascal2Camel(str))


module.exports = {
  errorLog,
  defaultLog,
  formatPascal,
  formatHyphen,
  generateFile
}