// import React,{useState,useEffect} from 'react'

// function HookEffectOne() {
//     const [count,setCounter]= useState(0)
// useEffect(()=>{
//   document.title=`clicked ${count}times`
//   // alert(`clicked ${count}times`)
// })
//   return (
//     <div>
//         <button onClick={()=>setCounter(count+1)}>{count}</button>
//     </div>
//   )
// }

// export default HookEffectOne


// import React ,{useState,useEffect}from 'react'

// function HookEffectOne() {
// const [count,setCount]=useState(0)
// useEffect(()=>{
//   document.title=`clickes ${count} times`
// })
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>+{count}</button>
//     </div>
//   )
// }

// export default HookEffectOne


import React ,{useState,useEffect}from 'react'

function HookEffectOne() {
const [count,setCount]=useState(0)
const [name,setName]=useState("")

useEffect(()=>{
  alert("updating docu title")
  document.title=`clickes ${count} times`
},[count])
  return (
    <div>
      <input type="text" value={name} 
      onChange={e=>setName(e.target.value)}></input>
      <button onClick={()=>setCount(count+1)}>+{count}</button>
    </div>
  )
}

export default HookEffectOne