---
title: css计数器
---

先来看一下这几个属性

### counter-reset 计数器重置

> 参数 1.计数器名称 2.计数器初始值
> 默认值为 0，必须为整数，可以为负值，若为非整数则默认为 0

### counter-increment 计数器-递增

> 参数 1.计数器名称
> 就是给那个计数器递增值 2.递增的幅度
> 默认值为 1，必须为整数，可以为负值

### counter

> 参数
> name:计数器名称（counter-reset 中设置的名称）
> list-style-type 计数样式，例如 lower-alpha 英文小写字母，lower-roman 小写罗马数字，upper-roman 大写罗马数字，默认为阿拉伯数字。[如果你不了解这些样式的话到这里查看吧](https://www.w3cschool.cn/cssref/pr-list-style-type.html)

-   counter 只能用在 content 中
-   content 只能用在 before 和 after 这些伪类里

```
.result::before{
    content:counter(veg);
}
```

举个例子

##### html

```
<div class="container">
    <div class="item">西红柿</div>
    <div class="item">黄瓜</div>
    <div class="item">菠菜</div>
    <div class="item">西葫芦</div>
    <div class="item">冬瓜</div>
    <div class="item">白菜</div>
    <div class="item">苦瓜</div>
    <div class="item">茄子</div>
    <br>您选择了
    <div class="result"></div>&nbsp;个
</div>

```

##### css

```
.container{
    padding: 50px;
    counter-reset: veg 0;
}
.item{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    border-radius: 10px;
    border:1px solid #666666;
    margin: auto;
    text-align: center;
    padding:0 20px;
    color: #666;
}
.item-active{
    counter-increment: veg 1;
    background-color:green;
    color: white;
    border-color: green;
}
.result{
    display: inline-block;
}
.result::before{
    content: counter(veg,upper-roman);
    color: red;
}
```

##### js

```
//这里的js只负责添加标记的class，具体统计数量由css实现
var $=function (tag) {
     return document.querySelectorAll(tag);
}
for(var i=0;i<$(".item").length;i++) {
     $(".item")[i].addEventListener('click', function () {
            this.classList.toggle('item-active');
     });
}
```

##### 效果

![运行效果](https://upload-images.jianshu.io/upload_images/9260635-95b8fc2f0a6ead4f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### counters 嵌套计数

##### html

```
<div class="reset">
    <div class="counter">第一部
        <div class="reset">
            <div class="counter">第一部第一章</div>
            <div class="counter">第一部第二章
                <div class="reset">
                    <div class="counter">第一部第二章第一节</div>
                    <div class="counter">第一部第二章第二节</div>
                    <div class="counter">第一部第二章第三节</div>
                </div>
            </div>
            <div class="counter">第一部第三章</div>
        </div>
    </div>
    <div class="counter">第二部
        <div class="reset">
            <div class="counter">第二部第一章第一节</div>
            <div class="counter">第二部第一章第二节</div>
            <div class="counter">第二部第一章第三节</div>
        </div>
    </div>
    <div class="counter">第三部
        <div class="reset">
            <div class="counter">第三部第一章</div>
        </div>
    </div>
</div>
```

##### css

```
.reset {
     padding-left: 30px;
     counter-reset: chapters;
     line-height: 2;
     color: #666;
 }
 .counter:before {
     content: counters(chapters, '-') '. ';
     counter-increment: chapters;
 }
```

##### 效果

![嵌套计数实现目录结构](https://upload-images.jianshu.io/upload_images/9260635-38ac80a77a8c82fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
