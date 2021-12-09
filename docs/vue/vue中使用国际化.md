---
title: vue中使用国际化
---

## 使用 vue-i18n 插件

```javascript
yarn add vue-i18n
```

## 使用

```javascript
// i18n/index.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
//已登录字段为例
let messages = {
    zh: {
        login: '登录'
    },
    en: {
        login: 'login'
    }
}
let locale = localStorage.getItem('lang') || 'zh' //从localstorag中获取
export default new VueI18n({
    locale, //指定语言字段
    messages //定义语言字段
})
```

在 main.js 中使用

```javascript
import i18n from '@/i18n/texti18n'
new Vue({
    render: (h) => h(App),
    i18n
}).$mount('#app')
```

## 优化

我们也可以将不同的语言维护在单独的 js 文件中，更方便维护

```javascript
let messages = {
    zh: require('@/i18n/config/zh.js').default,
    en: require('@/i18n/config/en.js').default
}
```

这里还有一个问题每次新增一个语言，需要在这里加一条配置，这里优化一下

```javascript
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

let langFileds = require.context('./config', false, /\.js$/)
let regExp = /\.\/([^\.\/]+)\.([^\.]+)$/ //正则用于匹配 ./en.js中的'en'
let messages = {} //声明一个数据模型，对应i18n中的message属性
langFileds.keys().forEach((key) => {
    console.log(key, 'key')
    let prop = regExp.exec(key)[1] //正则匹配en|zh这样的值
    messages[prop] = langFileds(key).default
})
let locale = localStorage.getItem('lang') || 'zh' //从localstorag中获取

export default new VueI18n({
    locale, //指定语言字段
    messages //定义语言字段
})
```

这样以后每次新增一个语言，只需要在 config 下新增一个 js 文件即可。
