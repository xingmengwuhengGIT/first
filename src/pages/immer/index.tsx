import {FC,useState,useEffect} from "react";
import produce from "immer";

export const ImmerCom: FC = () => {
    const obj = {name: '小明',age: 18}
    const [state,setState] = useState(obj)
    const handleClick = () => {
        const newState = produce(state,(draft) => {
            draft.name = '小红'
        })
        setState(newState)
    }
    useEffect(() => {
            console.log(obj)
            console.log(state)
    },[state])

    return (
        <>
        <h3>Immer com</h3>
            <div>名称: {state.name}</div>
            <button onClick={() => handleClick()}>按钮</button>
        </>
    )
}
