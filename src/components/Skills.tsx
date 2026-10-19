import React from "react";
import {
  Code2,
  Palette,
  Boxes,
  Server,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code2 className="w-5 h-5 text-violet-400" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-indigo-400" />;
      case "Boxes":
        return <Boxes className="w-5 h-5 text-purple-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-violet-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-sky-400" />;
      default:
        return <Code2 className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
            Technical Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3 mb-4">
            Working Technology Stack
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Technologies I use to build projects and continue growing as a developer.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-[#0e0f17] border border-white/[0.07] hover:border-violet-500/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-violet-950/20 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-[11px] text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="mt-5 space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04] hover:border-violet-500/20 hover:bg-zinc-900/90 transition-colors flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-zinc-200">
                          {skill.name}
                        </div>
                        {skill.levelNote && (
                          <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                            {skill.levelNote}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-zinc-400">
                <span>{category.skills.length} core technologies</span>
                <span className="text-violet-400 font-medium">In Active Use</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
