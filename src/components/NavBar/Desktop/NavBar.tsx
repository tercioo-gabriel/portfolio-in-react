import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
        <a href='.'>
          <Image className='fixed left-0 top-3 grayscale brightness-75 transition-all hover:scale-105 hover:grayscale-0 hover:brightness-100 cursor-pointer'
          src="/assets/images/dev.svg"
          alt="sla kk" 
          width={64}
          height={64} />
        </a>

        <div className="fixed z-[9999] mt-4 top-0 left-0 right-0 mx-auto max-w-screen-md w-9/12">
          <nav className="backdrop-blur-sm bg-zinc-100/60 dark:bg-zinc-900/50 rounded-xl h-16 ">
            <ul className="flex justify-around text-zinc-700 dark:text-zinc-50 font-normal">

              <li className="mt-5">
                <a className='a' href="">Início</a>
              </li>

              <li className="mt-5">
                <a className='a' href="">Quem Sou</a>
              </li>

              <li className="mt-5">
                <a className='a' href="">Habilidades</a>
              </li>

              <li className="mt-5">
                <a className='a' href="">Projetos</a>
              </li>
                
              <li className="mt-5">
                <a className='a' href="">Contato</a>
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