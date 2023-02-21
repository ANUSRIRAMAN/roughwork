import React, { useState } from 'react'



function RealCounter() {
    const [initial,setInitial]= useState(0)
  return (
    <div>
<div>this is current{initial}</div>
<button onClick={()=>setInitial(initial+1)}>+</button>
<button onClick={()=>setInitial(initial-1)}>-</button>
<button onClick={()=>setInitial(0)}>reset</button>

    </div>
  )

 
}

export default RealCounter