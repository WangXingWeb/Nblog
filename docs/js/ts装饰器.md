---
title: ts装饰器
---

## class 装饰器

```ts
const moveDecortator: ClassDecorator = (target: Function) => {
    target.prototype.getPostion = (): { x: number; y: number } => {
        return {
            x: 1,
            y: 2
        }
    }
}

@moveDecortator
class Tank {}
new tank() = new Tank()
tank.getPostion()
```

装饰器是个语法糖，相当于

```ts
class Tank {}
moveDecortator(Tank)
new tank() = new Tank()
tank.getPostion()
```

## 装饰器工厂

装饰器工厂是一个 function，返回一个装饰器方法

```ts
const MusicDecortatorFactory = (type: string): ClassDecorator => {
    switch (type) {
        case 'tank':
            return (target: Function) => {
                target.prototype.playMusic = (): void => {
                    console.log(`play ${type} music`)
                }
            }
        default:
            return (target: Function) => {
                target.prototype.playMusic = (): void => {
                    console.log(`play ${type} music`)
                }
            }
    }
}

@MusicDecortatorFactory('tank')
class Tank {}
new tank() = new Tank()
tank.playMusic()
```

## 函数装饰器

```ts
const showDecortaor: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    descriptor.value = () => {
        console.log('showDecortaor Method')
    }
}

class User {
    @showDecortaor
    public show() {
        console.log('show Method')
    }
}

let user = new User()
user.show()
```

## 属性装饰器

```ts
const PropDecortator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
    let value: string
    Object.defineProperty(target, propertyKey, {
        get: () => {
            return value.toLocaleLowerCase()
        },
        set: (val) => {
            value = val
        }
    })
}

const ParamsDecortator: ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => {}

class Person {
    @PropDecortator
    public name: string | undefined
    public show(id: number = 1, @ParamsDecortator content: string) {}
}

const jack = new Person()
jack.name = 'Jack'
console.log(jack.name, 'name')
```
