"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import TextType from "@/ui-components/TextType/TextType";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[100vh] overflow-hidden flex items-center justify-center bg-black">

      {/* Gradient Background */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#a68c2d] via-[#000000] to-[#004aad]">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm pointer-events-none" />
      </div> */}

      {/* Bg */}
      {/* <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[position:50%_20%]"
        style={{ backgroundImage: "url('/solutionsBg.png')" }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm pointer-events-none" />
      </div> */}

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-0 bg-cover  bg-[position_60%_center] bg-no-repeat"
        style={{ backgroundImage: "url('/solutionsBg2.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#a68c2d]/60 via-black/50 to-[#004aad]/60" />
        {/* <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm pointer-events-none" /> */}
      </div>

      {/* Hero Content*/}
      <section className="relative top-2 z-20 px-6 sm:px-12 py-20 w-full max-w-4xl text-center flex flex-col gap-14 font">
        <div className="top-32">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text leading-tight font-primary">
            Pioneering Intelligent

          </h1>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text leading-tight font-primary">
            AI Infrastructure
          </h1>
        </div>

        <div className="text-xl sm:text-2xl font-small leading-relaxed text-center text-text font-secondary">
          Built for {" "}
          <TextType
            text={["Scalability", "Speed", "Adaptability"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
          />
        </div>

        <p className="text-base sm:text-lg text-text font-medium leading-loose max-w-3xl mx-auto font-secondary">
          At Kineton, we empower organizations to deploy intelligent compute—seamlessly spanning devices, environments, and workloads. Unlock efficiency, reliability, and a new standard in AI execution.
        </p>

        <a href="#explore"
          className="mx-auto mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-white font-semibold backdrop-blur-md bg-white/10 border border-white/20 hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Explore Our Solutions
          <Icon icon="tabler:arrow-narrow-down" className="text-xl" />
        </a>
      </section>
    </div>
  );
}
