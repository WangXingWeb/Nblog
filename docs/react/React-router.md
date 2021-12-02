---
title: React-router
---

依赖 react-router-dom
先看基础 app.jsx 的代码

```javascript
import React from 'react'
import { HashRouter, Link, Route } from 'react-router-dom'

import Home from '@/components/Home'
import Movies from '@/components/Movies'
import About from '@/components/About'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <Link to="/home">首页</Link>&nbsp;
                        <Link to="/movies">电影</Link>&nbsp;
                        <Link to="/about">关于</Link>
                    </div>
                    <div>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/movies">
                            <Movies></Movies>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                    </div>
                </div>
            </HashRouter>
        )
    }
}
```

上面你是最基础的 react-router 案例

-   所有 Link 和 Route 必须包裹在<HasRouter>标签内部
-   Link 标签类似与 vue-router 中的 router-link
-   Route 标签类似 vue-router 中的 router-view
-   如果 Route 中是一个指定的组件也可以这样写

```javascript
<Route path="/home" component={Home}></Route>
```

-   路由默认是模糊匹配的，可以给 Route 设置 exact 设定为精确匹配
-   路由中`:`表示匹配的是参数

```html
<HashRouter>
    <div>
    <div>
        <Link to="/home">首页</Link>&nbsp;
        <Link to="/movies/top250">电影</Link>&nbsp;
        <Link to="/about">关于</Link>
    </div>
    <div>
        <Route path="/home" component={Home}></Route>
        <Route path="/movies/:type" component={Movies} exact></Route>
        <Route path="/about" component={About}></Route>
    </div>
    </div>
</HashRouter>
```

在 Movies 中可以通过 this.props.match.params.type 拿到这个参数也就是'top250'
