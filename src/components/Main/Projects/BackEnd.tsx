import React from 'react';
import Constructor from './Constuctor';

const Backend = () =>{

  const backendData = [
    {
      imgSrc: '/assets/images/projects/project-02(02).png',
      title: 'PowerUp Automation',
      linkGit: 'https://tailwindcss.com/docs/installation',
      linkView: 'https://tailwindcss.com/docs/installation',
      description: 'App que realiza automações com banco de dados de estoque, cadastrando os produtos no site da empresa.',
      techIcons: [
        { src: '/assets/images/tec_projects/PYTHON.png', alt: 'Python' },
        { src: '/assets/images/tec_projects/PANDAS.png', alt: 'Pandas' },
      ],
    },
    {
      imgSrc: '/assets/images/projects/project-03(02).png',
      title: 'IA Analytics',
      linkGit: 'https://tailwindcss.com/docs/installation',
      linkView: 'https://tailwindcss.com/docs/installation',
      description: 'IA que analisa se novos clientes, cadastrados no banco de dados, tem risco ou não de score de crédito para empresa.',
      techIcons: [
        { src: '/assets/images/tec_projects/PYTHON.png', alt: 'Python' },
        { src: '/assets/images/tec_projects/SCIKIT-LEARN.png', alt: 'Scikit-Learn' },
        { src: '/assets/images/tec_projects/PANDAS.png', alt: 'Pandas' },
        { src: '/assets/images/tec_projects/NUMPY.png', alt: 'Numpy' },
      ],
    },
    {
      imgSrc: '/assets/images/projects/project-01(02).png',
      title: 'ChatBox Live',
      linkGit: 'https://tailwindcss.com/docs/installation',
      linkView: 'https://tailwindcss.com/docs/installation',
      description: 'ChatBox em tempo real com possibilidade de múltiplos usuários, feito em Python + Flet',
      techIcons: [
        { src: '/assets/images/tec_projects/PYTHON.png', alt: 'Python' },
        { src: '/assets/images/tec_projects/FLET.png', alt: 'Flet' },
      ],
    },
  ];

  return(
    <div className='w-full flex flex-row flex-wrap justify-center gap-4'>
      {backendData.map((data, index) => (
        <Constructor key={index} {...data} />
      ))}
    </div>
  )
}

export default Backend;