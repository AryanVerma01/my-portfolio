import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { ModeToggle } from './ModeTogle'
import Image from 'next/image'
import { Button } from './ui/button'
import avatar from '../public/Avatar.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center pt-6 px-4 py-2 top-0'>
        <div className='w-10 h-10'>
          <Image src={avatar} alt="Logo" width={64} height={64} className='rounded'/>
        </div>
        <div className='hidden lg:flex lg:justify-center lg:gap-6 text-sm'>
            <Link href="/allprojects" className="hover:text-neutral-300 hover:scale-108 font-semibold transition-colors">Projects</Link>
            <Link href="/designs" className="hover:text-neutral-300 hover:scale-108 font-semibold transition-colors">Designs</Link>
            <Link href="/Contact" className="hover:text-neutral-300 hover:scale-108 font-semibold transition-colors">Contact</Link>
        </div>
        <div className='flex items-center gap-2'>
            <Input className="hidden lg:block w-48" type="text" placeholder="Search CTRL+K" />
            <ModeToggle/>
            <div className="lg:hidden">
                <Button size="icon">
                  <Image src="/hamburger.svg" alt="Menu" width={20} height={20} />
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar