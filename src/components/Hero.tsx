"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Check,
  Copy,
  FileDown,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal, socialLinks } = portfolioData;
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const developer = {
  name: "${personal.name}",
  role: "${personal.subtitle}",
  location: "${personal.location}",
  focus: ["Next.js", "TypeScript", "React", "Node.js"],
  status: "Open to opportunities"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const githubLink =
    socialLinks.find((l) => l.label === "GitHub")?.href ||
    "https://github.com/mahir-afshar";
  const linkedinLink =
    socialLinks.find((l) => l.label === "LinkedIn")?.href ||
    "https://www.linkedin.com/in/mahir-afshar-rohan/";

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
              <span className="text-zinc-600">•</span>
              <span className="inline-flex items-center gap-1 text-zinc-400">
                <MapPin className="w-3 h-3 text-zinc-400" />
                {personal.location}
              </span>
            </div>

            {/* Greeting & Identity */}
            <p className="text-sm font-semibold tracking-wide uppercase text-violet-400 mb-2">
              Hi, I am {personal.name}
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
              Building Ideas Into{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl font-medium text-zinc-300 mb-5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet-400 flex-shrink-0" />
              <span>{personal.subtitle}</span>
            </h2>

            {/* Authentic Intro Paragraph */}
            <p className="text-base text-zinc-400 leading-relaxed max-w-2xl mb-8">
              {personal.shortBio} I specialize in modern frontend engineering with Next.js, React, and TypeScript, backed by practical full-stack fundamentals in Node.js and MongoDB.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-9">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-violet-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-white/10 hover:border-violet-500/30 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </button>

              <a
                href="/Mahir-Afshar-Rohan-Resume.pdf"
                download="Mahir-Afshar-Rohan-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 hover:text-white font-medium text-sm border border-violet-500/30 hover:border-violet-500/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label="Download Mahir Afshar Rohan Resume (PDF)"
              >
                <FileDown className="w-4 h-4 text-violet-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-xs text-zinc-400">
              <span className="font-medium text-zinc-500 uppercase tracking-wider">Connect:</span>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={14} className="text-zinc-300" />
                <span>GitHub</span>
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={14} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dedicated Portrait & Code Card Details */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Dedicated Portrait Area with Graceful Placeholder */}
            <div className="relative group w-full max-w-[340px]">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-lg transition duration-500" />

              <div className="relative rounded-2xl bg-[#0e0f17] border border-white/10 p-6 shadow-2xl flex flex-col items-center text-center">
                {/* Portrait Container */}
                <div className="relative w-44 h-44 mb-5 flex items-center justify-center">
                  {/* Purple Glow */}
                  <div className="absolute inset-2 rounded-full bg-violet-600/25 blur-xl pointer-events-none" />

                  {/* Dashed Accent Ring */}
                  <svg
                    className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <linearGradient id="heroAccentRing" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="50%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="50"
                      cy="50"
                      r="47"
                      fill="none"
                      stroke="url(#heroAccentRing)"
                      strokeWidth="2"
                      strokeDasharray="6 3.5"
                      opacity="0.85"
                    />
                  </svg>

                  {/* Circular Crop with Purple Border */}
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-violet-500/60 shadow-xl bg-zinc-900">
                    <Image
                      src="/mahir.png"
                      alt="Mahir Afshar Rohan Portrait"
                      fill
                      sizes="160px"
                      priority
                      className="object-cover object-center [object-position:center_20%]"
                    />
                  </div>

                  {/* Green Availability Indicator */}
                  <div
                    className="absolute bottom-1 right-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#0e0f17] border-2 border-[#1f1a3a] shadow-md z-10"
                    title="Available for opportunities"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                  </div>
                </div>

                {/* Identity Tag */}
                <h3 className="text-base font-bold text-white tracking-tight">
                  Mahir Afshar Rohan
                </h3>
                <p className="text-xs text-violet-400 font-medium mt-0.5">
                  Aspiring Full-Stack Developer
                </p>
                <p className="text-[11px] text-zinc-400 mt-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  {personal.location}
                </p>

                {/* Quick Stats Pill */}
                <div className="mt-4 pt-4 border-t border-white/[0.06] w-full grid grid-cols-2 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-zinc-900/60 border border-white/[0.04]">
                    <span className="block text-xs font-semibold text-zinc-200">Focused On</span>
                    <span className="text-[11px] text-violet-400 font-mono">Next.js &amp; TS</span>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-900/60 border border-white/[0.04]">
                    <span className="block text-xs font-semibold text-zinc-200">Philosophy</span>
                    <span className="text-[11px] text-indigo-400">Build to Learn</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Attractive Code-Inspired Decorative Details */}
            <div className="w-full max-w-[340px] mt-4 rounded-xl bg-[#090a10] border border-zinc-800/80 shadow-lg overflow-hidden font-mono text-[11px]">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-zinc-900/70 border-b border-zinc-800/80">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-violet-400" />
                  <span className="text-zinc-400 text-[10px]">developer.ts</span>
                </div>
                <button
                  type="button"
                  onClick={copyCode}
                  className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-zinc-200 transition-colors"
                  title="Copy snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-3 text-zinc-300 leading-relaxed overflow-x-auto">
                <p>
                  <span className="text-violet-400">const</span> <span className="text-blue-300">developer</span> = &#123;
                </p>
                <p className="pl-3">
                  <span className="text-zinc-400">name:</span> <span className="text-emerald-300">&quot;{personal.name}&quot;</span>,
                </p>
                <p className="pl-3">
                  <span className="text-zinc-400">role:</span> <span className="text-emerald-300">&quot;Full-Stack Dev&quot;</span>,
                </p>
                <p className="pl-3">
                  <span className="text-zinc-400">learningBy:</span> <span className="text-amber-300">&quot;Building Projects&quot;</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
