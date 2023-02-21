import React , {useState}from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count,setCount]=useState(initialCount)
const incrementFive =()=>{
    for(let i=0;i<5;i++){
        setCount(prevCount =>prevCount+1)
    }
}
  return (
    <div>
        count:{count}
        <button onClick={()=>setCount(count+1)}>+</button>
<button onClick={()=>setCount(count-1)}>-</button>
<button onClick={()=>setCount(initialCount)}>reset</button>
<button onClick={incrementFive}>+5</button>
    </div>
  )
}

export default HookCounterTwo