import React from "react";
import cloudSecurity from "../Images/Pixabay-3374462.png";
import cloud from "../svg/Cloud.svg";
import pix15 from "../Images/Group 140.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import group134 from "../svg/Group 134.svg";
import group135 from "../svg/Vector (7).svg";
import group136 from "../svg/Vector (8).svg";
import group137 from "../svg/Vector (9).svg";
import karuka from "../Images/Pexels Photo by Yan Krukau (1).png";
import line from "../svg/Line 30 (1).svg";
import kev from "../Images/Pexels Photo by TheOther Kev.png"
import unnish from "../Images/Pixabay-1073604.png";
import chasochaar from "../Images/Pixabay-1366019.png";
import icon1 from "../svg/icon1.svg"
import icon2 from "../svg/icon2.svg"
import icon3 from "../svg/icon3.svg"
import icon4 from "../svg/icon4.svg"
import img from "../Images/Pixabay-3589685.png"

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



export default function CloudSecurity() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Section: Hero */}
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${cloudSecurity})`,
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
                                Security
                            </h2>
                            <p className="text-white text-[20px] leading-relaxed max-w-xl">
                                Comprehensive protection engineered for <br></br>today’s dynamic and distributed cloud <br></br>environments.
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
                                <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">Smart Security for the Cloud</span>
                            </h2>
                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "20px" }}>
                            HPIT delivers enterprise-grade cloud security tailored to your architecture. From identity controls to threat detection, we help<br></br> you stay compliant, protected, and in control—every step of the <br></br>way.
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
                            Comprehensive Security <br></br>at Every Cloud Layer
                        </span>
                    </h2>
                    <p className="text-gray-400 text-[14px] mt-2 max-w-xl">
                        We secure every layer of your cloud—from access to data with <br></br>smart controls and continuous protection.
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
                                Security isn’t a feature—it’s a foundation. Here’s<br></br> what we cover:
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ marginTop: "80px" }}>
                            {[
                                {
                                    title: "Identity & Access Management",
                                    desc: "Granular role-based access and multi-factor authentication.",
                                },
                                {
                                    title: "Data Protection",
                                    desc: "Encryption in transit and at rest with secure key management.",
                                },
                                {
                                    title: "Threat Detection & Response",
                                    desc: "Real-time threat intelligence, monitoring, and automated remediation.",
                                },
                                {
                                    title: "Network Security",
                                    desc: "Firewalls, VPC configuration, zero-trust access, and segmentation.",
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
            <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-[48px] font-bold">
                        <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">Security Lifecycle Management</span>
                    </h2>
                    <p className="text-gray-400 text-[20px] mt-2">
                        End-to-End Security. Continuous Improvement.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-[#111215] rounded-xl p-6 space-y-3 shadow-lg border border-[#444955]">
                        <img src={icon1} alt="Assess Icon" className="w-[64px] h-[64px]" />
                        <h3 className="text-[22px] font-semibold">Assess</h3>
                        <p className="text-gray-400 text-[16px]">
                            We begin with a cloud security posture review and risk analysis.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#111215] rounded-xl p-6 space-y-3 shadow-lg border border-[#444955] ">
                        <img src={icon2} alt="Secure Icon" className="w-[64px] h-[64px]" />
                        <h3 className="text-[22px] font-semibold">Secure</h3>
                        <p className="text-gray-400 text-[16px]">
                            Implement best-practice configurations, access controls, and monitoring tools.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#111215] rounded-xl p-6 space-y-3 shadow-lg border border-[#444955]">
                        <img src={icon3} alt="Detect & Respond Icon" className="w-[64px] h-[64px]" />
                        <h3 className="text-[22px] font-semibold">Detect & Respond</h3>
                        <p className="text-gray-400 text-[16px]">
                            Enable automated alerts and incident response playbooks.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#111215] rounded-xl p-6 space-y-3 shadow-lg border border-[#444955]">
                        <img src={icon4} alt="Audit & Improve Icon" className="w-[64px] h-[64px]" />
                        <h3 className="text-[22px] font-semibold">Audit & Improve</h3>
                        <p className="text-gray-400 text-[16px]">
                            Ongoing reviews, penetration testing, and posture optimization.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
                {/* Section Heading */}
                <div className="mb-12">
                    <h2 className="text-[48px] font-bold">
                         <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">What Makes HPIT Different</span> 
                    </h2>
                    <p className="text-gray-400 mt-2 text-[20px]">Security that Thinks Ahead</p>
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
                            <h3 className="font-semibold text-[20px]">Cloud-Native Security Experts</h3>
                            <p className="text-gray-400 text-[16px]">
                                Certified engineers focused solely on securing cloud environments.
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">DevSecOps Integration</h3>
                            <p className="text-gray-400 text-[16px]">
                                Security built into every stage of development and deployment.
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Zero Trust Framework</h3>
                            <p className="text-gray-400 text-[16px]">
                                Assume no trust, verify every action—internally and externally.
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Custom Policies. Real Enforcement.</h3>
                            <p className="text-gray-400 text-[16px]">
                                Tailored policies enforced through automation and cloud-native controls.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-black text-white py-16 px-6 md:px-12">
                {/* Heading */}
                <div className="max-w-5xl mx-auto mb-12" style={{ marginLeft: "80px" }}>
                    <h2 className="text-[48px] sm:text-4xl font-extrabold mb-6 leading-tight">
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
                            Use Cases We Handle
                        </span>
                    </h2>
                    <p className="text-gray-400 text-[20px]">
                        Real-World Security Challenges, <br />Solved
                    </p>
                </div>

                {/* Cards */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-[#2c2e33] rounded-md flex flex-col justify-between border-b-4 border-white overflow-hidden">
                            <img
                                src={chasochaar}
                                alt="FinTech Corp"
                                className="w-[416px] h-[328px] object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-semibold text-[24px] mb-2">Multi-Cloud Security</h3>
                                <p className="text-gray-400 text-[16px]">
                                    Consistent policies and controls across AWS, Azure, and GCP.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#2c2e33] rounded-md flex flex-col justify-between border-b-4 border-white overflow-hidden">
                            <img
                                src={unnish}
                                alt="ShopSphere"
                                className="w-[416px] h-[328px] object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-semibold text-[24px] mb-2" style={{ marginTop: "-100px" }}>
                                    Healthcare Compliance
                                </h3>
                                <p className="text-gray-400 text-[16px]">
                                    HIPAA-ready protections with strict access and audit tracking.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#2c2e33] rounded-md flex flex-col justify-between border-b-4 border-white overflow-hidden">
                            <img
                                src={kev}
                                alt="DevWorks"
                                className="w-[416px] h-[328px] object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-semibold text-[24px] mb-2">Ransomware Defense</h3>
                                <p className="text-gray-400 text-[16px]">
                                    Secure backups with automated, rapid recovery workflows.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Arrow Buttons */}
                    <div className="flex justify-end mt-8 pr-4">
                        <div className="flex space-x-4">
                            <button className="w-10 h-10 border border-red-500 rounded-full flex items-center justify-center">
                                <span className="text-red-500 text-xl">&lt;</span>
                            </button>
                            <button className="w-10 h-10 border border-red-500 rounded-full flex items-center justify-center">
                                <span className="text-red-500 text-xl">&gt;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-20 px-4 sm:px-8 lg:px-20 text-center">
                {/* Heading */}
                <h2 className="text-[48px] font-extrabold mb-2">
                    <span
                        className="inline-block bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent"
                    >
                        Built to Work with Your Tools
                    </span>
                </h2>
                <p className="text-gray-400 text-[20px] sm:text-base mb-10">
                    Security That Fits Your Stack
                </p>

                {/* Cloud Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
                    {/* AWS */}
                    <div className="bg-[#000000] border border-[#333] rounded-lg p-6 w-full max-w-[320px] flex flex-col items-center">
                        <img src={group134} alt="AWS" className="w-[64px] h-[39px] mb-4" />
                        <p className="text-[22px] font-medium">AWS</p>
                    </div>

                    {/* Google Cloud */}
                    <div className="bg-[#000000] border border-[#333] rounded-lg p-6 w-full max-w-[320px] flex flex-col items-center">
                        <img src={group136} alt="Google Cloud" className="w-[46px] h-[44px] mb-4" />
                        <p className="text-[22px] font-medium">GitHub Actions</p>
                    </div>

                    {/* Azure */}
                    <div className="bg-[#000000] border border-[#333] rounded-lg p-6 w-full max-w-[320px] flex flex-col items-center">
                        <img src={group135} alt="Azure" className="w-[38px] h-[44px] mb-4" />
                        <p className="text-[22px] font-medium">Prisma</p>
                    </div>

                    {/* IBM Cloud */}
                    <div className="bg-[#000000] border border-[#333] rounded-lg p-6 w-full max-w-[320px] flex flex-col items-center" >
                        <img src={group137} alt="IBM" className="w-[95px] h-[28px] mb-4" style={{ marginTop: "10px" }} />
                        <p className="text-[22px] font-medium">Splunk</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


