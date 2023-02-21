import React from 'react'
import { XtraContext } from '../App'
function ComponentE() {
  return (
    <div>{
<XtraContext.Consumer>
    {
        ele=>{
            return <div>value{ele}</div>
        }
    }
</XtraContext.Consumer>
        }</div>
  )
}

export default ComponentE