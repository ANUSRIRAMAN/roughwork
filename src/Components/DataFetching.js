// import React ,{useState,useEffect}from 'react'
// import axios from 'axios'
// function DataFetching() {
//     const[posts,setPosts] = useState([])
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(res=>{
//             console.log(res)
//             setPosts(res.data)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     },[])
//   return (
//     <div>
// <ol>
//     {
//         posts.map(post=>(
//             <li key={post.id}>{post.title}</li>
//         ))
//     }
// </ol>
//     </div>
//   )
// }

// export default DataFetching


// import React ,{useState,useEffect}from 'react'
// import axios from 'axios'
// function DataFetching() {
//     const[posts,setPosts]=useState([])
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(res=>{
//             console.log(res)
//             setPosts(res.data)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     },[])
//   return (
//     <div>

//     <ol>
//         {
// posts.map(post=>(
//     <li key={post.id}>{post.title}</li>
// ))
//         }
//     </ol>


//     </div>
//   )
// }

// export default DataFetching;
// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// function DataFetching() {
//     const[posts,setPosts]=useState([])
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(res=>{
//             console.log(res)
//             setPosts(res.data)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     },[])
//   return (
//     <div>
//         <ol>
//             {
//                 posts.map(post=>(
//                     <li key={post.id}>{post.title}</li>
//                 ))
//             }
//         </ol>
//     </div>
//   )
// }

// export default DataFetching

// import React ,{useState,useEffect}from 'react'
// import axios from 'axios'
// function DataFetching() {
//     const[posts,SetPosts]=useState([])
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(res=>{
//             console.log(res)
//             SetPosts(res.data)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     },[])
//   return (
//     <div>
// <ol>
//     {
//         posts.map(post=>(
//             <li key={post.id}>{post.title}</li>
//         ))
//     }
// </ol>
//     </div>
//   )
// }

// export default DataFetching


// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// function DataFetching() {
//     const[post,setPost]=useState({})
//     const[id,setId]=useState(1)
//     const[idFromButtonClick,setIdFromButtonClick]= useState(1)

//     const handleClick =()=>{
//         setIdFromButtonClick(id)
//     }
//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
//         .then(res=>{
//             console.log(res)
//             setPost(res.data)

//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     },[idFromButtonClick])
//   return (
//     <div>
//             <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
//             <button type='button' onClick={handleClick}>fetch</button>
//             <div>{post.title}</div>

       
//     </div>
//   )
// }

// export default DataFetching


import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post,setPost]=useState({})
const [idFromButtonClick,setIdFromButtonClick]=useState(1)
const [id,setId]=useState(1)

const handleClick=()=>{
    setIdFromButtonClick(id)
}
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
   .then(res=>{
    console.log(res)
    setPost(res.data)
   })
   .catch(err=>{
    console.log(err)
   })
    },[idFromButtonClick])
  return (
    <div>
        
     
        <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
        <button onClick={handleClick}>click</button>
        <div>{post.title}</div>
        </div>
    
  )
}

export default DataFetching


