import Profile from "../public/vercel.svg"
import Image from 'next/image'
import { TextLoop } from './motion-primitives/text-loop'
import { Text } from 'lucide-react'
import { TextLoopBasic } from './Textloop'
import Techblocks from './Techblocks'
import bun from "../public/bun.svg"
import Express from "../public/Express.svg"
import nextJS from "../public/nextJS.svg"
import typescript from "../public/typescript.svg"
import React from "../public/React.svg"
import postgres from "../public/postgres.svg"
import bitcoin from "../public/bitcoin.svg"
import { Button } from "./ui/button"
import send from "../public/send.svg"
import document from "../public/document.svg"

const HeroSection = () => {
  return (
    <div className= 'h-fit w-full mt-20 '>
        <div className=''> 
            <Image className='w-20' src={Profile} alt="profile"></Image>
        </div> 
        <div>
            <div className='text-3xl tracking-tight font-bold min-h-30 sm:min-h-0'>
                <span className="font-semibold">Hi, I'm Aryan — </span> <TextLoopBasic/> 
            </div>
            <div className='text-sm text-neutral-400 leading-10 items-center md:mt-3 lg:mt-6 lg:text-[16px]'>
                 I design and develop immersive digital experiences using <Techblocks src={typescript}>Typescript</Techblocks> , <Techblocks src={React}>React</Techblocks> , <Techblocks src={nextJS}>NextJS</Techblocks>  ,  <Techblocks src={bun}>Bun</Techblocks>  ,  <Techblocks src={Express}>Express</Techblocks> and <Techblocks src={postgres}>Postgres</Techblocks> . Specializing in <span className="text-white font-semibold">UI / UX</span> design, <span className="text-white font-semibold">GSAP</span> for interactive 3D, and  <Techblocks src={bitcoin}>Web 3</Techblocks> technologies for decentralized applications. 
            </div>
        </div>
        <div className="flex gap-2 mt-6 mx-auto">
          <Button variant="secondary" className="hover:-translate-y-1 transition-all delay-50 text-sm font-semibold tracking-tight border border-neutral-500 border-dashed cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" text-white icon w-5 h-5 icon-tabler icons-tabler-outline icon-tabler-file-description"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 17h6" /><path d="M9 13h6" /></svg>
            Resume / CV
            </Button>
          <Button variant={'default'} className="hover:-translate-y-1 transition-all delay-50 text-sm font-semibold tracking-tight cursor-pointer">
            <Image src={send} className="w-5 h-5" alt=""></Image>
            Get in Touch
            </Button> 
        </div>
    </div>
  )
}

export default HeroSection