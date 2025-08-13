"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

export default function Home() {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    elementsRef.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: index * 0.05, // slightly bigger stagger for smoother flow
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />

      {/* Hero Section */}
      <section
        ref={addToRefs}
        id="home"
        className="relative overflow-hidden bg-white dark:bg-black min-h-screen"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bgimg.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#a68c2d]/60 via-black/50 to-[#004aad]/60" />
        </div>

        <div className="top-28 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
          <div
            ref={addToRefs}
            className="flex flex-col items-center justify-start min-h-[calc(100vh-8rem)] pt-8"
          >
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-primary md:text-5xl lg:text-7xl font-bold text-black dark:text-white mb-4 sm:mb-6 leading-tight">
                INTELLIGENT
                <span className="text-blue-600 font-primary dark:text-blue-400">
                  {" "}
                  COMPUTING
                </span>
                <br />
                INFRASTRUCTURE
              </h1>
              <div className="relative top-16"><p className="text-base sm:text-lg md:text-xl font-secondary text-gray-800 dark:text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                POWERING AI FROM FRAGMENTED HARDWARE TO FLUID INTELLIGENCE
              </p></div>
              
              

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-primary md:text-4xl lg:text-6xl font-bold mb-8 sm:mb-12 tracking-wider text-blue-900 dark:bg-gradient-to-r dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 dark:bg-clip-text dark:text-transparent drop-shadow-[0_0_15px_rgba(37,99,235,0.3)] dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 relative z-10">
            {/* Vertical Lines */}
            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-yellow-400 transform -translate-x-1/2"></div>
            <div className="hidden md:block absolute right-1/3 top-0 bottom-0 w-px bg-yellow-400 transform translate-x-1/2"></div>
            {[
              {
                img: "/ourvision.png",
                title: "Our Vision",
                text: "We envision a world where any device can be instantly intelligent. Kineton ensures seamless interaction and integration between hardware and intelligence—enabling AI to run anywhere, instantly.",
              },
              {
                img: "/our mission.png",
                title: "Our Mission",
                text: "We bridge the gap between fragmented hardware and scalable AI, creating intelligent infrastructure powering the next generation of autonomous robotics, drones, XR, wearables, and edge devices.",
              },
              {
                img: "/ourapproach.png",
                title: "Our Approach",
                text: "AI rests on four pillars: Data, Architecture, Infrastructure, Energy. While the focus remains on data and architecture, Kineton builds infrastructure to run, adapt, and scale intelligence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={addToRefs}
                className="text-center relative z-10"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 font-primary dark:text-white mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-secondary dark:text-gray-300 text-left leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kineton Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-primary font-bold mb-8 sm:mb-12 tracking-wider text-blue-900 dark:bg-gradient-to-r dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 dark:bg-clip-text dark:text-transparent drop-shadow-[0_0_15px_rgba(37,99,235,0.3)] dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              Why Kineton ?
            </h2>
          </div>

          {[
            {
              title: "Less Bulk, More Intelligence",
              text: "While the world builds AI systems that deploy everything—bloated models, generic infrastructure, full cloud stacks—chasing generalization, we focus only on what's needed for execution, precision, and control.",
              img: "/cube.png",
              reverse: false,
            },
            {
              title: "AI is Foundational, Infrastructure is the Bottleneck",
              text: "AI rests on four core pillars: Data, Architecture, Infrastructure, Energy. While the world focuses on architecture and data, the real bottleneck lies in the execution layer. Kineton builds infrastructure that builds, runs, adapts, and scales intelligence.",
              img: "/ai.png",
              reverse: true,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 items-center ${item.reverse ? "" : "lg:order-first"}`}
            >
              <div
                ref={addToRefs}
                className={`${item.reverse ? "order-2 lg:order-1" : "order-2 lg:order-1"}`}
              >
                <h3 className="text-2xl sm:text-3xl font-primary font-bold text-blue-900 dark:text-white mb-6 sm:mb-8">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base font-secondary lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div
                ref={addToRefs}
                className={`flex justify-center ${item.reverse ? "" : "order-1 lg:order-2"}`}
              >
                <div className="relative w-48 h-48 sm:w-64 rounded-[10px] sm:h-64 lg:w-80 lg:h-80">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={320}
                    height={320}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div ref={addToRefs}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-primary lg:text-6xl font-bold text-text mb-6 sm:mb-8">
                What makes us different?
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Vertically Integrated Stack",
                  description:
                    "From semiconductor cores to orchestration—everything designed to work together",
                },
                {
                  title: "AI-Native by Design",
                  description:
                    "Built specifically for intelligent workloads, not adapted from legacy systems",
                },
                {
                  title: "Edge-Ready Performance",
                  description:
                    "Low-latency, power-efficient operation where it matters most",
                },
                {
                  title: "Real-Time Orchestration",
                  description:
                    "Dynamic coordination across cloud, edge, and swarm environments",
                },
                {
                  title: "Future-Proof Architecture",
                  description:
                    "Ready for the next generation of autonomous and agentic systems",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1">
                    <div
                      className="w-full h-full bg-blue-600 dark:bg-blue-400 transform rotate-45"
                      style={{ boxShadow: "0 0 10px #2563EB" }}
                    ></div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-primary font-semibold text-blue-900 dark:text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base font-secondary text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
