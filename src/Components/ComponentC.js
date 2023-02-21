import React from 'react'
import { SomeContext, UserContext } from '../App'
function ComponentC() {
  return (
    <div>{
        <SomeContext.Consumer>
            {
            user=>{
                return <div>this is {user}</div>
            }
            }

        </SomeContext.Consumer>
}</div>
  )
}

export default ComponentC