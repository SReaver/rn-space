import React, { createContext, useState, FC } from "react";
import { ISpace, ISpaceContext } from '../interfaces'

export const SpaceContext = createContext<Partial<ISpaceContext>>({});
export const SpaceProvider: FC  = ({children}) => {
    const [space, setSpace] = useState<ISpace>();
    return (
        <SpaceContext.Provider value={{space, setSpace}}>
            {children}
        </SpaceContext.Provider>
    )
}