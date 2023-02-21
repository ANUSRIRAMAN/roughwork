import React, { useEffect, useState } from 'react'

function DemoOne() {

const[state,setState]=useState([])
useEffect(()=>{
async function foo(){
    const res  = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    const result = await res.json()
    console.log(result)
    setState(result)
}foo()
},[])

  return (
    <div>
        <table>
            <tr>
                <th>
                    name
                </th>
                <th>
                    capital
                </th>
            </tr>
            {state.map((i)=>{
            return(
                <tr>
                    <th>{i.name}</th>
                    <th>{i.capital}</th>
                </tr>
            )
             }
              )
            }
        </table>
    </div>
  )
}

export default DemoOne