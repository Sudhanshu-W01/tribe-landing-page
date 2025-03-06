"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const GridCards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
        className="col-span-1 laptop:col-span-4 flex flex-col laptop:flex-row justify-between rounded-3xl p-6 shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(87,92,82,0.57) 0%, rgba(32,34,28,0.54) 57%)",
        }}
      >
        <div className="flex flex-col justify-end gap-4 w-full laptop:w-[40%]">
          <h3 className="text-xl laptop:text-2xl font-nohemi300 font-semibold mb-4 text-white text-center laptop:text-left">
            {"Transparent On-Chain Governance"}
          </h3>
          <p className="text-sm laptop:text-base text-white font-nohemi200 text-center laptop:text-left">
            {
              "Propose, vote, and implement changes seamlessly—no middlemen, no delays."
            }
          </p>
        </div>
        <div className="flex flex-col gap-4 relative w-full h-[200px] laptop:h-auto laptop:w-[60%] mt-4 laptop:mt-0">
          <Image
            src="/assets/card1.png"
            alt="icon"
            objectFit="contain"
            className="w-full h-auto"
            fill
          />
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        variants={item}
        className="col-span-1 laptop:col-span-3 flex flex-col justify-between rounded-3xl p-6 shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(87,92,82,0.57) 0%, rgba(32,34,28,0.54) 57%)",
        }}
      >
        <div className="flex flex-row justify-end w-full h-[50%]">
          <div className="flex flex-row justify-end h-full gap-4 relative w-[60%] right-0">
            <Image
              src="/assets/card2.png"
              alt="icon"
              objectFit="cover"
              className="w-[50%] h-auto"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col justify-end gap-4 w-[100%]">
          <h3 className="text-2xl font-nohemi300 font-semibold mb-4 text-white text-center laptop:text-left">
            {"Customizable Community Spaces"}
          </h3>
          <p className="text-white font-nohemi200 text-center laptop:text-left">
            {
              "Spotlight your chain's communities, upcoming events, and top initiatives—all in one place."
            }
          </p>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        variants={item}
        className="px-8 pt-7 laptop:px-9 laptop:py-10 flex flex-col col-span-1 laptop:col-span-3 rounded-3xl shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300"
      >
        <div className="laptop:order-last flex flex-col laptop:justify-end gap-3 laptop:gap-6 text-white text-center laptop:text-left">
          <h3 className="text-2xl font-nohemi300 font-bold">
            {"Tokenised Events"}
          </h3>
          <p className="font-nohemi200 font-medium">
            {
              "Host hackathons, AMAs, real-world or virtual meetups with verifiable, fraud-resistant tickets."
            }
          </p>
        </div>
        <div className="flex-1 flex flex-row justify-center items-start w-full h-[50%] laptop:pb-4">
          <div className="flex flex-row justify-center h-full gap-4 relative w-[90%] overflow-hidden">
            <Image
              src="/assets/card3.png"
              alt="icon"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        variants={item}
        className={`col-span-1 laptop:col-span-4 flex ${isMobile ? "flex-col" : "flex-row"} laptop:justify-end rounded-3xl p-6 shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300`}
        style={{
          background:
            "radial-gradient(circle, rgba(87,92,82,0.57) 0%, rgba(32,34,28,0.54) 57%)",
        }}
      >
        <div
          className={`laptop:order-last flex flex-col gap-3 laptop:gap-6 relative z-[30] w-full laptop:w-[50%] laptop:justify-end text-white text-center laptop:text-left`}
        >
          <h3 className="text-xl laptop:text-2xl font-nohemi300 font-bold">
            {"One Unified Platform"}
          </h3>
          <p className="font-nohemi200 font-medium text-sm laptop:text-base">
            {
              "Unify every project, community, and update under one streamlined platform."
            }
          </p>
        </div>
        <div
          className={`absolute bottom-0 laptop:top-0 left-0 ${isMobile ? "w-[240px] h-[165px]" : "w-[340px] h-[240px]"} z-[20]`}
        >
          <Image
            src="/assets/card4.png"
            alt="icon"
            className="w-full h-auto z-[100]"
            fill
          />
          <div className="absolute top-[-10%] left-[-10%] w-[80%] bg-white blur-xl z-[10] rounded-full h-full"></div>
        </div>
      </motion.div>

      {/* Card 5 */}
      <motion.div
        variants={item}
        className={`col-span-1 laptop:col-span-4 px-8 pt-7 laptop:pl-0 laptop:pt-0 laptop:pb-5 flex gap-3 ${isMobile ? "flex-col" : "flex-row"} justify-between rounded-3xl shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300`}
        style={{
          background:
            "radial-gradient(circle, rgba(87,92,82,0.57) 0%, rgba(32,34,28,0.54) 57%)",
        }}
      >
        <div
          className={`laptop:order-last flex flex-col justify-end gap-3 laptop:gap-6 ${isMobile ? "w-full justify-between" : "w-[50%] justify-end"} text-white text-center laptop:text-left`}
        >
          <h3 className="text-xl laptop:text-2xl font-nohemi300 font-bold">
            {"Engagement-Driven Rewards"}
          </h3>
          <p className="font-nohemi200 font-medium text-sm laptop:text-base">
            {
              "Reward and recognize active contributors, driving consistent on-chain activity."
            }
          </p>
        </div>
        <div className="flex-1 laptop:flex-grow-0 flex flex-col basis-4/6 gap-4 relative w-full h-[calc(100%-15px)]">
          <Image
            src="/assets/card5.png"
            alt="icon"
            objectFit="fill"
            className="w-full h-auto object-cover"
            fill
          />
        </div>
      </motion.div>

      {/* Card 6 */}
      <motion.div
        variants={item}
        className="px-8 py-7 laptop:px-9 laptop:py-10 flex flex-col col-span-1 laptop:col-span-3 rounded-3xl shadow-md h-[400px] laptop:h-[350px] border border-[#FFFFFF33] relative overflow-hidden cursor-pointer transition-all duration-300"
      >
        <div className="laptop:order-last flex flex-col laptop:justify-end gap-3 laptop:gap-6 h-[60%] laptop:h-[50%] w-[100%] text-white text-center laptop:text-left">
          <h3 className="text-xl laptop:text-2xl font-nohemi300 font-bold">
            {"Scalable Network Growth"}
          </h3>
          <p className="font-nohemi200 font-medium text-sm laptop:text-base">
            {
              "Attract developers, users, and projects with intuitive tools and build a self-sustaining ecosystem."
            }
          </p>
        </div>
        <div className="flex flex-row justify-center items-start w-full h-[50%] pb-4 laptop:pb-0">
          <div className="flex flex-row justify-center h-full gap-4 relative w-[90%] overflow-hidden">
            <Image
              src="/assets/Card6.png"
              alt="icon"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GridCards;
