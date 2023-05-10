import React from "react";
import { mockdata } from "@/data/mockdata";

const MockdataContext = React.createContext();

export function MockdataProvider(props){
    return(
        <MockdataContext.Provider value ={mockdata}>
            {props.children}
        </MockdataContext.Provider>
    )
}

export default MockdataContext