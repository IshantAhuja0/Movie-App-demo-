import React, { useState } from 'react'
import MovieContext from './MovieContext'
export default function UserContextProvider({children}) {
  const [movies,setmovies]=useState([])
  return (
    <MovieContext.Provider value={{user,setUser}}>
      {children}
    </MovieContext.Provider>
  )
}
