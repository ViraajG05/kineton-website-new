'use client';

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300 relative">
      <Header />

      {/* Hero Section */}
      <section
        ref={addToRefs}
        className="relative w-full h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#a68c2d]/60 via-black/50 to-[#004aad]/60" />
        {/* Dark overlay for consistent brightness */}
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 text-white font-roboto text-4xl md:text-6xl">
          Contact Us
        </h1>
      </section>

      {/* Get in Touch */}
      <motion.section
        ref={addToRefs}
        className="w-full px-6 py-16 transition-colors duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-[#00E0FF] text-3xl md:text-4xl font-primary font-bold mb-4 tracking-wide drop-shadow-[0_0_8px_#00E0FF]">
              GET IN TOUCH
            </h2>
            <p className="text-gray-800 dark:text-white text-lg font-secondary leading-relaxed">
              Ready to transform your{" "}
              <span className="text-[#FF4C4C] font-secondary font-semibold">AI Infrastructure</span>?
              We’re here to help you build the future of intelligent computing.
            </p>
          </div>

          <div>
            <h2 className="text-[#00E0FF] text-3xl md:text-4xl font-primary font-bold mb-4 tracking-wide drop-shadow-[0_0_8px_#00E0FF]">
              CONTACT INFORMATION
            </h2>
            <p className="text-gray-800 font-secondary dark:text-white text-lg leading-relaxed">
              <span className="text-[#FF4C4C] font-secondary font-semibold">General Inquiries</span> <br />
              Email: <span className="text-[#00E0FF]">kineton.technologies@gmail.com</span>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Areas of Interest */}
      <motion.section
        ref={addToRefs}
        className="w-full min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-roboto text-[#00E0FF] font-primary text-3xl md:text-4xl font-bold mb-12 text-center">
          AREAS OF INTEREST
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
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
              <h3 className="font-roboto text-lg font-secondary font-bold mb-2">{item.title}</h3>
              <p className="font-figtree font-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        ref={addToRefs}
        className="w-full min-h-screen flex items-center justify-center px-6 transition-colors duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-6xl">
          <h2 className="text-left font-roboto text-[#00E0FF] text-4xl md:text-5xl font-bold mb-12 tracking-wide drop-shadow-[0_0_10px_#00E0FF]">
            REACH OUT TO US
          </h2>

          <form className="grid grid-cols-1 font-secondary md:grid-cols-2 gap-8">
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
      </motion.section>

      <Footer />
    </main>
  );
}
