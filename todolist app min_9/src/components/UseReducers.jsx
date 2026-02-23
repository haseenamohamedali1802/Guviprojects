import React,{useState,useReducer} from 'react'

const ACTIONS={
    INCREMENT:'increment',
    DECREMENT:'decrement'
}

function reducer(state,action){
//return{count:state.count+1}
switch(action.type){
    case ACTIONS.INCREMENT:
        return{count:state.count+1}
     case ACTIONS.DECREMENT:
        return{count:state.count-1 }
        default:
            return state
}
}



function UseReducers() {
   // const[count,setCount]=useState(0)
    const[state,dispatch]=useReducer(reducer,{count:0})

    function increment(){
        //tCount(prevCount=>prevCount+1)
        dispatch({type:ACTIONS.INCREMENT})
    }

    function decrement(){
        //tCount(prevCount=>prevCount-1)
        dispatch({type:ACTIONS.DECREMENT})
    }

  return (
    <div>UseReducers

        <button onClick={increment}>+</button>

        <span>{state.count}</span>

        <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseReducers