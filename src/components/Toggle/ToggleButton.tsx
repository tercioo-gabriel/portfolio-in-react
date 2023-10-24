"use client"
import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

const ToggleButton = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const element = document.documentElement;

      switch (theme) {
        case 'dark':
          element.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          break;
        case 'light':
          element.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          break;
        default:
          localStorage.setItem('theme', 'light');
          break;
      }
    }
  }, [theme]);

  return (
    <div className="fixed flex flex-col z-10 top-3 right-2 backdrop-blur-sm bg-white/30 dark:bg-zinc-900/30 drop-shadow-md rounded sm:top-6 sm:right-4">
      <button onClick={toggleTheme}>
        {theme === 'light' ? (
          <BiSolidSun className="p-2 text-redPink" size={48} />
        ) : (
          <BiSolidMoon className="p-2 text-redPink" size={48} />
        )}
      </button>
    </div>
  )
}

export default ToggleButton;