import React from 'react';
import Constructor from './Constuctor';

const Frontend = () => {

  const frontendData = [
    {
      imgSrc: '/assets/images/projects/frontend-05.png',
      title: 'green thumb',
      linkGit: 'https://github.com/tercioo-gabriel/green-thumb',
      linkView: 'https://lp-green-thumb.netlify.app',
      description: 'Ecommerce de compra de plantas, com carrinho de compras, filtragens de plantas, etc. *EM ANDAMENTO',
      lang1: 'react',
      lang2: 'typescript',
      lang3: 'tailwind',
      lang4: '',
    },
    {
      imgSrc: '/assets/images/projects/frontend-03.png',
      title: 'shorts summary',
      linkGit: 'https://github.com/tercioo-gabriel/shorts-summary-front',
      linkView: 'https://shorts-summary-frontend.netlify.app',
      description: 'Aplicação que realiza download de vídeos Shorts, transcreve e resume o conteúdo do vídeo usando uma IA. (BackEnd do projeto não está em produção !! Não é possível testar no momento).',
      lang1: 'javascript',
      lang2: 'nodejs',
      lang3: 'ia',
      lang4: '',
    },
    {
      imgSrc: '/assets/images/projects/frontend-01.png',
      title: 'Profile Finder',
      linkGit: 'https://github.com/tercioo-gabriel/github-profile-finder-v2',
      linkView: 'https://github-profile-finder-v2.netlify.app',
      description: 'App que realiza buscas no perfil do GitHub mostrando informações da conta, linguagens e repositórios. Com opção de filtragem por linguagem e link do repositório. Feito em React + API do GitHub.',
      lang1: 'react',
      lang2: 'javascript',
      lang3: 'api',
      lang4: '',
    },
    {
      imgSrc: '/assets/images/projects/frontend-02.png',
      title: 'Weather Now',
      linkGit: 'https://github.com/tercioo-gabriel/weather-now',
      linkView: 'https://weather-now-jet.vercel.app',
      description: 'Aplicação web que faz uso de API para obter previsão do tempo do dia atual e dos próximos dias, feito em React e Typescript. (API muito simples, não segue as políticas do CORS então as vezes da erro).',
      lang1: 'react',
      lang2: 'typescript',
      lang3: 'api',
      lang4: '',
    },
    {
      imgSrc: '/assets/images/projects/frontend-04.png',
      title: 'Gerador de Senhas',
      linkGit: 'https://github.com/tercioo-gabriel/weather-now',
      linkView: 'https://gerador-de-senhasjs-f4e693.netlify.app',
      description: 'Site que gera senhas aleatórias, com opção de maiúscula, minúscula e caracteres especiais.Feito em JavaScript Vanilla.',
      lang1: 'javascript',
      lang2: 'html',
      lang3: 'css',
      lang4: '',
    },
  
    
  ];

  return (
    <div className='inline-grid grid-cols-1 lg:grid-cols-2 gap-20'>
      {frontendData.map((data, index) => (
        <Constructor key={index} {...data} />
      ))}
    </div>
  );
}

export default Frontend;
