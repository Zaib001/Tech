import React from "react";
import application from "../svg/Application.svg";
import applicationIntegration from "../Images/Pixabay-6873012.jpg";
import davemorgan from "../Images/Pexels Photo by Dave Morgan.jpg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import group132 from "../svg/Group 132.svg";
import vector1 from "../svg/Vector (1).svg";
import vector2 from "../svg/Vector (2).svg";
import mizuno from "../Images/Pexels Photo by Mizuno K.jpg";
import ClientExperience from "@/components/ClientExperience";
import pix84 from "../Images/Pixabay-3589684.jpg";
import dottedHorizontal from "../svg/Line 32.svg"
import dottedVertical from "../svg/Line 38.svg";
import twopoint5 from "../svg/twopointfive.svg";
import threetimes from "../svg/threetimes.svg";
import sixtypercent from "../svg/sixtypercent.svg";
import fourtypercent from "../svg/fourtypercent.svg";
import ladysitting from "../Images/Pexels Photo by Photo By_ Kaboompics.com.jpg";
import horizontalLine from "../svg/Line 30.svg";
import Thursday from "../svg/Thursday.svg";
import Gener8 from "../svg/Gener8.svg";
import MindfulChef from "../svg/MindfulChef.svg";


export default function ApplicationIntegration() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <div
                className="bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${applicationIntegration})`,
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
                                Integration
                            </h2>
                            <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
                                We unify your apps, data, and systems into one <br></br> seamless, intelligent ecosystem  fast, secure, and <br></br>scalable.
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
                            <h2 className="text-[48px] font-extrabold mb-2">
                                <span className="text-white">Integration That <br></br>Powers Real Efficiency</span>
                            </h2>
                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "40px" }}>
                            When your systems don’t talk to each other, productivity stalls, errors increase, and growth slows down. Integration bridges those gaps creating a smooth flow of data, automating manual processes, and aligning your entire tech stack to move faster, smarter, and together. It's not just about efficiency  it’s about unlocking the full potential of your business operations.
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
                            src={davemorgan}
                            alt="Team Discussion"
                            className="w-full h-full object-cover rounded-l-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-black text-white px-4 sm:px-8 lg:px-20 py-16">
                {/* Heading */}
                <div className="mb-28">
                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                        Disconnected systems create friction.<br />
                        <span className="text-white opacity-90">We help you sync, automate, and scale.</span>
                    </h2>
                </div>

                {/* Feature Cards and Image */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Left Side Cards */}
                    <div className="space-y-6">
                        <div className="bg-[#1E1E1E] rounded-xl shadow-md px-6 pr-[75px] h-[245px] flex flex-col justify-between">
                            <h3 className="text-[24px] font-semibold mt-[20px]">Break Down Data Silos</h3>
                            <p className="text-gray-300 text-[16px] mb-[60px]">
                                Integrate departments, tools, and platforms to create a unified, real-time view of your business operations.
                            </p>
                        </div>

                        <div className="bg-[#1E1E1E] rounded-xl shadow-md px-6 pr-[75px] h-[245px] flex flex-col justify-between">
                            <h3 className="text-[24px] font-semibold mt-[20px]">Streamline Workflows</h3>
                            <p className="text-gray-300 text-[16px] mb-[60px]">
                                Reduce manual effort by automating routine tasks and creating seamless interactions between systems.
                            </p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center">
                        <img
                            src={mizuno}
                            alt="Center"
                            className="rounded-lg w-[375px] h-[512px]"
                        />
                    </div>

                    {/* Right Side Cards */}
                    <div className="space-y-6">
                        <div className="bg-[#1E1E1E] rounded-xl shadow-md px-6 pr-[75px] h-[245px] flex flex-col justify-between">
                            <h3 className="text-[24px] font-semibold mt-[20px]">Break Down Data Silos</h3>
                            <p className="text-gray-300 text-[16px] mb-[60px]">
                                Integrate departments, tools, and platforms to create a unified, real-time view of your business operations.
                            </p>
                        </div>
                        <div className="bg-[#1E1E1E] rounded-xl shadow-md px-6 pr-[75px] h-[245px] flex flex-col justify-between">
                            <h3 className="text-[24px] font-semibold mt-[20px]">Streamline Workflows</h3>
                            <p className="text-gray-300 text-[16px] mb-[60px]">
                                Reduce manual effort by automating routine tasks and creating seamless interactions between systems.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="px-[80px] py-16 text-white">
                {/* Heading Section */}
                <div className="text-center mb-[70px]">
                    <h2 className="text-[48px] font-extrabold">Our Integration Expertise</h2>
                    <p className="text-gray-300 mt-4 text-[20px]">
                        Expertly Engineered to Connect It All
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#1A1A1A] rounded-l p-8 flex flex-col items-center text-center min-h-[480px]">
                        <div className="text-pink-500 mb-6" style={{ marginTop: "80px" }}>
                            <img src={group132} alt="API Integration" className="w-[100px] h-[100px]" />
                        </div>
                        <h3 className="text-white font-semibold text-[20px] mb-3 mt-10">API Integration</h3>
                        <p className="text-gray-400 text-[16px]">
                            Connect apps and services via secure, scalable APIs to streamline communication and automate processes.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-l p-8 flex flex-col items-center text-center min-h-[480px]">
                        <div className="text-white mb-6">
                            <img src={vector1} alt="Third-Party Integration" className="w-[100px] h-[100px]" style={{ marginTop: "80px" }} />
                        </div>
                        <h3 className="text-white font-semibold text-[20px] mb-3 mt-10">Third-Party System Integration</h3>
                        <p className="text-white text-[16px]">
                            Seamlessly integrate CRMs, ERPs, payment gateways, cloud platforms, and more — no data loss or disruption.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1A1A1A] rounded-l p-8 flex flex-col items-center text-center min-h-[480px]" >
                        <div className="text-pink-500 mb-6" style={{ marginTop: "80px" }}>
                            <img src={vector2} alt="Data Sync" className="w-[100px] h-[100px]" />
                        </div>
                        <h3 className="text-white font-semibold text-[20px] mb-3 mt-10">Data Synchronization</h3>
                        <p className="text-gray-400 text-[16px]">
                            Ensure consistent, real-time data flow across multiple platforms and business units with smart sync logic.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16 bg-black">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="mb-12">
                        <h2 className="text-[48px] font-extrabold leading-snug">
                            Real-<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">World</span> Integration<br />
                            Use Cases <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">We Deliver</span>
                        </h2>
                        <p className="text-gray-300 mt-4 text-[20px] max-w-xl">
                            From business apps to devices, we seamlessly connect the tools that drive your operations.
                        </p>
                    </div>

                    {/* Cards Grid with Border */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-600 rounded-md overflow-hidden" style={{ padding: "25px", marginTop: "80px" }}>

                        {/* Card 1 */}
                        <div className="relative p-6">
                            <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                            <div className="absolute bottom-0 left-10 right-40 h-0 border-b border-dotted border-gray-400" />
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Discovery & CRM & ERP Synchronization</h3>
                                <p className="text-[14px] text-gray-400">Unify customer and resource data across platforms.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative p-6">
                            <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                            <div className="absolute bottom-0 left-10 right-40 h-0 border-b border-dotted border-gray-400" />
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Payment Gateway <br></br> Integration</h3>
                                <p className="text-[14px] text-gray-400">Secure and seamless transactions across apps and platforms.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative p-6">
                            <div className="absolute bottom-0 left-10 right-40 h-0 border-b border-dotted border-gray-400" />
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Cross-Platform User Authentication</h3>
                                <p className="text-[14px] text-gray-400">Enable smooth logins and identity management across multiple applications.</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="relative p-6">
                            <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Legacy + SaaS System <br></br> Linking</h3>
                                <p className="text-[14px] text-gray-400">Bridge old systems with new-age cloud apps without disruption.</p>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="relative p-6">
                            <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Centralized Analytics<br></br> Dashboards</h3>
                                <p className="text-[14px] text-gray-400">Bring data from various sources into one powerful dashboard view.</p>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="relative p-6">
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>IoT & Device Data <br></br>Merging</h3>
                                <p className="text-[14px] text-gray-400">Integrate real-time data from devices, sensors, and smart tech.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ClientExperience></ClientExperience>
        </div>
    );
}
