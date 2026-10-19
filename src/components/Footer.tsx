"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal, socialLinks } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const githubLink =
    socialLinks.find((l) => l.label === "GitHub")?.href ||
    "https://github.com/mahir-afshar";
  const linkedinLink =
    socialLinks.find((l) => l.label === "LinkedIn")?.href ||
    "https://www.linkedin.com/in/mahir-afshar-rohan/";
  const mailLink = `mailto:${personal.email}`;

  return (
    <footer className="border-t border-white/[0.08] bg-[#08090e] py-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                MR
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md">
              Aspiring Full-Stack Developer. Turning creative ideas into fast, responsive, and accessible digital products.
            </p>
          </div>

          {/* Social Links & Back-to-Top */}
          <div className="flex items-center gap-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href={mailLink}
              className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
              aria-label="Email Mahir"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-violet-600/10 hover:bg-violet-600 text-violet-400 hover:text-white border border-violet-500/25 transition-all"
              aria-label="Scroll back to top"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row: Dynamic Year & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
          <p>© {currentYear} Mahir Afshar Rohan. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
            <span className="text-zinc-600">•</span>
            <span>{personal.location}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
