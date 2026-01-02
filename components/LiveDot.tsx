import React from 'react'

const LiveDot = () => {
  return (
    <div className='absolute top-2 right-2'>
        <div className='w-16 h-8 bg-neutral-800 rounded-2xl flex justify-center items-center gap-1'>
            <div className='w-2 h-2 bg-green-500 top-3 left-2.5 rounded-2xl animate-pulse 2s'>
            </div>
            <div className='text-xs font-medium tracking-tight'>
              Active
            </div>
        </div>
    </div>
  )
}

export default LiveDot