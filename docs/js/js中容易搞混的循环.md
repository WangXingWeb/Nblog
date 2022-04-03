---
title: js中容易搞混的循环
---

## for in 和 for of

### for in

```javascript
for (let item of arr) {
    console.log(item) //item是数组下标或者对象key
    console.log(arr[item]) //使用下标取出数组元素
}
```

for in 是`es5`语法,可以用来遍历数组和对象，取出 key

### for of

for of 是`es6`语法，只能用来遍历数组，取出的是数组元素

```javascript
for (let item of arr) {
    console.log(item) //数组元素
}
```

## each 和 foreach

### each

each 是 jquery 提供的方法，一般用来遍历 jquery 对象，非 jquery 对象不能使用。

### foreach

ECMAscript 自带的原生数组遍历函数。jquery 选择器生成的伪数组是不能直接调用的。
