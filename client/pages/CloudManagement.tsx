import React from "react";
import cloudManagement from "../Images/photoManagement.png"
import cloud from "../svg/Cloud.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Pexels Photo by Christina Morillo.png";
import sv1 from "../svg/streamline-plump_graph-bar-increase copy.svg"
import sv2 from "../svg/streamline-plump_graph-bar-increase (1) copy.svg"
import sv3 from "../svg/streamline-plump_graph-bar-increase (2) copy.svg"
import sv4 from "../svg/streamline-plump_graph-bar-increase (3) copy.svg"
import sv5 from "../svg/streamline-plump_graph-bar-increase (4) copy.svg"
import sv6 from "../svg/streamline-plump_graph-bar-increase (5) copy.svg"
import group134 from "../svg/Group 134.svg";
import group136 from "../svg/Group 136.svg";
import group137 from "../svg/Group 137.svg";
import vector3 from "../svg/Vector (3).svg";
import fauxals from "../Images/Pexels Photo by fauxels.png";
import ic1 from "../svg/approx100.svg";
import ic2 from "../svg/satpratishat.svg";
import ic3 from "../svg/thirty.svg";
import ic4 from "../svg/7.svg";
import img from "../Images/Frame 415.png";
import one from "../svg/Frame 273 (1).svg";
import two from "../svg/Frame 277 (2).svg";
import three from "../svg/Frame 278 (2).svg";
import four from "../svg/Frame 279 (2).svg";
import five from "../svg/Frame 280 (2).svg";
import verticalLine from "../svg/Line 30 (2).svg";

