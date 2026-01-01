import React from 'react'
import { twMerge } from "tailwind-merge"
import Image from 'next/image'

const Techblocks = ({ children, className, src }: {
  children: React.ReactNode,
  className?: string,
  src: string
}) => {
  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-1 w-fit text-white text-[13px] leading-none border border-neutral-500 border-dashed px-3 py-1.5 rounded-lg bg-neutral-800',
        className
      )}
    >
      <Image src={src} className='w-4 h-4' alt='' />
      <span className='font-semibold'>{children}</span>
    </span>
  )
}

export default Techblocks