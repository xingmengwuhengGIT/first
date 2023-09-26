## react和redux是独立的库,可以单独使用,
简单使用
### 1 定义store

```ts
import {createStore} from 'redux';
interface IAction {
    type: string
}

function counterReducer(state = {value: 0}, action:IAction) { // reducer
    switch (action.type){
        case 'counter/increment':
            return {value:state.value +1}
        case 'counter/decrement':
            return {value: state.value -1}
        default:
            return state
    }
}
let store = createStore(counterReducer)

export default store
```
### 页面引入使用
```tsx
import React, {FunctionComponent,useEffect,useState} from "react";
import store from "../../store";

const Home: FunctionComponent = () => {
    const [state,setState] = useState({num: store.getState().value})
    useEffect(() => {
        store.subscribe(() => {
            setState({num: store.getState().value})
        })
    },[])
    const handleClick = () => {
        store.dispatch({type: 'counter/increment'})
    }
    return <div>
        <h4>{state.num}</h4>
        <button onClick={handleClick}>increment Store state</button>
    </div>
}
```

## Redux Toolkit使用
Redux Toolkit是专用于react的react插件
### 1,创建reducer
store/counter/index.ts

```ts
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}
const initialState: CounterState = {
    value: 0
}

export const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {state.value += 1},
        decrement: state => {state.value -= 1},
        incrementByAmount: (state,action: PayloadAction<number>) =>{
            state.value += action.payload
        }
    }
})
export const {increment,decrement,incrementByAmount}  = countSlice.actions
export default countSlice.reducer
```
创建一个store片需要提供name: string,initialState:any,和多个reducer函数,createSlice返回slice对象,类型如下
```ts
export interface Slice<
    State = any,
    CaseReducers extends SliceCaseReducers<State> = SliceCaseReducers<State>,
    Name extends string = string
    > {
    /**
     * The slice name.
     */
    name: Name

    /**
     * The slice's reducer.
     */
    reducer: Reducer<State>

    /**
     * Action creators for the types of actions that are handled by the slice
     * reducer.
     */
    actions: CaseReducerActions<CaseReducers, Name>

    /**
     * The individual case reducer functions that were passed in the `reducers` parameter.
     * This enables reuse and testing if they were defined inline when calling `createSlice`.
     */
    caseReducers: SliceDefinedCaseReducers<CaseReducers>

    /**
     * Provides access to the initial state value given to the slice.
     * If a lazy state initializer was provided, it will be called and a fresh value returned.
     */
    getInitialState: () => State
}
```

### 2,创建store
使用configureStore的api创建store对象,需要提供reducer
```ts
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "./counter";
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

store对象类型如下
```ts
export interface Store<S = any, A extends Action = AnyAction> {

  dispatch: Dispatch<A>
  /**
   * @returns The current state tree of your application.
   */
  getState(): S
  /**
   * @param listener A callback to be invoked on every dispatch.
   * @returns A function to remove this change listener.
   */
  subscribe(listener: () => void): Unsubscribe
  /**
   * @param nextReducer The reducer for the store to use instead.
   */
  replaceReducer(nextReducer: Reducer<S, A>): void
}
```
### 3,注册store
store全局注册,
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageRouters from "./routes";
import {BrowserRouter} from 'react-router-dom'
import {store} from "./store";
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <PageRouters />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
```
### 4,组件内使用
useSelector返回store中指定属性值,useDispatch返回dispatch方法,useStore返回store对象
```tsx
import {FC,useEffect} from 'react'
import { type RootState } from '../../store'
import {useSelector,useDispatch,useStore} from "react-redux";
import {increment,decrement} from "../../store/counter";

export const StoreCom: FC = () => {
    let store = useStore()
    let count = useSelector((state:RootState) => state.counter.value)
    let dispatch = useDispatch()
    useEffect(() => {
        console.log(store.getState()) // {"counter": {"value": 0}}
    },[])
    return (
        <div>
            <h3>store component</h3>
            <div>当前状态: {count}</div>
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
```
