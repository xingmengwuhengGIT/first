//这个文件维护redux的异步操作
import { applyMiddleware, createAsyncThunk } from '@reduxjs/toolkit'
const asyncFunction  = ():Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
           return resolve(8)
        },1000)
    })
}
export const myApi = createAsyncThunk('student',():Promise<number> =>{
    return asyncFunction()
} )
