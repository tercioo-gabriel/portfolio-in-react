"use client"
import classes from "./NavigationMobile.module.css"
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react';
import NavBarMobile from "./NavBarMobile";

const NavigationMobile = ()=> {
  const [isOpen, setIsOpen] = useState(true);

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
      <div className="fixed z-30 w-9/12 max-w-md h-full bg-slate-100 dark:bg-slate-900 flex flex-col">

        <IoMdClose 
          className="cursor-pointer text-slate-800 dark:text-slate-100" 
          size={56}
          onClick={handleCloseClick} 
        />

        <ul className="text-center text-slate-800 dark:text-slate-100 font-light">

          <li className="mt-9">
            <a className={classes.a} href="">Início</a>
          </li>

          <li className="my-3">
            <a className={classes.a} href="">Sobre Mim</a>
          </li>

          <li className="my-3">
            <a className={classes.a} href="">Habilidades</a>
          </li>

          <li className="my-3">
            <a className={classes.a} href="">Projetos</a>
          </li>
            
          <li className="mb-9">
            <a className={classes.a} href="">Contato</a>
          </li>
        </ul>
        <span className="mt-auto mb-2 text-center">Tércio Gabriel de Jesus - 2023</span>
      </div>
      )}
    </>
  )
}

export default NavigationMobile;