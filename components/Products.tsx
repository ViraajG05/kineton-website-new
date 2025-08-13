"use client";

import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsHero from "../app/ProductsComponents/ProductsHero";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
  const veoTitleRef = useRef<HTMLHeadingElement>(null);
  const fabricTitleRef = useRef<HTMLHeadingElement>(null);
  const veoDescRef = useRef<HTMLParagraphElement>(null);
  const fabricDescRef = useRef<HTMLParagraphElement>(null);
  const veoFeaturesRef = useRef<HTMLUListElement>(null);
  const fabricFeaturesRef = useRef<HTMLUListElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Typing animation for titles
      const typeText = (element: HTMLElement | null, text: string) => {
        if (!element) return;
        element.innerHTML = "";
        text.split("").forEach((char, i) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.opacity = "0";
          element.appendChild(span);
          gsap.to(span, {
            opacity: 1,
            delay: i * 0.07,
            duration: 0.05,
            ease: "power1.inOut",
          });
        });
      };

      ScrollTrigger.create({
        trigger: veoTitleRef.current,
        start: "top 80%",
        onEnter: () => typeText(veoTitleRef.current, "Veo Core"),
      });

      ScrollTrigger.create({
        trigger: fabricTitleRef.current,
        start: "top 80%",
        onEnter: () => typeText(fabricTitleRef.current, "Fabric"),
      });

      // Shiny text effect trigger
      const triggerShiny = (element: HTMLElement | null) => {
        if (!element) return;
        element.classList.add("shiny-text");
        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          onEnter: () => element.classList.remove("disabled"),
          onLeaveBack: () => element.classList.add("disabled"),
        });
      };

      triggerShiny(veoDescRef.current);
      triggerShiny(fabricDescRef.current);

      // Stack animation for features
      const animateFeatures = (list: HTMLUListElement | null) => {
        if (!list) return;
        const items = list.querySelectorAll("li");
        gsap.from(items, {
          opacity: 0,
          y: 50,
          rotateX: -90,
          transformOrigin: "top center",
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: list,
            start: "top 80%",
          },
        });
      };

      animateFeatures(veoFeaturesRef.current);
      animateFeatures(fabricFeaturesRef.current);

      // Horizontal scroll
      const sections = gsap.utils.toArray(".horizontal-section");
      const totalWidth = sections.length * window.innerWidth;

      gsap.to(horizontalRef.current, {
        x: -1 * (totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          end: `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      ScrollTrigger.refresh();
    }, horizontalRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <Header />
      <ProductsHero />

      {/* Horizontal Scroll Section */}
      <div
        className="bg-gradient-to-br from-[#0a0a0a] via-[#1a2b50] to-[#0a0a0a]"
        id="explore"
      >
        <div ref={horizontalRef} className="flex w-[200vw] horizontal-scroll">
          {/* Veo Core */}
          <section className="horizontal-section w-screen min-h-screen flex flex-col justify-center px-12">
            <div className="max-w-3xl">
              <h1
                ref={veoTitleRef}
                className="text-6xl sm:text-8xl font-extrabold text-white mb-6"
              ></h1>
              <p
                ref={veoDescRef}
                className="text-xl sm:text-2xl font-bold leading-relaxed disabled"
              >
                Purpose-built semiconductor IP cores delivering ultra-efficient
                AI and ML computation at the edge.
              </p>
              <ul
                ref={veoFeaturesRef}
                className="list-disc list-inside mt-6 space-y-3 text-gray-200 text-lg sm:text-xl font-semibold"
              >
                <li>Advanced architecture for AI inference</li>
                <li>Optimized for edge computing</li>
                <li>Built-in hardware acceleration</li>
              </ul>
            </div>
          </section>

          {/* Fabric */}
          <section className="horizontal-section w-screen min-h-screen flex flex-col justify-center px-12">
            <div className="max-w-3xl">
              <h1
                ref={fabricTitleRef}
                className="text-6xl sm:text-8xl font-extrabold text-white mb-6"
              ></h1>
              <p
                ref={fabricDescRef}
                className="text-xl sm:text-2xl font-bold leading-relaxed disabled"
              >
                Fabric orchestrates real-time, peer-to-peer coordination across
                agents, devices, and networks.
              </p>
              <ul
                ref={fabricFeaturesRef}
                className="list-disc list-inside mt-6 space-y-3 text-gray-200 text-lg sm:text-xl font-semibold"
              >
                <li>Distributed compute</li>
                <li>Globalized data flow</li>
                <li>Secure P2P coordination</li>
                <li>Dynamic resource allocation</li>
                <li>Veo integration</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
