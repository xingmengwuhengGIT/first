
import {FC,useEffect} from 'react'
import { type RootState } from '../../store'
import {useSelector,useDispatch,useStore} from "react-redux";
import {increment,decrement,CounterState } from "../../store/counter";
import {stuStatus,changeName} from "../../store/slice/stuSlice";

export const StoreCom: FC = () => {
    let store = useStore()
    let dispatch = useDispatch()
    const stu = useSelector<RootState,stuStatus>(state => state.stu)
    const count = useSelector<RootState,CounterState>(state => state.counter)
    useEffect(() => {
        console.log(store.getState())
    },[])
    return (
        <div>
            <h3>store component</h3>
            <div>{stu.name}</div>
            <div>{count.value}</div>
            <div>
                <button onClick={() => {
                    dispatch(changeName('abc'))
                    console.log(stu)
                }}>change name</button>
            </div>
            <div>
                <button onClick={() => dispatch(increment())}>increment count</button>
            </div>
            <div>
                <button onClick={() => dispatch(decrement())}>decrement count</button>
            </div>
        </div>
    )
}
export default StoreCom
