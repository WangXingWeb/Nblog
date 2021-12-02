---
title: React生命周期
---

![](file:///Users/xingzai/project/grideaBlog/post-images/1580648170141.jpg)

# 创建阶段

## componentWillMount

组件将要被挂载，还没有开始渲染虚拟 dom

## render

第一次渲染虚拟 dom，当 render 执行完，内存中就有了完整的虚拟 dom 了
此时不能获取到页面上的 dom 元素

## componentDidMount

组件完成了挂载，此时组件已经显示到页面上了，进入到运行状态

# 运行阶段

## componentWillReciveProps

组件将要接收新属性，这要这个方法触发就证明父组件给当前自组件传递了新的属性

> 如果在这个生命周期函数中使用 this.props 拿到的还是就数据。在函数的参数 nextProps 中才是最近传入的新数据。

## shouldComponentUpdate

组件是否需要被更新，此时组件尚未被更新，但 state 和 props 肯定是新的。

> 这里使用`this.state`和`this.props`获取到的也不是最新的数据。在函数的参数`nextProps`和`nextstate`中才是最新数据

## componentWillUpdate

组件将要被更新，此时尚未更新，内存中的虚拟 dom 树还是旧的

## render

使用最新的 state 和 props 重新虚拟 dom 树

## componentDidupdate

此时页面已经被重新渲染了，state 和虚拟 dom 以及页面已经同步

# 卸载阶段

## componentWillUnmount

组件即将被卸载，此时组件还可以正常使用
