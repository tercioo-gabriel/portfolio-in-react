import Image from 'next/image';
import Frontend from './FrontEnd';

const Projects = () => {
  return(
    <div className="layoutCenter flex flex-col bg-gray-400">
      <h2 className="fontSection">Projetos</h2>
      <div className="flex mx-auto items-center gap-4 uppercase">
        <button className="p-2 bg-cyan-100">FrontEnd</button>
        <div className="w-1 h-8 bg-cyan-100"></div>
        <button className="p-2 bg-cyan-100">BackEnd</button>
      </div>
      <Frontend />
    </div>
  )
}
export default Projects;