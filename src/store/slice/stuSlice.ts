import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {myApi} from "../action";

export interface stuStatus {
    id: number;
    name: string;
    classes: string []
}
const initialState: stuStatus = {
    id: 1,
    name: '老王',
    classes: []
}
export const stuSlice = createSlice({
    name: 'goodjob',
    initialState,
    reducers: {
        changeName:(state,action: PayloadAction<string>) => {
            console.log(state,action)
            state.name = action.payload
            // state = {...state,name: action.payload }
        },
        changeId:(state,action: PayloadAction<number>) =>{
            state.id = action.payload
        }
    },
    /*
    我们在extraReducers中放入的是异步的方法，我们在action中声明的TT方法可以在此处使用
    在此处我们可以监听创建好的异步action，此处有三个取值是比较常用的
   		1、fulfilled 成功之后需要做的操作
  		2、pending 加载时需要做的操作
  		3、rejected失败后需要做什么处理
     */
    extraReducers: builder => {
        builder.addCase(myApi.fulfilled,(state:stuStatus,{payload}:PayloadAction<number>) => {
            state.id = payload
        })
    }
})
export const {changeId,changeName}  = stuSlice.actions;
export const student = (state: RootState) => state.stu;
export default stuSlice.reducer;
