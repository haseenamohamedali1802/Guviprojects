import React, { useContext } from 'react'
import { useTheme,useThemeUpdate } from './ThemeContext'


export default function FunctionalContextComponent() {
    const darkTheme=useTheme()
    const toggleTheme=useThemeUpdate()

    const themeStyles={
            backgroundColor:darkTheme?'#333':'#ccc',
            color:darkTheme?'#ccc':'#333',
            padding:'3rem',
            margin:'2rem'

        }
    
  return (
    <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div style={themeStyles}>
            Function Theme
        </div>
    </div>
  )
}
