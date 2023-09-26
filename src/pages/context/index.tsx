import {FC,memo,useState,useContext,createContext,useEffect} from "react";
const ThemeContext = createContext('red')
export const Context: FC = () => {

    return (
        <>
            <h3>Context组件</h3>
                <ThemeContext.Provider value={'dark'}>
                    <Children1 />
                </ThemeContext.Provider>
        </>
    )
}
const  Children1:FC= () => {
  return (
      <>
        <h4>children1组件</h4>
        <Children2 />
      </>
  )
}
const Children2: FC = () => {
    const value = useContext(ThemeContext)
    useEffect(() => {
        console.log(value)
    },[])
    return (
        <>
            <h4>children2组件</h4>

        </>
    )
}

