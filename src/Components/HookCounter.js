import React from 'react'
import { useState,useEffect } from 'react';

function HookCounter() {
const refresh = 0
    const[count,setCount]=useState(refresh)

useEffect(()=>{
  document.title=`you clicked ${count} times`
})
  return (
    <div>
        <div className = "counter">{count}</div>
        <button onClick={()=> setCount(count + 1)}>count</button>

    
        <button onClick={()=> setCount(count - 1)}>count</button>
        <button onClick={()=> setCount(refresh)}>delete</button>
    </div>
  )
}

export default HookCounter