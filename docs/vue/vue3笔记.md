---
title: vue3笔记
---

## watch

vue3 中 watch 是 function，第一个参数是需要监听的数据，第二个参数是一个回调函数，被监听的数据发生变化后触发，此回调函数类似 vue2 中 wacth 中的 handel

### 监听单个值

```javascript
import { ref, watch } from 'vue'
setup(props) {
    const num = ref(3)
    const add = (n) => {
      num.value = num.value + n
    }
    watch(num, (newNum,prevNum) => {
      if (val < 0) {
        num.value = 0
      }
    })
    return {
        num,
        add
    }
}
```

### 监听多个值

```javascript
setup(props) {
    const num = ref(3);
    const num2 = ref(4);
    const add = (n) => {
      num.value = num.value + n;
    };
    watch([num, num2], ([num, num2], [prevNum, prevnum2]) => {
      console.log(`num:${num}--${prevNum},num2:${num2}--${prevnum2}`);
    });
    return { num, num2, add };
},
```

### watchEffect

watchEffect 类似 computed
立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数
返回一个函数，执行这个函数可以停止监听

```javascript
import { ref, watch, watchEffect } from 'vue'
export default {
    setup(props) {
        const num = ref(3)
        const add = (n) => {
            num.value = num.value + n
        }
        const stop = watchEffect(() => {
            num.value < 0 ? (num.value = 0) : ''
        })
        stop()
        return { num, add }
    }
}
```

## 父组件获取子组件数据

### 父组件

```javascript
<template>
  <div class="about">
    <Count :init="4" @change="changeHandle" ref="countComponent"></Count>
    {{ changeHandle() }}
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import Count from "./Count.vue";
export default {
  components: {
    Count,
  },
  setup(props) {
    const countComponent = ref();
    onMounted(() => {
      console.log(countComponent.value.num);
    });
    const changeHandle = () => countComponent.value?.num;
    return { countComponent, changeHandle };
  },
};
</script>

```

### 子组件

```javascript
<template>
  <div>
    <button @click="add(-1)">-</button>
    {{ num }}
    <button @click="add(1)">+</button>
  </div>
</template>
<script>
import { ref, watch, watchEffect } from "vue";
export default {
  props: {
    init: {
      type: Number,
      default: 5,
    },
  },
  emits: ["change"],
  setup(props, context) {
    const { emit, expose } = context;
    const num = ref(props.init);
    const add = (n) => {
      num.value = num.value + n;
    };
    expose({ num });//只暴露num不暴露add
    return { num, add };
  },
};
</script>

```

如果使用 setup 语法糖会有所不同,需要使用 defineExpose 将父组件需要的方法和变量暴露出去

```ts
defineExpose({ num })
```

## attrs

## torefs

## 监听路由参数变化

```ts
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
// 监听当前路由变化
watch(
  () => router.currentRoute.value,
  (to) => {
    let id = to.query.id as string;
    if (id) {
      getDashboardData(id);
    }
  },
  { immediate: true }
);
</script>

```
