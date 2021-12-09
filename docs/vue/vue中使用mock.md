---
title: vue中使用mock
---

安装

```
yarn add mockjs
# or
npm install mockjs
```

在 src 目录下创建 mock 文件夹
mock 文件夹创建 index.js,在这里引入其他模块例如 user.js

```javascript
import Mock from 'mockjs'

import './user'
```

```javascript
//user.js
import Mock from 'mockjs'

// 拓展mockjs
Mock.Random.extend({
    phone: function () {
        var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
    }
})

Mock.mock('/user/userList', 'get', {
    'list|1-10': [
        {
            'name|+1': '@cname',
            'age|20-40': 100,
            phone: '@phone'
        }
    ]
})
```

在 vue 入口文件 main.js 中引入

```javascript
import '@/mock/'
```

测试请求

```javascript
async fetch() {
    const res = await this.$http.get("/user/userList");
    console.log(res, "res");
},

```

返回结果

```javascript
[
    {name: '常霞', age: 23, phone: '18993861102'}
    {name: '万勇', age: 31, phone: '18961763725'}
    {name: '锺娟', age: 22, phone: '13588364637'}
    {name: '徐芳', age: 34, phone: '13530727236'}
    {name: '周娟', age: 33, phone: '13234461958'}
    {name: '魏洋', age: 27, phone: '13274423813'}
    {name: '汪霞', age: 31, phone: '13596340434'}
    {name: '林磊', age: 32, phone: '13265953465'}
]
```
