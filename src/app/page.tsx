import NavBar from '@/components/NavBar/Desktop/NavBar';
import NavBarMobile from '@/components/NavBar/Mobile/NavBarMob';
import NavigationMobile from '@/components/NavBar/Mobile/NavigationBarMob';
import ToggleButton from '@/components/Toggle/ToggleButton';

import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-orange-200 m-0 p-0'>
      <NavBarMobile />
      <NavBar />
      <ToggleButton />
      <NavigationMobile />
      <div className='w-10 h-10 bg-green-400'></div>
      <div className='w-full h-10 bg-green-400'></div>
    </div>
  )
}
