import React,{useState,useEffect}  from 'react'

function Lists({getItems}) {
    const[items,setItems]=useState([]);
    useEffect(()=>{
        setItems(getItems());
        console.log('calling')
    },[getItems])
    
  return items.map(item=><div key={item}>{item}</div>)
    
  
}

export default Lists;



