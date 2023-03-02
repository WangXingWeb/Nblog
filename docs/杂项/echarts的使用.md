---
title: echarts的使用
---

## clear 和 dispose

echarts.clear()是清空当前实例，会移除实例中所有的组件和图表。

echarts.dispose()是销毁实例，销毁后实例无法再被使用。

有时候我们需要重复渲染图表时，上一次渲染图表的数据会对本次渲染造成影响，特别是我们没有在 options 中声明，echart 帮我们生成的数据，例如我没有定义 tooltip 的显示方式，这时候 echarts 会默认使用的 tooltip 数据，当我们再次渲染图标后，tooltip 很有可能受到上一次 tooltip 的干扰，这时候我们就需要用到 clear 方法，将上次的数据清空。
