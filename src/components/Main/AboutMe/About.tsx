import Image from "next/image";

const AboutMe = ()=> {
 return(
  <div className="flex flex-col items-center mx-0 xs:mx-6 sm:mx-0">

    <div className="flex flex-col p-4 w-full xs:max-w-screen-lg bg-zinc-50 dark:bg-zinc-850 rounded-none xs:rounded-md drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark mt-10 sm:mt-12 sm:w-4/5">

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

          <p className="mt-3 md:mt-4 text-sm text-left sm:text-base">Desde sempre, nutri em mim uma paixão pela tecnologia e mantive o sonho de construir minha carreira nesse campo. Minhas experiências anteriores, como Designer Gráfico, forneceram um alicerce sólido, mas meu atual foco reside na especialização em programação, com ênfase na linguagem JavaScript. Sinto-me profundamente motivado e permaneço imerso no aprimoramento contínuo das minhas habilidades.</p>

          <div className="flex flex-wrap items-center mt-4 gap-4">
            <a href="." className="uppercase rounded-sm px-5 py-2 bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark hover:border-redPink hover:dark:border-redPink transition-all duration-150 hover:dark:text-white font-medium tracking-wider">Currículo</a>

            <a href="." className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all duration-150"><Image src='/assets/images/contact/linkedin-red.png' alt='html' width='26' height='26' /></a>

            <a href="." className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all duration-150"><Image src='/assets/images/contact/github-red.png' alt='html' width='26' height='26' /></a>

            <a href="." className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all duration-150"><Image src='/assets/images/contact/whats-red.png' alt='html' width='26' height='26' /></a>

            <a href="." className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all duration-150"><Image src='/assets/images/contact/insta-red.png' alt='html' width='26' height='26' /></a>

            <a href="." className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all duration-150"><Image src='/assets/images/contact/gmail-red.png' alt='html' width='26' height='26' /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
 )
}

export default AboutMe;