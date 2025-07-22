import React from "react";
import cloudTransformation from "../Images/Pexels Photo by Johannes Plenio.png";
import cloud from "../svg/Cloud.svg";
import pix15 from "../Images/Group 139 (1).png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import table from "../Images/Frame 416.png";
import img from "../Images/Frame 417.png";
import ClientExperience from "@/components/ClientExperience";
import fiftypercent from "../svg/fiftypercent.svg";
import eightypercent from "../svg/eightypercent.svg";

const Card = ({ title, description }) => {
    const words = title.trim().split(" ");
    const length = words.length;

    const firstLine = words.slice(0, length - 1).join(" ");
    const lastWord = words[length - 1];

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
                {firstLine && <>{firstLine}<br /></>}
                {lastWord}
            </h3>
            <p className="text-gray-400 text-[16px] leading-relaxed">{description}</p>
        </div>
    );
};



export default function CloudTransformation() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Section: Hero */}
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${cloudTransformation})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "80px" }}>
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1">
                                <img
                                    src={cloud}
                                    alt="Application"
                                />
                            </h2>
                            <h2 className="text-white text-[56px] font-bold mb-8">
                                Transformation
                            </h2>
                            <p className="text-white text-[20px] leading-relaxed max-w-xl">
                                Modernize your cloud for speed, scale,<br></br> and agility.
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
                            <h2 className="text-[60px] font-extrabold mb-2">
                                <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">Make Your Cloud Future-Ready</span>
                            </h2>
                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "20px" }}>
                            HPIT’s Cloud Transformation services help businesses modernize their cloud infrastructure, streamline operations, and adopt next-gen capabilities. We ensure your cloud evolves to meet changing business needs.
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
                            src={pix15}
                            alt="Team Discussion"
                            className="w-[578px] h-[451px] object-cover rounded-l-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section */}
                    <div>
                        <h2 className="text-[48px] font-bold leading-tight">
                            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">Services Built for Modernization</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-md text-[20px]" style={{ marginTop: "40px" }}>
                            We help you shift from legacy systems to modern, cloud-native architectures with speed,
                            precision, and minimal disruption.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="w-[700px]" style={{ marginLeft: "-85px" }}> {/* 👈 Adjust width here */}
                        <div
                            className="relative grid grid-cols-2 grid-rows-2 rounded-xl text-sm"
                            style={{
                                background: `
        linear-gradient(0deg, var(--base-800, #111215), var(--base-800, #111215)),
        linear-gradient(180deg, rgba(0, 0, 0, 0) 40.85%, rgba(218, 34, 255, 0.2) 166.22%),
        linear-gradient(180.18deg, rgba(106, 148, 255, 0.2) -7.28%, rgba(0, 0, 0, 0) 19.51%)`,
                            }}
                        >
                            {/* Horizontal Divider */}
                            <svg
                                className="absolute top-1/2 left-[40px] right-[40px] w-[calc(100%-80px)] h-px z-0"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="0"
                                    y1="0"
                                    x2="100%"
                                    y2="0"
                                    stroke="#444955"
                                    strokeWidth="1"
                                    strokeDasharray="3,3"
                                />
                            </svg>

                            {/* Block 1 */}
                            <div className="p-6 relative z-10">
                                <div className="absolute top-[20px] bottom-[20px] right-0 w-px bg-[#22252B]" />
                                <h3 className="font-semibold text-white text-[20px] mb-1">Assessment & Strategy</h3>
                                <p className="text-gray-400 text-[16px]" style={{ marginTop: "20px" }}>
                                    We analyze your current environment and define a transformation roadmap.
                                </p>
                            </div>

                            {/* Block 2 */}
                            <div className="p-6 relative z-10">
                                <h3 className="font-semibold text-white mb-1 text-[20px]">Architecture Design</h3>
                                <p className="text-gray-400 text-[16px]" style={{ marginTop: "20px" }}>
                                    Build a secure, and cloud native architecture tailored to your goals.
                                </p>
                            </div>

                            {/* Block 3 */}
                            <div className="p-6 relative z-10">
                                <div className="absolute top-[20px] bottom-[20px] right-0 w-px bg-[#22252B]" />
                                <h3 className="font-semibold text-white mb-1 text-[20px]">Execution & Migration</h3>
                                <p className="text-gray-400 text-[16px]" style={{ marginTop: "20px" }}>
                                    Move workloads with minimal disruption and complete visibility.
                                </p>
                            </div>

                            {/* Block 4 */}
                            <div className="p-6 relative z-10">
                                <h3 className="font-semibold text-white mb-1 text-[20px]">Optimization & Enablement</h3>
                                <p className="text-gray-400 text-[16px]" style={{ marginTop: "20px" }}>
                                    Post migration tuning and team training for long term efficiency.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-white py-20 rounded-xl" style={{ marginTop: "40px" }}>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 min-h-[600px]">
                    {/* Left Content */}
                    <div className="self-center px-4">
                        <h2 className="text-[48px] font-extrabold leading-tight mb-6">
                            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">Why Choose HPIT for Cloud Transformation</span><br />
                        </h2>

                        {/* Arrow Image Below */}
                        <div className="mt-8" style={{ marginLeft: "-30px" }}>
                            <img
                                src={table}
                                alt="arrow"
                                className="w-[575px] h-[647px] rounded-md"
                            />
                        </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-14 text-white">
                        <p className="text-gray-300 text-2xl" style={{ marginTop: '130px' }}>
                            HPIT blends cloud expertise with business focus to deliver smooth, secure, and future-ready transformations.
                        </p>
                        <li className="flex items-start gap-3" style={{ marginTop: "60px" }}>
                            <span className="text-red-500 mt-1">○</span>
                            <div>
                                <h4 className="font-semibold text-[20px]">Cloud-Native by Design</h4>
                                <p className="text-gray-400 text-[16px]">
                                    We specialize in re-architecting for AWS, Azure, and GCP.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-red-500 mt-1">○</span>
                            <div>
                                <h4 className="font-semibold text-[20px]">End-to-End Delivery</h4>
                                <p className="text-gray-400 text-[16px]">
                                    From planning to execution, we own the entire transformation journey.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-red-500 mt-1">○</span>
                            <div>
                                <h4 className="font-semibold text-[20px]">Zero Downtime Approach</h4>
                                <p className="text-gray-400 text-[16px]">
                                    We prioritize uptime and continuity throughout the migration process.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-red-500 mt-1">○</span>
                            <div>
                                <h4 className="font-semibold text-[20px]">Cross-Industry Expertise</h4>
                                <p className="text-gray-400 text-[16px]">
                                    Proven success across finance, healthcare, SaaS, and more.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16" style={{ marginBottom: "80px", marginTop: "60px" }}>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text Content */}
                    <div className="space-y-6">
                        <div style={{ marginTop: "-60px" }}>
                            <h2 className="text-[48px] font-extrabold mb-2">
                                <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">Results That Speak for Themselves</span>
                            </h2>
                        </div>

                        <p className="text-gray-300 text-[20px] leading-relaxed" style={{ marginTop: "60px" }}>
                            Our clients move from complex, aging systems to <br></br>agile, cloud-native environments—setting the stage <br></br>for rapid growth and innovation.
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
                    {/* Right Section: Image + Stats */}
                    <div className="rounded-xl overflow-hidden" style={{ marginTop: "-40px" }}>
                        {/* Image */}
                        <img
                            src={img}
                            alt="Team Discussion"
                            className="w-[568px] h-[300px] object-cover rounded-l-sm"
                        />

                        <div className="relative w-[568px] border border-[#333740] rounded-md mt-6 flex">
                            {/* Vertical divider 1 */}
                            <div className="absolute top-[6px] bottom-[6px] left-1/3 w-px bg-[#333740]" />

                            {/* Vertical divider 2 */}
                            <div className="absolute top-[6px] bottom-[6px] left-2/3 w-px bg-[#333740]" />

                            {/* Block 1 */}
                            <div className="flex-1 text-center px-6 py-[15px]">
                                <img src={fiftypercent} className="w-[127px] h-[17px] mx-auto" />
                                <p className="text-[14px] text-gray-400 mt-[5px]">
                                    First-Contact<br />Resolution Rate
                                </p>
                            </div>

                            {/* Block 2 */}
                            <div className="flex-1 text-center px-6 py-[15px]">
                                <img src={eightypercent} className="w-[127px] h-[17px] mx-auto" />
                                <p className="text-[14px] text-gray-400 mt-[5px]">
                                    lower legacy<br />costs
                                </p>
                            </div>

                            {/* Block 3 */}
                            <div className="flex-1 text-center px-6 py-[15px]">
                                <p className="text-[14px] text-gray-400 leading-tight mt-[10px]">
                                    AI-ready modern<br />architecture
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <ClientExperience></ClientExperience>
        </div>
    );
};


