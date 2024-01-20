import { createContext } from "react";
import productData from "../data";


export const ShopContext = createContext()

const contextValue = {
    productData
}

const ShopContextProvider = (props) => {
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider