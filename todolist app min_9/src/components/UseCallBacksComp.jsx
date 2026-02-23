import React,{useState,useCallback} from 'react'
import Lists from './Lists';

function UseCallBacksComp() {
    const [number,setNumber]=useState(1);
    const[dark,setDark]=useState(false);

    const themeStyle=
    {
        backgroundColor:dark?'black':'white',
        color:dark?'white':'black',
    }

    const getItems=useCallback(()=>{
        return[number,number+1,number+2]
    },[number])
  return (
    <>
    <div>UseCallBacksComp</div>
    <div style={themeStyle}>


        <input type="number" value={number}onChange={e=>setNumber(parseInt(e.target.value))}/>
        <button onClick={() => setDark(prevDark => !prevDark)}>
        Change Theme
      </button>
      <hr/>
      <Lists getItems={getItems}/>
    </div>
    </>
  )
}

export default UseCallBacksComp