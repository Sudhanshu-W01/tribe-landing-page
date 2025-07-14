"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// const partnerLogos = [
//   "/assets/fuse-icon.svg",
//   "/assets/monad-icon.svg",
//   "/assets/xion-icon.svg",
// ];
const partnerLogos = [
  "/partners/xdc.svg",
  "/partners/thub.svg",
  "/partners/w3logo.svg",
  "/partners/fourpaws.svg",
  "/partners/hashnslash.svg",
];

function Slider() {
  // Adjust total width based on new sizes
  const totalWidth = partnerLogos.reduce((acc, _, index) => {
    if (index === 1) return acc + 200 + 60; // width + gap
    if (index === 3) return acc + 150 + 60;
    return acc + 150 + 60;
  }, 0);

  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 laptop:px-8">
      <div className="border border-[#AFAFAF]/50 bg-primary h-[4.8rem] mobile:h-24 laptop:h-[200px] rounded-full p-[1.5px] laptop:p-2">
        <div className="w-full h-full flex gap-4 items-center border border-[#AFAFAF]/50 rounded-full overflow-hidden">
          {/* Title Section */}
          <div className="w-2/5 self-stretch font-nohemi400 text-white text-lg laptop:text-4xl border-r border-[#AFAFAF]/50 flex items-center justify-center py-2 px-4 laptop:px-12">
            <p className="text-center laptop:text-left max-w-[280px] laptop:max-w-none">
              {/* Building For */}
              Partners
            </p>
          </div>

          {/* Slider Section */}
          <div className="basis-3/5 px-10 laptop:px-8 h-[55%] laptop:h-full flex flex-row items-center justify-center relative overflow-hidden laptop:rounded-tr-full laptop:rounded-br-full">
            {/* Gradient Overlays */}
            <div
              className="absolute w-full h-full z-20"
              style={{
                background:
                  "linear-gradient(180deg, rgba(14,15,12,1) 0%, rgba(0,0,0,0) 50%, rgba(14,15,12,1) 100%)",
              }}
            />
            <div className="absolute inset-0 z-10 h-full w-full bg-[#0E0F0C] bg-[linear-gradient(to_right,#B0E681_1px,transparent_1px),linear-gradient(to_bottom,#B0E681_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.05]" />

            {/* Updated Infinite Horizontal scroll animation */}
            <motion.div
              className="flex flex-row gap-8 laptop:gap-16"
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
              style={{ width: "fit-content" }}
            >
              {/* Three sets of images for smoother infinite loop */}
              {[...Array(5)].map((_, setIndex) => (
                <div
                  key={`set-${setIndex}`}
                  className="flex flex-row items-center justify-center gap-8 laptop:gap-16"
                >
                  {partnerLogos.map((logo, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className={` relative aspect-[5/3] w-20 tablet:w-[200px] flex items-center justify-center`}
                    >
                      <Image
                        src={logo}
                        alt={`partner ${index + 1}`}
                        fill
                        className=" w-full h-full"
                        // sizes="(max-width: 1024px) 60px, 100px"
                        // style={{ objectFit: "contain" }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
