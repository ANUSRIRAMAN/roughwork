import axios from 'axios';
import React from 'react'
import "./App.css"
import {useState,useEffect} from "react"
const App = () => {
const[state,setState]=useState([]);
const[formData,setFormData]=useState({
  name:"",
  email:"",
  phone:"",
  id:""
})
useEffect(()=>{
const data=async()=>{
const res=await axios.get("https://63282709a2e90dab7bd970f7.mockapi.io/teachers")
console.log(res.data)
setState(res.data)
}
data()
},[])
const handleEdit=async(id)=>{
  const selectedData=state.filter((item)=>item.id===id)[0]
  console.log(selectedData)
setFormData({...formData,name:selectedData.name,email:selectedData.email,phone:selectedData.phone,id:selectedData.id})
  
}
const handleSubmit=async(e)=>{
  e.preventDefault()
  if(formData.id){
const editedData=await axios.put(`https://63282709a2e90dab7bd970f7.mockapi.io/teachers/${formData.id}`,{
  ...formData
})
console.log(editedData.data)
let users=[...state]
let index=state.findIndex((item)=>item.id===editedData.data.id)
users[index]=editedData.data
setState(users)
setFormData({
  name:"",
  email:"",
  phone:"",
  id:""
})
alert("edited successfully")
  }else{
    const postingData=await axios.post("https://63282709a2e90dab7bd970f7.mockapi.io/teachers",{
      ...formData
    })
    setState([...state,postingData.data])
    console.log(formData)
    setFormData({ 
       name:"",
    email:"",
    phone:"",
    id:""})
  }

}
const handleDelete=async(id)=>{
const deletedData=await axios.delete(`https://63282709a2e90dab7bd970f7.mockapi.io/teachers/${id}`)
const user=state.filter((item)=>item.id!==deletedData.data.id)
setState(user)
alert("deleted successfully")
}
  return (
   <>
<div className='form'>
<h1>Form</h1>
   <form onSubmit={handleSubmit} className="dataa">
    <label>name</label><br></br>
    <input type="text" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} placeholder="name"></input><br></br>
    <label>email</label><br></br>
    <input type="email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}></input><br></br>
    <label>phone</label><br></br>
    <input type="number" value={formData.phone} onChange={(e)=>setFormData({...formData,phone:e.target.value})}></input><br></br>
    <button>submit</button>
   
   </form>

</div>
  
   <div>
    <table>
      <tr>
      <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>phone</th>
        <th>action</th>
      </tr>
{state.map((item)=>{
  return(
<tr>
<td>{item.id}</td>
  <td>{item.name}</td>
  <td>{item.email}</td>
  <td>{item.phone}</td>
  <td><button onClick={()=>handleEdit(item.id)} style={{backgroundColor:"white",borderRadius:"1px"}}>edit</button>&nbsp;<button onClick={()=>handleDelete(item.id)}>delete</button></td>

</tr>
  )

})}
    </table>
   </div>
   </>
  )
}

export default App