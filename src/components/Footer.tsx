"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://astrix-blog-eydzefayhyb3esb6.centralindia-01.azurewebsites.net/api/waitList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name: email.split("@")[0],
            message: "I am interested in the Astrix Tribe",
          }),
        },
      );
      if (response.ok) {
        toast.success("Email added to our mailing list");
      } else {
        toast.error("Failed to add email to mailing list");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
    <footer
      className="max-w-[1440px] mx-auto bg-primary flex flex-col w-full relative h-fit py-10 px-8"
      style={{
        borderTop: "1px solid #E8EAED66",
      }}
    >
      <ToastContainer />
      <div className="flex flex-col justify-start gap-8 py-2 h-full">
        {/* Content  */}
        <div
          className={`flex ${isMobile ? "flex-col-reverse gap-8 h-fit" : "flex-row justify-between h-[110px]"} w-full`}
        >
          {/* Input Mail  */}
          <div
            className={`flex flex-col justify-between h-full gap-3 ${isMobile ? "w-full" : "w-[30%]"}`}
          >
            <p className="text-white font-nohemi300 text-3xl">
              Join Our Mailing List
            </p>
            <div className="w-full">
              <input
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Type your email address"
                className="w-full text-xs bg-[#1F1F1F99] px-3 py-2 h-[50px] border border-[#31373F66] placeholder:text-[]#768293] font-mulish"
              />
            </div>
          </div>
          {/* Page Links */}
          <div
            className={`flex flex-row justify-between ${isMobile ? "w-full" : "w-[clamp(40%,40%,70%)]"}`}
          >
            <div className="flex flex-col gap-2">
              <p className="text-[#939CAA] text-sm font-nohemi400">SITEMAP</p>
              <div className="flex flex-col justify-end gap-2 h-full font-nohemi300 text-sm">
                <Link href="/about-us">
                  <p>About Us</p>
                </Link>
                <Link href="/contact-us">
                  <p>Contact Us</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#939CAA] text-sm font-nohemi400">LEGAL</p>
              <div className="flex flex-col justify-end gap-2 h-full font-nohemi300 text-sm">
                <Link href="/privacy-policy">
                  <p>Privacy Policy</p>
                </Link>
                <Link href="/terms">
                  <p>Terms & Conditions</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#939CAA] text-sm font-nohemi400">SOCIALS</p>
              <div className="flex flex-col justify-end gap-2 h-full font-nohemi300 text-sm">
                <Link href="https://x.com/tribe_astrix">
                  <p>Twitter</p>
                </Link>
                <Link href="https://medium.com/@tribe_io">
                  <p>Medium</p>
                </Link>
                <Link href="https://www.linkedin.com/company/tribe-io">
                  <p>LinkedIn</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="relative w-full h-fit opacity-10">
          <Image
            src="/assets/Tribes.png"
            alt="footer tribe"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
