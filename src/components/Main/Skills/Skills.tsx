import React from 'react';

interface HardSkillsProps {
  darkMode: 'light' | 'dark';
  toggleDarkMode: () => void;
}

const HardSkills: React.FC<HardSkillsProps> = ({ darkMode, toggleDarkMode }) =>{

  return(
    <div id='skills' className="layoutCenter mt-0 pt-20 sm:pt-44">
      <h2 className="text-lg uppercase font-medium tracking-widest">H a b i l i d a d e s</h2>
      <h2 className="absolute opacity-10 left-1/2 -ml-32 -mt-8 text-3xl uppercase font-bold tracking-widest select-none hidden sm:block">Habilidades</h2>

      <div className='flex flex-col gap-12 mt-12 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark'>
        <div className="flex flex-row flex-wrap justify-center  gap-4 md:gap-10 lg:gap-12">
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/html-512.png" alt="html" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/css-512.png" alt="css" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/javascript-512.png" alt="js" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/typescript.svg" alt="ts" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/react-512.png" alt="react" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink dark:fill-zinc-100" src={`./assets/images/tecs/${darkMode === 'dark' ? 'nextjsDark' : 'nextjs'}-512.png`} alt="next" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/tailwind-512.png" alt="tailwind" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink dark:fill-zinc-100" src={`./assets/images/tecs/${darkMode === 'dark' ? 'styledDark' : 'styled'}-512.png`} alt="styled-components" />
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-10 lg:gap-12">
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/nodejs-512.png" alt="html" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/python-512.png" alt="css" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/mysql-512.png" alt="mysql" />
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-10 lg:gap-12">
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/photoshop-512.png" alt="photoshop" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/illustrator-512.png" alt="illustrator" />
          <img className="w-12 hover:scale-110 transition-all duration-300 sm:w-16 hover:drop-shadow-redPink" src="./assets/images/tecs/git-512.png" alt="git" />
        </div>

      </div>
    </div>
  )
}

export default HardSkills;