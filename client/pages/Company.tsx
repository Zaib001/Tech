export default function Company() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F5420a7312f884a4589ac955d6d893e26%2F313b6a0749854e93ace15e1b98a9211f?format=webp&width=800')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-2">
              Company
            </h1>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Overview
            </h2>
            <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
              At HIPT, we specialize in delivering customized technology and
              consulting services that help government and private sector
              organizations modernize, optimize, and grow with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
