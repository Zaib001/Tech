import React from "react";
import quantumImg from "../Images/quantum-computing.png"
import quantum from "../svg/Quantum.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/quantum-img-2.png";
import img2 from "../Images/quantum-img-3.png";
import img3 from "../Images/quantum-img-4.png";
import img4 from "../Images/quantum-img-5.png";


export default function QuantumComputing() {

    const Card = ({ title, description }) => {
        const words = title.trim().split(" ");
        const length = words.length;

        const firstLine = words.slice(0, length - 1).join(" ");
        const lastWord = words[length - 1];

        return (
            <div
                className="w-[380px] h-[240px] rounded-md border border-[#444955] bg-[#111215] relative"
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

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${quantumImg})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4  sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-2">
                                <img
                                    src={quantum}
                                    alt="Company"
                                />
                            </h2>
                            <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                                Computing
                            </h2>
                            <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                Powering the Next Leap in<br></br> Enterprise Innovation
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
                                    Rethink Possibility with Quantum
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed">
                            Quantum computing is reshaping what’s possible. At HPIT, we help enterprises explore, experiment, and prepare for a future where quantum advantage redefines security, optimization, and data science.
                        </p>
                        {/* Know more link */}
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white font-medium group"
                            style={{ marginTop: "60px", fontSize: "16px" }}
                        >
                            Get Started

                            {/* Ellipse + Arrow */}
                            <div className="relative w-[56px] h-[56px] -ml-[24px]">
                                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                {/* Arrow centered inside ellipse */}
                                <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                </span>
                            </div>
                        </a>
                    </div>
                    {/* Right Image */}
                    <div className="rounded-xl overflow-hidden">
                        <img
                            src={img1}
                            alt="Team Discussion"
                            className="w-[6210px] h-[348px]"
                        />
                    </div>
                </div>
            </div>
            <div className="relative min-h-[796px] text-white py-16 px-8 md:px-28 overflow-hidden">
                {/* Bottom Left Ellipse */}
                <div className="absolute w-[713px] h-[443px] left-[-120px] bottom-0 pointer-events-none z-0">
                    <img src={img4} className="w-[713px] h-[443px]" alt="Background" />
                </div>

                {/* Card in normal flow */}
                <div className="relative z-10 mx-auto box-border border border-[#22252B] rounded-[8px] px-10 py-10"
                    style={{
                        width: '1296px',
                        height: '538px',
                        background: 'linear-gradient(103.31deg, rgba(0, 0, 0, 0) 33.01%, rgba(26, 188, 254, 0.2) 143.6%), #000000'
                    }}
                >
                    <h2 className="text-[48px] font-bold text-white mb-4">
                         <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">Why Choose HPIT</span> 
                    </h2>
                    <p className="text-gray-400 mb-10 max-w-2xl text-[20px]">
                        We combine quantum expertise with practical strategy to<br></br> deliver scalable, compliant, and platform-agnostic solutions<br></br> that evolve with your business.
                    </p>

                    <div className="grid grid-cols-3 gap-8 text-white">
                        {/* Card 1 */}
                        <div className="flex flex-col items-start">
                            <div className="flex items-center mb-4 py-6">
                                <div className="w-3 h-3 rounded-full bg-[#1ABCFE] mr-2" />
                                <div className="h-px w-[280px] bg-[#1ABCFE]" />
                            </div>
                            <h3 className="font-semibold text-[22px] py-4">Enterprise-Aligned Solutions</h3>
                            <p className="text-gray-400 mt-2 text-[18px]">We don’t just explore — we implement<br></br> with purpose and compliance.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-start">
                            <div className="flex items-center mb-4 py-6">
                                <div className="w-3 h-3 rounded-full bg-[#F5D97F] mr-2" />
                                <div className="h-px w-[280px] bg-[#F5D97F]" />
                            </div>
                            <h3 className="font-semibold text-[22px] py-4">Technology Agnostic</h3>
                            <p className="text-gray-400 mt-2 text-[18px]">We work across IBM Q, Microsoft<br></br> Azure Quantum, and more.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-start">
                            <div className="flex items-center mb-4 py-6">
                                <div className="w-3 h-3 rounded-full bg-[#FA7B7B] mr-2" />
                                <div className="h-px w-[280px] bg-[#FA7B7B]" />
                            </div>
                            <h3 className="font-semibold text-[22px] py-4">Continuous Innovation</h3>
                            <p className="text-gray-400 mt-2 text-[18px]">Stay future-ready as quantum<br></br> hardware and frameworks evolve.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full text-white -mt-[1400px] -mb-[150px]">
                {/* All your absolute positioned content here */}

                {/* Background Blur Ellipse */}
                <div className="absolute w-[446px] h-[346px] left-[797px] top-[1550px] bg-[#42C3FF] opacity-15 blur-[150px]"></div>

                {/* Section Heading */}
                <div className="absolute left-[120px] top-[1480px] max-w-[500px]">
                    <h2 className="text-[48px] font-extrabold mb-4">
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">What Quantum Means for You</span>
                    </h2>
                    <p className="text-[20px] text-gray-400">
                        Quantum computing opens new possibilities across industries — enabling faster, smarter, and more secure decision-making where classical systems fall short.
                    </p>
                </div>

                {/* Cards as you had them — no changes */}
                <div className="absolute w-[326px] h-[220px] left-[680px] top-[1484px] bg-gradient-to-b from-[#2657EB] to-[#C729CF] rounded-lg transform -rotate-2 flex flex-col justify-center px-6">
                    <h3 className="text-[22px] font-bold mb-6">Quantum-Safe<br></br> Security</h3>
                    <p className="text-[16px]">Prepare encryption systems for post-quantum threats.</p>
                </div>

                <div className="absolute w-[326px] h-[220px] left-[1070px] top-[1490px] bg-[#111215] border border-[#444955] rounded-lg flex flex-col justify-center px-6" style={{ background: 'linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215' }}>
                    <h3 className="text-[22px] font-bold mb-6">Logistics<br></br> Optimization</h3>
                    <p className="text-[16px]">Solve complex routing, inventory, and supply chain problems at unprecedented speed.</p>
                </div>

                <div className="absolute w-[326px] h-[220px] left-[684px] top-[1742px] bg-[#111215] border border-[#444955] rounded-lg flex flex-col justify-center px-6" style={{ background: 'linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215' }}>
                    <h3 className="text-[22px] font-bold mb-6">Pharma & Life<br></br> Sciences</h3>
                    <p className="text-[16px]">Accelerate drug discovery through molecule simulation and pattern matching.</p>
                </div>

                <div className="absolute w-[326px] h-[220px] left-[1070px] top-[1742px] bg-[#111215] border border-[#444955] rounded-lg flex flex-col justify-center px-6" style={{ background: 'linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215' }}>
                    <h3 className="text-[22px] font-bold mb-6">Financial<br></br> Modeling</h3>
                    <p className="text-[16px]">Enhance risk prediction and portfolio analysis with advanced probabilistic computing.</p>
                </div>
                {/* Spacer Div to Push Down Flow */}
                <div className="relative h-[2200px]"></div>
            </div>
            <div className="text-white px-4 sm:px-10 py-16 flex flex-col items-center">
                <h2 className="text-3xl sm:text-[48px] font-extrabold text-center mb-4 text-white">
                    <span
                        className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent"
                    >
                        Our Quantum Capabilities
                    </span>
                </h2>
                <p className="text-gray-400 text-center mb-12 text-[20px]">
                    HPIT brings quantum know-how together with enterprise <br></br>grade engineering to turn potential into progress
                </p>

                {/* Main Section */}
                <div className="grid grid-cols-3 gap-16 max-w-7xl items-center">
                    {/* Left Cards */}
                    <div className="flex flex-col gap-8">
                        <Card
                            title="Quantum Readiness Assessment"
                            description="Identify where quantum fits in your roadmap and evaluate technical preparedness."
                        />
                        <Card
                            title="SHybrid Algorithm Design"
                            description="Develop quantum-inspired solutions that combine classical and quantum computing for early value."
                        />
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center">
                        <img
                            src={img2}
                            alt="Team Collaboration"
                            className="rounded-xl w-[375px] h-[512px] object-cover shadow-xl"
                        />
                    </div>

                    {/* Right Cards */}
                    <div className="flex flex-col gap-8">
                        <Card
                            title="Simulation & Testing"
                            description="Run and validate quantum algorithms using emulators and cloud-based quantum processors."
                        />
                        <Card
                            title="Post-Quantum Cryptography"
                            description="Modernize encryption systems to withstand future quantum attacks before they arrive."
                        />
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
                                    Lead the Quantum Shift with Confidence
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed">
                            Quantum transformation isn’t a leap — it’s a journey. HPIT <br></br>ensures you start with clarity and move with purpose. From<br></br> securing today’s data against tomorrow’s threats to <br></br>accelerating innovation across R&D and operations, we<br></br> help you stay ahead without falling behind.
                        </p>
                    </div>
                    {/* Right Image */}
                    <div className="rounded-xl overflow-hidden">
                        <img
                            src={img3}
                            alt="Team Discussion"
                            className="w-[6210px] h-[387px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

