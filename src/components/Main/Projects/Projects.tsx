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
    <div className="layoutCenter w-full flex flex-col">

      <h2 className="fontSection">Projetos</h2>
      <div className="flex mb-4 mx-auto items-center gap-4 uppercase">
        <button 
        className={`p-2 bg-zinc-600 text-zinc-100 uppercase tracking-wider font-semibold underline-offset-2 rounded-sm ${showFrontend ? '' : 'opacity-40'}`}
        onClick={toggleFrontend} >FrontEnd</button>

        <div className="w-0.5 h-8 bg-zinc-600 rounded-sm"></div>

        <button 
        className={`p-2 bg-zinc-600 text-zinc-100 uppercase tracking-wider font-semibold underline-offset-2 rounded-sm ${showBackend ? '' : 'opacity-40'}`}
        onClick={toggleBackend} >BackEnd</button>
      </div>
      {showFrontend && <Frontend />}
      {showBackend && <Backend />}
    </div>
  )
}
export default Projects;