
import React, { useState,useCallback } from 'react';
import Child from './Child';
function App() {
const [data,setData]=useState(0)
const [count,setCount]=useState(0)

  const handleClick =useCallback(() => {
    console.log("Child called this function");
   
  },[]); // dependencies go here
  return (
  <div>
    <h1>data is {data}</h1>
      <h1>count is {count}</h1>
      
      <Child marks={count} handleClick={handleClick} />
    <button onClick={()=>setData(data+1)}>data increment</button>
     <button onClick={()=>setCount(count+1)}>count increment</button>
  </div>
  );
}

export default App;

