"use client"
import React, { useState } from "react";
import Image from "next/image";


const HardSkills = () =>{
  const textoPadrao = "*Passe o cursor do mouse sob os cards*";

  const [boxTexto, setBoxTexto] = useState<string>(textoPadrao);

  const alterarTexto = (novoTexto: string) =>{
    setBoxTexto(novoTexto);
  };
  const restaurarTextoPadrao = () => {
    setBoxTexto(textoPadrao);
  };


  return(
    <div className="layoutCenter mt-16 sm:mt-36">
      <h2 className="fontSection mb-12">Habilidades</h2>

      <div className="flex flex-col md:flex-row bg-white dark:bg-zinc-850 rounded-sm min-w-0 max-w-screen-lg mx-auto p-2.5">
        <div className="hidden sm:block p-2 mb-1 md:mb-0 w-full md:w-1/2 h-36 md:h-full text-left">
          <p className="opacity-90">{boxTexto}</p>
        </div>

        <div className="w-full md:w-1/2 gap-2 flex flex-wrap justify-center md:justify-end">

          <Image className="imgTecs" 
          src='/assets/images/tecs/HTML.png' alt='Html5' width='90' height='90' 
          onMouseEnter={() =>
          alterarTexto("HTML (Hypertext Markup Language) é a linguagem de marcação usada para criar e estruturar conteúdo em páginas da web")}
          onMouseLeave={restaurarTextoPadrao}/>

          <Image className="imgTecs" 
          src='/assets/images/tecs/CSS.png' alt='Css3' width='90' height='90'
          onMouseEnter={() =>
          alterarTexto("CSS (Cascading Style Sheets) é uma linguagem de estilo usada para controlar a aparência e o layout de elementos HTML. Ele permite definir cores, fontes, tamanhos, espaçamento e posicionamento de elementos, tornando possível personalizar o design de um site.")}
          onMouseLeave={restaurarTextoPadrao}/>

          <Image className="imgTecs" 
          src='/assets/images/tecs/JS.png' alt='Javascript' width='90' height='90' 
          onMouseEnter={() =>
          alterarTexto("JavaScript é uma linguagem de programação amplamente utilizada para tornar as páginas da web interativas e dinâmicas. Em resumo, o JavaScript é a linguagem que dá vida e interatividade às páginas da web.")}
          onMouseLeave={restaurarTextoPadrao} />

          <Image className="imgTecs" 
          src='/assets/images/tecs/TYPESCRIPT2.png' alt='Typescript' width='90' height='90'
          onMouseEnter={() =>
          alterarTexto(`TypeScript é um ${`"superset"`} da linguagem JavaScript que adiciona tipagem estática ao código. Isso significa que o TypeScript permite declarar tipos de dados para variáveis, funções e objetos, tornando o código mais seguro e legível.`)}
          onMouseLeave={restaurarTextoPadrao} />

          <Image className="imgTecs" 
          src='/assets/images/tecs/TAILWIND.png' alt='Tailwind' width='90' height='90'
          onMouseEnter={() =>
          alterarTexto("Tailwind CSS é um framework de design que oferece classes CSS utilitárias predefinidas para estilizar e estruturar rapidamente páginas da web, simplificando o desenvolvimento de interfaces modernas e altamente personalizáveis.")}
          onMouseLeave={restaurarTextoPadrao} />

          <Image className="imgTecs" 
          src='/assets/images/tecs/STYLED-COMPONENTS.png' alt='styled-components' width='90' height='90'
          onMouseEnter={() =>
          alterarTexto("Styled-components é uma biblioteca para estilização de componentes em aplicações web, que permite escrever estilos usando JavaScript.")}
          onMouseLeave={restaurarTextoPadrao} />

          <Image className="imgTecs" 
          src='/assets/images/tecs/REACT.png' alt='React' width='90' height='90'
          onMouseEnter={() =>
          alterarTexto("React é uma biblioteca de código aberto para a criação de interfaces de usuário em aplicações web. Permitindo a construção de interfaces interativas e reativas através da composição de componentes reutilizáveis.")}
          onMouseLeave={restaurarTextoPadrao} />

          <Image className="imgTecs" 
          src='/assets/images/tecs/NEXT.png' alt='NextJs' width='90' height='90'
          onMouseEnter={() =>
          alterarTexto("Next.js é um framework de código aberto para o desenvolvimento de aplicações web, construído em cima do React. Projetado para oferecer desempenho, escalabilidade e facilidade de desenvolvimento.")}
          onMouseLeave={restaurarTextoPadrao} />

          <Image className="imgTecs" 
          src='/assets/images/tecs/MYSQL.png' alt='MySQL' width='90' height='90' 
          onMouseEnter={() =>
          alterarTexto("MySQL é um sistema de gerenciamento de banco de dados relacional (SGBD) de código aberto amplamente utilizado. Confiável, escalável e perfomático, é uma das escolhas mais populares para uso em aplicativos da web e de negócios.")}
          onMouseLeave={restaurarTextoPadrao} />

          <Image className="imgTecs" 
          src='/assets/images/tecs/GIT.png' alt='Git' width='90' height='90' 
          onMouseEnter={() =>
          alterarTexto("Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear e gerenciar mudanças no código-fonte de projetos de software. Usado em projetos de código aberto e em ambientes de desenvolvimento de software em todo o mundo.")}
          onMouseLeave={restaurarTextoPadrao} />

        </div>
      </div>
    </div>
  )
}

export default HardSkills;