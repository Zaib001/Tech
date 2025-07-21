import React from "react";
import cloudSupport from "../Images/Pexels Photo by Pachon in Motion.png";
import cloud from "../svg/Cloud.svg";
import pix15 from "../Images/Group 139.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import centerImage from "../Images/Pexels Photo by Yan Krukau.png";
import img1 from "../svg/98percent.svg";
import img2 from "../svg/15min.svg";
import img3 from "../svg/30-40.svg";
import img4 from "../svg/approx100.svg";
import reverseArrow from "../svg/reverseArrow.svg";
import frame383 from "../Images/Pexels Photo by Daniel Frank.png";
import karuka from "../Images/Pexels Photo by Yan Krukau (1).png";
import line from "../svg/Line 30 (1).svg";

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



export default function CloudSupport() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Section: Hero */}
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${cloudSupport})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "120px" }}>
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1">
                                <img
                                    src={cloud}
                                    alt="Application"
                                />
                            </h2>
                            <h2 className="text-white text-[56px] font-bold mb-8">
                                Support
                            </h2>
                            <p className="text-white text-[20px] leading-relaxed max-w-xl">
                                Reliable support for your cloud. <br></br>Anytime. Every time.
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
                            <h2 className="text-[72px] font-extrabold mb-2">
                                <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">Built for Cloud <br></br> Reliability</span>
                            </h2>
                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "20px" }}>
                            HPIT’s Cloud Support services are designed to ensure stability, security, and performance across your cloud environments.<br></br> From real-time monitoring to rapid issue resolution, we help you<br></br> stay ahead of disruptions.
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
            <div className="bg-black text-white px-6 py-16 sm:px-12 lg:px-[120px]">
                {/* Heading Section */}
                <div className="max-w-6xl">
                    <h2 className="text-[32px] sm:text-[48px] font-extrabold leading-tight">
                        <span className="text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">
                            Comprehensive Support for<br></br> Every Cloud Environment
                        </span>
                    </h2>
                    <p className="text-gray-400 text-[14px] mt-2 max-w-xl">
                        From configuration to crisis, we cover every aspect of<br></br> cloud support.
                    </p>
                </div>

                {/* Content Section */}
                <div className="mt-12 flex flex-col lg:flex-row gap-10 items-start">
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={karuka} // Replace with your actual image path
                            alt="Cloud Support Team"
                            className="w-[485px] h-[591px] object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        {/* Description with SVG Line */}
                        <div className="flex items-start gap-4">
                            {/* SVG Line Placeholder */}
                            <img
                                src={line} // Replace with your SVG path
                                alt="Vertical Line"
                                className="h-[56px] w-auto mt-1"
                            />
                            <p className="text-gray-300 text-[20px]">
                                Stay ahead with continuous insights and proactive<br></br> issue detection
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{marginTop:"80px"}}>
                            {[
                                {
                                    title: "Rapid Incident Resolution",
                                    desc: "Structured escalation protocols with defined SLAs for critical issue handling.",
                                },
                                {
                                    title: "Configuration Assistance",
                                    desc: "Support with setup, scaling, networking, and service integrations.",
                                },
                                {
                                    title: "Performance & Cost Optimization",
                                    desc: "Identify inefficiencies, reduce costs, and maximize cloud ROI.",
                                },
                                {
                                    title: "Security & Compliance Guidance",
                                    desc: "Maintain regulatory compliance and secure cloud workloads with confidence.",
                                },
                            ].map((card, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-[#444955] bg-[#111215] p-5 min-h-[210px]"
                                >
                                    <h3 className="font-semibold text-[22px] mb-2">{card.title}</h3>
                                    <p className="text-[16px] text-gray-400">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white px-4 sm:px-10 py-16 flex flex-col items-center">
                <h2 className="text-3xl sm:text-[48px] font-extrabold text-center mb-4 text-white">
                    Why Choose{' '}
                    <span
                        className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent"
                    >
                        HPIT for
                    </span>{' '}
                    Cloud Support?
                </h2>



                <p className="text-gray-400 text-center mb-12 text-[20px]">
                    We're not just reactive. We're relentlessly proactive.
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
            <div className="bg-black text-white px-6 sm:px-16 py-20 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">

                    {/* Left Section */}
                    <div>
                        <h2 className="text-3xl sm:text-[48px] font-extrabold leading-tight text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,#8076F4_0%,#FFFFFF_9.96%)]">
                            Proven Impact with <br /> Measurable Outcomes
                        </h2>

                        <p className="text-gray-300 text-[20px] mt-6 max-w-lg leading-relaxed">
                            Our cloud support isn’t just responsive  it’s <br></br> results driven. These metrics reflect the <br></br>efficiency, reliability, and trust our clients<br></br> experience every day.
                        </p>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white font-medium group"
                            style={{ marginTop: "60px", fontSize: "16px" }}
                        >
                            Get Started

                            {/* Ellipse + Arrow */}
                            <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="w-[296px] h-[183px] bg-black rounded-[8px] border border-dotted border-[#444955] p-6 flex flex-col items-center justify-center text-center">
                            <img src={img1} alt="Stat Icon" className="mb-8" />
                            <p className="text-[18px] text-gray-300">
                                First-Contact <br /> Resolution Rate
                            </p>
                        </div>

                        <div className="w-[296px] h-[183px] bg-[#6C40D6] rounded-[8px] p-6 flex flex-col items-center justify-center text-center">
                            <img src={img2} alt="Stat Icon" className="mb-8" />
                            <p className="text-[18px] text-white">
                                Avg. Critical <br /> Response Time
                            </p>
                        </div>

                        <div className="w-[296px] h-[183px] bg-[#2DA67C] rounded-[8px] p-6 flex flex-col items-center justify-center text-center">
                            <img src={img3} alt="Stat Icon" className="mb-8" />
                            <p className="text-[18px] text-white">
                                Reduction in Support <br /> Overhead
                            </p>
                        </div>

                        <div className="w-[296px] h-[183px] bg-black rounded-[8px] border border-dotted border-[#444955] p-6 flex flex-col items-center justify-center text-center">
                            <img src={img4} alt="Stat Icon" className="mb-8" />
                            <p className="text-[18px] text-gray-300">
                                Client Uptime <br /> Achieved
                            </p>
                        </div>
                    </div>

                    {/* Arrow Image between columns */}
                    <img
                        src={reverseArrow} // <-- Replace with your SVG path
                        alt="Middle Arrow"
                        className="absolute w-[79.6px] h-[69px] top-[150px] left-[450px]"
                    />
                </div>
            </div>
            <div className="mx-auto w-[1296px] h-[564px] bg-black px-6 py-10 text-white" style={{ marginTop: "60px", marginBottom: "120px" }}>
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-center text-[48px] font-extrabold">
                        <span className="text-transparent bg-clip-text bg-[radial-gradient(254%_254%_at_50%_50%,#A49CFD_0%,#FFFFFF_9.99%)]">
                            Industries We Support
                        </span>
                    </h2>


                    <p className="text-gray-400 text-[20px] mt-2 leading-snug">
                        From regulatory compliance to seasonal<br></br> traffic spikes we’ve supported it all.
                    </p>
                </div>

                {/* Image Card */}
                <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-[360px] bg-gray-800 border border-gray-400">
                    <img
                        src={frame383} // Replace with your image path
                        alt="Industry Background"
                        className="w-[1296px] h-[564px] object-cover"
                    />

                    {/* Text Overlay */}
                    <div className="absolute left-8 bottom-28 text-left max-w-[480px]">
                        <h3 className="text-[48px] font-semibold text-white">Healthcare</h3>
                        <p className="text-[20px] text-white mt-2 leading-relaxed">
                            Support tailored for data-sensitive environments with strict compliance like <br></br> HIPAA and high availability demands.
                        </p>
                    </div>

                    {/* Sector Buttons Inside Image at Bottom Right */}
                    <div className="absolute right-6 bottom-6 flex flex-wrap gap-3 justify-end">
                        {["FinTech", "Healthcare", "eCommerce", "Manufacturing", "EdTech", "Logistics"].map((item) => (
                            <button
                                key={item}
                                className={`px-5 py-2 rounded-full border text-sm font-medium transition ${item === "Manufacturing"
                                    ? "border-violet-400 text-violet-400"
                                    : "border-white text-white hover:bg-white hover:text-black"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};


