export default function ClientExperience() {
    return (
        <div className="bg-[#111418] text-white py-16 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Top Row: Heading and One Card Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
                    {/* Heading */}
                    <div style={{ marginLeft: "-40px" }}>
                        <h2 className="text-4xl md:text-4xl font-extrabold leading-tight mb-4">
                            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">Experiences</span> That<br />
                            Speak <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">Volumes</span>
                        </h2>
                        <p className="text-gray-400 text-2xl">
                            Our work is best explained by those who’ve experienced it firsthand.
                        </p>
                    </div>

                    {/* Single Card aligned to the right */}
                    <div className="bg-gradient-to-r from-[#252932] to-[#292933] p-6 rounded-lg h-60" style={{ marginRight: "-50px", marginLeft: "215px" }}>
                        <h3 className="font-semibold mb-1">Sarah W.</h3>
                        <p className="text-sm text-gray-400 mb-4">Product Manager, HealthTech Startup</p>
                        <p className="text-gray-300 text-sm italic" style={{ marginTop: "40px" }}>
                            HPIT truly understood our vision and delivered a sleek, high-performing application. Their team was responsive, reliable, and technically excellent from start to finish.
                        </p>
                    </div>
                </div>

                {/* Bottom Row: 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginRight: "-50px", marginLeft: "-40px" }}>
                    {/* Card 1 */}
                    <div className="bg-gradient-to-r from-[#252932] to-[#292933] p-6 rounded-lg h-60" >
                        <h3 className="font-semibold mb-1">Daniel R.</h3>
                        <p className="text-sm text-gray-400 mb-4">Head of Digital, Data Monetization Platform</p>
                        <p className="text-gray-300 text-sm italic" style={{ marginTop: "40px" }}>
                            We needed a secure and scalable solution, and HPIT delivered exactly that — ahead of schedule!
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gradient-to-r from-[#252932] to-[#292933] p-6 rounded-lg h-60" >
                        <h3 className="font-semibold mb-1">Priya M.</h3>
                        <p className="text-sm text-gray-400 mb-4">Co-founder, Lifestyle Platform</p>
                        <p className="text-gray-300 text-sm italic" style={{ marginTop: "40px" }}>
                            From UI design to backend scalability, HPIT nailed it. Our app performance and user retention significantly improved post-launch.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gradient-to-r from-[#252932] to-[#292933] p-6 rounded-lg h-60" >
                        <h3 className="font-semibold mb-1">James D.</h3>
                        <p className="text-sm text-gray-400 mb-4">CTO, Consumer App Company</p>
                        <p className="text-gray-300 text-sm italic" style={{ marginTop: "40px" }}>
                            The agile process and constant communication made all the difference. HPIT felt like an extension of our in-house team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}