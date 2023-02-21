import React , {useReducer}from 'react'

const initialState=0;
const reducer = (CurrentState,action)=>{
    switch(action){
        case 'increment':
        return CurrentState+1
        case 'decrement':
            return CurrentState-1
            case 'reset':
            return initialState
            default:
                return CurrentState
    }
    
}

function CounterOne() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <div>vount-{count}</div>
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne