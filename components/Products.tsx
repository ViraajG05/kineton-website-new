"use client";

import React, { useEffect, useRef } from "react";
import Squares from "./Squares/Squares";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../app/fonts.css";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const veoTitleRef = useRef(null);
  const fabricTitleRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Typing animation with GSAP
      const typeText = (element, text) => {
        if (!element) return;
        element.innerHTML = "";
        const chars = text.split("");
        chars.forEach((char, i) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.opacity = "0";
          element.appendChild(span);

          gsap.to(span, {
            opacity: 1,
            delay: i * 0.08,
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

      // Horizontal scroll animation
      const sections = gsap.utils.toArray(".horizontal-section");
      const totalWidth = sections.length * window.innerWidth;

      const horizontalAnim = gsap.to(horizontalRef.current, {
        x: -1 * (totalWidth - window.innerWidth),
        ease: "none",
        duration: 1,
      });

      ScrollTrigger.create({
        id: "horizontalScroll",
        animation: horizontalAnim,
        trigger: horizontalRef.current,
        start: "top top",
        end: `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
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
    <div className="relative z-0 text-white bg-black overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#444"
          hoverFillColor="#111"
        />
      </div>

      <div ref={horizontalRef} className="flex w-[200vw] horizontal-scroll">
        {/* Veo Core Section */}
        <section className="horizontal-section w-screen min-h-screen flex flex-col justify-center px-12">
          <div className="w-full max-w-3xl">
            <h1
              ref={veoTitleRef}
              className="text-6xl sm:text-8xl font-extrabold text-cyan-400 roboto mb-6 text-left"
            ></h1>
          </div>

          <div className="max-w-3xl mt-8 space-y-8 text-left">
            <p className="figtree text-gray-300 text-xl sm:text-2xl font-bold leading-relaxed">
              Purpose-built semiconductor IP cores delivering ultra-efficient AI and ML computation at the edge.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-200 figtree text-lg sm:text-xl font-semibold">
              <li>Advanced architecture for AI inference</li>
              <li>Optimized for edge computing</li>
              <li>Built-in hardware acceleration</li>
            </ul>
          </div>
        </section>

        {/* Fabric Section */}
        <section className="horizontal-section w-screen min-h-screen flex flex-col justify-center px-12">
          <div className="w-full max-w-3xl">
            <h1
              ref={fabricTitleRef}
              className="text-6xl sm:text-8xl font-extrabold text-cyan-400 roboto mb-6 text-left"
            ></h1>
          </div>

          <div className="max-w-3xl mt-8 space-y-8 text-left">
            <p className="figtree text-gray-300 text-xl sm:text-2xl font-bold leading-relaxed">
              Fabric orchestrates real-time, peer-to-peer coordination across agents, devices, and networks.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-200 figtree text-lg sm:text-xl font-semibold">
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
  );
};

export default Products;
