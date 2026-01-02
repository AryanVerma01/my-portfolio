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
    <div className='w-full h-fit px-4 py-10'>
        <div className='text-2xl font-bold my-10'>Skills</div>
            <div className='flex flex-wrap gap-2'>
                <Techblocks src={react}>React</Techblocks>
                <Techblocks src={nextJS}>NextJS</Techblocks>
                <Techblocks src={typescript}>Typescript</Techblocks>
                <Techblocks src={bun}>Bun</Techblocks>
                <Techblocks src={express}>express</Techblocks>
                <Techblocks src={postgres}>Postgres</Techblocks>
                <Techblocks src={mongodb}>MongoDB</Techblocks>
                <Techblocks src={supabase}>Supabase</Techblocks>
                <Techblocks src={rust} className='w-20'>Rust</Techblocks>
                <Techblocks src="/figma.png" className='w-20'>Figma</Techblocks>
                <Techblocks src={git}>Git</Techblocks>
                <Techblocks src={aws}>aws</Techblocks>
                <Techblocks src={docker}>Docker</Techblocks>
                <Techblocks src={solidity}>Solidity</Techblocks>
                <Techblocks src={ethereum} ></Techblocks>
            </div>
    </div>
  )
}

export default Skills