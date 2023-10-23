import { BiChevronsDown } from 'react-icons/bi';

const Scroll = () => {
  return(
    <div className="flex justify-center mb-20 mt-36 sm:mt-56 lg:mt-6 lg:mb-44">
      <div className="w-6 h-14 rounded-full border-2 border-gray-700 dark:border-gray-300">

        
        <BiChevronsDown className='mx-auto my-1 -ml-0.5 text-2xl text-zinc-700 dark:text-gray-50 translate-y' />
      </div>
    </div>
  )
}

export default Scroll;