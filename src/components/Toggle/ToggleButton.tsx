"use client"
import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

const ToggleButton = () =>{
  const [theme, setTheme] = useState('light');
  const element = document.documentElement
  const options =[{
    icon: 'sun',
    text: 'light'
  },
  {
    icon: 'moon',
    text: 'dark'
  }];

  useEffect(()=> {
    switch(theme){
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.setItem('theme', 'light');
        break;
    }
  },[theme]);

  return(
    <div className="fixed z-10 top-5 right-3 dark:bg-slate-800/95 bg-slate-50 rounded">
      {
        options?.map(opt=>(
          <button
           key={opt.text}
           onClick={()=> setTheme(opt.text)}
           className={`w-8 h-8 leading-9 text-2xl m-1 ${theme === opt.text ? 'text-redPink' : 'text-slate-800'}`}>
          {opt.icon === 'sun' ? 
          <BiSolidSun 
            className="ml-1" 
            name={opt.icon} 
            style={{ color: theme !== opt.text ? 'white' : '' }} /> : 
          <BiSolidMoon 
            className="ml-1" 
            name={opt.icon} />}    
          </button>
        ))
      }
      
    </div>
  )
}

export default ToggleButton;