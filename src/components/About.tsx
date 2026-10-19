import React from "react";
import { Compass, Hammer, Target, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: Hammer,
      title: "Learning by Building",
      description:
        "I believe the fastest way to understand complex concepts is by constructing real projects from the ground up, troubleshooting bugs, and refining implementations.",
    },
    {
      icon: Target,
      title: "Professional Aspiring Goal",
      description:
        "My clear ambition is to transition into a full-time Full-Stack Developer role, contributing disciplined code, positive team energy, and a hunger to grow.",
    },
    {
      icon: Compass,
      title: "Clean & Modern Standards",
      description:
        "Prioritizing semantic HTML, accessible UI structures, and typed codebases to make applications scalable, readable, and easy to maintain.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description:
        "Staying curious about modern toolchains, web standards, and evolving best practices across the JavaScript and TypeScript ecosystems.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3 mb-4">
            Curious by Nature,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Driven by Building
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            An authentic look into my developer path, mindset, and what fuels my dedication to full-stack engineering.
          </p>
        </div>

        {/* Narrative & Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative text (Left column) */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 leading-relaxed text-sm sm:text-base">
            {personal.aboutText.map((paragraph, index) => (
              <p
                key={index}
                className="p-5 rounded-2xl bg-zinc-900/40 border border-white/[0.06] backdrop-blur-sm hover:border-violet-500/20 transition-colors"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pillars & Values (Right column) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0f1019] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3.5 group-hover:scale-105 group-hover:bg-violet-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-violet-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
