import React, { createContext } from 'react'
import all_product from "../components/assests/all_product";

export const ShopContext = createContext(null);

const ContextProvider = (props) => { 

const ContextValue = {all_product} ;
    return (
        <ShopContext.Provider value = {ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ContextProvider;