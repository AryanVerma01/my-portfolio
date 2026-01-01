import React from 'react'
import Link from 'next/link'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@radix-ui/react-tooltip'
import { Button } from './ui/button'

const IconBar = () => {
  return (
    <TooltipProvider>
    <div className='flex gap-3 text-neutral-400 mt-8 hover:text-xs font-semibold'>
        <div>
            <Link href="/">
            <Tooltip>
                <TooltipTrigger asChild>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-white hover:-translate-y-0.5 delay-50 icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                </TooltipTrigger>
                <TooltipContent className='bg-neutral-700 transition-all delay-200 text-white px-2 py-1 rounded-md mb-1'>
                    <p>Twitter</p>
                </TooltipContent>
            </Tooltip>
            </Link>
        </div>
        <div>
            <Link href="/">
            <Tooltip>
                <TooltipTrigger asChild>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-white hover:-translate-y-0.5 delay-50 icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </TooltipTrigger>
                <TooltipContent className='bg-neutral-700 transition-all delay-10 text-white px-2 py-1 rounded-md mb-1'>
                    <p>Github</p>
                </TooltipContent>
            </Tooltip>
            </Link>
        </div>
        <div>
        <Link href="/">
            
            <Tooltip>
                <TooltipTrigger asChild>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-white hover:-translate-y-0.5 delay-50 icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                </TooltipTrigger>
                <TooltipContent className='bg-neutral-700 transition-all delay-10 text-white px-2 py-1 rounded-md mb-1'>
                    <p>Linkedin</p>
                </TooltipContent>
            </Tooltip>
            </Link>
        </div>
        <div>
        <Link href="/">
            
            <Tooltip>
                <TooltipTrigger asChild>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-white hover:-translate-y-0.5 delay-50 icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </TooltipTrigger>
                <TooltipContent className='bg-neutral-700 transition-all delay-10 text-white px-2 py-1 rounded-md mb-1'>
                    <p>Email</p>
                </TooltipContent>
            </Tooltip>
            </Link>
        </div>
    </div>
    </TooltipProvider>
  )
}

export default IconBar