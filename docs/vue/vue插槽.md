---
title: vue插槽
---

我们编写组件是一般会将未知的内容当做参数传到组件当中，比如图片地址或者一段文本。但是如果这段内容的结构是未知的，也就是说我们不确定这段内容是一张图片还是一段文字或者一个按钮。这种情况下如果我们还是要强行通过 props 来实现，就只能够设定一个类型 type 然后通过判断 type，在使用 v-if 指令，来区别使用那种结构渲染（结构只能是我们提前设定好的，不够灵活）。这种情况下我们是不推荐用 props 实现的。更好的实现方式是插槽。

下面我们案例实现一个插槽案例

![cee163ee0c0204b8cb97e30fedb23c0](D:\Users\Desktop\cee163ee0c0204b8cb97e30fedb23c0.png)

比如我们要实现一个右上角的弹出框组件

组件代码

```html
<template>
    <div>
        <div class="TR-popup text-white p-fixed bg-dark">
            <slot></slot>
        </div>
        <van-overlay class-name="transparent-overlay" :show="overlayShow" z-index="2" @click="hidePopup" />
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Overlay } from 'vant'
    Vue.use(Overlay)

    export default {
        data() {
            return {
                overlayShow: true
            }
        },
        methods: {
            hidePopup() {
                this.$emit('hidePopup')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/style/config.scss';
    .TR-popup {
        top: 41px;
        right: 12px;
        padding: 10px;
        border-radius: 5px;
        z-index: 10;

        &::before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            top: -10px;
            right: 10px;
            border: 5px solid transparent;
            border-bottom: 5px solid map-get($map: $colors, $key: 'dark');
        }
    }
    .transparent-overlay {
        background-color: transparent;
    }
</style>
```

调用

```html
<TRpopup v-show="isPopupShow" @hidePopup="hidePopup">
    <div>
        <div class="popup-item">
            <van-icon color="#fff" name="add-o" size="18" />
            发起群聊
        </div>
        <div class="popup-item">
            <van-icon color="#fff" name="add-o" size="18" />
            邀请专家
        </div>
        <div class="popup-item">
            <van-icon color="#fff" name="add-o" size="18" />
            添加用户
        </div>
    </div>
</TRpopup>
```

内部的这部分代码会替换到<slot></slot>中。
