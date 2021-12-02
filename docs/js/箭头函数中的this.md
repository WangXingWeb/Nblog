---
title: 箭头函数中的this
---

箭头函数看起来像一个匿名函数，但是也有一点和匿名函数很不哟样，就是箭头函数中的 this 并不指向函数的调用者，而是指向函数外部的 this。

<!-- more -->

```javascript
onload = function () {
    var btn = document.getElementById('btn')

    btn.onclick = function () {
        this.style.backgroundColor = 'red'
    }
}
```

现在我们把绑定的函数换成箭头函数

```javascript
onload = function () {
    var btn = document.getElementById('btn')

    btn.onclick = () => {
        this.style.backgroundColor = 'red'
    }
}
```

你会发现报错了。this 指向出错了。
这里的 this 其实是箭头函数外部的 this 了，也就是 window

再比如我们的需求是点击后一秒在变红

```javascript
onload = function () {
    var btn = document.getElementById('btn')

    btn.onclick = function () {
        setTimeout(function () {
            this.style.backgroundColor = 'red'
        }, 1000)
    }
}
```

上面的代码又会报 this 指向的错误。
因为 setTimeout 的 this 是指向 window 的。
这是我们 setTimeout 中的方法换成箭头函数

```javascript
onload = function () {
    var btn = document.getElementById('btn')

    btn.onclick = function () {
        setTimeout(() => {
            this.style.backgroundColor = 'red'
        }, 1000)
    }
}
```

这里却实现了我们的效果了。
因为这里的 this 是箭头函数外部的 this，也就是 btn 所以 this 指向正确了。
