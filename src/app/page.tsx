"use client"
import { useState } from 'react';
import NavBar from '@/components/NavBar/Desktop/NavBar';
import NavigationMobile from '@/components/NavBar/Mobile/NavigationMobile';
import Scroll from '@/components/Scroll/Scroll';
import Title from '@/components/Main/Title/Tittle';
import ToggleButton from '@/components/Toggle/ToggleButton';
import AboutMe from '@/components/Main/AboutMe/About';
import HardSkills from '@/components/Main/Skills/Skills';
import Projects from '@/components/Main/Projects/Projects';
import Contact from '@/components/Main/Contacts/Contacts';
import Footer from '@/components/Main/Footer/Footer';

 const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState<'light' | 'dark'>('light');

  const toggleDarkMode = () => {
    setDarkMode(darkMode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='font-montserrat'>
      <NavBar />
      <NavigationMobile />
      <ToggleButton onClick={toggleDarkMode} toggleTheme={toggleDarkMode} themes={darkMode}/>
      <Title />
      <Scroll />
      <AboutMe />
      <HardSkills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;