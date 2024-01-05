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

## 断言

```ts
//断言的另一种方式
let ddb: any = 'dddddddddddd'
console.log((<String>ddb).length)
```

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

### 数组解构

```ts
const [, , thrid] = [1, 2, 3]
const [first, ...set] = ['name', 'sex', 'age']
console.log(thrid, set, 'thrid')
```

### 对象结构

```ts
const obj = {
    a: 'aa',
    b: 'bb',
    c: 'cc'
}

const { a, ...b } = obj
console.log(a, b)
//b {b:"bb",c:"cc"}

//属性重命名
const { a: newNameA, b: newNameB } = obj
console.log(newNameA, newNameB, 'new')

//函数参数的结构
type C = { a: string; b?: number }
function f({ a, b }: C): void {
    console.log(a, b)
}
f({ a: 'ddd', b: 3 })
```

### 接口

```ts
interface Point {
    readonly x: number
    readonly y: number
}
let p1: Point = { x: 10, y: 20 }
p1.x = 5 // error!
```

```ts
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 12 // error!
ro.push(5) // error!
ro.length = 100 // error!
a = ro // error!
```

```ts
//允许随意新增string类型的key，value为any
interface SquareConfig {
    color?: string
    width?: number
    [propName: string]: any
}
```

```ts
//函数类型接口
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (src, sub) {
    let result = src.search(sub)
    return result > -1
}
```

### 泛型

```ts
//泛型
function func<T>(arg: T): T {
    return arg
}
func<number>(11)
```

```ts
//泛型中的继承
function func<T extends { length: number }>(arg: T): number {
    return arg.length
}
console.log(func(['a', 'b']))
```

```ts
//class中使用泛型
class Collection<T> {
    data: T[] = []
    public push(...items: T[]) {
        this.data.push(...items)
    }
    public shift(): T | undefined {
        return this.data.shift()
    }
}
let collectionNumber = new Collection<number>()
collectionNumber.push(1, 2)
type User = {
    age: number
    name: string
}
let user1: User = { age: 12, name: 'xingzai' }
let user2: User = { age: 23, name: 'libin' }
let collectionUser = new Collection<User>()
collectionUser.push(user1, user2)
```
