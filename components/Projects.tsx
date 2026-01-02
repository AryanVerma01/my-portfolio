import Cards from './Cards'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='mt-20 flex flex-col gap-6'>
        <div className='text-2xl font-bold mb-8'>Projects</div>
        <Cards/>
          <div className='cursor-pointer hover:bg-neutral-800 hover:text-neutral-300 hover:-translate-y-0.5 transition-all delay-100   mx-auto text-xs font-medium text-neutral-400 tracking-tight border   border-neutral-500 px-2 py-1 rounded-2xl bg-neutral-900'>
        <Link href='/allprojects' className='flex justify-center items-center'>
            <div >View all projects</div>
            <ChevronDown className='w-5'/> 
        </Link>
          </div>
    </div>
  )
}

export default Projects