import React from 'react';
import { BiGitBranch } from "react-icons/bi";
import { FiEye } from 'react-icons/fi'

interface ProjectProps {
  imgSrc: string;
  title: string;
  linkGit: string;
  linkView?: string;
  description: string;
  lang1: string;
  lang2: string;
  lang3: string;
  lang4: string;
}

const Constructor: React.FC<ProjectProps> = ({ imgSrc, title, linkGit, linkView, description, lang1, lang2, lang3, lang4}) => {
  return (
      <div className='w-full xls:w-72 sm:w-[410px] select-none'>
        <div className='flex flex-col mt-0'>
          <div className='w-full xls:w-72 sm:w-[410px] relative group'>
            <img
            className='object-cover w-full h-full rounded-sm'
            src={imgSrc}
            alt={title}
            />
            <h1 className='absolute z-50 pt-2 inset-x-0 top-0 text-left text-base px-3 uppercase tracking-wide font-medium text-zinc-200 transition-opacity opacity-0 group-hover:opacity-100 duration-150 sm:text-lg sm:font-bold'>{title}</h1>
            <p className='absolute z-50 inset-x-0 bottom-0 p-3 leading-5 text-left text-xs drop-shadow-md text-zinc-200 transition-opacity opacity-0 group-hover:opacity-100 duration-150 sm:text-base'>
            {description}
            </p>
            <div className='absolute z-10 inset-0 bg-gradient-to-t from-gray-900/80 to-gray-700/30 transition-opacity opacity-0 group-hover:opacity-100 duration-150'></div>
          </div>
          <div className='flex flex-col items-start mt-1 gap-2 xs:gap-0 xs:flex-row xs:justify-between'>
            
            <div className='flex flex-row gap-2 text-xs font-semibold uppercase sm:font-bold sm:text-sm sm:gap-4 '>
              <p>{lang1}</p>
              <p>{lang2}</p>
              <p>{lang3}</p>
              <p>{lang4}</p>
            </div>
            <div className='flex flex-row gap-2 xs:gap-3'>
              <a className='px-4 py-0.5 text-xl bg-zinc-400 text-zinc-100 rounded-sm dark:bg-zinc-900 dark:text-zinc-300 hover:scale-105 hover:bg-redPink transition-all duration-150' href={linkView} target='_blank'><FiEye/></a>
              <a className='px-4 py-0.5 text-xl bg-zinc-400 text-zinc-100 rounded-sm dark:bg-zinc-900 dark:text-zinc-300 hover:scale-105 hover:bg-redPink transition-all duration-150' href={linkGit} target='_blank'><BiGitBranch/></a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Constructor;
