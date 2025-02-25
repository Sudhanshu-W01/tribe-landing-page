"use client"
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full min-h-screen text-white p-8 laptop:p-16 relative">
      <div className="absolute inset-0 z-10 h-full w-full bg-[#0E0F0C] bg-[linear-gradient(to_right,#B0E681_1px,transparent_1px),linear-gradient(to_bottom,#B0E681_1px,transparent_1px)] bg-[size:34px_34px] opacity-5"></div>
      <div className="max-w-4xl mx-auto relative z-[100]">
        <h1 className="text-4xl laptop:text-6xl font-nohemi400 mb-8 text-[#b0e681]">Privacy Policy</h1>
        
        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">1. Introduction</h2>
        <p className="mb-8 opacity-80">
          This Privacy Policy explains how Tribes collects, uses, and protects information when you use our decentralized platform. By accessing or using Tribes, you agree to the collection and use of information in accordance with this policy.
        </p>
        
        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">2. Data We Collect</h2>
        <h3 className="text-xl laptop:text-3xl font-nohemi300 mb-2">2.1 On-Chain Data</h3>
        <p className="mb-8 opacity-80">
          Public Wallet Information: Your blockchain wallet address and transaction history, which are inherently public and stored on-chain.
          Smart Contract Interactions: Details of your interactions with our smart contracts (e.g., governance votes, event participation).
        </p>
        <h3 className="text-xl laptop:text-3xl font-nohemi300 mb-2">2.2 Off-Chain Data</h3>
        <p className="mb-8 opacity-80">
          Usage Data: We may collect data on how you interact with our website or app (e.g., IP addresses, browser type, and device information) for security and performance purposes.
          Cookies and Similar Technologies: When accessing the web interface, cookies may be used to enhance user experience, though they are not used to personally identify you.
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">3. How We Use Your Data</h2>
        <p className="mb-8 opacity-80">
          To Provide and Improve Services: Data collected is used to operate and enhance the functionality, security, and reliability of Tribes.
          Security and Compliance: Usage data may be used to monitor for unauthorized activity, enforce our Terms, and comply with legal obligations.
          Analytics: Aggregate data may be used for analytical purposes, ensuring improvements to the platform and user experience.
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">4. Data Sharing and Disclosure</h2>
        <p className="mb-8 opacity-80">
          Public Nature of Blockchain Data: Information stored on the blockchain (such as wallet addresses and transactions) is publicly available by design.
          Third-Party Service Providers: We may share off-chain data with trusted third-party service providers to facilitate platform operations (e.g., hosting, analytics, or security services). These providers are bound by confidentiality agreements and are not permitted to use your data for any purpose other than as specified by Tribes.
          No Sale of Personal Data: Tribes does not sell, rent, or trade personal data to third parties.
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">5. Data Security and Retention</h2>
        <p className="mb-8 opacity-80">
          Security Measures: We employ reasonable security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
          Data Retention: We retain off-chain data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law.
          On-Chain Data: Once data is recorded on-chain, it is immutable and subject to the inherent transparency of blockchain technology.
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">6. Your Rights and Choices</h2>
        <p className="mb-8 opacity-80">
          Access and Correction: While on-chain data is public and immutable, you may contact us regarding any off-chain data we hold about you.
          Opt-Out: You may disable cookies or adjust your browser settings, though this may affect your experience on the platform.
          Decentralized Limitations: Due to the decentralized nature of Tribes, certain rights (such as data deletion) may not apply to data recorded on-chain.
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">{"7. Children's Privacy"}</h2>
        <p className="mb-8 opacity-80">
          Tribes is not intended for use by individuals under the age of 13. We do not knowingly collect personal data from children under 13. If you believe that we have inadvertently collected such information, please contact us immediately.
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">8. Changes to This Privacy Policy</h2>
        <p className="mb-8 opacity-80">
          We may update this Privacy Policy periodically to reflect changes in our practices or regulatory requirements. Updated policies will be posted on the platform, and your continued use of the platform constitutes acceptance of any changes.
        </p>

        <h2 className="text-2xl laptop:text-4xl font-nohemi300 mb-4">9. Contact Us</h2>
        <p className="opacity-80">
          If you have any questions or concerns regarding this Privacy Policy or our data practices, please reach out via our official channels: hello@astrix.live
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 