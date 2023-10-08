"use client";
import React, { useState, useEffect } from 'react';
import classes from "./Navbar.module.css"

const NavBar = () => {
  const [largura, setLargura] = useState(window.innerWidth);
  useEffect(() => {
    const atualizarLargura = () => {
      setLargura(window.innerWidth);
    };

    window.addEventListener('resize', atualizarLargura);

    return () => {
      window.removeEventListener('resize', atualizarLargura);
    };
  }, []);

  const tamanhoDesejado = 835;

  return(
    <>
    {largura >= tamanhoDesejado ? (
      <div className="fixed mt-4 top-0 left-0 right-0 m-auto max-w-screen-lg w-9/12">
        <nav className="bg-slate-50 dark:bg-slate-800/90 rounded-xl h-16 ">
          <ul className="flex justify-around text-slate-800 dark:text-slate-100 font-light">

            <li className=" mt-3 px-1 py-2">
              <a className={classes.a} href="">Início</a>
            </li>

            <li className="mt-3 px-1 py-2">
              <a className={classes.a} href="">Sobre Mim</a>
            </li>

            <li className="mt-3 px-1 py-2">
              <a className={classes.a} href="">Habilidades</a>
            </li>

            <li className="mt-3 px-1 py-2">
              <a className={classes.a} href="">Projetos</a>
            </li>
              
            <li className="mt-3 px-1 py-2">
              <a className={classes.a} href="">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
      ) : (null)}
    </>
  )
}

export default NavBar;