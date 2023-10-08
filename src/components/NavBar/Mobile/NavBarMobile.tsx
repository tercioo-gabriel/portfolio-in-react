"use client";
import React, { useState, useEffect } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';

const NavBarMobile = (props: any) =>{

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

  const handleMenuClick = () => {
    if (props.onMenuClick) {
      props.onMenuClick();
    }
  };

  return (
    <div className='fixed z-10 mt-2.5 ml-1 text-slate-100 dark:text-slate-800 cursor-pointer'>
      {largura < tamanhoDesejado && <BiMenuAltLeft 
        size={56}
        onClick={handleMenuClick}
      />}
    </div>
  )
}

export default NavBarMobile;