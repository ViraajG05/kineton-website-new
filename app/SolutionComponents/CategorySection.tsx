"use client";
import { motion } from "framer-motion";
import Card from "./Cards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

export default function CategorySection({
  section,
  subheading,
  cards,
}: {
  section: string;
  subheading: string;
  cards: { icon: string; title: string; desc: string }[];
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
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
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef}>
      <motion.section
        className="py-20 px-6 text-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-primary">{section}</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-secondary">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Card key={i} title={card.title} desc={card.desc} icon={card.icon} />
          ))}
        </div>
      </motion.section>
    </div>

  );
}
