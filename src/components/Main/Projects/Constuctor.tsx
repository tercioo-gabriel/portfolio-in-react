import React from 'react';
import { BiGitBranch, BiLink } from 'react-icons/bi';

interface ProjectProps {
  imgSrc: string;
  title: string;
  linkGit?: string;
  linkView?: string;
  description: string;
  techIcons: { src: string; alt?: string }[];
}

const Constructor: React.FC<ProjectProps> = ({ imgSrc, title, linkGit, linkView, description, techIcons }) => {
  return (
      <div className='group relative overflow-hidden rounded-md xs:w-96 xs:h-52 drop-shadow-md'>
        <img
          className="w-full xs:h-full group-hover:scale-105 xs:object-cover transition-all rounded-md"
          src={imgSrc}
          alt={title}
        />

        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/75 group-hover:from-gray-600/40 group-hover:to-gray-900'></div>

        <div className="flex flex-row">
          <div className="absolute inset-0 flex flex-col justify-between p-1 translate-y-[75%] group-hover:translate-y-0 transition-all">
            <div className='flex flex-row justify-between'>
              <h4 className='text-redPink font-semibold p-1 text-base xs:text-lg tracking-wide'>{title}</h4>
              <div className='flex flex-row items-center justify-center gap-2 mr-1'>
                <a href={linkGit} target='_blank' className='px-[18px] py-1 bg-redPink rounded-sm'><BiGitBranch className=" text-zinc-100 text-lg xs:text-xl"/></a>
                <a href={linkView} target='_blank' className='px-4 py-1 bg-redPink rounded-sm'><BiLink className=" text-zinc-100 text-lg xs:text-xl"/></a>
              </div>
            </div>

            <p className="px-1 text-left text-sm xs:text-base text-zinc-200 opacity-0 group-hover:opacity-100 transition-all">{description}</p>
          </div>

          <div className='flex flex-row top-2 left-2 absolute gap-1 opacity-[85%] group-hover:opacity-0 transition-all'>
            {techIcons.map((icon, index) => (
              <img key={index} className='w-5 h-5 drop-shadow-md' src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </div>
      </div>
  );
}

export default Constructor;
