import React from 'react'
import Heading from './Heading'
import Image from 'next/image'

function Community() {
  return (
    <div className='w-full h-[700px] laptop:h-[900px] flex flex-col items-center justify-center gap-8 laptop:gap-16 relative px-4 laptop:px-0'>
      <div className='absolute w-full h-[50%] flex flex-col blur-lg'>
        <div className='w-full rotate-6 top-[50px] h-[50%] relative hidden laptop:block'>
          <Image src="/assets/community_img1.png" alt="community" fill className='object-cover' />
        </div>
        <div className='w-full h-[50%] bottom-[50px] relative hidden laptop:block'>
          <Image src="/assets/community_img2.png" alt="community" fill className='object-cover' />
        </div>
      </div>
      <Heading title="Simplify Community Building"/>
      <p className='w-full laptop:w-[70%] text-center font-nohemi300 text-white text-xl laptop:text-4xl'>
        A unified platform for blockchain communities to connect, govern, and grow together. Manage everything from one place with token-gated access.
      </p>
    </div>
  )
}

export default Community