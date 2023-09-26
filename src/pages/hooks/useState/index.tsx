import {FC, useState} from "react";

export const Counter:FC = () => {
    const [age,setAge] = useState(42)
    // 使用直接更新
   // const increment = () => {
   //      setAge(age + 1)
   //     console.log(age)
   // }
    // 使用函数更新
   const increment = () => {
        setAge((a) => a + 1)
       console.log(age)
   }
   return <>
       <h1>Your age: {age}</h1>
       <button onClick={() => {increment();increment();increment()}}>+3</button>
   </>
}
