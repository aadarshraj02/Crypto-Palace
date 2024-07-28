import { createContext } from "react";

export const CoinContext = createContext;

const CoinContextProvider = (props)=>{
    return (
        <CoinContextProvider value={}>
            {props.children}
        </CoinContextProvider>
    )
}