import React, { useEffect } from 'react'
import assets from "../assets/assets";

function ThemeToggleBtn({theme,setTheme}) {
    useEffect(()=>{
     const  prefereDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
      setTheme(theme || (prefereDarkMode ? "dark" : "light") )  
    },[])
    useEffect(()=>{
if(theme === "dark"){
    document.documentElement.classList.add("dark")
} else{
    document.documentElement.classList.remove("dark")
}
localStorage.setItem("theme",theme)
    },[theme])
  return (
    <>
    <button> {theme === "dark" ? ( 
        <img onClick={()=>setTheme("light")} src={assets.sun_icon} className='size-7.5 p-1.5 border border-gray-500 rounded-full' alt="" />
    ) : (
        <img onClick={()=>setTheme("dark")} src={assets.moon_icon} className='size-7.5 p-1.5 border border-gray-500 rounded-full' alt="" />
    )} </button>
    </>
  )
}

export default ThemeToggleBtn