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
    <div className="fixed flex flex-col z-10 top-3 right-3 bg-zinc-700 dark:bg-zinc-200 rounded sm:top-5">
      {
        options?.map(opt=>(
          <button
           key={opt.text}
           onClick={()=> setTheme(opt.text)}
           className={`mx-0.5 my-1 first:border-b border-zinc-300 dark:border-zinc-600 first:pb-1 sm:m-1 ${theme === opt.text ? 'text-redPink' : 'text-zinc-100'}`}>
          {opt.icon === 'sun' ? 
          <BiSolidSun 
            name={opt.icon} 
            style={{ color: theme !== opt.text ? 'dimgray' : '' }}
            size={28} /> : 
          <BiSolidMoon 
            name={opt.icon}
            size={28} />}    
          </button>
        ))
      }
      
    </div>
  )
}

export default ToggleButton;