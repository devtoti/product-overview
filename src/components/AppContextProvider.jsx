import React, {createContext, useState} from 'react'
import Card from './Card';

export const ReferenceDataContext = createContext(null)

export default function ReferenceDataContextProvider({ children }) {
    const [currComponent, setCurrComponent] = useState(<Card />)
    return (
      <ReferenceDataContext.Provider value={{ currComponent, setCurrComponent }}>
        {children}
      </ReferenceDataContext.Provider>
    );
  };
