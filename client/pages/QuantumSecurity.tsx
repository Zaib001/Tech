import React from "react";
import threat from "../Images/Pexels Photo by Google DeepMind-1.png"
import threatSvg from "../svg/Quantum.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/quantum-pixabay.png";
import img2 from "../Images/quantum-center-img.png"
import reverseArrow from "../svg/reverseArrow.svg";
import img from "../Images/quantum-left-img.jpg";



export default function Quantumsecurity() {

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
                                Security
                            </h2>
                            <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                APreparing Today for the Threats of<br></br> Tomorrow
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
                                <span className="text-[48px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%]">
                                    What Is Quantum<br></br> Security?
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "30px" }}>
                            Quantum Security protects your data and infrastructure against future threats posed by quantum computing. As quantum machines advance, they could break current encryption — putting sensitive assets, identities, and communications at risk. HPIT helps you prepare now with quantum-safe strategies and cryptography.
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
            <div className="text-white px-4 sm:px-10 py-16 flex flex-col items-center">
                <h2 className="text-3xl sm:text-[48px] font-extrabold text-center mb-4 text-white">
                    <span
                        className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent"
                    >
                       Why It Matters Now
                    </span>
                </h2>



                <p className="text-gray-400 text-center mb-12 text-[20px]">
                    Quantum Threats Aren’t Decades Away — They’re Emerging
                </p>

                {/* Main Section */}
                <div className="grid grid-cols-3 gap-8 max-w-7xl items-center">
                    {/* Left Cards */}
                    <div className="flex flex-col gap-8">
                        <Card
                            title="Encryption Could Be Broken Instantly"
                            description="Quantum computers may crack RSA and ECC algorithms in minutes — jeopardizing the security of the internet."
                        />
                        <Card
                            title="Critical Industries Are High-Value Targets"
                            description="Finance, healthcare, and defense sectors face the greatest risk due to long-term data sensitivity."
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
                            title="Migration Takes Time"
                            description="Transitioning to post-quantum cryptography requires years of planning, testing, and integration across systems."
                        />
                        <Card
                            title="Proactive Beats Reactive"
                            description="Preparing today builds resilience; waiting invites disruption. Quantum-readiness isn’t optional — it’s urgent."
                        />
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20" style={{marginLeft:"40px"}}>
                {/* Section Heading */}
                <div className="mb-12">
                    <h2 className="text-[48px] font-bold">
                        <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">Why Choose HPIT</span>
                    </h2>
                    <p className="text-gray-400 mt-2 text-[20px]">Strategic Guidance. Secure Execution. Scalable Outcomes.</p>
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
                            <h3 className="font-semibold text-[20px]">Deep Cryptographic Expertise</h3>
                            <p className="text-gray-400 text-[16px]">
                                Trusted by enterprises for secure, large-scale crypto transformation.
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Standards-Aligned Solutions</h3>
                            <p className="text-gray-400 text-[16px]">
                                Built to meet NIST, ISO, GDPR, and industry regulations.
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Flexible Deployment Models</h3>
                            <p className="text-gray-400 text-[16px]">
                               Supports cloud, hybrid, and on-prem environments seamlessly.
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Future-Ready Support</h3>
                            <p className="text-gray-400 text-[16px]">
                               Continuous updates to stay aligned with quantum standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white px-6 sm:px-16 py-20 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">

                    {/* Left Section */}
                    <div>
                        <h2 className="text-3xl sm:text-[48px] font-extrabold leading-tight text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,#8076F4_0%,#FFFFFF_9.96%)]">
                            Protection That Endures Quantum Change
                        </h2>

                        <p className="text-gray-300 text-[18px] mt-6 max-w-lg leading-relaxed">
                           Transitioning to quantum safe security isn’t just about staying ahead  it’s about protecting what matters most. HPIT’s approach ensures your organization is equipped for the next era of cybersecurity without disrupting current operations.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-cols-2 gap-6" style={{marginTop:"60px"}}>
                        <div className="w-[296px] h-[183px] bg-black rounded-[8px] border border-dotted border-[#444955] p-6 flex flex-col items-center justify-center">
                            <p className="text-[18px] text-gray-300">
                               Protect mission-critical data from quantum-era breaches
                            </p>
                        </div>

                        <div className="w-[296px] h-[183px] bg-[#6C40D6] rounded-[8px] p-6 flex flex-col items-center justify-center">
                            <p className="text-[18px] text-white">
                                Achieve Regulatory Compliance and Audit Readiness
                            </p>
                        </div>

                        <div className="w-[296px] h-[183px] bg-[#2DA67C] rounded-[8px] p-6 flex flex-col items-center justify-center">
                            <p className="text-[18px] text-white">
                               Avoid emergency transitions and operational delays
                            </p>
                        </div>

                        <div className="w-[296px] h-[183px] bg-black rounded-[8px] border border-dotted border-[#444955] p-6 flex flex-col items-center justify-center ">
                            <p className="text-[18px] text-gray-300">
                                Enhance stakeholder trust through proactive resilience
                            </p>
                        </div>
                    </div>

                    {/* Arrow Image between columns */}
                    <img
                        src={reverseArrow} // <-- Replace with your SVG path
                        alt="Middle Arrow"
                        className="absolute w-[79.6px] h-[69px] top-[150px] left-[450px]"
                        style={{marginTop:"90px",marginLeft:"80px"}}
                    />
                </div>
            </div>
        </div>
    );
}

const Card = ({ title, description }) => {
    const words = title.trim().split(" ");
    const length = words.length;


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
                {title}
            </h3>
            <p className="text-gray-400 text-[16px] leading-relaxed">{description}</p>
        </div>
    );
};