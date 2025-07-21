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
import redline from "../svg/redline.svg";
import redone from "../svg/redone.svg";
import redtwo from "../svg/redtwo.svg";
import redthree from "../svg/redthree.svg";
import redfour from "../svg/redfour.svg";
import redfive from "../svg/redfive.svg";
import img from "../Images/Pexels Photo by Photo By_ Kaboompics.com.jpg";

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
                            <h2 className="text-white text-[58px] md:text-5xl lg:text-6xl font-normal mb-1">
                                <img
                                    src={application}
                                    alt="Company"
                                />
                            </h2>
                            <h2 className="text-white text-[58px] md:text-4xl lg:text-5xl font-bold mb-8">
                                Transformation
                            </h2>
                            <p className="text-white text-[20px] md:text-lg leading-relaxed max-w-xl">
                                Give your legacy systems new life with future ready architecture, design, and performance  all without<br></br> starting from scratch.
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
                            <h2 className="text-[56px] font-extrabold mb-2">
                                <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">More than a facelift it's a full upgrade.</span>
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
                    <div className="rounded-xl overflow-hidden" style={{ marginTop: "20px", marginLeft: "60px" }}>
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
                            <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">What We Transform</span>
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
            <div className="bg-black text-white px-6 py-16 lg:px-20">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-[48px] font-extrabold mb-4">
                        <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">The HPIT Approach</span>
                    </h2>
                    <p className="text-gray-300 text-[20px] max-w-2xl">
                        A clear, strategic path to modern, high <br></br>performing applications.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ marginTop: "80px" }}>

                    {/* Left: Heading and Image */}
                    <div>
                        <img
                            src={img}
                            alt="Team Working"
                            className="w-[497px] h-[601px] rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right: Steps */}
                    <div className="space-y-8 mt-2" style={{ marginTop: "-40px", marginLeft: "80px" }}>
                        {/* Line SVG beside paragraph */}
                        <div className="flex items-start gap-4">
                            <img src={redline} alt="Vertical Line" className="w-4 h-[56px] mt-1" />
                            <p className="text-[20px] text-gray-300 leading-relaxed">
                                Our Proven 5-Step Process to Modernize Legacy Applications
                            </p>
                        </div>

                        {/* Steps with SVG Icons */}
                        {[
                            [redone, "Assessment", "Understand your app, users, pain points, and goals."],
                            [redtwo, "Strategy Design", "Define what to keep, rebuild, or refactor."],
                            [redthree, "Modernization Execution", "Implement code, UI, and infrastructure upgrades."],
                            [redfour, "Testing & Optimization", "Ensure flawless performance and security."],
                            [redfive, "Handoff + Training", "Empower your team to take full control post-launch."],
                        ].map(([icon, title, desc]) => (
                            <div key={title} className="flex items-start gap-4">
                                {/* Step SVG Icon */}
                                <img src={icon} alt={title} className="w-[64px] h-[64px] mt-1" />
                                {/* Step Text */}
                                <div>
                                    <h3 className="font-semibold text-[24px] text-white">{title}</h3>
                                    <p className="text-gray-400 text-[16px]">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="bg-black px-6 md:px-20 py-16 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Column 1: Top Card */}
                    <div className="bg-[#333740] rounded-xl p-6 flex items-center justify-center h-[240px] col-span-1">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight mb-2">
                                How We <span className="bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text">Transformed</span><br />
                                X's Legacy App
                            </h2>
                        </div>
                    </div>

                    {/* Column 2 & 3 merged: Top Right Wide Card */}
                    <div className="bg-gradient-to-r from-[#00000000] to-[#8D128F] rounded-xl p-6 flex items-center justify-between h-[240px] col-span-2">
                        <div className="max-w-[60%]">
                            <h3 className="text-xl font-semibold mb-2">Thursday</h3>
                            <p className="text-sm text-gray-300 mb-4">
                                We enhanced this dating app’s UX and backend to support real-time events and location-based user matching.
                            </p>
                            <button className="text-sm font-medium flex items-center gap-2 group">
                                KNOW MORE
                                <span className="text-white group-hover:translate-x-1 transition">&#8594;</span>
                            </button>
                        </div>
                        <img
                            src="/images/thursday.png"
                            alt="Thursday"
                            className="w-40 h-auto"
                        />
                    </div>

                    {/* Bottom Left Card (under left narrow one) */}
                    <div className="bg-gradient-to-b from-[#000000] to-[#1a1a1a] rounded-xl p-6 h-[300px] relative overflow-hidden col-span-1">
                        <h3 className="text-xl font-semibold mb-2">Gener8</h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Built a secure system enabling users to control their data and earn rewards by sharing it with brands.
                        </p>
                        <button className="text-sm font-medium flex items-center gap-2 group">
                            KNOW MORE
                            <span className="text-white group-hover:translate-x-1 transition">&#8594;</span>
                        </button>
                        <img
                            src="/images/gener8.png"
                            alt="Gener8"
                            className="absolute bottom-[-10px] right-[-10px] w-40 h-auto"
                        />
                    </div>

                    {/* Bottom Right Card (under wide one, right aligned) */}
                    <div className="bg-gradient-to-b from-[#000000] to-[#1a1a1a] rounded-xl p-6 h-[300px] relative overflow-hidden col-span-2">
                        <h3 className="text-xl font-semibold mb-2">Mindful Chef</h3>
                        <p className="text-sm text-gray-300 mb-4 max-w-[70%]">
                            A healthy meal delivery platform we optimized for performance, user experience, and seamless subscription management.
                        </p>
                        <button className="text-sm font-medium flex items-center gap-2 group">
                            KNOW MORE
                            <span className="text-white group-hover:translate-x-1 transition">&#8594;</span>
                        </button>
                        <img
                            src="/images/mindfulchef.png"
                            alt="Mindful Chef"
                            className="absolute bottom-[-10px] right-[-10px] w-40 h-auto"
                        />
                    </div>

                </div>
            </div>
            <ClientExperience></ClientExperience>
        </div>
    );
}
