import React from 'react';
import Constructor from './Constuctor';

const Backend = () =>{

  const backendData = [
    {
      imgSrc: '/assets/images/projects/backend-01.png',
      title: 'power up automation',
      linkGit: 'https://github.com/tercioo-gabriel/pytohn-power-up',
      linkView: 'https://www.youtube.com/watch?v=nx-82n46Tko',
      description: 'Projeto em Python que tem função de fazer cadastro totalmente automatizado de produtos no site da empresa.',
      lang1: 'python',
      lang2: 'Pandas',
      lang3: 'Pyautogui',
      lang4: '',
    },
    {
      imgSrc: '/assets/images/projects/backend-02.png',
      title: 'Analytical AI',
      linkGit: 'https://github.com/tercioo-gabriel/python-ia-analytics',
      description: 'Projeto que cria uma IA com o Scikit-Learn com o uso de árvore de decisão para analisar clientes novos no banco de dados, permitindo limite de crédito ou não com base em análises de risco.',
      lang1: 'python',
      lang2: 'sck-learn',
      lang3: 'ia',
      lang4: '',
    },
    {
      imgSrc: '/assets/images/projects/backend-03.png',
      title: 'chatbox live',
      linkGit: 'https://github.com/tercioo-gabriel/python-chatbox',
      description: 'Site feito em Python que tem função de ChatBox entre múltiplas pessoas em tempo real usando o Flet.',
      lang1: 'python',
      lang2: 'flet',
      lang3: '',
      lang4: '',
    },
  ];

  return(
    <div className='inline-grid grid-cols-1 lg:grid-cols-2 gap-14'>
      {backendData.map((data, index) => (
        <Constructor key={index} {...data} />
      ))}
    </div>
  )
}

export default Backend;