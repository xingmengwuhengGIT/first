import {combineReducers} from "redux";
import stu from './slice/stuSlice'
import counter from "./counter";

const rootReducer = combineReducers({
    stu: stu,
    counter
})

// export type RootState = ReturnType<typeof rootReducer>
export type RootState = {
    stu: typeof stu,
    counter: typeof counter
}
export default rootReducer
