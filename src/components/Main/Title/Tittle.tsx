"use client"
import React from 'react';
import Image from 'next/image';

const Title = () => {
  return(
    <div className='layoutCenter flex flex-row justify-between mt-36 sm:mt-72'>
      
      <div className="flex flex-col mx-auto sm:mx-0">
        <div className="mx-auto sm:text-left sm:mx-0">
          <h1 className="text-4xl sm:text-6xl xs:text-5xl">Olá, sou
            <br/><span className='font-semibold text-redPink drop-shadow-redPink'> Tércio Gabriel</span>
          </h1>
          <h3 className="text-2xl sm:text-4xl">Desenvolvedor Web FullStack</h3>
        </div>

        <div className='mt-6 sm:mt-12 flex gap-3 xs:gap-6 tracking-wide justify-center sm:justify-start'>
        
          <a className='sm:w-32 px-4 py-2 text-center border-2 border-zinc-700 dark:border-zinc-100 transition-all hover:dark:border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 hover:drop-shadow-linkedIn' href='.'>LinkedIn</a>

          <a className='sm:w-32 px-4 py-2 text-center border-2 border-zinc-700 dark:border-zinc-100 transition-all hover:dark:border-neutral-700 hover:bg-neutral-700 hover:border-neutral-700 hover:text-zinc-200 hover:drop-shadow-gitHub hover:dark:drop-shadow-gitHub2' href='.'>GitHub</a>
        </div>
      </div>
      
      <div>
        <div className="-mr-14 -mt-16 hidden lg:block">
            <Image
            className='scale-90 lg:scale-100 xl:scale-110 2xl:scale-125 drop-shadow-normalImg dark:drop-shadow-redPinkImg'
            src="/assets/images/dev_computer.svg"
            alt="dev"
            width={512}
            height={512} />
          </div>
      </div>
    </div>
  )
}

export default Title;