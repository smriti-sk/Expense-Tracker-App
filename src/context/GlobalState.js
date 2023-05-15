import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer"

//Initaial state
const initialState = {
    transactions: [
        {id:1, text:"flowers", amount: -20},
        {id:2, text:"salary", amount : 300},
        {id:3, text:"book", amount : 35},
        {id:4, text:"food", amount : -30}
    ]
}

//create context (global)
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); 

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}