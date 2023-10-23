import React from 'react';
import Constructor from './Constuctor';

const Frontend = () => {

  const aviso: string = '*Deploy indisponível';

  const frontendData = [
    {
      imgSrc: '/assets/images/projects/project-01.png',
      title: 'Profile Finder',
      linkGit: 'https://tailwindcss.com/docs/installation',
      linkView: 'https://tailwindcss.com/docs/installation',
      description: 'App que realiza buscas no perfil do GitHub mostrando informações da conta, linguagens e repositórios. Com opção de filtragem por linguagem e link do repositório. Feito em React + API do GitHub.',
      techIcons: [
        { src: '/assets/images/tec_projects/HTML.png', alt: 'HTML' },
        { src: '/assets/images/tec_projects/CSS.png', alt: 'CSS' },
        { src: '/assets/images/tec_projects/JAVASCRIPT.png', alt: 'JavaScript' },
        { src: '/assets/images/tec_projects/REACT.png', alt: 'React' },
        { src: '/assets/images/tec_projects/STYLED-COMPONENTS.png', alt: 'styled-components' },
        { src: '/assets/images/tec_projects/AXIOS.png', alt: 'Axios' },
        { src: '/assets/images/tec_projects/GITHUB.png', alt: 'GitHub API' },
      ],
    },
    {
      imgSrc: '/assets/images/projects/project-02.png',
      title: 'Shorts Summary',
      linkGit: 'https://tailwindcss.com/docs/installation',
      linkView: 'https://tailwindcss.com/docs/installation',
      description: `Aplicação Web feita para baixar vídeos Shorts do Youtube e resumir em escrito usando a IA gratuita Xenova Transformers. Usando JavaScript + NodeJs. ${aviso}`,
      techIcons: [
        { src: '/assets/images/tec_projects/HTML.png', alt: 'HTML' },
        { src: '/assets/images/tec_projects/CSS.png', alt: 'CSS' },
        { src: '/assets/images/tec_projects/JAVASCRIPT.png', alt: 'JavaScript' },
        { src: '/assets/images/tec_projects/VITE.png', alt: 'Vite' },
        { src: '/assets/images/tec_projects/NODEJS1.png', alt: 'NodeJs' },
        { src: '/assets/images/tec_projects/AXIOS.png', alt: 'Axios' },
        { src: '/assets/images/tec_projects/IA2.png', alt: 'Ia' },
      ],
    },
    {
      imgSrc: '/assets/images/projects/project-03.png',
      title: 'Gerador de Senhas',
      linkGit: 'https://tailwindcss.com/docs/installation',
      linkView: 'https://tailwindcss.com/docs/installation',
      description: 'Gerador de senhas aleatórias com opção de maiúsculas, minúsculas e números. Feito em JavaScript Vanilla.',
      techIcons: [
        { src: '/assets/images/tec_projects/HTML.png', alt: 'HTML' },
        { src: '/assets/images/tec_projects/CSS.png', alt: 'CSS' },
        { src: '/assets/images/tec_projects/JAVASCRIPT.png', alt: 'JavaScript' },
      ],
    },
  ];

  return (
    <div className='flex flex-row flex-wrap justify-center gap-4'>
      {frontendData.map((data, index) => (
        <Constructor key={index} {...data} />
      ))}
    </div>
  );
}

export default Frontend;
