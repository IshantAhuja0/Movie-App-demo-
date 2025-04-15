import React from 'react'
import Movies from './Movies'
import SearchBar from '../other comps/SearchBar'
export default function MoviePage(props) {
  

  return (
    <div style={{background:" linear-gradient(135deg,rgba(18,18,18,0.9),rgba(202, 202, 202, 0.8)"}}>
            <SearchBar/>
            <Movies/>
    </div>
  )
}
