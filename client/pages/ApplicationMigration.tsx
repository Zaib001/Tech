import React from "react";
import applicationManager from "../Images/applicationmanager1.jpg";
import ladyStanding from "../Images/ladyStandingBesideServer.jpg";
import discussion from "../Images/teamDiscussion.jpg";
import application from "../svg/Application.svg";
import reverseArrow from '../svg/reverseArrow.svg';
import Tick from "../svg/tick.svg";

export default function ApplicationMigration() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Section: Hero */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${applicationManager})`,
        }}
      >
        <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "-10px" }}>
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1">
                <img
                  src={application}
                  alt="Application"
                />
              </h2>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Migration
              </h2>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
                Seamlessly transition from legacy systems to modern, secure, and scalable environments empowering your organization to evolve without losing momentum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-6xl font-extrabold mb-2">
                <span className="text-white">Modernize Without Disruption</span>
              </h2>
            </div>

            <p className="text-gray-300 text-xl leading-relaxed" style={{ marginTop: "60px" }}>
              Legacy systems can limit performance, security, and scalability. At HPIT, we specialize in migrating critical applications to modern environments cloud, hybrid, or on premise upgrades ensuring seamless transitions that drive efficiency and long term growth.
            </p>
            {/* Know more link */}
            <a href="#" className="inline-flex items-center gap-2 text-white font-medium group" style={{ marginTop: "60px" }}>
              Get Started
              <span className="w-8 h-8 rounded-full border border-red-500 flex items-center justify-center group-hover:bg-red-500 transition">
                <svg
                  className="w-3 h-3 text-white transform rotate-0 group-hover:rotate-45 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Right Image */}
          <div className="rounded-xl overflow-hidden" style={{ marginTop: "120px" }}>
            <img
              src={ladyStanding}
              alt="Team Discussion"
              className="w-full h-full object-cover rounded-l-sm"
            />
          </div>
        </div>
      </div>
      <div className="text-white py-20 rounded-xl" style={{ marginTop: "-60px" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 min-h-[600px]">
          {/* Left Content */}
          <div className="self-center px-4">
            <h2 className="text-6xl sm:text-6xl font-extrabold leading-tight mb-6">
              Why <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">Application</span><br />
              Migration <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">Matters</span>
            </h2>
            <p className="text-gray-400 text-2xl leading-relaxed max-w-xl">
              Application migration boosts performance, cuts costs, and prepares your systems for future growth and innovation.
            </p>

            {/* Arrow Image Below */}
            <div className="mt-8">
              <img src={reverseArrow} alt="arrow" className="w-[200px] h-auto" style={{ marginLeft: "200px" }} />
            </div>
          </div>

          {/* Right Content - 4 Bullets with SVG */}
          <ul
            className="space-y-10"
            style={{ marginTop: '180px', marginLeft: '150px' }}
          >
            {[
              "Improve performance and scalability",
              "Strengthen security and compliance",
              "Reduce operational costs and technical debt",
              "Enable integration with modern tools and systems",
              "Support digital transformation and innovation",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <img src={Tick} alt="tick" className="w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
      <div className="text-white py-20 rounded-xl" style={{ marginTop: "-60px" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 min-h-[600px]">
          {/* Left Content */}
          <div className="self-center px-4">
            <h2 className="text-6xl sm:text-6xl font-extrabold leading-tight mb-6">
              Our<span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text"> Migration</span><br />
              <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">Approach</span>
            </h2>
            <p className="text-gray-400 text-2xl leading-relaxed max-w-xl">
              We follow a structured, low risk approach tailored to your organization's goals
            </p>

            {/* Right Image Grid with Offset Positioning */}
            {/* Steps Grid */}
            <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-16 px-4  mt-12">
              {/* Column 1 */}
              <div className="flex flex-col gap-8 -translate-y-4">
                {/* Step 1 */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-center items-center gap-3 whitespace-nowrap">
                    <span className="text-4xl font-extrabold text-red-600">01</span>
                    <span className="text-2xl font-semibold">Assessment & Planning</span>
                  </div>
                  <p className="text-gray-400 text-base max-w-md mx-auto text-left">
                    Evaluate your existing applications and business needs to craft your migration strategy.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-center items-center gap-3 whitespace-nowrap">
                    <span className="text-4xl font-extrabold text-red-600">03</span>
                    <span className="text-2xl font-semibold">Testing & Validation</span>
                  </div>
                  <p className="text-gray-400 text-base max-w-md mx-auto text-left">
                    Rigorous testing to ensure data integrity and system stability.
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-8 translate-y-4">
                {/* Step 2 */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-center items-center gap-3 whitespace-nowrap">
                    <span className="text-4xl font-extrabold text-red-600">02</span>
                    <span className="text-2xl font-semibold">Migration & Modernization</span>
                  </div>
                  <p className="text-gray-400 text-base max-w-md mx-auto text-left">
                    Rehost, re-platform, or refactor to ensure compatibility and performance.
                  </p>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-center items-center gap-3 whitespace-nowrap">
                    <span className="text-4xl font-extrabold text-red-600">04</span>
                    <span className="text-2xl font-semibold">Deployment & Support</span>
                  </div>
                  <p className="text-gray-400 text-base max-w-md mx-auto text-left">
                    Deploy with minimal disruption and provide ongoing support.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-6xl sm:text-6xl font-extrabold leading-tight text-white mb-10">
            Migration <br></br><span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text" style={{ marginTop: '60px' }}>Services We Offer</span>
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border-b border-gray-700 min-h-[400px] flex flex-col">
              <h3 className="text-4xl font-semibold text-white mb-3" style={{ marginTop: '60px', marginBottom: '40px' }}>
                Legacy to Cloud Migration
              </h3>
              <p className="text-gray-400 text-xl">
                We move your existing applications to secure cloud platforms like AWS, Azure, or GCP ensuring flexibility, scalability, and reduced infrastructure costs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border-b border-gray-700 min-h-[260px] flex flex-col">
              <h3 className="text-4xl font-semibold text-white mb-3" style={{ marginTop: '60px', marginBottom: '40px' }}>
                Hybrid & Multi Cloud Integration
              </h3>
              <p className="text-gray-400 text-2xl">
                Seamlessly integrate applications across on-premise and multiple cloud environments for better performance, control, and agility.
              </p>
            </div>

            {/* Card 3 - Highlighted */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 border-b border-gray-700 min-h-[260px] flex flex-col">
              <h3 className="text-4xl font-semibold text-white mb-3" style={{ marginTop: '60px', marginBottom: '40px' }}>
                App Rehosting & Replatforming
              </h3>
              <p className="text-white text-xl">
                We assess your applications and choose the right migration path whether lifting and shifting, upgrading platforms, or restructuring code for modern environments.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border-b border-gray-700 min-h-[400px] flex flex-col">
              <h3 className="text-4xl font-semibold text-white mb-3" style={{ marginTop: '60px', marginBottom: '40px' }}>
                Infrastructure Modernization
              </h3>
              <p className="text-gray-400 text-xl">
                We upgrade outdated systems to modern architectures that support automation, security, and scalability.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border-b border-gray-700 min-h-[260px] flex flex-col" >
              <h3 className="text-4xl font-semibold text-white mb-3" style={{ marginTop: '60px', marginBottom: '40px' }}>
                Compliance & Security Enhancements
              </h3>
              <p className="text-gray-400 text-xl">
                Ensure your migrated applications meet industry-specific compliance standards with strong security measures and audit readiness.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border-b border-gray-700 min-h-[260px] flex flex-col" >
              <h3 className="text-4xl font-semibold text-white mb-3" style={{ marginTop: '60px', marginBottom: '40px' }}>
                Post Migration Optimization & Support
              </h3>
              <p className="text-gray-400 text-xl">
                After migration, we fine-tune performance, monitor health, and offer continuous support to ensure long term success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white py-20 rounded-xl" style={{ marginTop: "40px" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 min-h-[600px]">
          {/* Left Content */}
          <div className="self-center px-4">
            <h2 className="text-6xl sm:text-6xl font-extrabold leading-tight mb-6">
              Why <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">Choose HPIT</span><br />
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
              HPIT delivers secure, seamless, scalable migrations with expertise, precision, and mission-first focus
            </p>

            {/* Arrow Image Below */}
            <div className="mt-8">
              <img
                src={discussion}
                alt="arrow"
                className="w-[450px] h-auto rounded-md"
              />
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-6 text-white">
            <p className="text-gray-300 text-2xl" style={{ marginTop: '130px' }}>
              At HPIT, we combine expertise, precision, and innovation to deliver seamless application migration solutions. Here’s what sets us apart
            </p>
            <li className="flex items-start gap-3" style={{ marginTop: "60px" }}>
              <span className="text-red-500 mt-1">○</span>
              <div>
                <h4 className="font-semibold">Mission-Driven Approach</h4>
                <p className="text-gray-400 text-sm">
                  We rehost, re-platform, or refactor applications as needed ensuring compatibility, performance, and scalability.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">○</span>
              <div>
                <h4 className="font-semibold">Proven Expertise</h4>
                <p className="text-gray-400 text-sm">
                  Our team brings years of experience across government and private sectors, managing complex migrations with confidence.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">○</span>
              <div>
                <h4 className="font-semibold">Secure & Compliant Solutions</h4>
                <p className="text-gray-400 text-sm">
                  We prioritize security and compliance at every stage, meeting the highest industry and regulatory standards.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">○</span>
              <div>
                <h4 className="font-semibold">End-to-End Support</h4>
                <p className="text-gray-400 text-sm">
                  From assessment to optimization, we provide full lifecycle support to ensure your systems perform flawlessly post migration.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


