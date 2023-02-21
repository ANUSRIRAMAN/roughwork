// import React, { useEffect } from 'react'
// import { useState } from 'react'

// function Demo() {

// const [state,setState]=useState([])
// useEffect(()=>{
//     async function foo(){
//         const res= await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//         const result =await res.json()
//         console.log(result)
//         setState(result)

//     }foo()
// },[])
//   return (
//     <div>
//      <table>
//         <tr>
//             <th>
//                 name
//             </th>
//             <th>
//                 region
//             </th>
//         </tr>
//         {state.map((item)=>{
//             return(
//                 <tr>
//                     <td>
//                         {item.name}
//                     </td>
//                     <td>
//                         {item.region}
//                     </td>
//                 </tr>
//             )
//         })}
//         </table>   
//     </div>
//   )
// }

// export default Demo


import React, { useEffect } from 'react'
import { useState,useEff } from 'react'
function Demo() {
const [state,setState]=useState([])
useEffect(()=>{
    async function foo(){
        const res =await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
        const result = await res.json()
        console.log(result)
        setState(result)

    }foo()
},[])

return(
    <>
    <div>
        <table>
            <tr>
                <th>
                    name
                </th>
                <th>
                    country
                </th>
                <th>
                    country code
                </th>

            </tr>
            {state.map((i)=>{
                return(
                    <tr>
                        <th>
                            {i.name}
                        </th>
                        <th>
                            {i.capital}
                        </th>
                        <th>
                            {}
                        </th>
                    </tr>
                )
            })}
        </table>
    </div>
    </>
)





  return(
    <div>Demo</div>
  )
}

export default Demo