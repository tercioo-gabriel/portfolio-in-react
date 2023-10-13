"use client"
import React from 'react';
import Image from 'next/image';

const Title = () => {
  return(
    <div className='container px-6 mt-36 sm:mt-72 sm:text-center'>
      <div className="flex items-start justify-between">
        <div className="text-left">
          <h1 className="text-5xl sm:text-6xl">Olá, sou
            <br/><span className='font-semibold text-redPink drop-shadow-redPink'> Tércio Gabriel</span>
          </h1>
          <h3 className="text-2xl sm:text-4xl">Desenvolvedor Web FullStack</h3>
        </div>
        <div className="absolute top-56 right-0 mr-0 xl:mr-52 hidden lg:block">

          <Image
          className='drop-shadow-normalImg dark:drop-shadow-redPinkImg'
          src="/assets/images/dev_computer.svg"
          alt="dev"
          width={512}
          height={512} />

        </div>
      </div>
      <div className='text-left mt-6 sm:mt-12 flex gap-4 tracking-wide'>
        <a className='sm:w-32 px-4 py-2 text-center border-2 border-zinc-700 dark:border-zinc-100 transition-all hover:dark:border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 hover:drop-shadow-linkedIn' href='.'>LinkedIn</a>

        <a className='sm:w-32 px-4 py-2 text-center border-2 border-zinc-700 dark:border-zinc-100 transition-all hover:dark:border-neutral-700 hover:bg-neutral-700 hover:border-neutral-700 hover:text-zinc-200 hover:drop-shadow-gitHub hover:dark:drop-shadow-gitHub2' href='.'>GitHub</a>
      </div>
      
    </div>
  )
}

export default Title;