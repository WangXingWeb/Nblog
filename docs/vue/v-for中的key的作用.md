---
title: v-for中的key的作用
---

给 diff 算法设定的锚点，key 值是每一个 vnode 的唯一标识，依靠 key，我们可以更快的拿到 oldVnode 中相对应的节点。我们在操作循环出来的某一项时，diff 算法就可以准确找到我们是针对哪一项做了操作。React 中也是一样的道理，因为它们都用到了虚拟 DOM 和 diff 算法。

## ant-design-vue table 中没有唯一值给 rowKey 的解决办法

```html
<a-table :rowKey="(record,index) => index"></a-table>
```
