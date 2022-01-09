---
title: Object.keys()、Object.values()、Object.entries()
---

## Object.keys()

返回一个表示给定对象的所有可枚举属性的字符串数组

```js
let obj = {
    a: 1,
    b: 2
}
console.log(Object.keys(obj))
// ['a','b']
```

取的是对象的属性，这与`for in`类似
不过与`for in`不同的是`for in`会遍历原型链，`Object.keys()`不会取出原型链上的属性。

```js
Object.prototype.test = 'test'
let obj = {
    a: 1,
    b: 2
}
for (let key in obj) {
    console.log(key) // a,b,test
}
console.log(Object.keys(obj)) // ['a','b']
```

## Object.values()

返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值

```js
let obj = {
    a: 1,
    b: 2
}
console.log(Object.values(obj)) // [1,2]
```

## Object.entries()

返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组

```js
let obj = {
    a: 1,
    b: 2
}
console.log(Object.entries(obj)) // [['a',1],['b',2]]
```
