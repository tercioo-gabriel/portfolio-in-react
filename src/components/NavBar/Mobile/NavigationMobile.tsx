"use client"
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react';
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
    <NavBarMobile className="mt-0" onMenuClick={handleMenuClick} />
    {isOpen && (
      <div className="fixed flex flex-col top-0 z-30 w-9/12 max-w-md h-full bg-zinc-50 dark:bg-zinc-700 duration-500">

        <IoMdClose 
          className="cursor-pointer" 
          size={56}
          onClick={handleCloseClick} 
        />

        <ul className="text-center font-light overflow-hidden">

          <li className="mt-9">
            <a className='mob' href="">Início</a>
          </li>

          <li className="my-3">
            <a className='mob' href="">Quem Sou</a>
          </li>

          <li className="my-3">
            <a className='mob' href="">Habilidades</a>
          </li>

          <li className="my-3">
            <a className='mob' href="">Projetos</a>
          </li>
            
          <li className="mb-9">
            <a className='mob' href="">Contato</a>
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