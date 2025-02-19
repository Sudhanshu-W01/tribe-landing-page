import Image from 'next/image';
import React from 'react'

function Footer() {
  return (
    <footer className="bg-primary flex flex-col w-full relative h-[80vh] py-10 px-8"
      style={{
        borderTop: "1px solid #E8EAED66",
      }}
    >
      <div className='flex flex-col justify-between py-2 h-full'>
        {/* Content  */}
        <div className='flex flex-row flex-wrap justify-between h-[20%] w-full'>
          {/* Input Mail  */}
          <div className='flex flex-col justify-between h-full w-[30%]'>
            <p className='text-white font-nohemi300 text-3xl'>
              Join Our Mailing List
            </p>
            <div className='w-full'>
              <input type="text" placeholder='Type your email address' className='w-full text-xs bg-[#1F1F1F99] px-3 py-2 h-[50px] border border-[#31373F66] placeholder:text-[]#768293] font-mulish' />
            </div>
          </div>
          {/* Page Links */}
          <div className='flex flex-row justify-between gap-20'>
            <div className='flex flex-col gap-2'>
              <p className='text-[#939CAA] text-sm font-nohemi400'>SITEMAP</p>
              <div className='flex flex-col justify-end gap-2 h-full font-nohemi300 text-sm'>
                <p>About Us</p>
                <p>Founder Story</p>
                <p>Contact</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[#939CAA] text-sm font-nohemi400'>LEGAL</p>
              <div className='flex flex-col justify-end gap-2 h-full font-nohemi300 text-sm'>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>LinkedIn</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[#939CAA] text-sm font-nohemi400'>SOCIALS</p>
              <div className='flex flex-col justify-end gap-2 h-full font-nohemi300 text-sm'>
                <p>Twitter</p>
                <p>Medium</p>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className='relative w-full h-fit'>
          <Image 
            src="/assets/footer_tribe_img.png" 
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
  )
}

export default Footer;