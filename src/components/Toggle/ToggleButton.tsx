"use client"
import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

interface ToggleButtonProps {
  onClick: () => void;
  toggleTheme: () => void;
  themes: 'light' | 'dark';
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick, toggleTheme, themes }) =>{
  const [theme, setTheme] = useState('light');
  
  const toggleThemeDark = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const toggleLocalTheme = () => {
    toggleThemeDark();
    onClick();
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
    <div className="fixed flex flex-col z-10 top-3 right-2 backdrop-blur-sm bg-zinc-100 drop-shadow-buttonDrop rounded sm:top-6 sm:right-4 dark:bg-zinc-800 dark:drop-shadow-buttonDropDark">
      <button onClick={toggleLocalTheme}>
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