export default function CloudManagement() {

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${cloudManagement})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "55px" }}>
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1">
                                <img
                                    src={cloud}
                                    alt="Company"
                                />
                            </h2>
                            <br></br>
                            <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                                Management
                            </h2>
                            <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                HPIT delivers secure, seamless cloud migration <br></br>tailored for performance and built for the future.

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
                                <span className="text-[60px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%]">
                                    Managing Complex<br />Environments
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "30px" }}>
                            HPIT provides end-to-end cloud management services that<br></br> ensure your infrastructure stays secure, cost-effective, and <br></br>fully optimized — every day, around the clock.
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
                    <div className="rounded-xl overflow-hidden" style={{ marginTop: "20px", marginLeft: "200px" }}>
                        <img
                            src={img1}
                            alt="Team Discussion"
                            className="w-[454px] h-[303px] object-cover rounded-l-sm"
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
                                What{" "}
                                <span className="text-[48px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                    We Handle
                                </span>{" "}
                                For You
                            </h2>
                            <p className="mt-4 text-gray-400 text-base sm:text-[14px] max-w-md">
                                HPIT manages every layer of your cloud — from security and performance to cost control and uptime — across AWS, Azure, GCP, and hybrid setups.
                            </p>
                        </div>

                        {/* 2 Cards in a Row (Left side) */}
                        <div className="mt-10 grid grid-cols-2 gap-6 auto-rows-fr">
                            {/* Card 1 */}
                            <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                                <img src={sv3} alt="Cost Icon" className="w-[64px] h-[64px] mb-4" />
                                <h3 className="text-[22px] font-semibold mb-2">Cost<br />Efficiency</h3>
                                <p className="text-gray-400 text-[16px]">
                                    Identify unused resources, right-size workloads, and control spend.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                                <img src={sv4} alt="Performance Icon" className="w-[64px] h-[64px] mb-4" />
                                <h3 className="text-[22px] font-semibold mb-2">Performance Optimization</h3>
                                <p className="text-gray-400 text-[16px]">
                                    Tune compute, storage, and traffic to keep everything smooth and fast.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (4 Cards in 2x2 Grid) */}
                    <div className="lg:w-3/5 grid grid-cols-2 gap-6 auto-rows-fr">
                        {/* Card 3 */}
                        <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                            <img src={sv1} alt="Monitoring Icon" className="w-[64px] h-[64px] mb-4" />
                            <h3 className="text-[22px] font-semibold mb-8">Monitoring &<br></br> Uptime</h3>
                            <p className="text-gray-400 text-[16px]">
                                Real-time tracking with instant alerts and 24/7 coverage.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                            <img src={sv2} alt="Security Icon" className="w-[64px] h-[64px] mb-4" />
                            <h3 className="text-[22px] font-semibold mb-2">Security &<br></br> Compliance</h3>
                            <p className="text-gray-400 text-[16px]">
                                Automated patching, threat detection, and audit-ready logs.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                            <img src={sv5} alt="Backup Icon" className="w-[64px] h-[64px] mb-4" />
                            <h3 className="text-[22px] font-semibold mb-2">Backup &<br></br> Recovery</h3>
                            <p className="text-gray-400 text-[16px] ">
                                Ensure business continuity with automated backups and rapid restore.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]">
                            <img src={sv6} alt="Configuration Icon" className="w-[64px] h-[64px] mb-4" />
                            <h3 className="text-[22px] font-semibold mb-2">Configuration Management</h3>
                            <p className="text-gray-400 text-[16px]">
                                Keep systems consistent and stable across environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-20 px-4 sm:px-8 lg:px-20 text-center">
                {/* Heading */}
                <h2 className="text-[48px] font-extrabold mb-2">
                    Clouds{" "}
                    <span
                        className="inline-block bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent"
                    >
                        We Manage
                    </span>
                </h2>
                <p className="text-gray-400 text-[20px] sm:text-base mb-10">
                    Built for Every Cloud. Optimized for Yours.
                </p>

                {/* Cloud Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
                    {/* AWS */}
                    <div className="bg-[#111111] border border-[#333] rounded-lg p-6 w-full max-w-[320px] flex flex-col items-center">
                        <img src={group134} alt="AWS" className="w-[64px] h-[39px] mb-4" />
                        <p className="text-[22px] font-medium">AWS</p>
                    </div>

                    {/* Google Cloud */}
                    <div className="bg-[#111111] border border-[#333] rounded-lg p-6 w-full max-w-[320px] flex flex-col items-center">
                        <img src={group136} alt="Google Cloud" className="w-[44px] h-[28px] mb-4" />
                        <p className="text-[22px] font-medium">Google Cloud Platform</p>
                    </div>

                    {/* Azure */}
                    <div className="bg-[#111111] border border-[#333] rounded-lg p-6 w-full max-w-[320px] flex flex-col items-center">
                        <img src={group137} alt="Azure" className="w-[40px] h-[30px] mb-4" />
                        <p className="text-[22px] font-medium">Microsoft Azure</p>
                    </div>

                    {/* IBM Cloud */}
                    <div className="bg-[#111111] border border-[#333] rounded-lg p-6 w-full max-w-[320px] flex flex-col items-center">
                        <img src={vector3} alt="IBM" className="w-[80px] h-[32px] mb-4" />
                        <p className="text-[22px] font-medium">IBM Cloud Platform</p>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white px-6 py-16 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Heading and Image */}
                    <div>
                        <h2 className="text-[72px] font-extrabold leading-snug mb-8">
                            How <span className="inline-block text-transparent bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text">We Deliver</span> Value
                        </h2>
                        <img
                            src={img}
                            alt="Team Working"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right: Steps */}
                    <div className="space-y-12 mt-2" style={{marginTop:"260px",marginLeft:"120px"}}>
                        {/* Line SVG beside paragraph */}
                        <div className="flex items-start gap-4">
                            <img src={verticalLine} alt="Vertical Line" className="w-4 h-[56px] mt-1" />
                            <p className="text-[20px] text-gray-300 leading-relaxed">
                                A step-by-step approach to smarter,<br />stronger cloud operations.
                            </p>
                        </div>

                        {/* Steps with SVG Icons */}
                        {[
                            [one, "Discover", "We audit your existing environment"],
                            [two, "Design", "Tailored cloud management plan"],
                            [three, "Deploy", "Tools, automations, alerts, and dashboards"],
                            [four, "Deliver", "24/7 monitoring, tuning, and improvements"],
                            [five, "Refine", "Ongoing reviews and strategy updates"],
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
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-[48px] font-extrabold mb-2">
                                <span className="text-transparent bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text">
                                    Cloud Management <br></br>That Never Sleeps
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "40px" }}>
                            At HPIT, we believe that cloud operations should work just as hard as you do — even when you're offline. Our proactive support model combines real-time monitoring, intelligent automation, and 24/7 expert intervention to ensure uninterrupted cloud performance.
                            <br></br><br></br>
                            Whether it's detecting anomalies before they become problems, fine-tuning workloads for peak hours, or responding instantly to incidents, we’ve got you covered — around the clock, across every cloud platform.
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
                            src={fauxals}
                            alt="Team Discussion"
                            className="w-[679px] h-[543px] object-cover rounded-l-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-black text-white px-4 lg:gap-x-18 sm:px-8 py-12 border-t border-b border-gray-700" style={{ marginBottom: "120px" }}>
                <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-700 text-center">

                    <div className="px-4 py-6">
                        <img src={ic1} alt="2.5x" className="w-[191px] h-[23px]" style={{ marginLeft: '70px', marginBottom: "20px" }} />
                        <p className="mt-2 text-[18px] text-gray-300 font-poppins leading-snug">
                            Uptime SLA
                        </p>
                    </div>

                    <div className="px-4 py-6">
                        <img src={ic4} alt="2.5x" className="w-[262px] h-[23px]" style={{ marginLeft: '40px', marginBottom: "20px" }} />
                        <p className="mt-2 text-[18px] text-gray-300 font-poppins leading-snug">
                            Incident Response
                        </p>
                    </div>

                    <div className="px-4 py-6">
                        <img src={ic3} alt="2.5x" className="w-[197px] h-[23px]" style={{ marginLeft: '65px', marginBottom: "20px" }} />
                        <p className="mt-2 text-[18px] text-gray-300 font-poppins leading-snug">
                            Avg. Cost Reduction
                        </p>
                    </div>

                    <div className="px-4 py-6">
                        <img src={ic2} alt="2.5x" className="w-[153px] h-[23px]" style={{ marginLeft: '80px', marginBottom: "20px" }} />
                        <p className="mt-2 text-[18px] text-gray-300 font-poppins leading-snug">
                            Client Retention
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
