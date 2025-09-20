import React from "react";
import wams_img from "./images/wams-img1.png"
import ws from "./svg/Wireless and.svg"
import wasm2 from "./images/wasm-2.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import wasm3 from "./images/wasm-3.png";
import HeroBanner from "@/components/HeroBanner";
import wasm4 from "./images/wasm-4.png";
import one from "./svg/Vector (10).svg";
import two from "./svg/Vector (11).svg";
import three from "./svg/Vector (13).svg";
import four from "./svg/Vector (12).svg";
import five from "./svg/Group (4).svg";


export default function WirelessAndMobilityServices() {

    const Card = ({ title, description }) => {
        const words = title.trim().split(" ");
        const length = words.length;

        const firstLine = words.slice(0, length - 1).join(" ");
        const lastWord = words[length - 1];

        return (
            <div
                className="w-full max-w-[380px] h-[240px] rounded-md border border-[#444955] bg-[#111215] relative"
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
        <div className="min-h-screen flex flex-col bg-black gap-y-28">
            {/* Hero Section */}
            <HeroBanner img={wams_img} svg={ws} heading="Mobility Services" text="" />

            <div className="text-white px-4 sm:px-8 lg:px-20 py-8">
                <div className="max-w-7xl mx-auto grid gap-12 lg:gap-16">
                    {/* Row 1: Full-width Heading */}
                    <div>
                        <h2 className="font-extrabold mb-0">
                            <span className="text-[36px] md:text-[40px] lg:text-[72px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%] leading-tight">
                                Our Engineering Excellence <br></br>is Your Strategic Advantage
                            </span>
                        </h2>
                    </div>

                    {/* Row 2: Left (text+CTA) and Right (image) */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text + CTA */}
                        <div className="order-1 space-y-6">
                            <p className="text-gray-300 text-base md:text-[18px] leading-relaxed">
                                After meeting with your IT team to fully comprehend your company’s technical requirements, our wireless engineers mitigate environmental challenges to ensure an optimized, speedy, and secure infrastructure. Our services are based on years of experience; we install complex networks across diverse industries: Cruise lines, Performing Arts Venues, Higher Ed, and Financial Institutions to name a few.
                            </p>

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-white font-medium group"
                                style={{ fontSize: "16px" }}
                            >
                                Get Started
                                <div className="relative w-[56px] h-[56px] -ml-[24px]">
                                    <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                    <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                                        <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                    </span>
                                </div>
                            </a>
                        </div>

                        {/* Right: Image */}
                        <div className="order-2 rounded-xl overflow-hidden">
                            <img
                                src={wasm2}
                                alt="Team Discussion"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-white px-8 sm:px-16 lg:px-28 py-8">
                {/* Grid wrapper: 1 col on mobile, 2 cols at md, 3 cols at lg for bottom row; top row remains 2 cols */}
                <div className="grid gap-5 md:gap-6">
                    {/* Row 1: two wide feature cards */}
                    <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                        {/* Card 1 (with top-right image slot) */}
                        <article className="relative rounded-lg border border-[#444955] min-h-[290px] md:min-h-[300px] bg-[#111215] [background:linear-gradient(179.93deg,rgba(2,2,3,0.3)_68.46%,rgba(220,20,20,0.3)_201.19%),#111215]">
                            <div className="p-5 md:p-6 lg:p-7 relative">
                                {/* Top row: left svg slot + right image slot */}
                                <div className="flex items-start justify-between gap-4 ">
                                    <div className="w-[64px] h-[64px] rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center shrink-0">
                                        <img src={one} alt="icon" className="w-[24px] h-[24px]" />
                                    </div>
                                    {/* Top-right image slot (won’t distort) */}
                                    <img
                                        src={wasm4}  /* add your image */
                                        alt=""
                                        className="w-[243px] h-[147px] md:w-[243px] md:h-[147px] object-contain -mt-[40px]"
                                    />
                                </div>

                                <h3 className="mt-4 text-[16px] md:text-[17px] font-semibold leading-snug">
                                    Increase Operational Performance with a CSPi WLAN Assessment
                                </h3>
                                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/75">
                                    Our engineers will evaluate your existing WLAN infrastructure and provide a report that identifies deficiencies that prohibit optimal performance. This assessment focuses on network architecture design, wireless performance, connectivity stability, signal strength, and client security posture.
                                </p>
                            </div>
                        </article>

                        {/* Card 2 */}
                        <article className="relative rounded-lg border border-[#444955] min-h-[290px] md:min-h-[300px] bg-[#111215] [background:linear-gradient(179.93deg,rgba(2,2,3,0.3)_68.46%,rgba(97,91,254,0.3)_201.19%),#111215]">
                            <div className="p-5 md:p-6 lg:p-7">
                                <div className="w-[64px] h-[64px] rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                    <img src={two} alt="icon" className="w-[24px] h-[24px]" />
                                </div>

                                <h3 className="mt-20 text-[16px] md:text-[17px] font-semibold leading-snug">
                                    Optimize your WLAN with CSPi Site Surveys
                                </h3>
                                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/75">
                                    A thorough site survey provides potent information to ensure an optimum architected wireless solution. We conduct Predictive Site Surveys to determine AP and antenna placements and quantities; we conduct Active and Passive Site surveys to determine actual RF propagation patterns of specific AP and antenna models; and we conduct Post-Installation Site Surveys to validate new implementation.
                                </p>
                            </div>
                        </article>
                    </div>

                    {/* Row 2: three equal cards at lg; two at md; one at mobile */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {/* Card 3 */}
                        <article className="relative rounded-lg border border-[#444955] min-h-[360px] bg-[#111215] [background:linear-gradient(179.93deg,rgba(2,2,3,0.3)_68.46%,rgba(218,34,255,0.3)_201.19%),#111215]">
                            <div className="p-5 md:p-6 lg:p-7">
                                <div className="w-[64px] h-[64px] rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                    <img src={three} alt="icon" className="w-[24px] h-[24px]" />
                                </div>

                                <h3 className="mt-4 text-[16px] md:text-[17px] font-semibold leading-snug">
                                    Achieve Your Business Goals with CSPi Wireless & Mobility Design and Architecture Services
                                </h3>
                                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/75">
                                    Our experts work closely with your staff to align with your business and technical requirements, so you can get the best value from your WLAN infrastructure. We evaluate your current environment, identify areas of risk, highlight opportunities for improvement, and help determine a plan for successful migration.
                                </p>
                            </div>
                        </article>

                        {/* Card 4 */}
                        <article className="relative rounded-lg border border-[#444955] min-h-[360px] bg-[#111215] [background:linear-gradient(179.93deg,rgba(2,2,3,0.3)_68.46%,rgba(40,92,246,0.258)_201.19%),#111215]">
                            <div className="p-5 md:p-6 lg:p-7">
                                <div className="w-[64px] h-[64px] rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                    <img src={four} alt="icon" className="w-[24px] h-[24px]" />
                                </div>

                                <h3 className="mt-4 text-[16px] md:text-[17px] font-semibold leading-snug">
                                    Accelerate Time to Market with CSPi Wireless and Mobility Implementation Services
                                </h3>
                                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/75">
                                    Our wireless and mobility experts have widespread experience across diverse industries within public and private sectors and fully understand the complexities of implementing wireless technology. You can rely on our Implementation Services for WLAN to deliver a secure and high-performing solution that maintains reliable connectivity.
                                </p>
                            </div>
                        </article>

                        {/* Card 5 (with optional bottom-right image slot) */}
                        <article className="relative rounded-lg border border-[#444955] min-h-[360px] bg-[#111215] [background:linear-gradient(179.93deg,rgba(2,2,3,0.3)_68.46%,rgba(251,188,5,0.3)_201.19%),#111215]">
                            <div className="p-5 md:p-6 lg:p-7 relative">
                                <div className="w-[64px] h-[64px] rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                    <img src={five} alt="icon" className="w-[24px] h-[24px]" />
                                </div>

                                <h3 className="mt-4 text-[16px] md:text-[17px] font-semibold leading-snug">
                                    Avoid Scope Creep with Dedicated Project Management
                                </h3>
                                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/75">
                                    Avoid Scope Creep with Dedicated Project Management – Our seasoned project managers oversee every detail of your implementation: they efficiently allocate pertinent resources to scale your logistical, technical, and management needs, while delivering your projects within time, scope, and budget.
                                </p>
                            </div>
                        </article>
                    </div>

                    {/* CTA row (optional) */}
                    <div className="pt-2">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white font-medium group"
                            style={{ fontSize: "16px" }}
                        >
                            Schedule a consultation with an IT expert
                            <div className="relative w-[56px] h-[56px] -ml-[24px]">
                                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-white px-4 sm:px-8 lg:px-20 py-8">
                <div className="max-w-7xl mx-auto grid gap-12 lg:gap-16">
                    {/* Row 1: Full-width Heading */}
                    <div>
                        <h2 className="font-extrabold mb-0">
                            <span className="text-[36px] md:text-[40px] lg:text-[56px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%] leading-tight">
                                Increase Productivity with High Performance, Availability, and Reliably secure connections
                            </span>
                        </h2>
                    </div>

                    {/* Row 2: Left (text+CTA) and Right (image) */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text + CTA */}
                        <div className="order-1 space-y-6">
                            <p className="text-gray-300 text-base md:text-[20px] leading-relaxed">
                                We have the experience and technology resources to be your single wireless solutions provider. We carefully customize comprehensive wireless and mobile platforms that will address your unique business requirements. The goal: keep your end users securely and continuously connected for an optimum experience.
                            </p>
                            <p className="text-gray-300 text-base md:text-[20px] leading-relaxed">
                                From assessments, site surveys, design to deployment, to ongoing support, we provide end-to-end, personalized wireless solutions that deliver today and well into the future.
                            </p>
                        </div>

                        {/* Right: Image */}
                        <div className="order-2 rounded-xl overflow-hidden">
                            <img
                                src={wasm3}
                                alt="Team Discussion"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section className="text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-20 py-12">
                    <h2 className="text-center text-indigo-400 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                        Other Solution Focus Areas
                    </h2>

                    {/* 3-column layout: left cards, middle image panel, right cards */}
                    <div className="mt-10 grid lg:grid-cols-3 gap-8">
                        {/* Left column: two cards */}
                        <div className="grid gap-8 auto-rows-[1fr]">
                            {/* Card 1 */}
                            <article
                                className="relative rounded-lg border border-dashed flex flex-col min-h-[260px]"
                                style={{ borderColor: '#444955' }}
                            >
                                <div className="p-6 grow flex flex-col gap-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-2xl font-semibold tracking-tight">Mobile Security</h3>
                                        {/* Replace with your SVG/logo */}
                                        <img src="" alt="Mobile Security" className="w-9 h-9 object-contain" />
                                    </div>
                                    <p className="text-base-50 text-base leading-normal">
                                        Protect devices and data with secure mobile management and compliance solutions.
                                    </p>
                                </div>
                            </article>

                            {/* Card 2 */}
                            <article
                                className="relative rounded-lg border border-dashed flex flex-col min-h-[260px]"
                                style={{ borderColor: '#444955' }}
                            >
                                <div className="p-6 grow flex flex-col gap-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-2xl font-semibold tracking-tight">Advanced Security</h3>
                                        <img src="" alt="Advanced Security" className="w-9 h-9 object-contain" />
                                    </div>
                                    <p className="text-base-50 text-base leading-normal">
                                        Plan and design a secure infrastructure by incorporating threat intelligence and compliance rigor.
                                    </p>
                                </div>
                            </article>
                        </div>

                        {/* Middle panel: image sized like a card */}
                        <div className="grid auto-rows-[1fr]">
                            <div
                                className="relative rounded-lg overflow-hidden border border-dashed flex flex-col min-h-[260px]"
                                style={{ borderColor: '#444955' }}
                            >
                                <div className="relative w-full h-full">
                                    {/* Keeps proportion; fills panel */}
                                    <img
                                        src="https://placehold.co/375x534"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right column: two cards */}
                        <div className="grid gap-8 auto-rows-[1fr]">
                            {/* Card 3 */}
                            <article
                                className="relative rounded-lg border border-dashed flex flex-col min-h-[260px]"
                                style={{ borderColor: '#444955' }}
                            >
                                <div className="p-6 grow flex flex-col gap-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-2xl font-semibold tracking-tight">Data Center Services</h3>
                                        <img src="" alt="Data Center Services" className="w-9 h-9 object-contain" />
                                    </div>
                                    <p className="text-base-50 text-base leading-normal">
                                        Address compute, storage, virtualization, and cloud requirements with one provider for facilities and management.
                                    </p>
                                </div>
                            </article>

                            {/* Card 4 */}
                            <article
                                className="relative rounded-lg border border-dashed flex flex-col min-h-[260px]"
                                style={{ borderColor: '#444955' }}
                            >
                                <div className="p-6 grow flex flex-col gap-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-2xl font-semibold tracking-tight">
                                            Unified Communication &amp; Collaboration
                                        </h3>
                                        <img src="" alt="UCC" className="w-9 h-9 object-contain" />
                                    </div>
                                    <p className="text-base-50 text-base leading-normal">
                                        Trust the experts to help you choose the right Unified Communications tools, deployment model, and implementation approach.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-[1338px] h-96 relative">
                <div className="w-96 h-80 left-[218px] top-[-28px] absolute opacity-20 bg-rose-500 rounded-full blur-[150px]" />
                <div className="w-64 h-12 left-[45px] top-[23.46px] absolute justify-start text-indigo-400 text-5xl font-semibold font-['Poppins'] leading-[70px]">Resources</div>
                <div className="w-96 h-96 left-[496px] top-0 absolute bg-gradient-to-b from-black/0 to-blue-800/20 rounded-lg outline outline-1 outline-offset-[-0.50px] outline-base-500 overflow-hidden">
                    <div className="w-96 left-[24px] top-[21px] absolute inline-flex flex-col justify-start items-start gap-9">
                        <div className="self-stretch flex flex-col justify-start items-start gap-5">
                            <div className="w-16 h-16 relative bg-base-700 rounded-xl outline outline-1 outline-offset-[-1px] outline-base-600 overflow-hidden">
                                <div className="w-7 h-6 left-[16.42px] top-[20.61px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-px h-[3.37px] left-[19.61px] top-[33.23px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-px h-[3.37px] left-[21.52px] top-[33.23px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-px h-[3.37px] left-[23.44px] top-[33.23px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-1 h-1 left-[33.78px] top-[33.05px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-1 h-1 left-[38.25px] top-[33.05px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-px h-[3.37px] left-[19.61px] top-[41.30px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-px h-[3.37px] left-[21.52px] top-[41.30px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-px h-[3.37px] left-[23.44px] top-[41.30px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-1 h-1 left-[33.78px] top-[41.16px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-1 h-1 left-[38.25px] top-[41.16px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-[2.96px] h-2.5 left-[20.84px] top-[17.60px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-[2.52px] h-2 left-[22.74px] top-[18.70px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-0.5 h-1.5 left-[24.72px] top-[19.79px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-[2.96px] h-2.5 left-[37.15px] top-[17.65px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-[2.48px] h-2 left-[35.65px] top-[18.70px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                                <div className="w-0.5 h-1.5 left-[34.14px] top-[19.74px] absolute bg-zinc-300 outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300" />
                            </div>
                            <div className="self-stretch justify-start text-base-100 text-2xl font-semibold font-['Poppins'] tracking-tight">Wireless and Mobility Services</div>
                        </div>
                        <div className="self-stretch justify-start text-base-100 text-base font-medium font-['Poppins'] tracking-tight">Wireless and Mobility Services enable seamless, secure, and scalable connectivity for users and devices across various networks, enhancing productivity and accessibility on the go.</div>
                        <div className="w-36 h-14 relative">
                            <div className="left-0 top-[23px] absolute justify-start text-base-25 text-base font-medium font-['Poppins'] tracking-tight">Learn more </div>
                            <div className="w-14 h-14 left-[149px] top-[56px] absolute origin-top-left rotate-180 bg-zinc-300 rounded-full border border-red-600" />
                            <div className="w-3 h-0 left-[115px] top-[29px] absolute border-2 border-base-50" />
                        </div>
                    </div>
                </div>
                <div className="w-96 h-96 left-[933px] top-0 absolute bg-gradient-to-b from-black/0 to-blue-800/20 rounded-lg outline outline-1 outline-offset-[-0.50px] outline-base-500 overflow-hidden">
                    <div className="w-80 left-[24px] top-[21px] absolute inline-flex flex-col justify-start items-start gap-9">
                        <div className="self-stretch flex flex-col justify-start items-start gap-5">
                            <div className="w-16 h-16 relative bg-base-700 rounded-xl outline outline-1 outline-offset-[-1px] outline-base-600 overflow-hidden">
                                <div className="w-9 h-7 left-[15px] top-[18px] absolute bg-white" />
                            </div>
                            <div className="self-stretch justify-start text-base-100 text-2xl font-semibold font-['Poppins'] tracking-tight">CSPi Professional Services</div>
                        </div>
                        <div className="self-stretch justify-start text-base-100 text-base font-medium font-['Poppins'] tracking-tight">CSPi Professional Services deliver tailored IT solutions, including consulting, integration, and support, to optimize technology performance and security.</div>
                        <div className="w-36 h-14 relative">
                            <div className="left-0 top-[23px] absolute justify-start text-base-25 text-base font-medium font-['Poppins'] tracking-tight">Learn more </div>
                            <div className="w-14 h-14 left-[149px] top-[56px] absolute origin-top-left rotate-180 bg-zinc-300 rounded-full border border-red-600" />
                            <div className="w-3 h-0 left-[115px] top-[29px] absolute border-2 border-base-50" />
                        </div>
                    </div>
                </div>
                <img className="w-96 h-72 left-0 top-[90px] absolute" src="https://placehold.co/372x279" />
                <img className="w-96 h-28 left-0 top-[294px] absolute" src="https://placehold.co/372x115" />
            </div>


        </div>

    );
}



