---
title: css中常见的单位
---

### px

-   这个就不多说了，`CSS`中最为常用的一种单位，传统上一个像素对应计算机屏幕上的一个点。

### 百分比%

-   子元素相对父容器的占比
-   设置子元素的`font-size`为 50%，那么子元素的`font-size`等于父容器的`font-size*50%`。

### em

-   `em`是一个相对单位
-   1em 等于该元素设置的字体大小
    这里有一个很常见的误区，很多人说 1em 等于其父元素的字体大小，其实这是不对的，在该元素没有设置字体大小的时候，该元素的字体大小继承了其父元素的字体大小，所以这时该元素上 1em 等于其父元素的字体大小。但是如果该元素自己设置了字体大小且不等于其父元素的字体大小，那么该元素上 1em 就等于该元素自己的字体大小而于其父元素的字体大小无关。
    例如下边这段代码，box2 自己设定了 font-size：15px；而 box1 没有设定 font-size，所以 box 的 font-size 继承了其父元素的 font-size 等于 20px。造成的结果是 box1 中 1em 等于 20px；box2 中 1em 等于 15px，所以 box2 的宽度会小于 box1 的宽度。

```
<div style="font-size:20px;">
    <div style="width: 5em;background-color: blueviolet">box1</div>
    <div style="font-size: 15px;width: 5em;background-color: blue">box2</div>
</div>
```

![屏幕快照 2018-11-07 下午10.45.00.png](https://upload-images.jianshu.io/upload_images/9260635-a04e784af6cd5a73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

-   为什么使用`em`，或者说`em`相较于`px`的好处

1.  用户可以设置字体大小

-   如果使用`em`为单位，用户在浏览器中设置字号大小，我们的页面字体和用 em 作为单位设定的属性也会相应的改变（例如设定`width:5em;`用户修改浏览器字号后该元素的宽度也会变化），使用`px`则没有任何改变（很多国外的网站是这样做的，国内这样做的很少）。

2.  修改方便快捷

-   修改父容器的字体大小子元素的字体大小都会跟着改变，这一点是`px`无法做到的
-   举一个例子可能更好理解，比如我们写一片文章的样式，有标题，二级标题，大纲，文本，现在要整体将字体放大，我们只需要修改`html`或者`body`的`font-size`就可以了,如果使用`px`作单位就需要每一处分别修改了。

### rem

-   `rem`是对`em`的改进，这里我们先讲一下`em`的一个很烦人的缺陷，就是遇到嵌套很深的结构，我们就不容易立刻知道每个子元素的`1em`等于多个`px`了，比如下面这个例子：

```css
.outer {
    font-size: 2em;
}
.inner,
.text {
    font-size: 0.75em;
}
```

```html
<div class="outer">
    <div class="articl-title">测试一下，你就知道的点点滴滴多多多多多</div>
    <div id="inner" class="inner">
        <a href="">css中的常见单位</a>
        <p class="text">em和rem有哪些不同</p>
    </div>
</div>
```

-   `.outer`的`font-size`为`2em`，我们没有给它以上的父容器设置`font-size`，所以它的`font-size`为`16px*2=32px`，但是我们想知道`.text`的`font-size`就比较复杂了`16px*2*0.75*0.75=18px`。
-   如何解决这问题呢？这里 css3 引入了 `rem`的概念，与`em`非常相似，最重要的不同是，不论在那一级元素上 1 个`rem`都等于跟元素`html`的`font-size`，这样不仅具有`em`的优点，还不会造成混乱，不论`html`结构嵌套多复杂我们都能轻松换算出当前元素的`font-size`对应多少个 px。

```
<div style="font-size: 1.5rem; width: 5rem;background-color: #797979;">1.5rem;</div>
```

```
html{
        font-size: 20px;
 }
```

-   上面这段代码中，即使我们给当前元素设定了`font-size:1.5rem;`但不影响我们`width:5rem`的计算，当前元素的宽度还是以`1rem=20px;`计算`20*5=100px;`
-   这里有一点建议,给`<html>`根元素添加如下的样式：

```css
html {
    font-size: 62.5%;
}
```

-   这样一来根元素`<html>`的`font-size`就变成`16px*62.5%=10px`,也就是 `1rem=10px`。这样方便我们计算（与设计稿对照）

### vw 和 vh

| 名称 |            解释            |
| :--: | :------------------------: |
|  vw  |    1vw = 视口宽度的 1%     |
|  vh  |    1vw = 视口高度的 1%     |
| vmin | 选取 vw 和 vh 中最小的那个 |
| vmax | 选取 vw 和 vh 中最大的那个 |

-   这里解释一下视口
    这里视口的宽度和高度不是指屏幕的高宽，更不是浏览器的高宽，而是浏览器内部的可视区域大小，即`window.innerWidth/window.innerHeight`
-   目前使用的场景并不多，因为使用百分比也可以实现相同的效果，我个人在制作幻灯片效果时，会选择使用`vw,vh`,比较方便。

---

先写这些有时间再更
