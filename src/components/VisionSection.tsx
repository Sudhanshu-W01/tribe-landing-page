"use client";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardContentType {
  title: string;
  imageLink: string;
  description: string;
}

const CardStyle: { [key: string]: string } = {
  background:
    "radial-gradient(circle, rgba(87,92,82,0.57) 0%, rgba(32,34,28,0.54) 57%)",
  // boxShadow: "0 0 30px 2px rgba(176, 230, 129, 0.1)"
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const CardContent: CardContentType[] = [
  {
    title: "Single Source of Truth",
    imageLink: "/assets/SSIT_img.png",
    description:
      "Provide one cohesive platform for entire blockchain ecosystems.",
  },
  {
    title: "Community Empowerment",
    imageLink: "/assets/CE_img.png",
    description:
      "Put power and ownership in the hands of token holders and builders.",
  },
  {
    title: "Scalable Growth",
    imageLink: "/assets/SG_img.png",
    description:
      "Foster broad on-chain adoption with intuitive and rewarding community engagement.",
  },
];
function VisionSection() {
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
    <div
      className={`max-w-[1440px] mx-auto px-8 w-full ${isMobile ? "h-[1200px]" : "h-fit"} flex flex-col items-center gap-16 relative`}
    >
      <div
        className="absolute w-full h-full z-[100]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(14,15,12,1) 100%)",
        }}
      ></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#0E0F0C] bg-[linear-gradient(to_right,#B0E681_1px,transparent_1px),linear-gradient(to_bottom,#B0E681_1px,transparent_1px)] bg-[size:34px_34px] opacity-5"></div>

      <Heading title="OUR VISION" />

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.3,
          margin: "-100px",
        }}
        className={`flex ${isMobile ? "flex-col h-[85%]" : "flex-row h-[80vh]"} w-full gap-6 relative z-[200]`}
      >
        {CardContent?.map((el: CardContentType, idx: number) => {
          return (
            <motion.div
              key={idx}
              variants={item}
              className={`${isMobile ? "w-full" : "w-1/3"} h-[600px] p-6 rounded-3xl border border-[#FFFFFF33] flex flex-col justify-between transition-all duration-300`}
              style={CardStyle}

              // whileHover={{
              //   scale: 1.05,
              //   transition: { duration: 0.2 },
              // }}
            >
              <h3 className="font-nohemi400 text-white text-3xl w-[85%] text-wrap">
                {el?.title}
              </h3>
              <div className="w-full h-full relative">
                <Image
                  src={el?.imageLink}
                  alt="icon"
                  objectFit="cover"
                  className="w-full h-auto"
                  fill
                />
              </div>
              <p className="font-nohemi200 text-white text-md">
                {el?.description}
              </p>
            </motion.div>
          );
        })}
      </motion.section>
    </div>
  );
}

export default VisionSection;
