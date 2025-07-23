import React from "react";
import threat from "../Images/Pexels Photo by Steve Johnson.png"
import threatSvg from "../svg/Threat.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Pexels Photo by Vika Glitter.png";
import img2 from "../Images/img.png"
import line from "../svg/new-line.svg"
import karuka from "../Images/Pexels Photo by Canva Studio.png"
import icon1 from "../svg/cardIcon1.svg"
import icon2 from "../svg/cardIcon2.svg"
import icon3 from "../svg/cardIcon3.svg"
import icon4 from "../svg/cardIcon4.svg"



export default function ThreatIntelligence() {

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${threat})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "45px", marginLeft: "50px" }}>
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
                                Anticipate Attacks. Neutralize Risk.<br></br> Strengthen Resilience.
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
                                    Actionable Intelligence for Proactive Cyber Defense
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "30px" }}>
                            Modern threats evolve faster than traditional defenses can respond. HPIT’s Threat Intelligence service empowers organizations with real-time insights into threat actors, tactics, and vulnerabilities — enabling informed, preventive action instead of reactive recovery.
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
            <div className="bg-black text-white px-6 py-16 sm:px-12 lg:px-[120px]" style={{ marginLeft: "-45px" }}>
                {/* Heading Section */}
                <div className="max-w-6xl">
                    <h2 className="text-[32px] sm:text-[48px] font-extrabold leading-tight">
                        <span className="text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">
                            Know the Threat Before<br></br> It Hits
                        </span>
                    </h2>
                    <p className="text-gray-400 text-[14px] mt-2 max-w-xl">
                        Anticipate adversaries, decode their tactics,<br></br> and disrupt attacks before they begin.
                    </p>
                </div>

                {/* Content Section */}
                <div className="mt-12 flex flex-col lg:flex-row gap-10 items-start" >
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
                                Understanding the evolving nature of cyber threats<br></br> is key to staying protected and ahead of the curve.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ marginTop: "80px" }}>
                            {[
                                {
                                    title: "Rise of Targeted Threats",
                                    desc: "APTs and industry-specific attacks are becoming more frequent and precise.",
                                    icon: icon2
                                },
                                {
                                    title: "Constantly Evolving Global Risks",
                                    desc: "New malware and exploits appear daily across regions and sectors.",
                                    icon: icon1
                                },
                                {
                                    title: "Better Insight, Faster Decisions",
                                    desc: "Intelligence-driven response improves prioritization and reduces noise.",
                                    icon: icon3
                                },
                                {
                                    title: "Proactive Defense Saves More",
                                    desc: "Preventing breaches reduces cost, downtime, and reputation loss.",
                                    icon: icon4
                                },
                            ].map((card, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-lg border border-[#444955] bg-[#111215] p-5 min-h-[210px] overflow-hidden"
                                >
                                    {/* Background SVG */}
                                    <img
                                        src={card.icon} // Replace with your actual SVG path
                                        className="absolute bottom-5 right-0 top-[100px] w-[120px] h-[120px] pointer-events-none z-0"
                                    />

                                    {/* Foreground Content */}
                                    <div className="relative z-10">
                                        <h3 className="font-semibold text-[20px] mb-2">{card.title}</h3>
                                        <p className="text-[16px] text-gray-400">{card.desc}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16 bg-black">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="mb-12">
                        <h2 className="text-[48px] font-extrabold leading-snug">
                            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">Our <br></br> Capabilities</span>
                        </h2>
                        <p className="text-gray-300 mt-4 text-[20px] max-w-xl">
                            HPIT transforms raw threat data into real-time insights that empower decisive security action across your organization.
                        </p>
                    </div>

                    {/* Cards Grid with Border */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-600 rounded-md overflow-hidden" style={{ padding: "25px", marginTop: "80px" }}>

                        {/* Card 1 */}
                        <div className="relative p-6">
                            <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                            <div className="absolute bottom-0 left-10 right-40 h-0 border-b border-dotted border-gray-400" />
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Threat Actor<br></br> Profiling</h3>
                                <p className="text-[14px] text-gray-400">Understand attacker behaviour, tools,<br></br> and intent to anticipate threats.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative p-6">
                            <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                            <div className="absolute bottom-0 left-10 right-40 h-0 border-b border-dotted border-gray-400" />
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Real-Time Threat<br></br> Feeds</h3>
                                <p className="text-[14px] text-gray-400">Stay ahead with continuous updates<br></br> on IOCs and emerging risks.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative p-6">
                            <div className="absolute bottom-0 left-10 right-40 h-0 border-b border-dotted border-gray-400" />
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Dark Web<br></br> Monitoring</h3>
                                <p className="text-[14px] text-gray-400">Detect leaked data and malicious activity<br></br> targeting your organisation.</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="relative p-6">
                            <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Sector-Specific<br></br> Intelligence</h3>
                                <p className="text-[14px] text-gray-400">Receive tailored insights aligned with<br></br> your industry’s threat profile.</p>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="relative p-6">
                            <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Threat Correlation & <br></br>Alerting</h3>
                                <p className="text-[14px] text-gray-400">Enhance detection by linking threat<br></br> intel to security events.</p>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="relative p-6">
                            <div className="pr-4 pb-4">
                                <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Threat Trend <br></br>Analytics</h3>
                                <p className="text-[14px] text-gray-400">Visualize attack patterns and<br></br> forecast risks for better planning.</p>
                            </div>
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
                                    Smarter Intelligence. Stronger Cyber Outcomes.
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "30px" }}>
                            HPIT’s Threat Intelligence delivers contextual<br></br> insights to detect threats early, reduce response<br></br> time, and strengthen overall security posture.
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
                    <div className="rounded-xl overflow-hidden" style={{ marginTop: "20px", marginLeft: "80px" }}>
                        <img
                            src={img2}
                            alt="Team Discussion"
                            className="w-[440px] h-[425px] object-cover rounded-l-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

