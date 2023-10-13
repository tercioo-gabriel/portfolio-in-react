"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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

  const tamanhoDesejado = 830;

  const handleMenuClick = () => {
    if (props.onMenuClick) {
      props.onMenuClick();
    }
  };

  return (
    <div className='fixed z-10 top-1.5 cursor-pointer'>
      {largura < tamanhoDesejado && <Image 
          className='fixed left-0 top-3 transition-all hover:scale-105 sm:w-16 sm:h-16'
          src="/assets/images/dev_menu.svg"
          alt="dev menu" 
          width={54}
          height={54}
          onClick={handleMenuClick}
      />}
    </div>
  )
}

export default NavBarMobile;