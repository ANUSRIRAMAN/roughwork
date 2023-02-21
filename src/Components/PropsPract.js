import React from 'react'
import ReactDOM from "react-dom";
import PropParent from "../App"
const PropsPract = (props)=> {
  return (
    <div>
        <p>
            {props.name}
            {props.age}
           {console.log(props.name)} 
        </p>
      
    </div>
    
  )
}

// const PropParent = ()=>{
//     return(
//         <div>
//             <child name="mary" age="45"/>
//             <child name="jain" age="35"/>
//         </div>
//     )
// }

export default PropsPract
// export  default PropsPract