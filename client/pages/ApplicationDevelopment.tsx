import React from "react";
import applicationDevelopment from "../Images/applicationDevelopment.jpg";
import application from "../svg/Application.svg";
import layer from "../Images/Pexels Photo by Google DeepMind.jpg";
import Manufacturing from "../Images/Manufacturing.jpg";
import Healthcare from "../Images/Healthcare.jpg";
import Edtech from "../Images/EdTech.jpg";
import Fintech from "../Images/FinTech.jpg";
import Enterprise from "../Images/Enterprise.jpg";
import Government from "../Images/Government.jpg";
import Ecommerce from "../Images/Ecommerce.jpg";
import Fingerprint from "../svg/Group (1).svg";
import Screen from "../svg/Group 16.svg";
import cirangle from "../svg/Group 15.svg";
import Braces from "../svg/Group 17.svg";
import Text from "../svg/Group 14.svg";
import HandHeart from "../svg/Group 18.svg";
import Thursday from "../svg/Thursday.svg";
import Gener8 from "../svg/Gener8.svg";
import MindfulChef from "../svg/MindfulChef.svg";
import reverseArrow from '../svg/reverseArrow.svg';
import Flutter from "../svg/flutter.svg";
import AWS from "../svg/AWS.svg";
import Figma from "../svg/Figma.svg";
import Next from "../svg/Next.svg";
import Angular from "../svg/Angular.svg";
import ReactNative from "../svg/MERN.svg";
import ClientExperience from "@/components/ClientExperience";


