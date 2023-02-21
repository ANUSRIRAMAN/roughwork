import React from 'react'
import { UserContext,XtraContext } from '../App'
function ComponentF() {
  return (
    <div>{
        <UserContext.Consumer>
            {
                user=>{
                    return (
                        <XtraContext.Consumer>
                           {
                            val =>{
                             return <div>this u cant {val} , this {user}</div>   
                            }
                           } 
                        </XtraContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
        }</div>
  )
}

export default ComponentF