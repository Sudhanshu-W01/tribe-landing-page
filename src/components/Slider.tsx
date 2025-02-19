"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const partnerLogos = [
  '/assets/fuse_icon.png',
  '/assets/Monad_icon.png',
  '/assets/XDC_icon.png',
  '/assets/Xion_icon.png',
];

function Slider() {
  return (
    <div className='w-full border border-[#AFAFAF]/50 bg-primary h-[180px] laptop:h-[200px] rounded-3xl laptop:rounded-full p-2 laptop:p-1.5 mx-auto px-4 laptop:px-0'>
      <div className='w-full h-full flex flex-col laptop:flex-row gap-4 border border-[#AFAFAF]/50 rounded-3xl laptop:rounded-full'>
        {/* Title Section */}
        <div className='w-full laptop:w-[40%] h-[45%] laptop:h-full font-nohemi400 text-white text-lg laptop:text-4xl border-b laptop:border-b-0 laptop:border-r border-[#AFAFAF]/50 flex items-center justify-center p-2 laptop:px-10'>
          <p className='text-center laptop:text-left max-w-[280px] laptop:max-w-none'>
            Trusted by Leading Innovators
          </p>
        </div>

        {/* Slider Section */}
        <div className='w-full laptop:w-[60%] h-[55%] laptop:h-full flex flex-row items-center justify-center relative overflow-hidden laptop:rounded-tr-full laptop:rounded-br-full'>
          {/* Gradient Overlays */}
          <div className='absolute w-full h-full z-20'
            style={{
              background: "linear-gradient(180deg, rgba(14,15,12,1) 0%, rgba(0,0,0,0) 50%, rgba(14,15,12,1) 100%)"
            }}
          />
          <div className="absolute inset-0 z-10 h-full w-full bg-[#0E0F0C] bg-[linear-gradient(to_right,#B0E681_1px,transparent_1px),linear-gradient(to_bottom,#B0E681_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.05]" />

          {/* Infinite Horizontal scroll animation */}
          <motion.div 
            className="flex flex-row gap-10 laptop:gap-20"
            animate={{
              x: [0, -1035],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* First set of images */}
            <div className="flex flex-row gap-10 laptop:gap-20">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="w-[80px] h-[80px] laptop:w-[120px] laptop:h-[120px] relative flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`partner ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex flex-row gap-10 laptop:gap-20">
              {partnerLogos.map((logo, index) => (
                <div key={`duplicate-${index}`} className="w-[80px] h-[80px] laptop:w-[120px] laptop:h-[120px] relative flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`partner ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Slider;