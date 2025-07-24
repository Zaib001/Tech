import React from "react";
import threat from "../Images/reg-img1.png"
import threatSvg from "../svg/Cyber.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/reg-img2.png";
import reverseArrow from "../svg/reverseArrow.svg";
import img from "../Images/reg-img3.png";
import forwardArrow from "../svg/Group 15 (1).svg";
import one from "../svg/Frame 275.svg";
import two from "../svg/Frame 277 (1).svg";
import three from "../svg/Frame 278 (1).svg";
import four from "../svg/Frame 279 (1).svg";
import five from "../svg/Frame 280 (1).svg";



export default function CyberRegilliance() {

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${threat})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "45px", marginLeft: "30px" }}>
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1">
                                <img
                                    src={threatSvg}
                                    alt="Company"
                                />
                            </h2>
                            <br></br>
                            <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                                Resilience
                            </h2>
                            <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                Recover Smarter. Operate Stronger.<br></br> Evolve Continuously.
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
                            <h2 className="font-extrabold mb-6">
                                <span className="text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%]">
                                    Building Cyber Resilience Beyond Compliance
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "30px" }}>
                            Cyber threats are no longer rare events—they’re persistent, evolving, and business-disruptive. HPIT’s Cyber Resilience service helps you withstand, respond to, and recover from attacks while maintaining critical operations. We go beyond cybersecurity to ensure operational continuity under pressure.
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
                    <div className="rounded-xl overflow-hidden" style={{ marginTop: "20px" }}>
                        <img
                            src={img1}
                            alt="Team Discussion"
                            className="w-[512px] h-[368px] object-cover rounded-l-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20" style={{ marginLeft: "40px" }}>
                {/* Section Heading */}
                <div className="mb-12">
                    <h2 className="text-[48px] font-bold">
                        <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">Why Choose HPIT</span>
                    </h2>
                    <p className="text-gray-400 mt-2 text-[20px]">Resilience Experts with Operational Depth</p>
                </div>

                {/* Image + Features Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Image */}
                    <div>
                        <img
                            src={img}
                            alt="Team discussing security"
                            className="rounded-xl object-cover w-[621px] h-[414px]"
                        />
                    </div>

                    {/* Right Features with underlines */}
                    <div className="space-y-12">
                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Multi-Layer Expertise</h3>
                            <p className="text-gray-400 text-[16px]">
                               Integrated strategies across IT, OT, and cloud environments.
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Tailored for Every Scale</h3>
                            <p className="text-gray-400 text-[16px]">
                                Resilience solutions designed for both startups and global enterprises.
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Practical Execution</h3>
                            <p className="text-gray-400 text-[16px]">
                               Hands-on support that turns strategy into action.
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Compliance Ready</h3>
                            <p className="text-gray-400 text-[16px]">
                                Aligned with NIST, ISO 22301, DORA, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16" style={{marginLeft:"50px"}}>
                {/* Heading Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-[48px] font-extrabold">
                        <span className="text-transparent bg-clip-text bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)]"> OOur Cyber Resilience Framework</span>  
                    </h2>
                    <p className="text-gray-400 mt-4 text-[20px] max-w-3xl mx-auto">
                       A Proven Lifecycle Approach to<br></br> Resilience
                    </p>
                </div>

                {/* Steps Section */}
                {/* Steps Section */}
                <div className="grid grid-cols-5 gap-4 relative mt-12">

                    {/* Step 1 - Up */}
                    <div className="flex flex-col items-start">
                        <img src={one} alt="Step 1" className="w-[64px] h-[64px] mb-4" />
                        <div>
                            <h4 className="font-semibold text-white text-[24px]">Assess</h4>
                            <p className="text-[16px] text-gray-400 mt-1">Identify critical assets, dependencies, and threats.</p>
                        </div>
                    </div>

                    {/* Arrow 1 - Down */}
                    <img src={reverseArrow} alt="arrow" className="absolute left-[10%] top-[200px] w-[80px] h-[69px] hidden md:block" />

                    {/* Step 2 - Down */}
                    <div className="flex flex-col items-start mt-16" style={{ marginTop: "160px" }}>
                        <img src={two} alt="Step 2" className="w-[64px] h-[64px] mb-4" />
                        <div>
                            <h4 className="font-semibold text-white text-[24px]">Design</h4>
                            <p className="text-[16px] text-gray-400 mt-1">Build resilience plans and recovery architecture.</p>
                        </div>
                    </div>

                    {/* Arrow 2 - Up */}
                    <img src={forwardArrow} alt="arrow" className="absolute left-[33%] top-[105px] w-[80px] h-[69px] hidden md:block" />

                    {/* Step 3 - Up */}
                    <div className="flex flex-col items-start">
                        <img src={three} alt="Step 3" className="w-[64px] h-[64px] mb-4" />
                        <div>
                            <h4 className="font-semibold text-white text-[24px]">Test</h4>
                            <p className="text-[16px] text-gray-400 mt-1">Run simulations, war games, and table-top drills.</p>
                        </div>
                    </div>

                    {/* Arrow 3 - Down */}
                    <img src={reverseArrow} alt="arrow" className="absolute left-[53%] top-[200px] w-[80px] h-[69px] hidden md:block" />

                    {/* Step 4 - Down */}
                    <div className="flex flex-col items-start mt-16" style={{ marginTop: "160px" }}>
                        <img src={four} alt="Step 4" className="w-[64px] h-[64px] mb-4" />
                        <div>
                            <h4 className="font-semibold text-white text-[24px]">Deploy</h4>
                            <p className="text-[16px] text-gray-400 mt-1">Implement resilient infrastructure and playbooks.</p>
                        </div>
                    </div>

                    {/* Arrow 4 - Up */}
                    <img src={forwardArrow} alt="arrow" className="absolute left-[73%] top-[105px] w-[80px] h-[69px] hidden md:block" />

                    {/* Step 5 - Up */}
                    <div className="flex flex-col items-start">
                        <img src={five} alt="Step 5" className="w-[64px] h-[64px] mb-4" />
                        <div>
                            <h4 className="font-semibold text-white text-[24px]">improve</h4>
                            <p className="text-[16px] text-gray-400 mt-1">Post-incident learning and resilience upgrades.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Card = ({ title, description }) => {
    const words = title.trim().split(" ");
    const length = words.length;


    return (
        <div
            className="w-[405px] h-[240px] rounded-md border border-[#444955] bg-[#111215] relative"
            style={{
                borderWidth: "1.5px",
                borderStyle: "dashed",
                paddingTop: "40px", // heading 40px from top
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingBottom: "24px",
            }}
        >
            <h3 className="text-[24px] font-semibold mb-[30px] leading-snug">
                {title}
            </h3>
            <p className="text-gray-400 text-[16px] leading-relaxed">{description}</p>
        </div>
    );
};