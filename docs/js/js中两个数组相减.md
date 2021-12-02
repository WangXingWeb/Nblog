---
title: js中两个数组相减
---

## 方法一：从 arrA 中循环删除 arrB 中的元素

```javascript
//从arrA数组中删除arrB的元素
function subtractArr(arrA, arrB) {
    for (var i = 0, len = arrB.length; i < len; i++) {
        for (var j = 0, jen = arrA.length; j < jen; j++) {
            if (arrA[j] === arrB[i]) {
                arrA.splice(j, 1)
                j--
            }
        }
    }
    return arrA
}
```

> 需要注意的是：在每次在`arrA`中删除一个元素时，要做`j--`操作,调整循环位置，这一步非常关键。比如本次循环删除了`arrA`中的第 n 项，导致这个数组内元素都往前了一位，那我们不做`j--`的话，下一次操作的其实已经是当前项的后两位了，就是未删除 n 时的第 n+2 项了，也就是 n+1 被我们忽略掉了。举个例子：就像宋朝朝廷说要捉拿梁山好汉的 number1，当晁盖死了以后，朝廷说 number1 死了，现在的 number2 是谁啊？下面的人说 number2 时卢俊义，所以朝廷下令捉拿卢俊义，这时宋公明偷偷的笑了。

现在我们换个思路，从 arrA 的末尾开始循环删除，这时就不用调整循环位置了。

```javascript
//从arrA数组中删除arrB的元素
function subtractArr(arrA, arrB) {
    for (var i = 0; i < arrB.length; i++) {
        for (var j = arrA.length - 1; j >= 0; j--) {
            if (arrA[j] === arrB[i]) {
                arrA.splice(j, 1)
            }
        }
    }
    return arrA
}
```

## 方法二：将需要保留的元素添加到一个新数组

```javascript
/从arrA数组中删除arrB的元素
function subtractArr(arrA,arrB){
    var arrC = []
    for (var i = 0; i < arrA.length; i++) {
        var isFind = false
        for (var j = 0; j < arrB.length; j++) {
            if (arrA[i] === arrB[j]) {
                isFind = true
            }
        }
        if(!isFind){      //循环arrB后还没有找到，说明arrA[i]是ArrB中没有的
            arrC.push(arrA[i])
        }
    }
    return arrC
}
```

## 方法三：使用 es6 语法

```javascript
//从arrA数组中删除arrB的元素
function subtractArr(arrA, arrB) {
    return arrA.filter((item) => arrB.indexOf(item) < 0)
}
```

这个方法会很逻辑很清晰，实现也很优雅。但是也有几个问题

-   依赖 es6 环境，需要 babel 编译后才能在浏览器上运行
-   数组的元素只能是基本类型，不能是引用类型

## 方法四：用 map 的思想来解决

思路：将第一个数组存入一个对象（这里会去重）；再把第二个数组中的元素当作 key 从对象中删除。

```javascript
//从arrA数组中删除arrB的元素
function subtractArr(arrA, arrB) {
    var obj = {}
    arrA.forEach(function (a) {
        obj[a] = a
    })
    arrB.forEach(function (b) {
        delete obj[b]
    })
    return Object.keys(obj)
}
```

和方法三一样要求数组的元素只能是基本类型，不能是引用类型。
