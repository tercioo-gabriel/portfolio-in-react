"use client";
import React, { useState } from 'react';
import Backend from './BackEnd';
import Frontend from './FrontEnd';

const Projects = () => {
  const [showFrontend, setShowFrontend] = useState(true);
  const [showBackend, setShowBackend] = useState(false);

  const toggleFrontend = () => {
    setShowFrontend(true);
    setShowBackend(false);
  };

  const toggleBackend = () => {
    setShowFrontend(false);
    setShowBackend(true);
  };

  return(
    <div className="layoutCenter flex flex-col">

      
      <h2 className="text-lg uppercase font-medium tracking-widest">p r o j e t o s</h2>
      <h2 className="absolute opacity-10 left-1/2 -ml-24 -mt-1 text-3xl uppercase font-bold tracking-widest select-none hidden sm:block">Projetos</h2>

      <div className="flex mt-8 mb-4 justify-center items-center gap-4 uppercase">
        <button 
        className={`py-2 px-2 bg-zinc-600 text-zinc-100 uppercase tracking-wider font-semibold underline-offset-2 rounded-sm ${showFrontend ? '' : 'opacity-25 drop-shadow-md'}`}
        onClick={toggleFrontend} >FrontEnd</button>

        <div className="w-0.5 h-8 bg-zinc-600 rounded-sm"></div>

        <button 
        className={`py-2 px-3 bg-zinc-600 text-zinc-100 uppercase tracking-wider font-semibold underline-offset-2 rounded-sm ${showBackend ? '' : 'opacity-25 drop-shadow-md'}`}
        onClick={toggleBackend} >BackEnd</button>
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-10">
        {showFrontend && <Frontend />}
        {showBackend && <Backend />}
      </div>
      
    </div>
  )
}
export default Projects;