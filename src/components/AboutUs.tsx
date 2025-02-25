"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const AboutUs: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen text-white p-8 laptop:p-16 relative">
      <div className='absolute w-full z-[11] top-0 left-0' style={{
        background: "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(14,15,12,1) 100%)",
      }}>
      </div>
      <div className="absolute inset-0 z-10 h-full w-full bg-[#0E0F0C] bg-[linear-gradient(to_right,#B0E681_1px,transparent_1px),linear-gradient(to_bottom,#B0E681_1px,transparent_1px)] bg-[size:34px_34px] opacity-5">
      </div>
      <div className="max-w-4xl mx-auto relative z-[100]">
        <button onClick={() => router.back()} className="mb-4 text-[#b0e681]">
          ← Back
        </button>
        <h1 className="text-4xl laptop:text-6xl font-nohemi400 mb-8 text-[#b0e681]">About Us</h1>
        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">Where Blockchain Communities Come to Life</h2>
        <p className="mb-8 opacity-80">
          Tribes was born from the realization that decentralized communities deserve better tools. In an industry driven by innovation, blockchain communities were still relying on fragmented, inefficient systems to coordinate, govern, and engage their members. We saw an opportunity to build a single, unified platform that simplifies how projects operate on-chain—so communities can focus on growth, not logistics.
        </p>
        
        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">Our Founding Story</h2>
        <p className="mb-8 opacity-80">
          {"Tribes isn't just another blockchain platform—it's the result of a unique blend of multidisciplinary expertise. Our founding team is built on a foundation of technical innovation, strategic oversight, and creative design."}
        </p>
        <p className="mb-8 opacity-80">
          Our founders bring extensive experience in navigating complex regulatory and governance landscapes, ensuring that our platform remains both transparent and compliant without compromising on user experience. Their insights have been instrumental in shaping a platform that seamlessly integrates on-chain governance with real-world needs.
        </p>
        <p className="mb-8 opacity-80">
          Complementing this, one of our founders is a seasoned software developer and blockchain architect whose work in building scalable, secure smart contract infrastructure forms the backbone of Tribes. His technical acumen guarantees that our ecosystem is robust, efficient, and secure.
        </p>
        <p className="mb-8 opacity-80">
          Adding a creative edge to our approach, the rest of our team consists of talented designers dedicated to crafting intuitive and visually compelling digital experiences. Their focus on user-centric design bridges the gap between intricate blockchain technology and accessible, engaging interfaces—ensuring that Tribes is as welcoming as it is innovative.
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">Our Mission</h2>
        <p className="mb-8 opacity-80">
          {"To empower blockchain communities with the tools they need to thrive. We believe blockchain is more than just transactions—it's about people. Communities form the backbone of decentralized networks, and they need more than just a token to succeed. They need a space where they can govern, collaborate, and grow together."}
        </p>
        <p className="mb-8 opacity-80">
          Tribes is built to:
          <ul className="list-disc list-inside">
            <li>Make on-chain coordination simple—No more scattered tools, endless spreadsheets, or confusing governance structures. Everything is in one place.</li>
            <li>Help communities make real decisions—Propose, vote, and implement changes with transparent, on-chain governance.</li>
            <li>Turn engagement into value—Members are rewarded for contributing to their community, whether through discussions, event participation, or governance involvement.</li>
          </ul>
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">Why Tribes?</h2>
        <p className="mb-8 opacity-80">
          {"We're not just another DAO tool or governance dashboard. Tribes is built differently:"}
          <ul className="list-disc list-inside">
            <li>{"Built for Everyone—Whether you're a developer, a token holder, or a community organizer, Tribes provides the tools you need without unnecessary complexity. Our modular approach allows projects to customize governance, events, and rewards to suit their community."}</li>
            <li>{"Token-Gated but Inclusive—We leverage on-chain access control to ensure security and exclusivity, but we also design with usability in mind. You don't need to be a Solidity expert to set up a community—Tribes makes it seamless."}</li>
            <li>{"Designed for Growth—Communities shouldn't just exist; they should flourish. Our platform includes milestone tracking, engagement analytics, and tokenized incentives to keep communities active, motivated, and growing sustainably."}</li>
          </ul>
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">The Future of Community Building</h2>
        <p className="mb-8 opacity-80">
          {"At Tribes, we believe that blockchain technology should make collaboration easier, not harder. We're committed to:"}
          <ul className="list-disc list-inside">
            <li>Continuous Improvement—We listen, adapt, and iterate based on real community feedback.</li>
            <li>Security & Compliance—Built by blockchain architects and lawyers, ensuring safety at every step.</li>
            <li>Interoperability & Scalability—Designed to grow alongside your project and connect with broader ecosystems.</li>
          </ul>
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">Join the Tribe</h2>
        <p className="opacity-80">
          {"We're more than just a platform—we're a movement towards better on-chain communities. Whether you're launching a new DAO, managing a large-scale Web3 project, or looking for better ways to engage token holders, Tribes provides the infrastructure to make it happen."}
        </p>
        <p className="opacity-80">
          {"Let's build the future of decentralized collaboration—together."}
        </p>
      </div>
    </div>
  );
};

export default AboutUs; 