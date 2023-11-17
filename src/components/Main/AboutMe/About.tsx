import Image from "next/image";

const AboutMe = ()=> {
 return(
  <div id="about-me" className="flex flex-col items-center mx-0">

    <div className="flex flex-col p-4 w-full xs:max-w-screen-lg bg-zinc-50 dark:bg-zinc-850 rounded-none xs:rounded-md drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark mt-10 mb-16 sm:mt-12 sm:w-4/5">

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
        <div className="flex justify-center">
          <div className="w-full h-64 sm:h-[410px] overflow-hidden rounded-sm flex items-center justify-center lg:w-96 lg:h-96 hover:xs:h-72 hover:sm:h-[410px] hover:lg:h-[384px] transition-all duration-300">
            <Image className="rounded-sm lg:border-l-4 border-redPink"
            src='/assets/images/me-1000px.png'
            alt='Foto minha'
            layout='responsive'
            width='160' height='160'
            objectFit="cover" />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <span className="text-redPink font-semibold text-base md:text-lg">Quem sou</span>

          <h3 className="mt-1.5 font-medium text-xl sm:text-2xl md:text-3xl">Tércio Gabriel de Jesus</h3>

          <h4 className="-mt-1 text-lg md:text-xl">Desenvolvedor Web</h4>

          <p className="mt-3 md:mt-4 text-sm text-left sm:text-base">Desde sempre, nutri em mim uma paixão pela tecnologia e mantive o sonho de construir minha carreira nesse campo. Minhas experiências anteriores, como Designer Gráfico, forneceram um alicerce bom em Design, mas meu foco atual segue na especialização em programação, com ênfase na linguagem JavaScript. Sinto-me profundamente motivado e permaneço no aprimoramento contínuo das minhas habilidades.</p>

          <div className="flex flex-wrap items-center mt-4 gap-4 duration-150">
            <a href="/Curriculo normal 2023.pdf" download className="uppercase rounded-sm px-5 py-2 bg-zinc-50 dark:bg-zinc-800 transition-all drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark hover:border-redPink hover:dark:border-redPink  hover:dark:text-white font-medium tracking-wider sm:hover:-translate-y-1 sm:hover:-translate-x-0.5">Currículo</a>

            <a href="https://www.linkedin.com/in/terciogabrieldejesus/" target="_blank" className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all sm:hover:-translate-y-1 sm:hover:-translate-x-0.5"><Image src='/assets/images/contact/linkedin-red.png' alt='html' width='26' height='26' /></a>

            <a href="https://github.com/tercioo-gabriel" target="_blank" className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all sm:hover:-translate-y-1 sm:hover:-translate-x-0.5"><Image src='/assets/images/contact/github-red.png' alt='html' width='26' height='26' /></a>

            <a href="https://contate.me/tercioo-gabriel" target="_blank" className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all sm:hover:-translate-y-1 sm:hover:-translate-x-0.5"><Image src='/assets/images/contact/whats-red.png' alt='html' width='26' height='26' /></a>

            <a href="https://www.instagram.com/tercio.gabriel/" target="_blank" className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all sm:hover:-translate-y-1 sm:hover:-translate-x-0.5"><Image src='/assets/images/contact/insta-red.png' alt='html' width='26' height='26' /></a>

            <a href="mailto:terciogabrieldejesus@gmail.com" target="_blank" className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all sm:hover:-translate-y-1 sm:hover:-translate-x-0.5"><Image src='/assets/images/contact/gmail-red.png' alt='html' width='26' height='26' /></a>
          </div>
        </div>
      </div>
    </div>

    <h4 className="font-semibold uppercase tracking-wider opacity-90">Experiência</h4>

    <div className="flex flex-col mt-2 rounded-none md:flex-row sm:mt-4 sm:w-4/5 sm:rounded-md xs:max-w-screen-lg sm:gap-3">
      <div className="text-center w-full py-3 px-3 bg-zinc-50 dark:bg-zinc-850 text-sm drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark md:w-1/3 xs:text-left sm:rounded-md sm:text-base sm:py-2 sm:px-6 hover:scale-105 transition-all duration-300">
        
        <h4 className="font-semibold text-redPink text-base sm:text-lg">Desenvolvedor Web</h4>

        <p className="font-medium mb-2">Freelancer <span className="italic text-sm">(2023/05 - atual)</span></p>
        <p>Tenho trabalhado em muitos projetos com foco no FrontEnd, usando as tecnologias atuais para criação, estilização e deploy de websites modernos e responsivos. E também, em menor escala, alguns projetos de BackEnd.</p>
        
      </div>

      <div className="text-center w-full py-3 px-3 bg-zinc-50 dark:bg-zinc-850 text-sm drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark md:w-1/3 xs:text-left sm:rounded-md sm:text-base sm:py-2 sm:px-6 hover:scale-105 transition-all duration-300">

        <h4 className="font-semibold text-redPink text-base sm:text-lg">Servidor Público Ambiental</h4>

        <p className="font-medium mb-2 text-base">Prefeitura de Várzea Nova <span className="italic text-sm">(2022/05 - atual)</span></p>
        <p>Lido com problemas diários, organizo e auxilio as limpezas das praças da cidade. Aprimorei principalmente minhas habilidades interpessoais como: Comunicação, adaptabilidade, trabalho em equipe e liderança de equipe.</p>
      </div>

      <div className="text-center w-full py-3 px-3 bg-zinc-50 dark:bg-zinc-850 text-sm drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark md:w-1/3 xs:text-left sm:rounded-md sm:text-base sm:py-2 sm:px-6 hover:scale-105 transition-all duration-300">

        <h4 className="font-semibold text-redPink text-base sm:text-lg">Designer Gráfico e Editor</h4>

        <p className="font-medium mb-2">Freelancer <span className="italic text-sm">(2019/01 - atual)</span></p>
        <p>Trabalho ocasionalmente como designer gráfico e editor de vídeos nas ferramentas Adobe (Photoshop e Illustrator). Faço posts de media social, cartões e logotipos.</p>
      </div>
    </div>
  </div>
 )
}

export default AboutMe;