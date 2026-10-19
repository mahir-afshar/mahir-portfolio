import React from "react";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "@/data/portfolio";
import { Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3 mb-2 flex items-center gap-3">
              <span>Featured Projects</span>
              <Sparkles className="w-5 h-5 text-violet-400" />
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Real projects built to practice modern frontend and full-stack development. Every project links directly to verifiable source repositories.
            </p>
          </div>

          <div>
            <a
              href="https://github.com/mahir-afshar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 transition-colors"
            >
              <GithubIcon size={16} className="text-violet-400" />
              <span>Explore GitHub Repositories</span>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
