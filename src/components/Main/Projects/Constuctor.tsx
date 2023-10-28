import React from 'react';
import { BiGitBranch, BiLink } from "react-icons/bi";

interface ProjectProps {
  imgSrc: string;
  title: string;
  linkGit: string;
  linkView: string;
  description: string;
  lang1: string;
  lang2: string;
  lang3: string;
  lang4: string;
}

const Constructor: React.FC<ProjectProps> = ({ imgSrc, title, linkGit, linkView, description, lang1, lang2, lang3, lang4}) => {
  return (
      <div className='w-full xls:w-72 sm:w-[410px] font-mono select-none'>
        <div className='flex flex-col mt-0'>
          <div className='w-full xls:w-72 sm:w-[410px] relative group'>
            <img
            className='object-cover w-full h-full rounded-sm'
            src={imgSrc}
            alt={title}
            />
            <h1 className='absolute z-50 pt-2 inset-x-0 top-0 text-lg uppercase tracking-wide font-medium sm:font-semibold text-zinc-200 transition-opacity opacity-0 group-hover:opacity-100 duration-150'>{title}</h1>
            <p className='absolute z-50 inset-x-0 bottom-0 p-2 leading-5 drop-shadow-md text-zinc-200 transition-opacity opacity-0 group-hover:opacity-100 duration-150'>
            {description}
            </p>
            <div className='absolute z-10 inset-0 bg-gradient-to-t from-gray-900/80 to-gray-700/30 transition-opacity opacity-0 group-hover:opacity-100 duration-150'></div>
          </div>
          <div className='flex flex-row justify-between mt-1'>
            
            <div className='inline-grid grid-cols-2 gap-2 text-sm font-semibold uppercase sm:text-base sm:gap-4 xls:flex xls:flex-row'>
              <p>{lang1}</p>
              <p>{lang2}</p>
              <p>{lang3}</p>
              <p>{lang4}</p>
            </div>
            <div className='flex flex-col gap-2 xs:gap-3 xs:flex-row'>
              <a className='px-4 py-0.5 text-xl bg-zinc-400 text-zinc-100 rounded-sm dark:bg-zinc-900 dark:text-zinc-300 hover:scale-105 transition-all duration-150' href={linkView} target='_blank'><BiLink/></a>
              <a className='px-4 py-0.5 text-xl bg-zinc-400 text-zinc-100 rounded-sm dark:bg-zinc-900 dark:text-zinc-300 hover:scale-105 transition-all duration-150' href={linkGit} target='_blank'><BiGitBranch/></a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Constructor;
