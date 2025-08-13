import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        {/* Dark overlay so it looks same in light/dark mode */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content */}
        <h1 className="relative z-10 text-white font-roboto text-4xl md:text-6xl">
          CONTACT US
        </h1>
      </section>

      {/* Get in Touch */}
      <section className="w-full px-6 py-16 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Intro */}
          <div>
            <h2 className="text-[#00E0FF] text-3xl md:text-4xl font-bold mb-4 tracking-wide drop-shadow-[0_0_8px_#00E0FF]">
              GET IN TOUCH
            </h2>
            <p className="text-gray-800 dark:text-white text-lg leading-relaxed">
              Ready to transform your{" "}
              <span className="text-[#FF4C4C] font-semibold">AI Infrastructure</span>?
              We’re here to help you build the future of intelligent computing.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-[#00E0FF] text-3xl md:text-4xl font-bold mb-4 tracking-wide drop-shadow-[0_0_8px_#00E0FF]">
              CONTACT INFORMATION
            </h2>
            <p className="text-gray-800 dark:text-white text-lg leading-relaxed">
              <span className="text-[#FF4C4C] font-semibold">General Inquiries</span> <br />
              Email: <span className="text-[#00E0FF]">kineton.technologies@gmail.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="w-full min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center px-6 transition-colors duration-300">
        <h2 className="font-roboto text-[#00E0FF] text-3xl md:text-4xl font-bold mb-12 text-center">
          AREAS OF INTEREST
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Card Template */}
          {[
            {
              title: "EARLY ACCESS PROGRAM",
              desc: "Get early access to our edge computing development tools.",
            },
            {
              title: "OEM INTEGRATION",
              desc: "Custom solutions for robotics, XR, and edge AI deployments.",
            },
            {
              title: "PARTNERSHIP OPPORTUNITY",
              desc: "Collaborate with us on cutting-edge AI solutions.",
            },
            {
              title: "INVESTMENT & MEDIA",
              desc: "Press inquiries and investment proposals.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f0f4ff] dark:bg-[#061137] text-gray-800 dark:text-white rounded-lg p-6 shadow-lg transition-colors duration-300"
            >
              <h3 className="font-roboto text-lg font-bold mb-2">{item.title}</h3>
              <p className="font-figtree text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full min-h-screen bg-white dark:bg-black flex items-center justify-center px-6 transition-colors duration-300">
        <div className="w-full max-w-6xl">
          <h2 className="text-left font-roboto text-[#00E0FF] text-4xl md:text-5xl font-bold mb-12 tracking-wide drop-shadow-[0_0_10px_#00E0FF]">
            REACH OUT TO US
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div>
              <label className="block text-gray-800 dark:text-white font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 dark:bg-[#1A1A1A] text-gray-800 dark:text-white placeholder-gray-500 p-4 rounded-lg border border-transparent focus:outline-none focus:border-[#00E0FF] focus:ring-1 focus:ring-[#00E0FF] transition-colors duration-300"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="block text-gray-800 dark:text-white font-medium mb-2">
                Designation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 dark:bg-[#1A1A1A] text-gray-800 dark:text-white placeholder-gray-500 p-4 rounded-lg border border-transparent focus:outline-none focus:border-[#00E0FF] focus:ring-1 focus:ring-[#00E0FF] transition-colors duration-300"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-gray-800 dark:text-white font-medium mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 dark:bg-[#1A1A1A] text-gray-800 dark:text-white placeholder-gray-500 p-4 rounded-lg border border-transparent focus:outline-none focus:border-[#00E0FF] focus:ring-1 focus:ring-[#00E0FF] transition-colors duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-800 dark:text-white font-medium mb-2">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full bg-gray-100 dark:bg-[#1A1A1A] text-gray-800 dark:text-white placeholder-gray-500 p-4 rounded-lg border border-transparent focus:outline-none focus:border-[#00E0FF] focus:ring-1 focus:ring-[#00E0FF] transition-colors duration-300"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-800 dark:text-white font-medium mb-2">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full bg-gray-100 dark:bg-[#1A1A1A] text-gray-800 dark:text-white placeholder-gray-500 p-4 rounded-lg border border-transparent focus:outline-none focus:border-[#00E0FF] focus:ring-1 focus:ring-[#00E0FF] transition-colors duration-300"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] text-black font-bold py-3 px-8 rounded-lg shadow-[0_0_15px_#00E0FF] hover:scale-105 transition-transform duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
