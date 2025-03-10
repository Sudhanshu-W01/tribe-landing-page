import React from "react";
import Heading from "./Heading";
import Image from "next/image";

function Community() {
  return (
    <div className="max-w-[1440px] mx-auto px-12 w-full h-[500px] laptop:h-[600px] flex flex-col items-center justify-center gap-8 laptop:gap-16 relative laptop:px-0 overflow-hidden">
      <div className="absolute w-full h-[50%] flex flex-col blur-lg">
        <div className="w-full rotate-6 top-[50px] h-[50%] relative">
          <Image
            src="/assets/community_img1.png"
            alt="community"
            fill
            className="object-fill"
          />
        </div>

        <div className="w-full h-[50%] bottom-[50px] relative">
          <Image
            src="/assets/community_img2.png"
            alt="community"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <Heading title="SIMPLIFY COMMUNITY BUILDING" />
      <p className="w-full laptop:w-[70%] text-center font-nohemi300 text-white text-xl laptop:text-4xl">
        A unified platform for on-chain communities to connect, govern, and
        growtogether.
        <br />
        Manage everything from one place.
      </p>
    </div>
  );
}

export default Community;
