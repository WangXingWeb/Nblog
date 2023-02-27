---
title: vue自动注册组件
---

```javascript
import { defineAsyncComponent } from "vue";
let comp = {};
const components = import.meta.glob("@/components/*/*.vue");

for (const [key, value] of Object.entries(components)) {
  let compName = key.split("/")[3].split(".")[0];
  comp[compName] = defineAsyncComponent(value as any);
}
export default {
  components: { ...comp },
};
```
