import React,{useState,useEffect,useRef} from 'react'

function UseRefHook() {
    const[name,setName]=useState('')
    const prevName=useRef('')

    const inputRef=useRef()
    const renderCount=useRef(1)

    function focus(){
        inputRef.current.focus()
        console.log(name,prevName)
    }

    useEffect(()=>{
        prevName.current=name
    },[name])


     useEffect(()=>{
        renderCount.current=renderCount.current+1
    },)
  return (
    <>
    <div>UseRefHook
    <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}/>
<h2>My name is {name} and it used to be previously {prevName.current}</h2>

<button onClick={focus}>Focus Now</button>

<hr/>
<div>
    i rendered{renderCount.current}Times
</div>
    </div>
    </>
  )
}

export default UseRefHook