export default function ApplicationDevelopment() {
    const steps = [
        {
            icon: <img src={Fingerprint} className="text-2xl text-white mb-4" />,
            title: "Discovery & Planning",
            description:
                "We understand your goals, gather requirements, and define a clear roadmap to align business needs with technical execution.",
        },
        {
            icon: <img src={Screen} className="text-2xl text-white mb-4" />,
            title: "UI/UX Design",
            description:
                "We create wireframes and intuitive designs that prioritize user experience, visual consistency, and brand identity.",
        },
        {
            icon: <img src={cirangle} className="text-2xl text-white mb-4" />,
            title: "Architecture & Tech Stack",
            description:
                "We select scalable technologies and architecture that support performance, security, and future growth of your application.",
        },
        {
            icon: <img src={Braces} className="text-2xl text-white mb-4" style={{ marginTop: "20px" }} />,
            title: "Agile Development",
            description:
                "Using sprint-based development, we build features iteratively with regular updates, feedback, and collaboration.",
        },
        {
            icon: <img src={Text} className="text-2xl text-white mb-4" />,
            title: "Testing & QA",
            description:
                "We test across multiple devices and scenarios to ensure quality, speed, and reliability before launch.",
        },
        {
            icon: <img src={HandHeart} className="text-2xl text-white mb-4" />,
            title: "Launch & Support",
            description:
                "We ensure a smooth go-live and provide ongoing support, updates, and performance monitoring post-launch.",
        },
    ];
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${applicationDevelopment})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "80px" }}>
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1">
                                <img
                                    src={application}
                                    alt="Company"
                                />
                            </h2>
                            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                                Development
                            </h2>
                            <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
                                From concept to code, we develop secure, scalable, and high performance applications tailored to your business goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-16 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl md:text-4xl font-bold text-center mb-4">
                    Building <span className="text-indigo-400">Smart Solutions</span> That Serve <br />
                    Businesses <span className="text-indigo-400">Across All Sectors</span>
                </h2>

                {/* Subheading */}
                <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto" style={{ marginBottom: "150px" }}>
                    We build secure, scalable applications designed to meet complex business needs and drive lasting impact.
                </p>

                {/* Top Row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Healthcare */}
                    <div className="relative group" style={{ marginLeft: "-20px" }}>
                        <img
                            src={Healthcare}
                            alt="Healthcare"
                            className="w-60 h-80 object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end rounded">
                            <span className="p-3 text-sm font-medium">Healthcare</span>
                        </div>
                    </div>
                    {/* E-commerce */}
                    <div className="relative group" style={{ marginLeft: "350px" }}>
                        <img
                            src={Ecommerce}
                            alt="E-commerce"
                            className="w-[243px] h-[296px] object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end rounded">
                            <span className="p-3 text-sm font-medium">E-commerce</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-5 gap-4">
                    {/* Enterprise */}
                    <div className="relative group" style={{ marginLeft: "-20px" }}>
                        <img
                            src={Enterprise}
                            alt="Enterprise"
                            className="w-[243px] h-[139px] object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end rounded">
                            <span className="p-3 text-sm font-medium">Enterprise</span>
                        </div>
                    </div>
                    {/* FinTech */}
                    <div className="relative group" style={{ marginTop: "-170px" }}>
                        <img
                            src={Fintech}
                            alt="FinTech"
                            className="w-[240px] h-[311px] object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end rounded">
                            <span className="p-3 text-sm font-medium">FinTech</span>
                        </div>
                    </div>
                    {/* EdTech */}
                    <div className="relative group" style={{ marginTop: "-170px" }}>
                        <img
                            src={Edtech}
                            alt="EdTech"
                            className="w-[240px] h-[311px] object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end rounded">
                            <span className="p-3 text-sm font-medium">EdTech</span>
                        </div>
                    </div>
                    {/* Manufacturing */}
                    <div className="relative group" style={{ marginTop: "-170px" }}>
                        <img
                            src={Manufacturing}
                            alt="Manufacturing"
                            className="w-[240px] h-[311px] object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end rounded">
                            <span className="p-3 text-sm font-medium">Manufacturing</span>
                        </div>
                    </div>
                    {/* Government */}
                    <div className="relative group">
                        <img
                            src={Government}
                            alt="Government"
                            className="w-[243px] h-[139px] object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end rounded">
                            <span className="p-3 text-sm font-medium">Government</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-16 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Heading */}
                <div className="self-center px-4">
                    <h2 className="text-5xl sm:text-5xl font-extrabold leading-tight mb-8" style={{ marginLeft: "-60px" }}>
                        Our<span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text"> Agile</span><br />
                        Development Journey
                    </h2>
                    <p className="text-gray-400 text-xl leading-relaxed max-w-xl" style={{ marginLeft: "-60px" }}>
                        A Proven, Collaborative Process From Idea to Launch and Beyond
                    </p>
                </div>
                {/* Grid of steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginTop: "80px", marginLeft: "-50px" }}>
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="mb-4">{step.icon}</div>
                            {/* Horizontal line under the icon */}
                            <div className="w-26 border-t border-gray-700 mb-4"></div>
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-base">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full bg-black text-white py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Left Side */}
                    <div>
                        <h2 className="text-4xl sm:text-4xl font-extrabold mb-6 leading-tight">
                            Built <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">With the</span><br />
                            Right Tools <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">for the</span> Job
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            We use cutting-edge frameworks and platforms to ensure top performance.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white font-medium group"
                            style={{ marginTop: "10px" }}
                        >
                            Get Started
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

                    {/* Arrow Image */}
                    <div className="hidden md:flex justify-center items-center">
                        <img
                            src={reverseArrow}
                            alt="Arrow Illustration"
                            className="w-30 h-auto"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-[#1f1f1f] p-6 rounded-md flex flex-col items-center">
                            <img src={Next} alt="Next Js" className="w-10 h-10 mb-3" />
                            <p className="text-sm">Next Js</p>
                        </div>
                        <div className="bg-[#1f1f1f] p-6 rounded-md flex flex-col items-center">
                            <img src={ReactNative} alt="React Native" className="w-10 h-10 mb-3" />
                            <p className="text-sm">React Native</p>
                        </div>
                        <div className="bg-[#1f1f1f] p-6 rounded-md flex flex-col items-center">
                            <img src={Angular} alt="Angular Js" className="w-10 h-10 mb-3" />
                            <p className="text-sm">Angular Js</p>
                        </div>
                        <div className="bg-[#1f1f1f] p-6 rounded-md flex flex-col items-center">
                            <img src={Flutter} alt="Flutter" className="w-10 h-10 mb-3" />
                            <p className="text-sm">Flutter</p>
                        </div>
                        <div className="bg-[#1f1f1f] p-6 rounded-md flex flex-col items-center">
                            <img src={Figma} alt="Figma" className="w-10 h-10 mb-3" />
                            <p className="text-sm">Figma</p>
                        </div>
                        <div className="bg-[#1f1f1f] p-6 rounded-md flex flex-col items-center">
                            <img src={AWS} alt="AWS" className="w-10 h-10 mb-3" />
                            <p className="text-sm">AWS</p>
                        </div>
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
                            className="mb-6 mx-auto"
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
            <ClientExperience></ClientExperience>
        </div>
    );
}
