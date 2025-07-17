import React from "react";
import application from "../svg/Application.svg";
import ApplicationTransfrom from "../Images/ApplicationTransformation.jpg";
import facelift from "../Images/Pexels Photo by Michelangelo Buonarroti (1).jpg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import twopoint5 from "../svg/twopointfive.svg";
import threetimes from "../svg/threetimes.svg";
import sixtypercent from "../svg/sixtypercent.svg";
import fourtypercent from "../svg/fourtypercent.svg";
import ladysitting from "../Images/Pexels Photo by Photo By_ Kaboompics.com.jpg";
import horizontalLine from "../svg/Line 30.svg";
import Thursday from "../svg/Thursday.svg";
import Gener8 from "../svg/Gener8.svg";
import MindfulChef from "../svg/MindfulChef.svg";
import ClientExperience from "@/components/ClientExperience";


export default function ApplicationTransformation() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <div
                className="bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${ApplicationTransfrom})`,
                    width: 'auto',
                    height: '756px',
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "100px" }}>
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1">
                                <img
                                    src={application}
                                    alt="Company"
                                />
                            </h2>
                            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                                Transformation
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
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16" style={{ marginTop: "60px" }}>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-6xl font-extrabold mb-2">
                                <span className="text-white">More than a facelift it's a full upgrade.</span>
                            </h2>
                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "60px" }}>
                            Application transformation updates core systems, not only to modern UI/UX standards but to new levels of speed, scalability, security, and agility. We turn outdated into outstanding — with strategy, not shortcuts.
                        </p>
                        {/* Know more link */}
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white font-medium group"
                            style={{ marginTop: "60px", fontSize: "16px" }}
                        >
                            Get Started

                            {/* Ellipse + Arrow */}
                            <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                {/* Arrow centered inside ellipse */}
                                <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                </span>
                            </div>
                        </a>

                    </div>

                    {/* Right Image */}
                    <div className="rounded-xl overflow-hidden">
                        <img
                            src={facelift}
                            alt="Team Discussion"
                            className="w-[546px] h-[399px] object-cover rounded-l-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-black text-white px-4 lg:gap-x-18 sm:px-8 py-12 border-t border-b border-gray-700">
                <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-700 text-center">

                    <div className="px-4 py-6">
                        <img src={sixtypercent} alt="2.5x" className="w-[191px] h-[34px]" style={{ marginLeft: '70px', marginBottom: "20px" }} />
                        <p className="mt-2 text-[18px] text-gray-300 font-poppins leading-snug">
                            Reduction in System <br /> Downtime
                        </p>
                    </div>

                    <div className="px-4 py-6">
                        <img src={threetimes} alt="2.5x" className="w-[262px] h-[34px]" style={{ marginLeft: '40px', marginBottom: "20px" }} />
                        <p className="mt-2 text-[18px] text-gray-300 font-poppins leading-snug">
                            Faster Feature Deployment <br /> Post-Transformation
                        </p>
                    </div>

                    <div className="px-4 py-6">
                        <img src={fourtypercent} alt="2.5x" className="w-[197px] h-[34px]" style={{ marginLeft: '65px', marginBottom: "20px" }} />
                        <p className="mt-2 text-[18px] text-gray-300 font-poppins leading-snug">
                            Lower Maintenance & <br /> Support Costs
                        </p>
                    </div>

                    <div className="px-4 py-6">
                        <img src={twopoint5} alt="2.5x" className="w-[153px] h-[34px]" style={{ marginLeft: '80px', marginBottom: "20px" }} />
                        <p className="mt-2 text-[18px] text-gray-300 font-poppins leading-snug">
                            Increase in User <br /> Satisfaction
                        </p>
                    </div>

                </div>
            </div>
            <div className="bg-black text-white py-16 px-6" style={{ marginTop: "60px", marginLeft: "-98px" }}>
                <div className="max-w-6xl mx-auto">
                    {/* Heading Section */}
                    <div>
                        <h2 className="text-[48px] font-extrabold mb-2">
                            <span className="text-white">What We Transform</span>
                        </h2>
                    </div>
                    <p className="text-gray-300 text-[20px] leading-relaxed" style={{ marginTop: "10px", marginBottom: "-20px" }}>
                        Modernizing every layer from interface <br></br> to infrastructure.
                    </p>
                    {/* Cards Section */}
                    <div className="mt-12 grid md:grid-cols-3 gap-[120px] bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-l" style={{ marginRight: "-110px" }}>
                        {/* Card 1 */}
                        <div className="border-r border-gray-600 pr-6">
                            <h3 className="text-[32px] font-semibold mb-2">UI/UX &<br></br> Frontend</h3>
                            <p className="text-gray-400 text-[18px]" style={{ marginTop: "30px" }}>
                                Outdated interfaces made modern, mobile first, and accessible keeping users engaged and satisfied.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="border-r border-gray-600 px-6">
                            <h3 className="text-[32px] font-semibold mb-2">Architecture <br></br>& Codebase</h3>
                            <p className="text-gray-400 text-[18px]" style={{ marginTop: "30px" }}>
                                From spaghetti code to clean structure — we refactor, rebuild, or modularize as needed.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="pl-6">
                            <h3 className="text-[32px] font-semibold mb-2">Infrastructure & Deployment</h3>
                            <p className="text-gray-400 text-[18px]" style={{ marginTop: "30px" }}>
                                Legacy hosting → containerized, cloud-native, CI/CD-ready deployment pipelines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16 bg-black">
                <div className="max-w-7xl mx-auto">

                    {/* Centered Heading */}
                    <div className="text-center">
                        <h2 className="text-[48px] font-extrabold">
                            The <span className="text-white">HPIT</span>{" "}
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Approach
                            </span>
                        </h2>
                        <p className="text-gray-300 mt-4 text-[20px]">
                            A clear, strategic path to modern, high <br></br> performing applications.
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div>
                            <img
                                src={ladysitting} // Replace with your actual image
                                alt="Person with laptop"
                                className="w-[497px] h-[601px] rounded-xl"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <p className="text-white font-medium text-sm mb-6">
                                Our Proven 5-Step Process to Modernize Legacy Applications
                            </p>

                            {/* Step List */}
                            <ul className="space-y-6">
                                {[
                                    {
                                        title: 'Assessment',
                                        desc: 'Understand your app, users, pain points, and goals.',
                                    },
                                    {
                                        title: 'Strategy Design',
                                        desc: 'Define what to keep, rebuild, or refactor.',
                                    },
                                    {
                                        title: 'Modernization Execution',
                                        desc: 'Implement code, UI, and infrastructure upgrades.',
                                    },
                                    {
                                        title: 'Testing & Optimization',
                                        desc: 'Ensure flawless performance and security.',
                                    },
                                    {
                                        title: 'Handoff + Training',
                                        desc: 'Empower your team to take full control post-launch.',
                                    },
                                ].map((step, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full border-2 border-red-600 text-red-500 font-bold flex items-center justify-center">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <p className="font-semibold">{step.title}</p>
                                            <p className="text-sm text-gray-400">{step.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16 bg-black">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-4xl font-extrabold mb-4">
                        Outdated to <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Outstanding</span>
                    </h2>
                    <p className="text-gray-300 mb-12 text-sm max-w-2xl">
                        We helped modernize their data-sharing platform, improving scalability, tightening security, and reducing cloud costs by 35%.
                    </p>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

                        {/* Left Highlighted Card */}
                        <div className="border-2 border-blue-500 p-6 bg-gradient-to-b from-[#151718] to-[#202224] flex items-center justify-center min-h-[200px]">
                            <h3 className="text-2xl font-bold leading-snug">
                                How We <br />
                                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Transformed X's</span> <br />
                                Legacy App
                            </h3>
                        </div>

                        {/* Right Card: Thursday */}
                        <div className="bg-gradient-to-b from-[#1f1926] to-[#161122] p-6 rounded-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Thursday</h3>
                                <p className="text-sm text-gray-300">
                                    We enhanced this dating app’s UX and backend to support real-time events and location-based user matching.
                                </p>
                            </div>
                            <div className="mt-6 text-sm text-white flex items-center gap-2">
                                <span className="text-white">KNOW MORE</span>
                                {/* Ellipse + Arrow */}
                                <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                                    <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                    {/* Arrow centered inside ellipse */}
                                    <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                                        <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                    </span>
                                </div>
                            </div>
                            <img src={Thursday} alt="Gener8 App" className="w-24 object-contain" />
                        </div>

                        {/* Gener8 Card */}
                        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#131313] p-6 rounded-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Gener8</h3>
                                <p className="text-sm text-gray-300">
                                    Built a secure system enabling users to control their data and earn rewards by sharing it with brands.
                                </p>
                            </div>
                            <div className="mt-6 flex items-end justify-between">
                                <div className="text-sm text-white flex items-center gap-2">
                                    <span className="text-white">KNOW MORE</span>
                                    {/* Ellipse + Arrow */}
                                    <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                                        <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                        {/* Arrow centered inside ellipse */}
                                        <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                                            <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                        </span>
                                    </div>
                                </div>
                                <img src={Gener8} alt="Gener8 App" className="w-24 object-contain" />
                            </div>
                        </div>

                        {/* Mindful Chef Card */}
                        <div className="bg-gradient-to-b from-[#13131d] to-[#0f1018] p-6 rounded-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Mindful Chef</h3>
                                <p className="text-sm text-gray-300">
                                    A healthy meal delivery platform we optimized for performance, user experience, and seamless subscription management.
                                </p>
                            </div>
                            <div className="mt-6 flex items-end justify-between">
                                <div className="text-sm text-white flex items-center gap-2">
                                    <span className="text-white">KNOW MORE</span>
                                    {/* Ellipse + Arrow */}
                                    <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                                        <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                        {/* Arrow centered inside ellipse */}
                                        <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                                            <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                        </span>
                                    </div>
                                </div>
                                <img src={MindfulChef} alt="Mindful Chef App" className="w-24 object-contain" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ClientExperience></ClientExperience>
        </div>
    );
}
