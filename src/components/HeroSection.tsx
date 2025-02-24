"use client"
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import heroAnimation from "../animations/herosection.json";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className='w-full h-full bg-primary'></div>
});

const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-[700px] laptop:h-[700px] flex justify-between items-center">
      <div className='flex flex-row justify-between items-center w-full h-[80%] relative overflow-hidden'>
        <object
          data="/assets/Vector.svg"
          type="image/svg+xml"
          className="absolute inset-0 w-full hidden laptop:block"
          aria-label="background vector"
          style={{ maxWidth: '100%'}}
        />
        
        <div className='relative z-[120] h-[80%] w-[100%] flex flex-col laptop:flex-row justify-between px-4 laptop:px-0'>
          <div className='w-full laptop:w-[50%] h-fit laptop:h-full flex flex-row justify-start px-8 py-4 order-2 laptop:order-1'>
            <p className='text-white text-3xl laptop:text-6xl font-nohemi400 text-center laptop:text-left'>
              Unite Your Blockchain World—Developers, Holders, Projects, 
              All Together.
            </p>
          </div>
          
          <div className='w-full laptop:w-[30%] h-fit laptop:h-[80%] flex flex-row justify-center items-end order-3'>
            <p className='text-white text-lg laptop:text-xl font-nohemi200 text-center laptop:text-start w-full laptop:w-[70%]'>
              Transparent, secure, and dynamic. Redefining how blockchain communities collaborate and grow.
            </p>
          </div>
        </div>

        <div className='h-[40%] laptop:h-[80%] w-[70%] laptop:w-[75%] absolute translate-x-1/2 right-[50%] laptop:right-[40%] top-0 laptop:top-auto order-1 laptop:order-2'>
          {/* Black Backdrop */}
          <div className='absolute w-[500px] h-[600px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#0E0F0C] blur-lg rounded-full z-[150]' />

          <div className='absolute w-[600px] h-[600px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[200]'>
            <Suspense fallback={<div className='w-full h-full bg-primary'></div>}>
              <Lottie 
                animationData={heroAnimation}
                loop={true}
                className='w-full h-full scale-150 laptop:scale-200 z-[200]'
              />
            </Suspense>
          </div>
        </div>

        <div className='absolute z-[110] w-full bottom-0 h-[40%]'
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(14,15,12,1) 100%)'
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;