import React from 'react'
import { WobbleCard } from './ui/wobble-card'
import Image from 'next/image'
import bitcoin from "../public/bitcoin.svg"
import Cards from './Cards'

const Projects = () => {
  return (
    <div className='mt-20 flex flex-col gap-6'>
        <div className='text-2xl font-bold mb-8'>Projects</div>
        <Cards/>
    </div>
  )
}

export default Projects