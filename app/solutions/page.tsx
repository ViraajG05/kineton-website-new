"use client";
import Hero from "../SolutionComponents/SolutionsHero";
import CategorySection from "../SolutionComponents/CategorySection";
import { solutionsData } from "../SolutionData/solutionsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="bg-gradient-to-br from-[#0a0a0a] via-[#1a2b50] to-[#0a0a0a]" id="explore">
        {solutionsData.map((section, i) => (
          <CategorySection
            key={i}
            section={section.section}
            cards={section.cards}
          />
        ))}
      </div>
      <Footer />
    </main>

  );
}
