import React from 'react';
import Constructor from './Constuctor';

const Backend = () =>{

  const backendData = [
    {
      imgSrc: '/assets/images/projects/backend-01.png',
      title: 'Profile Finder',
      linkGit: 'https://tailwindcss.com/docs/installation',
      linkView: 'https://tailwindcss.com/docs/installation',
      description: 'App que realiza buscas no perfil do GitHub mostrando informações da conta, linguagens e repositórios. Com opção de filtragem por linguagem e link do repositório. Feito em React + API do GitHub.',
      lang1: 'react',
      lang2: 'js',
      lang3: 'oi kk',
      lang4: 'sabado',
    },
    {
      imgSrc: '/assets/images/projects/backend-02.png',
      title: 'Profile Finder',
      linkGit: 'https://tailwindcss.com/docs/installation',
      linkView: 'https://tailwindcss.com/docs/installation',
      description: 'App que realiza buscas no perfil do GitHub mostrando informações da conta, linguagens e repositórios. Com opção de filtragem por linguagem e link do repositório. Feito em React + API do GitHub.',
      lang1: 'react',
      lang2: 'js',
      lang3: 'oi kk',
      lang4: 'sabado',
    },
  ];

  return(
    <div className='inline-grid grid-cols-2 gap-14'>
      {backendData.map((data, index) => (
        <Constructor key={index} {...data} />
      ))}
    </div>
  )
}

export default Backend;