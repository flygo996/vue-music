# vue-music

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# vue-music

## 1、项目搭建
vue cli 3 使用 vue create vue-music 搭建项目，使用vue-router、vuex、sass(scss)、postcss，
并配置postcss的'postcss-px2rem'的`remUnit`为`37.5`(见postcss.config.js)。

## 2、图标准备
从阿里巴巴图标库（https://www.iconfont.cn/）找到需要用的图标，symbol引用（svg格式）。
使用svg组件引入，并且可以自定义颜色。（注意需要先批量去色，否则不能修改颜色。）

### 3、基础样式
scss文件夹添加基础样式文件，包括variable.scss、reset.scss、mixin.scss等

### 4、开始正式编码
```
npm run build
```

### 5、数据来源

