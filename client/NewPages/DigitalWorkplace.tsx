import React from "react";
import dw_h from "./images/dw-h.png"
import digital from "./svg/Digital.svg"
import dw_2 from "./images/dw-2.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import dw_3 from "./images/dw-3.png";
import dw_4 from "./images/dw-4.png";
import HeroBanner from "@/components/HeroBanner";


export default function DigitalWorkplace() {

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
            <HeroBanner img={dw_h} svg={digital} heading="workplace" text="A digital workplace is a virtual work environment that brings together technology, people, and business processes to facilitate communication, collaboration, and productivity within an organisation." />

            <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="font-extrabold mb-8">
                                <span className="text-[44px] md:text-[44px] lg:text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%] leading-tight">
                                    Digital workplace vs. digital workspace
                                </span>
                            </h2>
                        </div>

                        <p className="text-gray-300 text-base md:text-[18px] leading-relaxed">
                            While the terms “digital workplace” and “digital workspace” are often used interchangeably, the common thread in both cases is about delivering a positive people experience to increase engagement and productivity. Using “digital workplace” throughout, this article explores the core functionalities, benefits, and use cases of the same and provides recommendations on how a growing company can form its digital workplace strategy to drive overall business agility.
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
                            src={dw_2}
                            alt="Team Discussion"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            <div
                className="
        relative
        w-full
        max-w-[1296px]
        mx-auto
        rounded-[8px]
        border border-[#22252B]
        bg-black
        overflow-hidden
        min-h-[700px]
      "
                style={{
                    backgroundImage:
                        "linear-gradient(103.31deg, rgba(0,0,0,0) 33.01%, rgba(26,188,254,0.2) 143.6%)",
                }}
            >

                <img
                    src={dw_3}
                    alt=""
                    className="
      pointer-events-none
      absolute top-0 right-0
      w-[320px] h-[180px]
      md:w-[380px] md:h-[220px]
      lg:w-[520px] lg:h-[200px]
      object-contain
      opacity-90
    "
                />

                {/* Content */}
                <div className="relative p-6 md:p-10 lg:p-12">
                    <h2 className="text-white text-[64px] md:text-[64px] font-extrabold leading-tight">
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">Business<br></br> implications</span>
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-24">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-3 w-3 rounded-full bg-[#2CA2FF]" />
                                <span className="h-px flex-1 bg-[#2CA2FF]/40" />
                            </div>
                            <h3 className="mt-12 text-white text-[22px] font-semibold">Business agility</h3>
                            <p className="mt-4 text-[#D1D5DB] text-[18px] leading-6">
                                Digital workplaces enable businesses to be more agile, quickly adapting to market
                                changes and customer needs. The use of digital tools allows for rapid decision‑making
                                and implementation, essential in a fast‑paced business environment.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-3 w-3 rounded-full bg-[#FFE8A3]" />
                                <span className="h-px flex-1 bg-[#FFE8A3]/40" />
                            </div>
                            <h3 className="mt-12 text-white text-[22px] font-semibold">Data‑driven decision‑making</h3>
                            <p className="mt-4 text-[#D1D5DB] text-[18px] leading-6">
                                Digital workplaces offer ready access to high‑quality, unified data that offer
                                insights into everything from employee productivity to customer preferences.
                                Leveraging this data enables businesses to make informed, strategic decisions,
                                tailoring their services and products more effectively to market demands.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-3 w-3 rounded-full bg-[#FF8AA1]" />
                                <span className="h-px flex-1 bg-[#FF8AA1]/40" />
                            </div>
                            <h3 className="mt-12 text-white text-[22px] font-semibold">Self‑service efficiency</h3>
                            <p className="mt-4 text-[#D1D5DB] text-[18px] leading-6">
                                Digital workplaces put information and resources at the fingertips of workers,
                                enabling them quickly find solutions to business problems and manage their work in the
                                way that best suits their needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-black text-white">
                <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-0 py-12">
                    {/* Heading */}
                    <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-extrabold leading-none text-center mb-28">
                        <span className="bg-[radial-gradient(39.14%_35817.02%_at_31.18%_23.86%,_#8076F4_29.75%,_#FFFFFF_100%,_#FFFFFF_100%)] bg-clip-text text-transparent">Emerging trends</span>
                    </h2>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        {/* Left: Image */}
                        <div className="w-full">
                            <img
                                src={dw_4}
                                alt=""
                                className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover rounded-lg"
                            />
                        </div>

                        {/* Right: Bulleted items */}
                        <div className="space-y-10">
                            {/* AI */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="h-2.5 w-2.5 rounded-full border-2 border-[#FF5454]" />
                                    <h3 className="text-xl sm:text-2xl font-semibold">
                                        Artificial intelligence (AI)
                                    </h3>
                                </div>
                                <p className="text-white/80 leading-7 text-base">
                                    AI is increasingly integrated into digital workplaces, from
                                    chatbots that assist in customer service to algorithms that analyze
                                    data for strategic insights. Its ability to automate complex tasks
                                    and provide deep learning insights is transforming how businesses
                                    operate.
                                </p>
                            </div>

                            {/* Automation */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="h-2.5 w-2.5 rounded-full border-2 border-[#FF5454]" />
                                    <h3 className="text-xl sm:text-2xl font-semibold">Automation</h3>
                                </div>
                                <p className="text-white/80 leading-7 text-base">
                                    Automation tools integrate with digital workplaces so users can
                                    receive updates and execute tasks directly. Use cases span from
                                    data entry and invoice processing to approvals and IT service
                                    delivery.
                                </p>
                            </div>

                            {/* Integration */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="h-2.5 w-2.5 rounded-full border-2 border-[#FF5454]" />
                                    <h3 className="text-xl sm:text-2xl font-semibold">Integration</h3>
                                </div>
                                <p className="text-white/80 leading-7 text-base">
                                    Digital workplaces act as a common access point for critical apps
                                    and enterprise data. Integrating tools for project management,
                                    communication, and collaboration enables seamless data access and
                                    consistency across systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-black text-white">
                <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
                    {/* Heading */}
                    <h2 className="text-[40px] sm:text-[56px] md:text-[72px] leading-[1.05] font-extrabold">
                        <span className="text-white">
                            How does a digital
                            <br className="hidden sm:block" /> workplace work?
                        </span>
                    </h2>

                    {/* Subheading */}
                    <p className="mt-6 text-white/80 text-base sm:text-lg max-w-4xl">
                        A digital workplace works through a combination of technical infrastructure,
                        workflow and processes, and AI and automation.
                    </p>

                    {/* 3 columns */}
                    <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
                        {/* Card 1 */}
                        <div>
                            {/* Icon */}
                            <div className="h-12 w-12">
                                <img src="" alt="" className="h-12 w-12 object-contain" />
                            </div>
                            {/* Gradient rule */}
                            <div className="mt-6 h-[2px] w-full rounded-full bg-gradient-to-r from-[#6B6BFF] via-transparent to-transparent" />

                            <h3 className="mt-6 text-xl font-semibold">Cloud services</h3>
                            <p className="mt-4 text-white/75 leading-7">
                                Cloud services form the backbone of the digital workplace, offering scalable and
                                flexible resources for hosting applications, data analytics, and more. They
                                facilitate remote data storage, access, and management, enabling teams to
                                collaborate and work from any location.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div>
                            {/* Icon */}
                            <div className="h-12 w-12">
                                <img src="" alt="" className="h-12 w-12 object-contain" />
                            </div>
                            {/* Gradient rule */}
                            <div className="mt-6 h-[2px] w-full rounded-full bg-gradient-to-r from-[#6B6BFF] via-transparent to-transparent" />

                            <h3 className="mt-6 text-xl font-semibold">SaaS platforms</h3>
                            <p className="mt-4 text-white/75 leading-7">
                                Software as a Service (SaaS) platforms are crucial in the digital workplace,
                                offering security, scalability, and access to a range of applications for video
                                conferencing, team communications, IT services, streamlining operations, and
                                collaboration on demand.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div>
                            {/* Icon */}
                            <div className="h-12 w-12">
                                <img src="" alt="" className="h-12 w-12 object-contain" />
                            </div>
                            {/* Gradient rule */}
                            <div className="mt-6 h-[2px] w-full rounded-full bg-gradient-to-r from-[#6B6BFF] via-transparent to-transparent" />

                            <h3 className="mt-6 text-xl font-semibold">Custom software</h3>
                            <p className="mt-4 text-white/75 leading-7">
                                Many organizations invest in custom software tailored to specific worker needs,
                                including field and deskless workers. These solutions integrate with existing
                                systems and provide unique functionality beyond off‑the‑shelf software, helping
                                businesses gain a competitive edge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white">
                <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
                    {/* Top accent corner */}
                    <div className="relative">
                        <span className="absolute -top-4 left-0 h-8 w-1 rounded bg-[#7C4DFF]" />
                        <span className="absolute -top-4 left-0 ml-4 h-1 w-40 rounded bg-[#7C4DFF]" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-[40px] sm:text-[56px] md:text-[64px] leading-[1.1] font-extrabold max-w-3xl">
                        The importance of a digital workplace
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        {/* Left: Text blocks */}
                        <div className="space-y-10">
                            {/* Work-life balance */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="h-2.5 w-2.5 rounded-full border-2 border-[#FF5454]" />
                                    <h3 className="text-xl sm:text-2xl font-semibold">Work‑life balance</h3>
                                </div>
                                <p className="text-white/80 leading-7 text-base">
                                    One of the most significant cultural impacts of a digital workplace is on
                                    work‑life balance. The flexibility in work hours and locations can lead to a more
                                    balanced lifestyle for employees. However, it also poses challenges, such as the
                                    blurring of boundaries between work and personal life, requiring careful
                                    management and cultural sensitivity.
                                </p>
                            </div>

                            {/* Flexibility */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="h-2.5 w-2.5 rounded-full border-2 border-[#FF5454]" />
                                    <h3 className="text-xl sm:text-2xl font-semibold">Flexibility</h3>
                                </div>
                                <p className="text-white/80 leading-7 text-base">
                                    With access to digital workplaces, workers have more opportunities to work in ways
                                    that best fit their needs. By centralizing work tools for analysis, task execution,
                                    collaboration, and team management, digital workplaces give workers the flexibility
                                    to work anytime, anywhere. They also meet worker demand for quick access to the
                                    tools needed to remain productive and self‑sufficient.
                                </p>
                            </div>
                        </div>

                        {/* Right: Illustration */}
                        <div className="relative">
                            {/* Soft radial glow behind image */}
                            <div className="pointer-events-none absolute inset-0 -z-10">
                                <div className="mx-auto h-full w-full bg-[radial-gradient(70%_60%_at_70%_45%,rgba(162,84,255,0.25)_0%,rgba(0,0,0,0)_60%)]" />
                            </div>
                            <img
                                src=""
                                alt=""
                                className="w-full max-w-[540px] lg:max-w-none ml-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white">
                <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
                    {/* Heading */}
                    <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-extrabold leading-none mb-10">
                        <span className="text-white">Flexibility</span>{" "}
                        <span className="text-[#B6A9FF]">and productivity</span>
                    </h2>

                    {/* Three-column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start ">
                        {/* Card: Remote work */}
                        <div
                            className="
              rounded-xl
              border-[1.5px]
              border-dashed
              bg-[#111215]
              p-6 md:p-7 lg:p-8
            "
                            style={{ borderColor: "var(--base-500, #444955)" }}
                        >
                            <h3 className="text-lg md:text-xl font-semibold mb-4">Remote work</h3>
                            <p className="text-white/75 leading-7 text-sm md:text-base">
                                The digital workplace facilitates remote work, which offers employees the flexibility
                                to work from locations that suit them best. This flexibility often results in increased
                                job satisfaction and can lead to higher productivity levels.
                            </p>
                        </div>

                        {/* Center image */}
                        <div className="flex items-stretch justify-center">
                            <img
                                src=""
                                alt=""
                                className="w-full h-[280px] sm:h-[340px] md:h-[380px] object-cover rounded-xl"
                            />
                        </div>

                        {/* Card: Asynchronous collaboration */}
                        <div
                            className="
              rounded-xl
              border-[1.5px]
              border-dashed
              bg-[#111215]
              p-6 md:p-7 lg:p-8
            "
                            style={{ borderColor: "var(--base-500, #444955)" }}
                        >
                            <h3 className="text-lg md:text-xl font-semibold mb-4">Asynchronous collaboration</h3>
                            <p className="text-white/75 leading-7 text-sm md:text-base">
                                Asynchronous collaboration, a hallmark of digital workplaces, allows team members in
                                different time zones to collaborate effectively. This increases productivity while
                                respecting individual work rhythms and lifestyles, contributing to a more inclusive
                                work culture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white">
                <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
                    <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-extrabold leading-none mb-10">
                        <span className="text-white">Industry–</span>
                        <span className="text-[#B6A9FF]">specific</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* High tech */}
                        <div className="rounded-lg overflow-hidden border-b border-white/20">
                            <div className="h-full bg-[linear-gradient(180deg,#2A2F36_0%,#15191F_100%)] p-6 md:p-7 lg:p-8">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">High tech</h3>
                                <p className="text-white/75 leading-7 text-sm md:text-base mb-8">
                                    In the tech industry, digital workplaces are almost a default. Companies use an
                                    array of digital tools for collaboration, innovation, and communication. Some tech
                                    companies see their workplaces as models of efficiency and creativity and often
                                    leverage their own products to facilitate work processes.
                                </p>
                                <button type="button" className="group inline-flex items-center gap-3 text-white/80">
                                    <span className="underline-offset-4 group-hover:underline">Learn more</span>
                                    <span className="relative inline-flex items-center justify-center h-8 w-8 rounded-full border border-[#FF5A52]/60">
                                        <span className="translate-x-[1px]">→</span>
                                        <span className="pointer-events-none absolute -inset-1 rounded-full border border-[#FF5A52]/20" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Healthcare */}
                        <div className="rounded-lg overflow-hidden border-b border-white/20">
                            <div className="h-full bg-[linear-gradient(180deg,#4C6FFF_0%,#B24CD6_100%)] p-6 md:p-7 lg:p-8">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">Healthcare</h3>
                                <p className="text-white/90 leading-7 text-sm md:text-base mb-8">
                                    Emedicine, digital records, and remote patient monitoring are examples of how
                                    digital workplaces have revolutionised healthcare. Hospitals and clinics rely on
                                    digital systems for patient care and administrative functions while health system
                                    members can set up virtual doctor appointments or phone appointments from their
                                    desktops or phones.
                                </p>
                                <button type="button" className="group inline-flex items-center gap-3 text-white">
                                    <span className="underline-offset-4 group-hover:underline">Learn more</span>
                                    <span className="relative inline-flex items-center justify-center h-8 w-8 rounded-full border border-[#FF5A52]/70">
                                        <span className="translate-x-[1px]">→</span>
                                        <span className="pointer-events-none absolute -inset-1 rounded-full border border-[#FF5A52]/30" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="rounded-lg overflow-hidden border-b border-white/20">
                            <div className="h-full bg-[#2B3037] p-6 md:p-7 lg:p-8">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">Education</h3>
                                <p className="text-white/75 leading-7 text-sm md:text-base mb-8">
                                    The shift to digital workplaces in education has been dramatic, particularly with
                                    the rise of e‑learning and virtual classrooms. Some institutions offer online
                                    courses and digital collaboration platforms, enabling remote learning and global
                                    access to education.
                                </p>
                                <button type="button" className="group inline-flex items-center gap-3 text-white/80">
                                    <span className="underline-offset-4 group-hover:underline">Learn more</span>
                                    <span className="relative inline-flex items-center justify-center h-8 w-8 rounded-full border border-[#FF5A52]/60">
                                        <span className="translate-x-[1px]">→</span>
                                        <span className="pointer-events-none absolute -inset-1 rounded-full border border-[#FF5A52]/20" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white">
                <div className="max-w-[1338px] mx-auto px-4 sm:px-6 lg:px-0 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6 items-start">
                        {/* Left: Title + Illustration */}
                        <div className="relative">
                            <h2 className="text-[36px] sm:text-[44px] font-extrabold mb-6">Resources</h2>

                            {/* Red ellipse accent */}
                            <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-[#FF5A5A] blur-[10px] opacity-80"></div>

                            {/* Big illustration (replace src) */}
                            <img
                                src=""
                                alt=""
                                className="w-full max-w-[520px] h-[220px] sm:h-[260px] object-contain"
                            />
                        </div>

                        {/* Card 1 */}
                        <article className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]">
                            <div className="mb-4">
                                <img src="" alt="" className="h-8 w-8 object-contain" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold">
                                AI in 2024: Transforming the Digital Workplace
                            </h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                Understand how emerging AI trends are redefining user experiences, collaboration,
                                and productivity in digital work environments.
                            </p>

                            <button
                                type="button"
                                className="group mt-6 inline-flex items-center gap-3 text-white/85"
                            >
                                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                                <span className="relative inline-flex items-center justify-center h-8 w-8 rounded-full border border-[#FF5A5A]">
                                    <span className="translate-x-[1px]">→</span>
                                    <span className="pointer-events-none absolute -inset-1 rounded-full border border-[#FF5A5A]/30" />
                                </span>
                            </button>
                        </article>

                        {/* Card 2 */}
                        <article className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]">
                            <div className="mb-4">
                                <img src="" alt="" className="h-8 w-8 object-contain" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold">
                                Scaling Analytics and AI for the Modern Workforce
                            </h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                Learn how centralized, trusted data can accelerate workplace innovation and support
                                scalable AI‑driven initiatives.
                            </p>

                            <button
                                type="button"
                                className="group mt-6 inline-flex items-center gap-3 text-white/85"
                            >
                                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                                <span className="relative inline-flex items-center justify-center h-8 w-8 rounded-full border border-[#FF5A5A]">
                                    <span className="translate-x-[1px]">→</span>
                                    <span className="pointer-events-none absolute -inset-1 rounded-full border border-[#FF5A5A]/30" />
                                </span>
                            </button>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}