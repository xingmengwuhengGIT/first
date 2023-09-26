import {FC,useState,memo,useCallback} from "react";

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
interface ICallbackChildProps {
    className?: string;
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
