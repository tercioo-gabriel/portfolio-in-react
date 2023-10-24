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
    <NavBarMobile onMenuClick={handleMenuClick} />
    {isOpen && (
      <div className="fixed flex flex-col top-0 z-30 w-4/5 max-w-md h-full bg-zinc-50 dark:bg-zinc-700 duration-500">

        <IoMdClose 
          className="cursor-pointer" 
          size={56}
          onClick={handleCloseClick} 
        />

        <ul className="flex flex-col uppercase text-xl text-center font-normal gap-5 overflow-hidden">

          <li className="mt-9 mb-3 hover:text-redPink">
            <a href="">Início</a>
          </li>

          <li className="my-3 hover:text-redPink">
            <a href="">Quem Sou</a>
          </li>

          <li className="my-3 hover:text-redPink">
            <a href="">Habilidades</a>
          </li>

          <li className="my-3 hover:text-redPink">
            <a href="">Projetos</a>
          </li>
            
          <li className="mb-9 mt-3 hover:text-redPink">
            <a href="">Contato</a>
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