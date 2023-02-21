import React from 'react'
import { testContext } from './App'
function ComponentTest() {
  return (
    <div>{
        <testContext.Consumer>
            {
            ele=>{
                return <div> value{ele}</div>
            }
            
            }</testContext.Consumer>
        }</div>
  )
}

export default ComponentTest