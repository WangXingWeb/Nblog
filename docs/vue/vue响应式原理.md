---
title: vue响应式原理
---

自己手动实现一个简单的响应式框架
数据劫持
发布订阅模式

## Object.defineProperty

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

```javascript
const object1 = {}
Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
})
object1.property1 = 77
// throws an error in strict mode
console.log(object1.property1)
// expected output: 42
```

### 语法

> Object.defineProperty(obj, prop, descriptor)

obj:要定义属性的对象。
prop:要定义或修改的属性的名称或 Symbol 。
descriptor:要定义或修改的属性描述符。descriptor 的可选键值

-   configurable 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
    默认为 false。
-   enumerable 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
    默认为 false。
-   value 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
-   writable 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。默认为 false。
-   get 属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的 this 并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。默认为 undefined。
-   set 属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。默认为 undefined。
