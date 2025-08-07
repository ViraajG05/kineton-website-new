"use client";
import { Icon } from "@iconify/react";
import SpotlightCard from "@/ui-components/SpotlightCard/SpotlightCard";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef}>
      <SpotlightCard
        className="
          group relative z-10
          bg-background
          text-text p-6 rounded-[10px] border-none outline-none
          flex flex-col justify-between items-start cursor-pointer
          overflow-hidden
          transition-all duration-300 ease-in-out
          transform hover:scale-[1.03] hover:-translate-y-1
          [box-shadow:4px_4px_8px_rgba(138,147,155,0.3)]
          min-h-[200px]   // Ensures uniform height
        "
        spotlightColor="rgba(250, 209, 43, 0.5)"
      >
        <div className="relative z-10 flex flex-col w-full h-full">
          <div className="flex items-center space-x-3 mb-4 w-full">
            <Icon icon={icon} className="text-4xl text-accent" />
            <h3 className="text-xl font-bold font-secondary text-text">{title}</h3>
          </div>
          <p className="mt-2 text-text/80 font-secondary">{desc}</p>
        </div>
      </SpotlightCard>
    </div>
  );
}
