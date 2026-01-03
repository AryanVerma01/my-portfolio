import React from 'react'
import avatar from "../public/Avatar.png"
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div>
        <div className='text-2xl font-bold mt-16 my-10'>About Me</div>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
            <div><Image src={avatar} alt='avatar' className='min-w-50 min-h-50 bg-neutral-500 rounded-2xl'></Image></div>
            <div className='text-sm text-neutral-400'>
                <div className='text-2xl font-semibold tracking-tight text-white my-2'>Aryan Verma</div>
                I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's.</div>
        </div>
    </div>
  )
}

export default AboutMe