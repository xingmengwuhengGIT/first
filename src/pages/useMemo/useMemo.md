## 含义
当在父组件定义了一个对象传递给子组件,当父组件更新时,对象也会重新创建,从而导致子组件的渲染,可以定义useMemo来防止重新渲染
```tsx
import {FC,useMemo,useState,memo} from "react";

export const MemoCom: FC = () => {
    const [count,setCount] = useState(0)
    const userInfo = {
        name: '小明',
        age: 18
    }
    const increase = () => {
        setCount(count +1)
    }
    return (
        <>
        <h3>parent组件</h3>
            <button onClick={increase}>单击次数: {count}</button>
            <Child userInfo={userInfo}/>
        </>
    )
}
interface IChild {
    userInfo: {
        name: string;
        age: number
    }
}
const Child: FC<IChild> = memo((props) => {
    console.log('child')
    const {userInfo} = props
    return (
        <>
        <h4>child组件</h4>
            <div>名字: {userInfo.name}</div>
            <div>年龄: {userInfo.age}</div>
        </>
    )
})
```
## 用法
使用useMemo包裹要传递的属性,只要依赖不变,就不会重新创建,如果不传依赖,useMemo 在每次渲染时都会计算新的值

```tsx
export const MemoCom: FC = () => {
    const [count,setCount] = useState(0)
    const userInfo = useMemo(() =>({
        name: '小明',
        age: 18
    }),[])
    const increase = () => {
        setCount(count +1)
    }
    return (
        <>
        <h3>parent组件</h3>
            <button onClick={increase}>单击次数: {count}</button>
            <Child userInfo={userInfo}/>
        </>
    )
}
```
