import React from "react";
import negartive from "../Images/Pexels Photo by Negative Space.png"
import cyber from "../svg/Cyber.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Pexels Photo by fauxels (1).png";
import img2 from "../Images/a2 1.png"
import icon1 from "../svg/one.svg"
import icon2 from "../svg/two.svg"
import icon3 from "../svg/three.svg"
import icon4 from "../svg/four.svg"


export default function CyberTransformation() {

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${negartive})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "45px", marginLeft: "30px" }}>
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1">
                                <img
                                    src={cyber}
                                    alt="Company"
                                />
                            </h2>
                            <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                                Transformation
                            </h2>
                            <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                Stay resilient, secure, and future-ready<br></br> through cyber transformation.
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
                                <span className="text-[42px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%]">
                                    Transforming Security Into a Business Advantage
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "30px" }}>
                            Forget outdated security models. Cyber transformation weaves security into every step of your digital journey  making it a catalyst for innovation, not a hurdle.
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
            <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-[48px] font-bold">
                        <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">Our Approach: Four Pillars of Change</span>
                    </h2>
                    <p className="text-gray-400 text-[20px] mt-2">
                        From Strategy to Execution — Seamlessly Integrated
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-[#111215] rounded-xl p-6 space-y-3 shadow-lg border border-[#444955]">
                        <img src={icon1} alt="Assess Icon" className="w-[64px] h-[64px]" />
                        <h3 className="text-[22px] font-semibold">AssesAdaptive Securitys</h3>
                        <p className="text-gray-400 text-[16px]">
                            Real-time risk assessment and response
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#111215] rounded-xl p-6 space-y-3 shadow-lg border border-[#444955] ">
                        <img src={icon2} alt="Secure Icon" className="w-[64px] h-[64px]" />
                        <h3 className="text-[22px] font-semibold">Automation Everywhere</h3>
                        <p className="text-gray-400 text-[16px]">
                            Free your team from manual, repetitive tasks
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#111215] rounded-xl p-6 space-y-3 shadow-lg border border-[#444955]">
                        <img src={icon3} alt="Detect & Respond Icon" className="w-[64px] h-[64px]" />
                        <h3 className="text-[22px] font-semibold">Integrated<br></br> Visibility</h3>
                        <p className="text-gray-400 text-[16px]">
                            Holistic view across cloud, network, endpoints
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#111215] rounded-xl p-6 space-y-3 shadow-lg border border-[#444955]">
                        <img src={icon4} alt="Audit & Improve Icon" className="w-[64px] h-[64px]" />
                        <h3 className="text-[22px] font-semibold">Collaborative Culture</h3>
                        <p className="text-gray-400 text-[16px]">
                            Security aligned with business goals, across teams
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="font-extrabold mb-6">
                                <span className="text-[42px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%]">
                                    HPIT : More Than a Provider A Transformation Partner
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "30px" }}>
                            We bring deep expertise, innovative tools, and a <br></br>partnership mindset — committed to your ongoing<br></br> success, not just quick fixes.
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
                            src={img2}
                            alt="Team Discussion"
                            className="w-[461px] h-[461px] object-cover rounded-l-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

