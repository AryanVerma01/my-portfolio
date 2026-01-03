import React from 'react'
import Techblocks from './Techblocks'
import react from "../public/React.svg"
import nextJS from "../public/nextJS.svg"
import typescript from "../public/typescript.svg"
import postgres from "../public/postgres.svg"
import express from "../public/Express.svg"
import bun from "../public/bun.svg"
import supabase from "../public/supabase-logo-icon.svg"
import mongodb from "../public/mongodb-icon.svg"
import rust from '../public/rust.svg'
import git from '../public/git-scm-icon.svg'
import aws from "../public/aws-2.svg"
import docker from "../public/docker-4.svg"
import solidity from "../public/solidity.svg"
import ethereum from '../public/ethereum-eth.svg'
import metamask from '../public/metamask.svg'
import solana from "../public/solana.svg"
import tailwindcss from '../public/tailwind-css-2.svg'
 
const Skills = () => {
  return (
    <div className='w-full h-fit py-10 pb-2'>
        <div className='text-2xl font-bold my-10 mb-6'>Skills</div>
            <div className='flex flex-wrap gap-2'>
              
                <div className='w-full text-sm font-medium tracking-tight text-neutral-500'>frontend & Backend</div>
                <Techblocks src={react}>React</Techblocks>
                <Techblocks src={nextJS}>NextJS</Techblocks>
                <Techblocks src={typescript}>Typescript</Techblocks>
                <Techblocks src={tailwindcss}>TailwindCSS</Techblocks>
                <Techblocks src={bun}>Bun</Techblocks>
                <Techblocks src={express}>express</Techblocks>
                <Techblocks src={postgres}>Postgres</Techblocks>
                <Techblocks src={mongodb}>MongoDB</Techblocks>
                <Techblocks src={supabase}>Supabase</Techblocks>
                <div className='w-full text-sm font-medium tracking-tight text-neutral-500 mt-4'>Tools & Utilities</div>
                <Techblocks src="/figma.png" className='w-20'>Figma</Techblocks>
                <Techblocks src={git}>Git</Techblocks>
                <Techblocks src={aws}>aws</Techblocks>
                <Techblocks src={docker}>Docker</Techblocks>
                <div className='w-full text-sm font-medium tracking-tight text-neutral-500 mt-4'>Web3</div>
                <Techblocks src={solana}>Solana</Techblocks>
                <Techblocks src={rust} className='w-20'>Rust</Techblocks>
                <Techblocks src={solidity}>Solidity</Techblocks>
                <Techblocks src={ethereum}>Ethereum</Techblocks>
                <Techblocks src={metamask}>Metamask</Techblocks>
            </div>
    </div>
  )
}

export default Skills