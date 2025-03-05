"use client";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import heroAnimation from "../animations/herosection.json";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-primary"></div>,
});

const HeroSection: React.FC = () => {
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
      className={`w-full flex justify-between items-center ${isMobile ? "h-[560px]" : "h-[700px]"}`}
    >
      <div
        className={`flex flex-row justify-between items-center w-full h-full mobile:h-[80%] relative overflow-hidden`}
      >
        <object
          data="/assets/Vector.svg"
          type="image/svg+xml"
          className="absolute inset-0 w-screen top-[50%] -translate-y-[50%]"
          aria-label="background vector"
          style={{ maxWidth: "100%" }}
        />
        {/* <object
          data="/assets/bg-grid.svg"
          type="image/svg+xml"
          className="absolute inset-0 object-fill top-[50%] -translate-y-[50%] w-screen mobile:hidden"
          aria-label="background grid"
          style={{ maxWidth: "100%" }}
        /> */}

        <div className="max-w-[1440px] mx-auto px-12 relative z-[120] h-full w-[100%] flex flex-col laptop:flex-row justify-between laptop:px-8">
          <div
            className={`w-full laptop:w-[50%] h-fit laptop:h-full flex flex-row justify-start px-8 pl-0 py-4 order-2 laptop:order-1`}
          >
            <p
              className={`text-white ${isMobile ? "text-2xl" : "text-3xl"} text-2xl laptop:text-[52px] font-bold font-nohemi400 laptop:text-left leading-none`}
            >
              Unite Your Blockchain <br />
              World—Developers, <br />
              Holders, Projects, <br />
              All Together.
            </p>
          </div>

          <div className="w-full laptop:w-[30%] h-fit laptop:h-[80%] flex flex-row justify-end items-end order-3">
            <p className="text-white font-semibold text-xs laptop:text-xl font-nohemi200 text-start w-52 laptop:w-[70%]">
              Transparent, secure, and dynamic. Redefining how blockchain
              communities collaborate and grow.
            </p>
          </div>
        </div>

        <div
          className={`block ${isMobile ? "h-[100%] w-full" : "h-[40%] w-[75%]"} w-[100%] laptop:w-[75%] absolute translate-x-1/2 right-[50%] laptop:right-[40%] top-auto order-1 laptop:order-2 `}
        >
          {/* Black Backdrop */}
          <div className="absolute w-[200px] h-full laptop:h-[600px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#0E0F0C] blur-lg rounded-full z-[150]" />

          <div
            className={`absolute ${isMobile ? "w-full h-full" : "w-[600px] h-[600px]"} left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[200]`}
          >
            <Suspense
              fallback={<div className="w-full h-full bg-primary"></div>}
            >
              <Lottie
                animationData={heroAnimation}
                loop={true}
                className="w-full h-full scale-150 laptop:scale-200 z-[200]"
              />
            </Suspense>
          </div>
        </div>

        <div
          className="absolute z-[110] w-full bottom-0 h-[40%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(14,15,12,1) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
