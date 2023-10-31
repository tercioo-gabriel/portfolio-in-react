"use client"
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react';
import { Link } from 'react-scroll';
import NavBarMobile from "./NavBarMobile";

const NavigationMobile = ()=> {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleMenuClick = () => {
    setIsOpen(true);
  };

  return(
    <>
    <NavBarMobile onMenuClick={handleMenuClick} />
    {isOpen && (
      <div className="fixed flex flex-col top-0 z-[60] w-4/5 max-w-md h-full bg-zinc-50 dark:bg-zinc-700 duration-500">

        <IoMdClose 
          className="cursor-pointer" 
          size={56}
          onClick={handleCloseClick} 
        />

        <ul className="flex flex-col uppercase text-xl text-center font-semibold gap-5 overflow-hidden">

          <li className="mt-9 mb-3 hover:text-redPink">
            <Link 
              className='a cursor-pointer'
              activeClass="active" 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500}>Início</Link>
          </li>

          <li className="my-3 hover:text-redPink">
            <Link 
              className='a cursor-pointer'
              activeClass="active" 
              to="about-me" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500}>Quem sou</Link>
          </li>

          <li className="my-3 hover:text-redPink">
            <Link 
              className='a cursor-pointer'
              activeClass="active" 
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500}>habilidades</Link>
          </li>

          <li className="my-3 hover:text-redPink">
            <Link 
              className='a cursor-pointer'
              activeClass="active" 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500}>projetos</Link>
          </li>
            
          <li className="mb-9 mt-3 hover:text-redPink">
            <Link 
              className='a cursor-pointer'
              activeClass="active" 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500}>Contato</Link>
          </li>
        </ul>

        <span className="mt-auto mb-2 text-center text-sm text-zinc-800/80 dark:text-zinc-100/80">Tércio Gabriel de Jesus - 2023
        </span>

      </div>
      )}
    </>
  )
}

export default NavigationMobile;