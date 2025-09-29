"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, X } from "lucide-react";
import backgroundImage from "@/Images/frame1.png";
import team1 from "@/Images/Pexels Photo by Daniel Xavier.jpg";
import team2 from "@/Images/Pexels Photo by Italo Melo.jpg";
import team3 from "@/Images/Pexels Photo by Guilherme  Almeida.jpg";
import team4 from "@/Images/Pexels Photo by Andrea Piacquadio.jpg";
import arrow from "@/svg/arrow.svg";
import journey1 from "@/Images/journey1.jpg";
import journey2 from "@/Images/journey2.jpg";
import journey3 from "@/Images/journey3.jpg";
import astronaut from "@/Images/Astronaut.jpg";
import frame from "@/svg/Frame75.svg";
import g2m from "@/svg/g2m.svg";
import Group from "@/svg/Group.svg";
import Ellipse from "@/svg/Ellipse 10.svg";
import company from "@/svg/Company.svg";
import narrow from "@/svg/Arrow 1.svg";

// Reusable Scroll Animation Wrapper
const FadeInSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Company() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
      <FadeInSection>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="relative z-10 pt-60 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <motion.h2
                  className="text-white text-[56px] md:text-5xl lg:text-6xl font-normal mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={company} alt="Company" />
                </motion.h2>
                <motion.h2
                  className="text-white text-[56px] md:text-4xl lg:text-5xl font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Overview
                </motion.h2>
                <motion.p
                  className="text-white text-base md:text-lg leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  At HIPT, we specialize in delivering customized technology and
                  consulting services that help government and private sector
                  organizations modernize, optimize, and grow with confidence.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* About Section */}
      <FadeInSection delay={0.1}>
        <div className="text-white px-4 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-[72px] font-extrabold mb-2">
                  <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                    About Us
                  </span>
                </h2>
                <p className="text-gray-300 text-[18px] font-semibold">
                  Purpose-Driven Solutions. Trusted Partnerships.
                </p>
              </div>

              <p className="text-gray-300 text-[18px] leading-relaxed mt-16">
                HPIT is a forward-focused IT consulting company committed to
                delivering secure, innovative, and mission-ready technology
                solutions across government and private sectors. Founded on the
                principles of integrity, excellence, and national service, we
                help organizations solve complex challenges through customized
                digital strategies, advanced data capabilities, and expert
                consulting.
              </p>

              <p className="text-gray-300 text-xl leading-relaxed mt-16">
                Our strength lies in combining deep industry knowledge with a
                skilled workforce to support critical operations, whether it's
                modernising infrastructure, enhancing cybersecurity, or enabling
                digital transformation. At HPIT, we don’t just deliver
                technology—we deliver results that matter.
              </p>
            </motion.div>

            <motion.img
              src={journey2}
              alt="Team Discussion"
              className="w-[537px] h-[357px] object-cover rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <div className="text-white px-6 py-20 bg-black">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Title + Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-[56px] font-extrabold leading-tight mb-6">
                <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
                  A community driven by growth.
                </span>
              </h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="rounded-3xl overflow-hidden mb-10"
              >
                <img
                  src={astronaut}
                  alt="Astronaut"
                  className="rounded-3xl object-cover w-full h-full max-h-[500px]"
                />
              </motion.div>
            </motion.div>

            {/* Right Accordion */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-300 text-[24px]">
                Our community of reps are motivated, resilient and most of all,
                problem solvers.
              </p>
              <div style={{ marginTop: "65px" }}>
                {[
                  {
                    title: "Purpose",
                    desc: "To Serve, Secure, and Solve for a Better Tomorrow",
                    content: `At HPIT, we empower our nation by delivering secure, innovative technology solutions.
Through expert consulting, digital transformation, and data-driven strategies, we help
government and private sector clients solve complex challenges, modernize operations,
and achieve lasting success.`,
                  },
                  {
                    title: "Mission",
                    desc: "Empowering Progress Through People and Technology",
                    content: `At HPIT, we empower our nation by delivering secure, innovative technology solutions.
Through expert consulting, digital transformation, and data-driven strategies, we help
government and private sector clients solve complex challenges, modernize operations,
and achieve lasting success.`,
                  },
                  {
                    title: "Vision",
                    desc: "Securing the Future with Trusted Innovation",
                    content: `At HPIT, we empower our nation by delivering secure, innovative technology solutions.
Through expert consulting, digital transformation, and data-driven strategies, we help
government and private sector clients solve complex challenges, modernize operations,
and achieve lasting success.`,
                  },
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-700 pb-2">
                    {/* Header */}
                    <div
                      className="flex justify-between items-center cursor-pointer py-2"
                      onClick={() => toggle(index)}
                    >
                      <div>
                        <p className="text-[16px] text-white font-semibold mb-1">
                          {item.title} :
                        </p>
                        <p className="text-white text-[14px]">{item.desc}</p>
                      </div>
                      <span className="text-white">
                        {openIndex === index ? (
                          <X size={18} />
                        ) : (
                          <Plus size={18} />
                        )}
                      </span>
                    </div>

                    {/* Collapsible Content with smooth animation */}
                    <motion.div
                      animate={{
                        maxHeight: openIndex === index ? 500 : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-4"
                    >
                      {item.content && (
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.content}
                        </p>
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </FadeInSection>

      {/* JOURNEY SECTION */}
      <FadeInSection delay={0.2}>
        <div className="text-white px-4 sm:px-8 lg:px-24 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center lg:px-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-extrabold mb-2 mt-10">
                <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-gray-300 text-[18px]">
                Built on Vision. Driven by Impact.
              </p>
              <div className="mt-10">
                <h3 className="text-[24px] font-semibold mb-2">
                  <span className="text-white font-bold">2022 :</span> Expanding
                  Capabilities
                </h3>
                <p className="text-gray-400 text-[16px] leading-relaxed max-w-xl">
                  This year marked a significant phase of growth and
                  diversification. HPIT broadened its portfolio to include
                  services in cybersecurity, cloud transformation, data
                  analytics, and enterprise IT modernization. We formalized
                  internal processes, upgraded our infrastructure, and onboarded
                  subject matter experts to meet growing client demands. Our
                  reach extended across multiple states, and we implemented
                  large-scale digital transformation projects with national
                  relevance.
                </p>
              </div>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-stretch gap-4"
            >
              <div className="relative rounded overflow-hidden mb-8">
                <img
                  src={journey1}
                  alt="2021"
                  className="w-[595px] h-40 object-cover rounded mx-auto"
                />
                <div className="absolute bottom-4 left-12 text-white">
                  <h4 className="text-md font-bold">2023</h4>
                  <p className="text-sm font-semibold">
                    Building Trust, Winning Confidence
                  </p>
                </div>
              </div>
              <div className="relative rounded overflow-hidden">
                <img
                  src={journey2}
                  alt="2022"
                  className="w-[595px] h-80 object-cover rounded ring-2 ring-purple-400"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">2022</h4>
                  <p className="text-base font-semibold">
                    Expanding Capabilities
                  </p>
                </div>
              </div>
              <div className="relative rounded overflow-hidden mt-8">
                <img
                  src={journey3}
                  alt="2023"
                  className="w-[595px] h-40 object-cover rounded mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </FadeInSection>

      {/* STEPS SECTION */}
      <FadeInSection delay={0.25}>
        <div className="relative text-white px-4 sm:px-6 lg:px-20 py-16">
          <div className="max-w-5xl text-left mb-16 ml-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
                A world-class experience that's easy to use & focused on
                success.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-10 text-center">
            {[
              {
                number: "01/",
                title: "Discover & Understand",
                desc: "We understand your goals, challenges, and mission needs.",
              },
              {
                number: "02/",
                title: "Design Tailored Solutions",
                desc: "We create tailored, secure, and scalable technology solutions.",
              },
              {
                number: "03/",
                title: "Deliver with Precision",
                desc: "We implement with precision, speed, and collaboration.",
              },
              {
                number: "04/",
                title: "Support & Evolve",
                desc: "We support, adapt, and grow solutions as your needs change.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative px-2"
              >
                <div className="text-5xl font-bold mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-base text-gray-300">{step.desc}</p>
                {i !== 3 && (
                  <div className="hidden lg:block absolute right-[-45px] top-[80%] transform -translate-y-1/2">
                    <img src={arrow} alt="arrow" className="w-[48px] h-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* CARDS SECTION */}
      <FadeInSection delay={0.3}>
        <div className="px-4 sm:px-8 lg:px-20 py-16 text-white">
          <div className="max-w-4xl ml-0 text-left mb-16 ml-10">
            <h2 className="text-4xl sm:text-[64px] font-extrabold leading-tight mb-4">
              <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#8076F4_0%,_#FFFFFF_22.15%)] text-transparent bg-clip-text">
                Everything from AI to XYZ
              </span>
            </h2>
            <p className="text-gray-300 text-[24px] sm:text-lg">
              We deliver secure IT consulting, digital transformation, and data
              solutions empowering organizations to modernize, perform, and grow
              with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {[
              {
                icon: g2m,
                title: "Emerging Technology",
                text: "We harness cutting-edge technologies like AI, cloud, and automation to drive innovation and future-ready solutions",
              },
              {
                icon: Group,
                title: "Business Strategy",
                text: "We align technology with mission goals offering strategic guidance that delivers measurable impact and long-term value",
              },
              {
                icon: frame,
                title: "Engineering & Integration",
                text: "We design, build, and seamlessly integrate secure, scalable systems that power critical operations and enhance performance",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`rounded-lg p-8 flex flex-col items-center text-center min-h-[320px] min-w-[320px] ${
                  i === 1
                    ? "bg-gradient-to-br from-purple-600 to-blue-500"
                    : "bg-[#1A1A1A]"
                }`}
              >
                <img src={card.icon} alt="icon" className="w-[36px] mb-6" />
                <h3 className="text-white font-semibold text-[20px] mb-3">
                  {card.title}
                </h3>
                <p
                  className={`text-[16px] ${i === 1 ? "text-white" : "text-gray-400"}`}
                >
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* TEAM SECTION */}
      <FadeInSection delay={0.35}>
        <div className="px-4 sm:px-6 lg:px-12 -mt-8">
          <div className="bg-[#0C0C0E] text-white py-20 rounded-xl">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 min-h-[600px]">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="self-center px-4"
              >
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                  Meet the{" "}
                  <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
                    Experts
                  </span>
                  <br />
                  Behind{" "}
                  <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
                    Our Solutions
                  </span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  With the full force of our team in your corner, you can
                  navigate rapid innovation with confidence, while protecting
                  the trust you’ve worked so hard to build.
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
                    {/* Arrow centered inside ellipse */}
                    <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                      <img src={narrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                    </span>
                  </div>
                </a>
              </motion.div>

              {/* Right Team Images */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6 px-4 relative"
              >
                <div className="flex flex-col gap-6">
                  <img
                    src={team1}
                    alt="Team 1"
                    className="rounded-lg object-cover w-full h-100 translate-y-[-46px]"
                  />
                  <img
                    src={team3}
                    alt="Team 2"
                    className="rounded-lg object-cover w-full h-100 translate-y-[-30px]"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <img
                    src={team2}
                    alt="Team 3"
                    className="rounded-lg object-cover w-full h-100 translate-y-[-2px]"
                  />
                  <img
                    src={team4}
                    alt="Team 4"
                    className="rounded-lg object-cover w-full h-100 translate-y-[2px]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="text-4xl sm:text-5xl font-extrabold leading-tight mb-12">
            <h1>
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
                Our network consists <br />
                of only the best.
              </span>
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-5 grid-rows-2 border-t border-l border-dashed border-white/30"
          >
            {[
              "wework",
              "amazon",
              "uber",
              "wework",
              "amazon",
              "amazon",
              "uber",
              "wework",
              "amazon",
              "uber",
            ].map((company, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-28 border-b border-r border-dashed border-white/30 text-2xl font-semibold capitalize"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </FadeInSection>
    </div>
  );
}
