import classes from "./NavigatiobBarMob.module.css"

const NavigationMobile = ()=> {
  return(
    <div className="w-4/5 bg-green-700 flex flex-col text-center">
      <ul className="text-center text-slate-800 dark:text-slate-100 font-light">

        <li className="mt-3 border-b-1">
          <a className={classes.a} href="">Início</a>
        </li>

        <li className="">
          <a className={classes.a} href="">Sobre Mim</a>
        </li>

        <li className="">
          <a className={classes.a} href="">Habilidades</a>
        </li>

        <li className="">
          <a className={classes.a} href="">Projetos</a>
        </li>
          
        <li className="mb-3">
          <a className={classes.a} href="">Contato</a>
        </li>
      </ul>
    </div>
  )
}

export default NavigationMobile;