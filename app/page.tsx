import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />

      {/* Hero Section */}
      <section id="home" className="top-28 relative overflow-hidden bg-white dark:bg-black min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 -top-20 h-screen flex justify-center items-center w-full pointer-events-none z-0">
          <Image
            src="/bgimg.png"
            alt="Background"
            width={800}
            height={600}
            className="object-cover h-full w-full opacity-90"
            style={{ objectPosition: 'center center' }}
            priority
          />
        </div>
        
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
          <div className="flex flex-col items-center justify-start min-h-[calc(100vh-8rem)] pt-8">
            {/* Centered Text Content */}
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black dark:text-white mb-4 sm:mb-6 leading-tight">
                INTELLIGENT
                <span className="text-blue-600 dark:text-blue-400"> COMPUTING</span><br />
                INFRASTRUCTURE
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                POWERING AI FROM FRAGMENTED HARDWARE TO FLUID INTELLIGENCE
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 sm:mb-12 tracking-wider text-blue-900 dark:bg-gradient-to-r dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 dark:bg-clip-text dark:text-transparent drop-shadow-[0_0_15px_rgba(37,99,235,0.3)] dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              About Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 relative">
            {/* Vertical Lines */}
            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-yellow-400 transform -translate-x-1/2"></div>
            <div className="hidden md:block absolute right-1/3 top-0 bottom-0 w-px bg-yellow-400 transform translate-x-1/2"></div>
            
            {/* Our Vision */}
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Image
                  src="/ourvision.png"
                  alt="Our Vision"
                  width={128}
                  height={128}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-left leading-relaxed">
                We envision a world where any device can be instantly intelligent. Kineton ensures seamless interaction and integration between hardware and intelligence—enabling AI to run anywhere, instantly.
              </p>
            </div>
            
            {/* Our Mission */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Image
                  src="/our mission.png"
                  alt="Our Mission"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-left leading-relaxed">
                We bridge the gap between fragmented hardware and scalable AI, creating intelligent infrastructure powering the next generation of autonomous robotics, drones, XR, wearables, and edge devices.
              </p>
            </div>
            
            {/* Our Approach */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Image
                  src="/ourapproach.png"
                  alt="Our Approach"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white mb-3 sm:mb-4">Our Approach</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-left leading-relaxed">
                AI rests on four pillars: Data, Architecture, Infrastructure, Energy. While the focus remains on data and architecture, Kineton builds infrastructure to run, adapt, and scale intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/aivid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 sm:mb-12 tracking-wider bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              OUR CUSTOMERS
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* AI-First Product Companies */}
            <div className="bg-blue-900/40 backdrop-blur-md p-6 sm:p-8 rounded-lg border border-blue-400/30">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">AI-First Product Companies</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Companies where AI is the core of their product—not just a feature. They need infrastructure that natively understands AI from runtime to orchestration.
              </p>
            </div>
            
            {/* Original Equipment Manufacturers (OEMs) */}
            <div className="bg-blue-900/40 backdrop-blur-md p-6 sm:p-8 rounded-lg border border-blue-400/30">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">Original Equipment Manufacturers (OEMs)</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Companies building smart, autonomous systems—drones, vehicles, robots—where everything runs in constrained, connected, real-world environments.
              </p>
            </div>
            
            {/* System Integrators and Computing Centers */}
            <div className="bg-blue-900/40 backdrop-blur-md p-6 sm:p-8 rounded-lg border border-blue-400/30 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">System Integrators and Computing Centers</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Organizations that design and deploy intelligent compute infrastructure for enterprises across cloud, on-premises, and edge environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kineton Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 sm:mb-12 tracking-wider text-blue-900 dark:bg-gradient-to-r dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 dark:bg-clip-text dark:text-transparent drop-shadow-[0_0_15px_rgba(37,99,235,0.3)] dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              WHY KINETON ?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 items-center">
            {/* Less Bulk, More Intelligence */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-white mb-6 sm:mb-8">Less Bulk, More Intelligence</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                While the world builds AI systems that deploy everything—bloated models, generic infrastructure, full cloud stacks—chasing generalization, we focus only on what's needed for execution, precision, and control.
              </p>
            </div>
            
            {/* Cube Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                <Image
                  src="/cube.png"
                  alt="3D Cube"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* AI Image */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                <Image
                  src="/ai.png"
                  alt="AI Technology"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* AI is Foundational */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-white mb-6 sm:mb-8">AI is Foundational, Infrastructure is the Bottleneck</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                AI rests on four core pillars: Data, Architecture, Infrastructure, Energy. While the world focuses on architecture and data, the real bottleneck lies in the execution layer. Kineton builds infrastructure that builds, runs, adapts, and scales intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left Side - Heading */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-900 dark:text-white mb-6 sm:mb-8">
                What makes us different?
              </h2>
            </div>

            {/* Right Side - Features List */}
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Vertically Integrated Stack",
                  description: "From semiconductor cores to orchestration—everything designed to work together"
                },
                {
                  title: "AI-Native by Design",
                  description: "Built specifically for intelligent workloads, not adapted from legacy systems"
                },
                {
                  title: "Edge-Ready Performance",
                  description: "Low-latency, power-efficient operation where it matters most"
                },
                {
                  title: "Real-Time Orchestration",
                  description: "Dynamic coordination across cloud, edge, and swarm environments"
                },
                {
                  title: "Future-Proof Architecture",
                  description: "Ready for the next generation of autonomous and agentic systems"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1">
                    <div className="w-full h-full bg-blue-600 dark:bg-blue-400 transform rotate-45" style={{ boxShadow: '0 0 10px #2563EB' }}></div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-white mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}