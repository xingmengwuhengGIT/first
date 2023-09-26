## useCallback含义
当父组件数据发生变化重新渲染时,父组件内定义的函数也会重新构建,如果函数通过prop形式传给了子组件,那么也会触发子组件的重新渲染
```tsx
import {FC,useState,memo,useCallback} from "react";

export const CallbackCom:FC = () => {
    const [parentState,setParentState] = useState(0);  //父组件的state
    const handleClick = () => {
        console.log('rerender')
    }
    return (
        <>
            <button onClick={() => setParentState((val) => val +1 )}>change</button>
            <CallbackChild fun={handleClick} />
        </>
    )
}
interface ICallbackChildProps {
    fun?: () => void
}
const CallbackChild: FC<ICallbackChildProps> = memo(() => {
    console.log('child')
    return (
        <>
            <h4>childCom</h4>
        </>
    )
})
```
## s使用
当使用useCallback包裹父组件中定义的函数,只要依赖没有变化,就不会重新构建函数,也就不会触发prop为函数的子组件的重新渲染
```tsx
export const CallbackCom:FC = () => {

    const [parentState,setParentState] = useState(0);  //父组件的state
    const handleClick = useCallback(() => {
        console.log('rerender')
    },[])
    return (
        <>
            <button onClick={() => setParentState((val) => val +1 )}>change</button>
            <CallbackChild fun={handleClick} className="abc"></CallbackChild>
        </>
    )
}
```
