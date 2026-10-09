import { createContext, useState } from "react";


export const MemberContext = createContext(null);


export function MemberProvider({ children }){

    const [ member, setMember ] = useState(null); 

    return(
        <MemberContext.Provider value={{ member,setMember }}>
            {children}
        </MemberContext.Provider>
    )
}