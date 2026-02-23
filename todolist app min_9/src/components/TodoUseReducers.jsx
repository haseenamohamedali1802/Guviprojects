import React,{useState,useReducer} from 'react'

const ACTIONS={
    ADD:'ADD',
    UPDATE:'UPDATE'
}
 
function reducer(todos,action){
    switch(action.type){
        case ACTIONS.ADD:
            return[...todos,newTodo(action.payload.name)]
    }
}

function newTodo(name){
    return{id:Date.now(),name:name,complete:false}
}


function TodoUseReducers() {
    const[todos,dispatch]=useReducer(reducer,[])
    const[name,setName]=useState('')

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:ACTIONS.ADD,payload:{name:name}})
        setName('')
    }
    console.log(todos)

  return (
    <div>TodoUseReducers
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
        <hr/>
        {todos.map(todo=>(
            <li key={todo.id}>{todo.id} {todo.name}</li>
        )
        )}
        
        </>
    </div>
  )
}

export default TodoUseReducers