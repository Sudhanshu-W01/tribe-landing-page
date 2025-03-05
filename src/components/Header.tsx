"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const NavLink = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        window.location.href = "/about-us";
      }}
    >
      {children}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-[1px] bg-white"
        style={{ originX: isHovered ? 0 : 1 }}
      />
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-[1440px] mx-auto bg-transparent flex justify-between items-center w-full relative z-[1000] px-8">
      <div className="flex items-center">
        {/* Hamburger Menu Button */}
        <button
          className="laptop:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 relative z-[1000]"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out
             ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out
             ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out
             ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        <div className="text-white font-mulish text-xl font-semibold relative z-[100]">
          <Image src="/assets/logo.png" alt="logo" width={80} height={30} />
        </div>
      </div>

      <button
        onClick={() => (window.location.href = "https://tribes.astrix.live")}
        className="laptop:hidden bg-[#B0E681] text-black font-mulish text-sm font-semibold px-6 py-1 rounded-full cursor-pointer active:bg-[#B0E681]/80"
      >
        Launch Tribe
      </button>

      {/* Desktop Navigation */}
      <div className="hidden laptop:flex p-1 relative right-[120px] border border-0.5 border-[#AFB6C0]/70 rounded-[30px]">
        <div className="flex flex-row items-center space-x-12 py-2 px-4 font-mulish text-white text-xs font-normal border border-0.42 border-[#AFB6C0]/50 rounded-[40px]">
          <NavLink>About Us</NavLink>
          <NavLink>Resources</NavLink>
          <div></div>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      {/* <button
        className="laptop:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 relative z-[1000]"
        onClick={toggleMenu}
      >
        <span
          className={`block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out
            ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out
            ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out
            ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button> */}

      {/* Mobile Navigation Menu */}
      <div
        className={`
        fixed top-0 right-0 h-screen w-full bg-primary transform transition-transform duration-300 ease-in-out
        laptop:hidden
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex flex-col items-center pt-16 space-y-4 font-mulish text-white">
          <NavLink>
            <a href="#" className="text-sm cursor-pointer">
              About Us
            </a>
          </NavLink>
          <NavLink>
            <a href="#" className="text-sm cursor-pointer">
              Resources
            </a>
          </NavLink>
          {/* <button
            onClick={() =>
              (window.location.href = "https://tribes.astrix.live")
            }
            className="bg-[#B0E681] text-black font-mulish text-sm font-semibold px-6 py-1 rounded-full cursor-pointer active:bg-[#B0E681]/80"
          >
            Launch Tribe
          </button> */}
          {/* <button
            onClick={() => window.location.href = 'https://app.astrix.live'}
            className="bg-[#B0E681] text-black font-mulish text-sm font-semibold px-6 py-1 rounded-full cursor-pointer active:bg-[#B0E681]/80"
          >
            Launch App
          </button> */}
        </div>
      </div>

      {/* Launch Buttons */}
      <div className="flex space-x-4 absolute right-8">
        <button
          onClick={() => (window.location.href = "https://tribes.astrix.live")}
          className="hidden laptop:block bg-[#b0e681] text-black font-mulish text-lg font-semibold px-8 py-2.5 rounded-full cursor-pointer hover:bg-[#9ede66] hover:scale-105 transition-all duration-300"
        >
          Launch Tribe
        </button>
        {/* <button
          onClick={() => window.location.href = 'https://app.astrix.live'}
          className="hidden laptop:block bg-[#b0e681] text-black font-mulish text-lg font-semibold px-8 py-2.5 rounded-full cursor-pointer hover:bg-[#9ede66] hover:scale-105 transition-all duration-300"
        >
          Launch App
        </button> */}
      </div>

      {/* Mobile Launch Button */}
      {/* <button className="laptop:hidden mobile:hidden pixel:hidden fixed bottom-8 bg-[#B0E681] text-black font-mulish text-lg font-semibold px-8 py-2 rounded-full z-50">
        Launch Tribe
      </button> */}
    </header>
  );
};

export default Header;
