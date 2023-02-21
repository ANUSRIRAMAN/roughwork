import React,{useState,useEffect} from 'react'

function HookMouse() {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);
    const logMousePosition = e =>{
        console.log("mouseEVENt")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
       console.log("useEffect running successfully")
        window.addEventListener('mousemove',logMousePosition)
   
   
   return ()=>{
    alert("event lister off in 3 2 1")
    window.removeEventListener("mousemove",logMousePosition)
   }
    },[])
  return (
    <div>
hooks x -{x} y- {y}
    </div>
  )
}

export default HookMouse