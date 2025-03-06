import React from "react";
import Heading from "./Heading";
import GridCards from "./GridCards";
import Image from "next/image";

function Benefits() {
  return (
    <div className="max-w-[1440px] mx-auto px-8 w-full h-fit flex flex-col items-center gap-8 laptop:gap-16">
      <Heading title="BENEFITS OF TRIBE" />
      <div className="w-full h-fit flex flex-row justify-center font-nohemi400 text-white text-2xl laptop:text-4xl px-4 laptop:px-0">
        <p className="w-full laptop:w-[60%] text-center">
          Empower, Engage, and Elevate Your Blockchain Community
        </p>
      </div>
      <div
        style={{
          background: 'url("/assets/benefitsCard_blurbg.png")',
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPositionX: "center",
        }}
        className="laptop:bg-none w-[95%] laptop:w-[85%] h-fit relative"
      >
        <div className="absolute inset-0 w-full h-full animate-pulse transition-all duration-300 hidden laptop:block">
          <Image
            src="/assets/benefitsCard_blurbg.png"
            alt="benefits background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
          <GridCards />
        </div>
      </div>
    </div>
  );
}

export default Benefits;
