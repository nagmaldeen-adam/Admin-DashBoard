import { createContext, useReducer } from "react"
import DarkModeReducer from "./contextReducer"

const Initail_State = {
    darkMode:false
}

export const DarkModeContext = createContext(Initail_State)


export const DarkModeContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(DarkModeReducer,Initail_State);
    return (
        <DarkModeContext.Provider value={{darkMode:state.darkMode,dispatch}}>{children}</DarkModeContext.Provider>
    )
}