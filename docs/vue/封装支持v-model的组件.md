---
title: 封装支持v-model的组件
---

## v-model 原理

v-model 是一个语法糖

```vue
<input v-model="something">
//相当于下面
<input v-bind:value="something" v-on:input="something=$event.target.value">
```

所以 v-model 相当于给子组件传递了 value 属性，并绑定了一个事件供子组件使用$emit 触发，在这里将子组件中改变后的值赋值给父组件的 value，从而改变父组件的值，由此实现双向绑定的效果.

## 实现计步器组件

现在我们利用上面得出的结论实现一个支持 v-model 的计步器

<<< @/docs/.vuepress/public/assets/vueDemo/StepNumber.vue

父组件中使用

```vue
<StepMumber v-model="step" />
<!-- 相当于下面这样 -->
<StepMumber :value="step" @input="(val) => (step = val)" />
```

## 使用新特性 model 重构

::: tip
vue2.2.0 以后新增了 model 属性
:::

::: tip
一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。model 选项可以用来避免这样的冲突：
:::

这个属性允许我们指定那个属性用来双向绑定，而不再是必须将参数定义为 value，同样触发的事件也可以自定义，不在局限于 input,check,change,

```javascript
model: {
    prop: "step",    //指定双向绑定的参数名
    event: "update", //触发返回值的事件名
},
```

下面是用 model 属性重构的计步器组件

<<< @/docs/.vuepress/public/assets/vueDemo/StepNumberNew.vue

使用新特性 model 后，感觉更灵活，代码可读性更高，同时还不与系统自带的控件的默认事件冲突。个人推荐 2.2.0 版本之后就使用 model 这种写法就可以了。

## vue3 中自定义 v-model

vue3 中默认情况下，v-model 在组件上都是使用 modelValue 作为 prop，并以 update:modelValue 作为对应的事件。我们可以通过给 v-model 指定一个参数来更改这些名字：

```html
<MyComponent v-model:title="bookTitle" />
```

在这个例子中，子组件应声明一个 title prop，并通过触发 update:title 事件更新父组件值：

```html
<!-- MyComponent.vue -->
<script setup>
    defineProps(['title'])
    defineEmits(['update:title'])
</script>

<template>
    <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
</template>
```

vue3 支持组建绑定多个 v-model

```html
<UserName v-model:first-name="first" v-model:last-name="last" />
```

```html
<script setup>
    defineProps({
        firstName: String,
        lastName: String
    })

    defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
    <input type="text" :value="firstName" @input="$emit('update:firstName', $event.target.value)" />
    <input type="text" :value="lastName" @input="$emit('update:lastName', $event.target.value)" />
</template>
```
