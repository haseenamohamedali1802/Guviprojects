import React, { useState } from 'react';
import UseCallBacksComp from './components/UseCallBacksComp';







{/*import UseReducers from './components/UseReducers';
import TodoUseReducers from './components/TodoUseReducers';
import FunctionalContextComponent from './components/FunctionalContextComponent';
import ClassContextComponent from './components/ClassContextComponent';
import { ThemeProvider } from './components/ThemeContext';
export const ThemeContext=React.createContext();*/}



export default function App() {
 {/* const[darkTheme,setDarkTheme]=useState(true);
  function toggleTheme(){
    setDarkTheme(prevDarkTheme=>!prevDarkTheme);
  }*/}
  return (
    
      <div>
        <h1>React Hooks</h1>
        <>
      {/*  <ThemeContext.Provider value={darkTheme}>
          <button onClick={toggleTheme}>Toggle Button Class</button>
         <ClassContextComponent/>
        </ThemeContext.Provider> 
        <ThemeProvider >
          <FunctionalContextComponent/>
        </ThemeProvider>
        
        <UseReducers/>
        <TodoUseReducers/>*/}

          <UseCallBacksComp/>
      
        </>
      </div>
    
  );
}
