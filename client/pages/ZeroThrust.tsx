import React from "react";
import unplash from "../Images/unsplash_mT7lXZPjk7U.png"
import zero from "../svg/Zero.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Pexels Photo by Tima Miroshnichenko.png";
import sv1 from "../svg/svg1.svg"
import sv2 from "../svg/svg2.svg"
import sv3 from "../svg/svg3.svg"
import sv4 from "../svg/svg4.svg"
import sv5 from "../svg/svg5.svg"
import sv6 from "../svg/svg6.svg"
import fauxals from "../Images/unsplash_oyXis2kALVg.png";
import centerImage from "../Images/Pixabay-3119879.png";


export default function ZeroThrust() {

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${unplash})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "45px", marginLeft: "30px" }}>
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1">
                                <img
                                    src={zero}
                                    alt="Company"
                                />
                            </h2>
                            <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                                Trust
                            </h2>
                            <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                Secure access. Always verified. Never<br></br> assumed safe.
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
                                    A Modern Framework for Relentless Cyber Defense
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "30px" }}>
                            Zero Trust is a modern cybersecurity approach that assumes no user or device  inside or outside the network  is trustworthy by default. It requires continuous verification and enforces strict access controls based on identity, behaviour, and context.
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
                            className="w-[552px] h-[368px] object-cover rounded-l-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-20 px-6 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column */}
                    <div className="lg:w-3/5  flex flex-col justify-between">
                        {/* Heading and Description */}
                        <div>
                            <h2 className="text-[48px] sm:text-5xl font-extrabold leading-snug">
                                <span className="text-[48px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                    Built to Secure Every Layer, Continuously
                                </span>
                            </h2>
                            <p className="mt-4 text-gray-400 text-base sm:text-[14px] max-w-md">
                                Zero Trust isn’t a single tool — it’s a security architecture composed of interlocking capabilities. Each one reinforces the other, ensuring your environment remains protected, adaptive, and breach-resilient in real time.
                            </p>
                        </div>

                        {/* 2 Cards in a Row (Left side) */}
                        <div className="mt-10 grid grid-cols-2 gap-6 auto-rows-fr">
                            {/* Card 1 */}
                            <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                                <img src={sv3} alt="Cost Icon" className="w-[64px] h-[64px] mb-4" />
                                <h3 className="text-[22px] font-semibold mb-2">Micro  Segmentation</h3>
                                <p className="text-gray-400 text-[16px]">
                                    Isolate systems to prevent lateral threat movement.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                                <img src={sv4} alt="Performance Icon" className="w-[64px] h-[64px] mb-4" />
                                <h3 className="text-[22px] font-semibold mb-2">Policy-Based Access</h3>
                                <p className="text-gray-400 text-[16px]">
                                    Grant access based on context and behavior.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (4 Cards in 2x2 Grid) */}
                    <div className="lg:w-3/5 grid grid-cols-2 gap-6 auto-rows-fr">
                        {/* Card 3 */}
                        <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                            <img src={sv1} alt="Monitoring Icon" className="w-[64px] h-[64px] mb-4" />
                            <h3 className="text-[22px] font-semibold mb-2">Identity & Access Intelligence</h3>
                            <p className="text-gray-400 text-[16px]">
                                Verify every user with adaptive authentication checks.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                            <img src={sv2} alt="Security Icon" className="w-[64px] h-[64px] mb-4" />
                            <h3 className="text-[22px] font-semibold mb-2">Device<br></br> Trust</h3>
                            <p className="text-gray-400 text-[16px]">
                                Allow only compliant and secured devices access.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                            <img src={sv5} alt="Backup Icon" className="w-[64px] h-[64px] mb-4" />
                            <h3 className="text-[22px] font-semibold mb-2">Continuous Monitoring</h3>
                            <p className="text-gray-400 text-[16px] ">
                                Detect and respond to threats in real-time.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                            <img src={sv6} alt="Configuration Icon" className="w-[64px] h-[64px] mb-4" />
                            <h3 className="text-[22px] font-semibold mb-2">Visibility & Analytics</h3>
                            <p className="text-gray-400 text-[16px]">
                                Gain deep insights from user and system activity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16" style={{ marginTop: "160px" }}>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-start relative" style={{marginLeft:"25px"}}>

                    {/* Left Image with Heading on top */}
                    <div className="relative">
                        {/* Heading on top-left of image, 40px down */}
                        <h2 className="absolute top-[-180px] left-6 text-[48px] sm:text-5xl font-extrabold leading-tight z-10" style={{ marginLeft: "-24px" }}>
                            <span className="text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">Benefits That Matter</span>
                        </h2>
                        <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl" style={{ marginTop: "-120px", marginBottom: "50px" }}>
                            Enhanced security, seamless user experience, continuous threat detection, adaptive access control, and scalable solutions that grow with your business needs.
                        </p>
                        {/* Image */}
                        <img
                            src={fauxals}
                            alt="Migration Support"
                            className="rounded-md w-[511px] h-[578px] object-cover"
                        />
                    </div>

                    {/* Right Content aligned with image top */}
                    <div style={{ marginTop: "30px" }}>
                        {/* Cards */}
                        <div className="space-y-14">
                            {/* Card 1 */}
                            <div className="border border-dashed border-gray-700 rounded-xl px-6 py-4 max-w-[95%]">
                                <h4 className="font-semibold text-[20px] mb-1">Lift and Shift (Rehosting)</h4>
                                <p className="text-gray-400 text-[16px]">Move apps as-is for speed and minimal change.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-dashed border-gray-700 rounded-xl px-6 py-4 max-w-[95%]">
                                <h4 className="font-semibold text-[20px] mb-1">Replatforming</h4>
                                <p className="text-gray-400 text-[16px]">Adapt existing apps to better leverage cloud capabilities.</p>
                            </div>

                            {/* Card 3 */}
                            <div className="border border-dashed border-gray-700 rounded-xl px-6 py-4 max-w-[95%]">
                                <h4 className="font-semibold text-[20px] mb-1">Refactoring / Re-architecting</h4>
                                <p className="text-gray-400 text-[16px]">Redesign apps to be cloud-native for scalability, flexibility, and automation.</p>
                            </div>

                            {/* Card 4 */}
                            <div className="border border-dashed border-gray-700 rounded-xl px-6 py-4 max-w-[95%]">
                                <h4 className="font-semibold text-[20px] mb-1">Hybrid and Multi-cloud</h4>
                                <p className="text-gray-400 text-[16px]">Modernize with flexible, multi-platform deployment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white px-4 sm:px-10 py-16 flex flex-col items-center">
                <h2 className="text-3xl sm:text-[48px] font-extrabold text-center mb-4 text-white">
                    <span
                        className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent"
                    >
                        Why Choose HPIT 
                    </span>
                </h2>
                <p className="text-gray-400 text-center mb-12 text-[20px]">
                   Adaptive, scalable, and guided  from first assessment to <br></br>full Zero Trust deployment.
                </p>

                {/* Main Section */}
                <div className="grid grid-cols-3 gap-8 max-w-7xl items-center">
                    {/* Left Cards */}
                    <div className="flex flex-col gap-8">
                        <Card
                            title="Certified Multi Cloud Experts"
                            description="In-house teams certified across AWS, Azure, and GCP."
                        />
                        <Card
                            title="Tailored Support Plans"
                            description="Flexible engagement models built around your operational needs."
                        />
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center">
                        <img
                            src={centerImage}
                            alt="Team Collaboration"
                            className="rounded-xl w-[375px] h-[512px] object-cover shadow-xl"
                        />
                    </div>

                    {/* Right Cards */}
                    <div className="flex flex-col gap-8">
                        <Card
                            title="SLA-Backed Guarantees"
                            description="Response times and uptime metrics you can rely on."
                        />
                        <Card
                            title="Transparent Reporting"
                            description="Access real-time dashboards and monthly performance insights."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Card = ({ title, description }) => {
    const words = title.trim().split(" ");
    const length = words.length;

    const firstLine = words.slice(0, length - 1).join(" ");
    const lastWord = words[length - 1];

    return (
        <div
            className="w-[360px] h-[240px] rounded-md border border-[#444955] bg-[#111215] relative"
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