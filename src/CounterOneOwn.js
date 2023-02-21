import React, { useReducer } from 'react'
const initialState=0
const reducer=(CurrentValue,action)=>{
    switch(action){
        case 'increment' :
            return CurrentValue+1
            case 'decrement' :
                return CurrentValue-1
                case 'reset' :
                    return initialState
    }
}

function CounterOneOwn() {
    const [count,Dispatch]= useReducer(reducer,initialState)
  return (
    <div>
        <div>count _ {count}</div>
        <button onClick={()=>Dispatch('increment')}>+</button>
        <button onClick={()=>Dispatch('decrement')}>-</button>
        <button onClick={()=>Dispatch('reset')}>x</button>
    </div>
  )
}

export default CounterOneOwn