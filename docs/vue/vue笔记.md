---
title: vue笔记
---

## v-once

只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

```html
<span v-once>{{name}}</span>
```


## v-show和v-if的区别

- v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

- v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

- 相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

- 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

- 除此之外，v-if可以搭配v-else使用，v-show时不可以和v-else搭配使用的。
- 还有v-if是可以使用template这个虚拟标签的，v-show不可以，很好理解，因为v-show是通过控制标签的display实现显示隐藏的，template是不会渲染成真正的html标签所以没办法用display控制，所以v-show不可以在template标签上使用。


## vue动态参数

```html
<div v-bind:[attributeName]="attributeValue">动态参数</div>
<div :[attributeName]="attributeValue">动态参数</div>
```

::: tip
避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写：
:::

## $attrs

::: tip
包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。
:::

没有被子组件用props接收的参数会被装到$attrs中，

- 作用1，向后代组件传递参数
```html
<!-- 父组件 -->
<child-comp param1="param1" param2="param2"></child-comp>
```

```html
<!-- 子组件 直接透传参数给孙子组件 -->
<grand-child-comp v-bind="$attrs"></grand-child-comp>
```

```html
<!-- 孙子组件 可以直接拿到祖父组件中传入的参数 -->
<template>
    <div>{{param1}}</div>
</template>
<script>
export default {
  props: {
    param1: String,
    param2:String
  }
}
</script>
```

- 作用2 
```html
<child-comp class="myClass"></child-comp>
```

```html
<!-- 子组件  -->
<template>
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</template>
```
如果子组件中只有一个根标签，那么vue会把class直接追加给这一个标签上，但vue3是允许template中有多个根标签的，这时vue就不知道要把这个class追加给那个标签了，就会不会追加这个class，这个class参数会被放到$attrs中，这时我们可以手动将class追加到任意一个标签上。
```html
<!-- 子组件  -->
<template>
    <div>div1</div>
    <div :class=”$attrs.class“>div2</div>
    <div>div3</div>
</template>
```