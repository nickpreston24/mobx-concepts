import React from 'react'
import storeSelector from '../stores'

export const StoreContext = React.createContext();

/** Goal: 
 * Use this provider as a means of IOC/DI
 * Injects: 
 *  fetchStore('mystore') : Store
 */
const StoreProvider = (props) => {
    return (
        <StoreContext.Provider value={{ storeSelector }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreProvider