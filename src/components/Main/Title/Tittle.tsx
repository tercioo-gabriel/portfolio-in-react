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
        
          <a className='sm:w-32 px-4 py-2 rounded-md text-center drop-shadow-buttonDrop bg-zinc-100 dark:bg-zinc-800 dark:drop-shadow-buttonDropDark transition-all hover:-translate-x-0.5 hover:-translate-y-0.5' href='.'>LinkedIn</a>

          <a className='sm:w-32 px-4 py-2 rounded-md text-center drop-shadow-buttonDrop bg-zinc-100 dark:bg-zinc-800 dark:drop-shadow-buttonDropDark transition-all hover:-translate-x-0.5 hover:-translate-y-0.5' href='.'>GitHub</a>
        </div>
      </div>
      
      <div>
        <div className="-mr-8 xl:-mr-0 -mt-12 mb-4 hidden lg:block">
            <Image
            className='scale-75 drop-shadow-normalImg dark:drop-shadow-redPinkImg'
            src="/assets/images/developer.png"
            alt="dev"
            width={512}
            height={512} />
          </div>
      </div>
    </div>
  )
}

export default Title;