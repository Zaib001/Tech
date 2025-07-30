import React from "react";
import threat from "../Images/artificial-img.png"
import threatSvg from "../svg/Artificial.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/artificia-img-2.png";
import MindfulChef from "../Images/ai-img-1.png"
import Thursday from "../Images/ai-img-2.png"
import Gener8 from "../Images/ai-img-3.png"


export default function ArtificialIntelligence() {

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${threat})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "45px" }}>
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
                                Intelligence
                            </h2>
                            <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                Turning Intelligence Into Impact<br></br> Faster
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
                                    From Models to<br></br> Meaningful Change
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "30px" }}>
                            HPIT’s AI strategy goes beyond algorithms. We help you unlock value from data, embed intelligence into operations, and scale responsibly — with human-centered outcomes and measurable impact at every stage.
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
                    <div className="rounded-xl overflow-hidden" style={{ marginTop: "20px", marginLeft: "40px" }}>
                        <img
                            src={img1}
                            alt="Team Discussion"
                            className="w-[580px] h-[420px] object-cover rounded-l-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full bg-black text-white py-16 px-6 md:px-12">
                {/* Heading */}
                <div className="max-w-5xl mx-auto mb-12" style={{ marginLeft: "80px" }}>
                    <h2 className="text-4xl sm:text-4xl font-extrabold mb-4 leading-tight">
                        See What We’ve <br />
                        <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
                            Achieved Together
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Discover how our solutions solved real problems and delivered measurable business outcomes
                    </p>
                </div>
                {/* Cards */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#2c2e33] p-6 rounded-md flex flex-col justify-between">
                        <img
                            src={MindfulChef}
                            alt="Mindful Chef"
                            className="mb-6 mx-auto"
                        />
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Mindful Chef</h3>
                            <p className="text-gray-400 text-sm">
                                A healthy meal delivery platform we optimized for performance, user experience, and seamless subscription management.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#2c2e33] p-6 rounded-md flex flex-col justify-between">
                        <img
                            src={Thursday}
                            alt="Thursday"
                            className="mb-6 mx-auto"
                        />
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Thursday</h3>
                            <p className="text-gray-400 text-sm">
                                We enhanced this dating app’s UX and backend to support real-time events and location-based user matching.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#2c2e33] p-6 rounded-md flex flex-col justify-between">
                        <img
                            src={Gener8}
                            alt="Gener8"
                            className="mb-6 mx-auto w-[416px] h-[328px]"
                            style={{ marginTop: "30px" }}
                        />
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Gener8</h3>
                            <p className="text-gray-400 text-sm">
                                Built a secure system enabling users to control their data and earn rewards by sharing it with brands.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Arrows */}
                <div className="flex justify-end mt-8 space-x-4" style={{ marginRight: "70px" }}>
                    <button className="w-10 h-10 border border-red-500 rounded-full flex items-center justify-center">
                        <span className="text-red-500 text-xl">&lt;</span>
                    </button>
                    <button className="w-10 h-10 border border-red-500 rounded-full flex items-center justify-center">
                        <span className="text-red-500 text-xl">&gt;</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

