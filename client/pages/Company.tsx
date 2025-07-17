import { useState } from 'react';
import { Plus, X } from 'lucide-react'; // Optional: Use Heroicons or Lucide
import backgroundImage from '../images/frame1.png';
import team1 from '../images/Pexels Photo by Daniel Xavier.jpg';
import team2 from '../images/Pexels Photo by Italo Melo.jpg';
import team3 from '../images/Pexels Photo by Guilherme  Almeida.jpg';
import team4 from '../images/Pexels Photo by Andrea Piacquadio.jpg';
import arrow from '../svg/arrow.svg';
import journey1 from '../Images/journey1.jpg';
import journey2 from '../Images/journey2.jpg';
import journey3 from '../Images/journey3.jpg';
import astronaut from '../Images/Astronaut.jpg';
import frame from '../svg/Frame75.svg';
import g2m from '../svg/g2m.svg';
import Group from '../svg/Group.svg';
import company from '../svg/Company.svg';

export default function Company() {
  const [openIndex, setOpenIndex] = useState(1); // Default open is 1 (Mission)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "-10px" }}>
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1">
                <img
                  src={company}
                  alt="Company"
                />
              </h2>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Overview
              </h2>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
                At HIPT, we specialize in delivering customized technology and
                consulting services that help government and private sector
                organizations modernize, optimize, and grow with confidence.
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
              <h2 className="text-5xl font-extrabold mb-2">
                <span className="text-white">About</span>
                <span className="text-purple-400"> Us</span>
              </h2>
              <p className="text-gray-300 font-semibold">
                Purpose-Driven Solutions. Trusted Partnerships.
              </p>
            </div>

            <p className="text-gray-300 text-xl leading-relaxed" style={{ marginTop: "60px" }}>
              HPIT is a forward-focused IT consulting company committed to delivering secure,
              innovative, and mission-ready technology solutions across government and private
              sectors. Founded on the principles of integrity, excellence, and national service,
              we help organizations solve complex challenges through customized digital strategies,
              advanced data capabilities, and expert consulting.
            </p>

            <p className="text-gray-300 text-xl leading-relaxed" style={{ marginTop: "60px" }}>
              Our strength lies in combining deep industry knowledge with a skilled workforce to
              support critical operations, whether it's modernising infrastructure, enhancing
              cybersecurity, or enabling digital transformation. At HPIT, we don’t just deliver
              technology—we deliver results that matter.
            </p>
          </div>

          {/* Right Image */}
          <div className="rounded-xl overflow-hidden" style={{ marginTop: "120px" }}>
            <img
              src={journey2}
              alt="Team Discussion"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="text-white px-6 lg:px-20 py-20 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Title + Image */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              A community driven<br />
              <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">by growth.</span>
            </h2>
            <div className="rounded-3xl overflow-hidden mb-10">
              <img
                src={astronaut}
                alt="Astronaut"
                className="rounded-3xl object-cover w-full h-full max-h-[500px]"
              />
            </div>

          </div>

          {/* Right Accordion */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Our community of reps are motivated, resilient and most of all, problem solvers.
            </p>
            <div style={{ marginTop: '65px' }}> {[
              {
                title: 'Purpose',
                desc: 'To Serve, Secure, and Solve for a Better Tomorrow',
                content: `At HPIT, we empower our nation by delivering secure, innovative technology solutions.
Through expert consulting, digital transformation, and data-driven strategies, we help
government and private sector clients solve complex challenges, modernize operations,
and achieve lasting success.`,
              },
              {
                title: 'Mission',
                desc: 'Empowering Progress Through People and Technology',
                content: `At HPIT, we empower our nation by delivering secure, innovative technology solutions.
Through expert consulting, digital transformation, and data-driven strategies, we help
government and private sector clients solve complex challenges, modernize operations,
and achieve lasting success.`,
              },
              {
                title: 'Vision',
                desc: 'Securing the Future with Trusted Innovation',
                content: `At HPIT, we empower our nation by delivering secure, innovative technology solutions.
Through expert consulting, digital transformation, and data-driven strategies, we help
government and private sector clients solve complex challenges, modernize operations,
and achieve lasting success.`,
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-700 pb-2">
                {/* Header */}
                <div
                  className="flex justify-between items-center cursor-pointer py-2"
                  onClick={() => toggle(index)}
                >
                  <div>
                    <p className="text-sm text-white font-semibold mb-1">{item.title} :</p>
                    <p className="text-white text-sm">{item.desc}</p>
                  </div>
                  <span className="text-white">
                    {openIndex === index ? <X size={18} /> : <Plus size={18} />}
                  </span>
                </div>

                {/* Collapsible Content with transition */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] mt-10' : 'max-h-0'
                    }`}
                >
                  {item.content && (
                    <p className="text-sm text-gray-400 leading-relaxed">{item.content}</p>
                  )}
                </div>
              </div>
            ))}</div>
          </div>
        </div>
      </div>
      <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
        {/* Main Parent Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Title + Content */}
          <div className="flex flex-col h-full justify-between" style={{marginLeft:"40px"}}>
            {/* Top - Journey Heading */}
            <div>
              <h2 className="text-5xl font-extrabold mb-2" style={{ marginTop: '40px' }}>
                <span className="text-white">Jour</span>
                <span className="text-purple-400">ney</span>
              </h2>
              <p className="text-gray-300 text-sm">Built on Vision. Driven by Impact.</p>
            </div>
            {/* Middle - Vertically Centered Content */}
            <div className="flex-1 flex items-center" style={{ marginTop: '-140px' }}>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-white font-bold">2022 :</span> Expanding Capabilities
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  This year marked a significant phase of growth and diversification. HPIT broadened its
                  portfolio to include services in cybersecurity, cloud transformation, data analytics, and
                  enterprise IT modernization. We formalized internal processes, upgraded our infrastructure,
                  and onboarded subject matter experts to meet growing client demands. Our reach extended
                  across multiple states, and we implemented large-scale digital transformation projects
                  with national relevance.
                </p>
              </div>
            </div>
          </div>
          {/* Right Section - 3 Stacked Images */}
          <div className="flex flex-col items-stretch gap-4">
            {/* Image 1 - Smaller (2021) */}
            <div className="relative rounded overflow-hidden" style={{ marginBottom: '30px' }}>
              <img
                src={journey1}
                alt="2021"
                className="w-[595px] h-40 object-cover rounded mx-auto"
              />
              <div className="absolute bottom-4 left-12 text-white">
                <h4 className="text-md font-bold">2023</h4>
                <p className="text-sm font-semibold">Building Trust, Winnig Confidence</p>
              </div>
            </div>

            {/* Image 2 - Full Size (2022) */}
            <div className="relative rounded overflow-hidden" style={{marginLeft:"27px"}}>
              <img
                src={journey2}
                alt="2022"
                className="w-[595px] h-80 object-cover rounded ring-2 ring-purple-400"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-bold">2022</h4>
                <p className="text-base font-semibold">Expanding Capabilities</p>
              </div>

            </div>

            {/* Image 3 - Smaller (2023) */}
            <div className="relative rounded overflow-hidden" style={{ marginTop: '30px' }}>
              <img
                src={journey3}
                alt="2023"
                className="w-[595px] h-40 object-cover rounded mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-white px-4 sm:px-6 lg:px-20 py-16">
        {/* Heading */}
        <div className="max-w-5xl text-left mb-16"  style={{marginLeft:"40px"}}>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            A world-class <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">experience</span> that's easy<br />
            to use & focused <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">on success.</span>
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative grid grid-cols-4 gap-10 text-center">
          {[
            {
              number: '01/',
              title: 'Discover & Understand',
              desc: 'We understand your goals, challenges, and mission needs.',
            },
            {
              number: '02/',
              title: 'Design Tailored Solutions',
              desc: 'We create tailored, secure, and scalable technology solutions.',
            },
            {
              number: '03/',
              title: 'Deliver with Precision',
              desc: 'We implement with precision, speed, and collaboration.',
            },
            {
              number: '04/',
              title: 'Support & Evolve',
              desc: 'We support, adapt, and grow solutions as your needs change.',
            },
          ].map((step, i) => (
            <div key={i} className="relative px-2">
              {/* Step Number */}
              <div className="text-5xl font-bold mb-4">{step.number}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-base text-gray-300 relative z-10">{step.desc}</p>

              {/* Arrow Between Steps */}
              {i !== 3 && (
                <div className="hidden lg:block absolute right-[-45px] top-[80%] transform -translate-y-1/2">
                  <img src={arrow} alt="arrow" className="w-[48px] h-auto" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
      <div className="px-4 sm:px-8 lg:px-20 py-16 text-white">
        {/* Heading Section */}
        <div className="max-w-4xl ml-0 text-left mb-16"  style={{marginLeft:"40px"}}>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Everything <br />
            <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">from AI to XYZ</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            We deliver secure IT consulting, digital transformation, and data solutions<br />
            empowering organizations to modernize, perform, and grow with confidence.
          </p>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#1A1A1A] rounded-lg p-8 flex flex-col items-center text-center min-h-[320px]">
            <div className="text-pink-500 mb-6">
              <img src={g2m} alt="arrow" className="w-[36px] h-auto" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Emerging Technology</h3>
            <p className="text-gray-400 text-sm">
              We harness cutting-edge technologies like AI, cloud, and automation to drive innovation and future-ready solutions
            </p>
          </div>

          {/* Card 2 - Center Highlighted */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg p-8 flex flex-col items-center text-center min-h-[320px]">
            <div className="text-white mb-6">
              <img src={Group} alt="arrow" className="w-[36px] h-auto" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Business Strategy</h3>
            <p className="text-white text-sm">
              We align technology with mission goals offering strategic guidance that delivers measurable impact and long-term value
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1A1A1A] rounded-lg p-8 flex flex-col items-center text-center min-h-[320px]">
            <div className="text-pink-500 mb-6">
              <img src={frame} alt="arrow" className="w-[36px] h-auto" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Engineering & Integration</h3>
            <p className="text-gray-400 text-sm">
              We design, build, and seamlessly integrate secure, scalable systems that power critical operations and enhance performance
            </p>
          </div>
        </div>


        {/* Arrow Buttons */}
        <div className="flex justify-end mt-10 gap-4 pr-4">
          <button className="w-10 h-10 rounded-full border border-red-500 flex items-center justify-center hover:bg-red-600 transition">
            <svg className="w-4 h-4 text-red-500 hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full border border-red-500 flex items-center justify-center hover:bg-red-600 transition">
            <svg className="w-4 h-4 text-red-500 hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className="px-4 sm:px-6 lg:px-12" style={{ marginBottom: "-106px", marginTop: "-32px" }}>
          <div className="bg-[#0C0C0E] text-white py-20 rounded-xl">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 min-h-[600px]">
              {/* Left Content - Centered Vertically */}
              <div className="self-center px-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                  Meet the <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">Experts</span><br />
                  Behind <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">Our Solutions</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  With the full force of our team in your corner, you can navigate rapid innovation
                  with confidence, while protecting the trust you’ve worked so hard to build.
                </p>

                {/* Know more link */}
                <a href="#" className="inline-flex items-center gap-2 text-white font-medium group" style={{ marginTop: "60px" }}>
                  Know more
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

              {/* Right Image Grid with Offset Positioning */}
              <div className="grid grid-cols-2 gap-6 px-4 relative">
                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                  <img
                    src={team1}
                    alt="Team 1"
                    className="rounded-lg object-cover w-full h-100 translate-y-[-46px]"
                  />
                  <img
                    src={team3}
                    alt="Team 2"
                    className="rounded-lg object-cover w-full h-100 translate-y-[-30px]"
                  />
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-6">
                  <img
                    src={team2}
                    alt="Team 3"
                    className="rounded-lg object-cover w-full h-100 translate-y-[-2px]"
                  />
                  <img
                    src={team4}
                    alt="Team 4"
                    className="rounded-lg object-cover w-full h-100 translate-y-[2px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white px-4 sm:px-8 lg:px-20 py-16">
          {/* Heading */}
          <div className="text-4xl sm:text-5xl font-extrabold leading-tight mb-12">
            <h1>
              Our <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">network</span> consists
            </h1>
            <h1>
              of only <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">the best.</span>
            </h1>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-5 grid-rows-2 border-t border-l border-dashed border-white/30">
            {[
              'wework', 'amazon', 'uber', 'wework', 'amazon',
              'amazon', 'uber', 'wework', 'amazon', 'uber',
            ].map((company, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-28 border-b border-r border-dashed border-white/30 text-2xl font-semibold capitalize"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
