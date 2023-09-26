import {FC,useMemo,useState,memo} from "react";

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
