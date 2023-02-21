import React,{useContext} from 'react'
import ComponentE from './ComponentE'
import { UserContext,XtraContext } from '../App'
function ComponentG() {
 const user=useContext(UserContext)
 const channel=useContext(XtraContext)
  return (
    <div>
       haa {user}- voo{channel}
    </div>
  )
}

export default ComponentG