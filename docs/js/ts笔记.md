---
title: ts笔记
---

## ts 类型

### ts 声明类型的方式

```ts
//声明一个数组，数组内的元素只能是字符串活着数字
//注意需要用括号包裹起来
let arr: (string | number)[] = ['me', 2]

let arr: string | number[]
//这样声明了arr可以是字符串和元素为数字的数组
```

### void 和 never

#### void 类型的变量，只能赋予 undefined 和 null

前提是"strictNullChecks": true 时
"strictNullChecks": false 时 只能赋值 undefined

##### 1.函数没写 return

##### 2.只写了 return， 没有具体的返回值

##### 3.return 的是 undefined 或 null

```ts
//void 不明确的返回类型
function run(): void {}
function run(): void {
    return
}
function run(): void {
    return undefined
}
```

#### never

never 表示永远不会有值的一种类型，任何类型都不能赋值给 never 类型的变量

```ts
function run(): never {
    throw new Error('类型错误')
}
//这个函数永远不会执行到头
```

### null 和 undefined

ts 中它两既是值也是类型，一般用在函数返回值

```ts
function test(): null | undefined | string {
  ...
}
function test(): void | string {
  ...
}
```

### 函数的类型声明

```ts
function add(a: number, b: number, c: number = 0.6) {
    return (a + b) * c
}

let add: (a: number, b: number) => number
add = (a, b) => a + b
```

### 剩余参数

```ts
function sum(...args: number[]): number {
    return args.reduce((s, n) => s + n, 0)
}

function mypush(arr: any[], ...args: any[]): any[] {
    arr.push(...args)
    return arr
}
```

### 元组

```ts
//限定每个下标位置的类型
let tuple: [string, number, boolean] = ['xian', 1989, true]
```

## 枚举

```ts
enum SexType {
    Boy,
    GIRL
}
```

## const 断言

## class

### class 实现单例模式

```ts
class Axios {
    private static instance: Axios | null = null
    private constructor(url: string) {
        console.log('创建Axios对象')
    }
    static make() {
        if (Axios.instance == null) {
            Axios.instance = new Axios('https:iwangxing.cn')
        }
        return Axios.instance
    }
}
```
