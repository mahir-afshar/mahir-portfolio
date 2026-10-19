"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal, socialLinks } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
    "Hello Mahir - Portfolio Inquiry"
  )}`;

  const githubLink =
    socialLinks.find((l) => l.label === "GitHub")?.href ||
    "https://github.com/mahir-afshar";
  const linkedinLink =
    socialLinks.find((l) => l.label === "LinkedIn")?.href ||
    "https://www.linkedin.com/in/mahir-afshar-rohan/";

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-zinc-950/60">
      {/* Decorative Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[450px] h-[250px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3 mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            I am actively seeking junior developer roles, internships, and collaborative software projects. Feel free to reach out directly.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="rounded-3xl bg-[#0e0f17] border border-white/[0.08] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle top border gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left side: Direct email callout */}
            <div className="md:col-span-7 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/15 border border-violet-500/25 flex items-center justify-center text-violet-400 mb-4">
                <Mail className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Direct Email Communication
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Direct mail is the fastest and most reliable way to reach me. Click below to launch your default mail client or copy the address.
              </p>

              {/* Email Address Display Pill */}
              <div className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-xl bg-zinc-900/90 border border-white/10 mb-6">
                <span className="font-mono text-sm text-violet-300 px-3 py-1 select-all break-all">
                  {personal.email}
                </span>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-violet-600/25 transition-all hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>
              </div>
            </div>

            {/* Right side: Professional Profile Links */}
            <div className="md:col-span-5 flex flex-col gap-3.5 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-400">
                Professional Profiles
              </span>

              {/* GitHub Link Card */}
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/[0.06] hover:border-violet-500/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-200 group-hover:text-white">
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs text-zinc-400">
                      @mahir-afshar
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 transition-colors" />
              </a>

              {/* LinkedIn Link Card */}
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/[0.06] hover:border-violet-500/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0077b5]/15 border border-[#0077b5]/30 flex items-center justify-center text-sky-400">
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-xs text-zinc-400">
                      in/mahir-afshar-rohan
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 transition-colors" />
              </a>

              {/* Authenticity Assurance */}
              <div className="mt-2 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-zinc-400 flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                <span>Verified links only • Direct mail ensures no missed messages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
