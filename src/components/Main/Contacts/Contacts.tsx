import Image from "next/image";

const Contact = () => {
  return(
    <div className="layoutCenter flex flex-col">

      <h2 className="text-lg uppercase font-medium tracking-widest">c o n t a t o</h2>
      <h2 className="absolute opacity-10 left-1/2 -ml-[88px] -mt-1 text-3xl uppercase font-bold tracking-widest select-none hidden sm:block">Contato</h2>

      <form 
        className="flex flex-col mt-20 gap-4 mx-auto min-w-[100%] sm:min-w-[90%] lg:min-w-[768px]"
        action="https://formsubmit.co/terciogabrieldejesus@gmail.com"
        method="POST">
        <label htmlFor=""></label>
        <input 
          className="outline-none rounded-md h-10 p-3 dark:bg-zinc-900 dark:text-zinc-200"
          type="text" 
          name="nome" 
          placeholder="Digite seu nome" required />
          <input 
          className="outline-none rounded-md h-10 p-3 dark:bg-zinc-900 dark:text-zinc-200"
          type="email" 
          name="nome" 
          placeholder="Digite seu e-mail" required />
        <textarea
          className="rounded-md h-48 p-3 resize-none outline-none dark:bg-zinc-900 dark:text-zinc-200 sm:h-60" 
          name="conteúdo"
          required
          maxLength={320}
          placeholder="Mande sua mensagem aqui"></textarea>

        <div className="flex flex-row gap-1 sm:gap-6">
          <button 
            className="rounded-sm px-3.5 py-1 font-semibold tracking-wider border-2 border-zinc-600 dark:border-zinc-300 hover:border-0 hover:bg-redPink hover:text-zinc-200 transition duration-200 sm:px-7 sm:py-1.5"
            type="submit"> Enviar
          </button>

          <a href="https://www.linkedin.com/in/terciogabrieldejesus/" target="_blank" className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all sm:hover:-translate-y-1 sm:hover:-translate-x-0.5 duration-150"><Image src='/assets/images/contact/linkedin-red.png' alt='html' width='26' height='26' /></a>

          <a href="https://github.com/tercioo-gabriel" target="_blank" className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all sm:hover:-translate-y-1 sm:hover:-translate-x-0.5 duration-150"><Image src='/assets/images/contact/github-red.png' alt='html' width='26' height='26' /></a>

          <a href="https://contate.me/tercioo-gabriel" target="_blank" className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all sm:hover:-translate-y-1 sm:hover:-translate-x-0.5 duration-150"><Image src='/assets/images/contact/whats-red.png' alt='html' width='26' height='26' /></a>

          <a href="https://www.instagram.com/tercio.gabriel/" target="_blank" className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all sm:hover:-translate-y-1 sm:hover:-translate-x-0.5 duration-150"><Image src='/assets/images/contact/insta-red.png' alt='html' width='26' height='26' /></a>

          <a href="mailto:terciogabrieldejesus@gmail.com" target="_blank" className="bg-zinc-50 dark:bg-zinc-800 drop-shadow-buttonDrop dark:drop-shadow-buttonDropDark p-1.5 rounded-sm hover:border-redPink hover:dark:border-redPink transition-all sm:hover:-translate-y-1 sm:hover:-translate-x-0.5 duration-150"><Image src='/assets/images/contact/gmail-red.png' alt='html' width='26' height='26' /></a>
        </div>
        <input type="hidden" name="_subject" value="Contato Dev (Freela/Job) !!"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="text" name="_honey" style={{display: 'none'}}></input>
      </form>
    </div>
  )
}

export default Contact;