"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.6
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const GridCards = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 laptop:grid-cols-7 grid-rows-none laptop:grid-rows-3 gap-4 p-4"
    >
      {/* Card 1 */}
      <motion.div 
        variants={item}
        whileHover={{ scale: 0.95 }}
        className="col-span-1 laptop:col-span-4 flex flex-col laptop:flex-row justify-between rounded-3xl p-6 shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background: "radial-gradient(circle, rgba(87,92,82,0.57) 0%, rgba(32,34,28,0.54) 57%)"
        }}
      >
        <div className='flex flex-col justify-end gap-4 w-full laptop:w-[40%]'>
          <h3 className="text-xl laptop:text-2xl font-nohemi300 font-semibold mb-4 text-white">{"Transparent On-Chain Governance"}</h3>
          <p className="text-sm laptop:text-base text-white font-nohemi200">{"Propose, vote, and implement changes seamlessly—no middlemen, no delays."}</p>
        </div>
        <div className="flex flex-col gap-4 relative w-full h-[200px] laptop:h-auto laptop:w-[60%] mt-4 laptop:mt-0">
          <Image src="/assets/card1.png" alt="icon" objectFit='contain' className='w-full h-auto' fill/>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div 
        variants={item}
        whileHover={{ scale: 0.95 }}
        className="col-span-1 laptop:col-span-3 flex flex-col justify-between rounded-3xl p-6 shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background: "radial-gradient(circle, rgba(87,92,82,0.57) 0%, rgba(32,34,28,0.54) 57%)"
        }}
      >
        <div className='flex flex-row justify-end w-full h-[50%]'>
          <div className="flex flex-row justify-end h-full gap-4 relative w-[60%] right-0">
            <Image src="/assets/card2.png" alt="icon" objectFit='cover' className='w-[50%] h-auto' fill/>
          </div>
        </div>
        <div className='flex flex-col justify-end gap-4 w-[100%]'>
          <h3 className="text-2xl font-nohemi300 font-semibold mb-4 text-white">{"Customizable Community Spaces"}</h3>
          <p className="text-white font-nohemi200">{"Spotlight your chain's communities, upcoming events, and top initiatives—all in one place."}</p>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div 
        variants={item}
        whileHover={{ scale: 0.95 }}
        className="col-span-1 laptop:col-span-3 rounded-3xl p-6 shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300"
      >
        <div className='flex flex-row justify-center items-center w-full h-[50%]'>
          <div className="flex flex-row justify-center overflow-hidden h-full gap-4 relative w-[60%] right-0">
            <Image src="/assets/card3.png" alt="icon" objectFit='cover' className='w-full h-auto' fill/>
          </div>
        </div>
        <div className='flex flex-col justify-end gap-4 h-[50%] w-[100%]'>
          <h3 className="text-2xl font-nohemi300 font-semibold mb-4 text-white">{"Tokenised Events"}</h3>
          <p className="text-white font-nohemi200">{"Host hackathons, AMAs, real-world or virtual meetups with verifiable, fraud-resistant tickets."}</p>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div 
        variants={item}
        whileHover={{ scale: 0.95 }}
        className="col-span-1 laptop:col-span-4 flex flex-row justify-end rounded-3xl p-6 shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background: "radial-gradient(circle, rgba(87,92,82,0.57) 0%, rgba(32,34,28,0.54) 57%)"
        }}
      >
        <div className='absolute top-0 left-0 w-[50%] h-[70%] aspect-square'>
          <Image src="/assets/card4.png" alt="icon" className='w-full h-auto z-[100]' fill/>
          <div className='absolute top-[-10%] left-[-10%] w-[80%] bg-white blur-xl z-[10] rounded-full h-full'>

          </div>
        </div>
        <div className='flex flex-col justify-end gap-4 w-[50%]'>
          <h3 className="text-2xl font-nohemi300 font-semibold mb-4 text-white">{"One Unified Platform"}</h3>
          <p className="text-white font-nohemi200">{"Unify every project, community, and update under one streamlined platform."}</p>
        </div>
      </motion.div>

      {/* Card 5 */}
      <motion.div 
        variants={item}
        whileHover={{ scale: 0.95 }}
        className="col-span-1 laptop:col-span-4 flex flex-row justify-between rounded-3xl p-6 shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background: "radial-gradient(circle, rgba(87,92,82,0.57) 0%, rgba(32,34,28,0.54) 57%)"
        }}
      >
        <div className="flex flex-col gap-4 relative w-[45%]">
          <Image src="/assets/card5.png" alt="icon" objectFit='cover' className='w-full h-auto' fill/>
        </div>
        <div className='flex flex-col justify-end gap-4 w-[50%]'>
          <h3 className="text-2xl font-nohemi300 font-semibold mb-4 text-white">{"Engagement-Driven Rewards"}</h3>
          <p className="text-white font-nohemi200">{"Reward and recognize active contributors, driving consistent on-chain activity."}</p>
        </div>
      </motion.div>

      {/* Card 6 */}
      <motion.div 
        variants={item}
        whileHover={{ scale: 0.95 }}
        className="col-span-1 laptop:col-span-3 rounded-3xl p-6 shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300"
      >
        <div className='flex flex-row justify-center items-start w-full h-[50%]'>
          <div className="flex flex-row justify-center h-full gap-4 relative w-[90%] overflow-hidden">
            <Image 
              src="/assets/Card6.png" 
              alt="icon" 
              fill
              className='object-cover object-top'
              priority
            />
          </div>
        </div>
        <div className='flex flex-col justify-end gap-4 h-[50%] w-[100%]'>
          <h3 className="text-2xl font-nohemi300 font-semibold mb-4 text-white">{"Scalable Network Growth"}</h3>
          <p className="text-white font-nohemi200">{"Attract developers, users, and projects with intuitive tools—build a self-sustaining ecosystem."}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GridCards;