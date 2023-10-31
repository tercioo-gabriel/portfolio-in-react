"use client"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [largura, setLargura] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLargura(window.innerWidth);
      
      const atualizarLargura = () => {
        setLargura(window.innerWidth);
      };
      
      window.addEventListener('resize', atualizarLargura);
      
      return () => {
        window.removeEventListener('resize', atualizarLargura);
      };
    }
  }, []);

  const tamanhoDesejado = 830;

  return(
    <>
    {largura >= tamanhoDesejado ? (
      <>
        <div className="fixed z-[9999] top-0 left-0 right-0 mx-auto max-w-screen-md w-9/12">
          <nav className="backdrop-blur-sm bg-zinc-100 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark dark:bg-zinc-800 rounded-b-md h-20 ">
            <ul className="flex justify-around uppercase text-zinc-700 dark:text-zinc-50 text-base font-normal">

              <li className="mt-7">
                <Link 
                  className='a cursor-pointer'
                  activeClass="active" 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500}>Início</Link>
              </li>

              <li className="mt-7">
                <Link 
                  className='a cursor-pointer'
                  activeClass="active" 
                  to="about-me" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500}>Quem Sou</Link>
              </li>

              <li className="mt-7">
                <Link 
                  className='a cursor-pointer'
                  activeClass="active" 
                  to="skills" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500}>Habilidades</Link>
              </li>

              <li className="mt-7">
                <Link 
                className='a cursor-pointer'
                activeClass="active" 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500}>Projetos</Link>
              </li>
                
              <li className="mt-7">
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
          </nav>
        </div>
      </>
      ) : (null)}
    </>
  );
};

export default NavBar;