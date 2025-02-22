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
  // Adjust total width based on new sizes
  const totalWidth = partnerLogos.reduce((acc, _, index) => {
    if (index === 1) return acc + 200 + 60; // width + gap
    if (index === 2) return acc + 110 + 60;
    if (index === 3) return acc + 150 + 60;
    return acc + 150 + 60;
  }, 0);

  return (
    <div className='w-full border border-[#AFAFAF]/50 bg-primary h-[180px] laptop:h-[200px] rounded-3xl laptop:rounded-full p-2.5 laptop:p-2 mx-auto'>
      <div className='w-full h-full flex flex-col laptop:flex-row gap-4 border border-[#AFAFAF]/50 rounded-2xl laptop:rounded-full'>
        {/* Title Section */}
        <div className='w-full laptop:w-[40%] h-[45%] laptop:h-full font-nohemi400 text-white text-lg laptop:text-4xl border-b laptop:border-b-0 laptop:border-r border-[#AFAFAF]/50 flex items-center justify-center py-2 px-4 laptop:px-12'>
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

          {/* Updated Infinite Horizontal scroll animation */}
          <motion.div 
            className="flex flex-row gap-8 laptop:gap-16 px-4 laptop:px-8"
            animate={{
              x: [0, -totalWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // Adjust duration for smoothness
                ease: "linear",
              },
            }}
            style={{ width: 'fit-content' }}
          >
            {/* Three sets of images for smoother infinite loop */}
            {[...Array(3)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="flex flex-row gap-8 laptop:gap-16">
                {partnerLogos.map((logo, index) => {
                  let width = 150;
                  let height = 150;

                  if (index === 1) {
                    width = 200;
                    height = 160;
                  } else if (index === 2) {
                    width = 110;
                    height = 110;
                  } else if (index === 3) {
                    width = 150;
                    height = 150;
                  }

                  return (
                    <div 
                      key={`${setIndex}-${index}`} 
                      className={`w-[${width}px] h-[${height}px] relative flex-shrink-0 flex items-center justify-center`}
                    >
                      <Image
                        src={logo}
                        alt={`partner ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 60px, 100px"
                        style={{ objectFit: 'contain', maxHeight: '100%' }}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Slider;