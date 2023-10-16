import Image from "next/image";

const AboutMe = ()=> {
 return(
  <div className="flex flex-col items-center mt-10 mx-0 sm:mt-10 xs:mx-6 sm:mx-0">

    <div className="flex flex-col p-4 w-full xs:max-w-screen-lg bg-zinc-50 dark:bg-zinc-850 rounded-none xs:rounded-md drop-shadow-lg mt-10 sm:mt-12 sm:w-4/5">

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
        <div className="flex justify-center">
          <div className="w-full h-64 sm:h-[410px] overflow-hidden rounded-sm flex items-center justify-center lg:w-96 lg:h-96 hover:xs:h-72 hover:sm:h-[410px] transition-all duration-300">
            <Image className="rounded-sm"
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

          <h4 className="text-lg md:text-xl">Desenvolvedor Web</h4>

          <p className="mt-2 md:mt-4 text-sm text-left sm:text-base">Desde sempre fui apaixonado por tecnologia e com um sonho de trabalhar em alguma área dela, hoje no desenvolvimento web posso tornar meu sonho em realidade. Já tive experiências no passado como Designer Gráfico no Photoshop e Illustrator, mas atualmente venho me especializando em programação, especificamente, utilizando a linguagem JavaScript. Sou extremamente motivado e sempre estou em constante desenvolvimento de minhas habilidades.</p>

          <div className="flex flex-wrap items-center mt-2 md:mt-4 gap-4">
            <a href="." className="uppercase rounded-sm px-5 py-2 text-zinc-200 dark:text-zinc-700 hover:text-redPink hover:scale-105 transition-all duration-200 bg-zinc-700 dark:bg-zinc-200 font-medium tracking-wider">Currículo</a>

            <a href="."><Image src='/assets/images/contact/linkedin.png' alt='html' width='36' height='36' /></a>

            <a href="."><Image src='/assets/images/contact/git-hub.png' alt='html' width='36' height='36' /></a>

            <a href="."><Image src='/assets/images/contact/whats.png' alt='html' width='36' height='36' /></a>

            <a href="."><Image src='/assets/images/contact/insta.png' alt='html' width='36' height='36' /></a>

            <a href="."><Image src='/assets/images/contact/gmail.png' alt='html' width='36' height='36' /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
 )
}

export default AboutMe;