import NavBar from '@/components/NavBar/Desktop/NavBar';
import NavigationMobile from '@/components/NavBar/Mobile/NavigationMobile';
import Title from '@/components/Title/Tittle';
import ToggleButton from '@/components/Toggle/ToggleButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='font-montserrat'>
      <NavBar />
      <NavigationMobile />
      <ToggleButton />
      <Title />
    </div>
  )
}
