import NavBar from '@/components/NavBar/Desktop/NavBar';
import NavigationMobile from '@/components/NavBar/Mobile/NavigationMobile';
import Scroll from '@/components/Scroll/Scroll';
import Title from '@/components/Main/Title/Tittle';
import ToggleButton from '@/components/Toggle/ToggleButton';
import AboutMe from '@/components/Main/AboutMe/About';
import HardSkills from '@/components/Main/Skills/Skills';
import Projects from '@/components/Main/Projects/Projects';
import Contact from '@/components/Main/Contacts/Contacts';

export default function Home() {
  return (
    <div className='font-montserrat mb-80'>
      <NavBar />
      <NavigationMobile />
      <ToggleButton />
      <Title />
      <Scroll />
      <AboutMe />
      <HardSkills />
      <Projects />
      <Contact />
    </div>
  )
}
