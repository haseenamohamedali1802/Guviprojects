import React,{useState,useEffect} from 'react'

function UseStateUseEffect() {
    const[text,setText]=useState("posts")
    const[posts,setPosts]=useState([])


    const fetchPosts=async()=>{
      try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/${text}`)
        if(!response.ok){
          throw new Error("failed")
        }
        const data = await response.json();
        setPosts(data)
      }
      catch(error){
        console.log("Error")
      }
      finally{
        console.log("Finally")
      }
    }


    useEffect(()=>{
        console.log("useEffect is called")
        fetchPosts();

        return(()=>{
          console.log("cleaned")
          setPosts([])
        })
    },[text])

    useEffect(()=>{
      console.log("useEffect-2")
    },[])

  return (
    <div>UseStateUseEffect

      <hr/>
      <button onClick={()=>setText("posts")}>Posts</button>
      <button onClick={()=>setText("comments")}>Comments</button>
      <button onClick={()=>setText("albums")}>Albums</button>
      <hr/>
      <h2>{text}</h2>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}>
            <h2>{post.title}</h2>
             <p>{post.body}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default UseStateUseEffect