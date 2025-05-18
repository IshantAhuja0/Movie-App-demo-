import React, { useState } from 'react'
import MovieContext from './MovieContext'
export default function UserContextProvider({children}) {
  const [user,setUser]=useState()
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}
