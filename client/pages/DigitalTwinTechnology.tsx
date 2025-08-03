import React from "react";
import digitalImg from "../Images/digital-twin-hero-img.png"
import DigitalTwin from "../svg/Digital Twin.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/digital-img-2.png";
import img3 from "../Images/digital-twin-img-2.png";
import one from "../svg/1.svg";
import two from "../svg/2.svg";
import three from "../svg/3.svg";
import four from "../svg/4.svg";
import img4 from "../Images/digital-twin-img-6.png";
import img5 from "../Images/digital-twin-img-7.png"
import img6 from "../Images/digital-twin-img-8.png"
import img7 from "../Images/digital-twin-img-9.png"
import img8 from "../Images/digital-twin-img-10.png"


export default function DigitalTwinTechnology() {

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
                    backgroundImage: `url(${digitalImg})`,
                }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4  sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-2">
                                <img
                                    src={DigitalTwin}
                                    alt="Company"
                                />
                            </h2>
                            <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                                Technology
                            </h2>
                            <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                Turning Intelligence Into Impact <br></br> Faster
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
                                    Technology Alone Doesn’t Transform  Strategy Does.
                                </span>
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[18px] leading-relaxed">
                            Digital transformation is not about adopting the latest tools. It's about reimagining how your business creates value. HPIT partners with you to align technology with enterprise strategy — modernizing core systems, empowering teams, and unlocking new sources of growth.
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
            <div className="w-full bg-black text-white py-16 px-8 lg:px-32 flex flex-col">
                <h2 className="text-[48px] font-bold">
                    <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">Where Digital Twins <br></br>Create Impact</span>
                </h2>
                <p className="mt-4 text-[20px] text-gray-400">Proven Value Across Critical Domains</p>

                <div
                    className="mt-12 grid gap-6"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "634px 303px 303px",
                        gridTemplateRows: "280px 280px",
                        gridAutoFlow: "dense",
                        justifyContent: "center",
                    }}
                >
                    {/* Card 1 */}
                    <div className="relative w-[634px] h-[280px] rounded-lg overflow-hidden">
                        <img src={img4} alt="Smart Manufacturing" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <h3 className="text-[28px] font-semibold py-6">Smart<br></br> Manufacturing</h3>
                            <p className="text-[18px]">Boost efficiency and reduce downtime with real-time equipment modeling.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-[303px] h-[280px] rounded-lg overflow-hidden">
                        <img src={img5} alt="Healthcare Systems" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center p-8">
                            <h3 className="text-[28px] font-semibold py-6">Healthcare <br></br> Systems</h3>
                            <p className="text-[18px]">Improve care by modeling patient flows and facility operations.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative w-[303px] h-[280px] rounded-lg overflow-hidden">
                        <img src={img6} alt="Logistics & Supply Chain" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center p-8">
                            <h3 className="text-[28px] font-semibold py-6">Logistics &<br></br>  Supply Chain</h3>
                            <p className="text-[18px]">Gain end-to-end visibility into complex, fast-moving supply networks.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative w-[634px] h-[280px] rounded-lg overflow-hidden col-span-1">
                        <img src={img7} alt="Energy & Utilities" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <h3 className="text-[28px] font-semibold py-6">Energy &<br></br>Utilities</h3>
                            <p className="text-[18px]">Predict failures and optimize grid performance with digital replicas.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="relative w-[634px] h-[280px] rounded-lg overflow-hidden col-span-2">
                        <img src={img8} alt="Urban Infrastructure" className="w-full h-full object-cover opacity-30" />
                        <div className="absolute inset-0 flex flex-col justify-center p-8">
                            <h3 className="text-[28px] font-semibold py-6">Urban<br></br> Infrastructure</h3>
                            <p className="text-[18px]">Digital replicas of transportation, energy, and utilities enable city planners to simulate changes, optimize traffic flows, manage energy distribution, and enhance citizen services.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative min-h-[796px] text-white py-16 px-8 md:px-28 overflow-hidden">

                {/* Bottom Left Ellipse */}
                <div className="absolute w-[500px] h-[500px] left-[-250px] bottom-0 bg-[radial-gradient(circle,rgba(26,188,254,0.3)_0%,rgba(255,255,255,0.3)_100%)] blur-[200px] pointer-events-none z-0"></div>

                {/* Top Right Ellipse */}
                <div className="absolute w-[500px] h-[500px] right-[-250px] top-[-100px] bg-[radial-gradient(circle,rgba(26,188,254,0.3)_0%,rgba(255,255,255,0.3)_100%)] blur-[200px] pointer-events-none z-0"></div>

                {/* Heading */}
                <div className="mb-12 relative z-10">
                    <h2 className="text-[48px] md:text-[48px] font-semibold">
                        Our Strategic <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">Twin</span> Framework
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl text-[16px] md:text-[16px]">
                        Transform raw data into intelligent action with a living, learning digital twin model.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex flex-wrap gap-8 relative z-10">
                    {/* Card 1 */}
                    <div
                        className="w-[300px] h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden"
                        style={{
                            background: 'linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(220, 20, 20, 0.3) 201.19%), #111215',
                        }}
                    >
                        <h3 className="text-[40px] font-semibold mb-16">Capture</h3>
                        <p className="text-gray-400 text-[20px] pr-8">Collect real-time data from IoT, machines, and operations.</p>
                        <img
                            src={one}
                            className="absolute bottom-4 -right-[10px] w-[155px] h-[197px] opacity-80"
                        />
                    </div>

                    {/* Repeat Cards with images */}
                    {/* Card 2 */}
                    <div
                        className="w-[300px] h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden"
                        style={{
                            background: 'linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(97, 91, 254, 1) 201.19%), #111215',
                        }}
                    >
                        <h3 className="text-[40px] font-semibold mb-16">Model</h3>
                        <p className="text-gray-400 text-[20px] pr-8">Build accurate digital replicas enriched with business logic.</p>
                        <img
                            src={two}
                            className="absolute bottom-4 -right-[10px] w-[155px] h-[197px] opacity-80"
                        />
                    </div>

                    {/* Card 3 */}
                    <div
                        className="w-[300px] h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden"
                        style={{
                            background: 'linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(220, 20, 20, 0.3) 201.19%), #111215',
                        }}
                    >
                        <h3 className="text-[40px] font-semibold mb-16">Analyze</h3>
                        <p className="text-gray-400 text-[20px] pr-8">Use AI/ML to detect anomalies, simulate scenarios, and predict outcomes.</p>
                        <img
                            src={three}
                            className="absolute bottom-4 -right-[10px] w-[155px] h-[197px] opacity-80"
                        />
                    </div>

                    {/* Card 4 */}
                    <div
                        className="w-[300px] h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden"
                        style={{
                            background: 'linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(97, 91, 254, 1) 201.19%), #111215',
                        }}
                    >
                        <h3 className="text-[40px] font-semibold mb-16">Evolve</h3>
                        <p className="text-gray-400 text-[20px] pr-8">Continuously refine<br />models as systems scale and conditions change.</p>
                        <img
                            src={four}
                            className="absolute bottom-4 -right-[10px] w-[155px] h-[197px] opacity-80"
                        />
                    </div>
                </div>
            </div>
            <div className="text-white px-4 sm:px-8 lg:px-28 py-16">
                {/* Section Heading */}
                <div className="mb-12">
                    <h2 className="text-[48px] font-bold">
                        <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">How We Help You Lead</span>
                    </h2>
                    <p className="text-gray-400 mt-2 text-[20px]">A Partner in Transformation, Not Just Implementation</p>
                </div>

                {/* Image + Features Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Image */}
                    <div>
                        <img
                            src={img3}
                            alt="Team discussing security"
                            className="w-[642px] h-[434px]"
                        />
                    </div>

                    {/* Right Features with underlines */}
                    <div className="space-y-12">
                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Architected for Scale</h3>
                            <p className="text-gray-400 text-[16px]">
                                From proof of concept to enterprise rollout
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Accelerated Time-to-Value</h3>
                            <p className="text-gray-400 text-[16px]">
                                Rapid integration with existing platforms
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Industry-Aligned Models</h3>
                            <p className="text-gray-400 text-[16px]">
                                Built for your KPIs, not generic metrics
                            </p>
                        </div>

                        <div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                            <h3 className="font-semibold text-[20px]">Secure & Compliant by Design</h3>
                            <p className="text-gray-400 text-[16px]">
                                Data sovereignty, privacy, and risk control from day one
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

