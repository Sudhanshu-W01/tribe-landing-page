import Image from 'next/image'
import React from 'react'

function Heading({title}: {title: string}) {
  return (
    <div className='w-full h-fit flex flex-col items-center gap-4 laptop:gap-8'>
      <div>
        <Image 
          src="/assets/heading_icon.png" 
          alt="heading" 
          width={25} 
          height={25}
          className='w-[25px] h-[25px] laptop:w-[35px] laptop:h-[35px]' 
        />
      </div>
      <p className='font-nohemi300 text-[#CCD0D7] text-lg laptop:text-2xl text-center px-4 laptop:px-0'>
        {title}
      </p>
    </div>
  )
}

export default Heading;