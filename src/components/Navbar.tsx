"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0c10]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Text-based personal logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg p-1"
            aria-label="Mahir Afshar Rohan Homepage"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-violet-500/30 shadow-sm group-hover:scale-105 transition-transform duration-200 flex-shrink-0 bg-zinc-900">
              <Image
                src="/mahir.png"
                alt="Mahir Afshar Rohan"
                fill
                sizes="32px"
                className="object-cover object-center [object-position:center_20%]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-violet-300 transition-colors">
                Mahir Afshar Rohan
              </span>
              <span className="text-[10px] text-zinc-400 tracking-wider uppercase font-medium">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-sm"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-violet-600 text-white shadow-sm shadow-violet-600/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="/Mahir-Afshar-Rohan-Resume.pdf"
              download="Mahir-Afshar-Rohan-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/70 hover:bg-zinc-800 border border-white/[0.08] hover:border-violet-500/35 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="Download Mahir Afshar Rohan Resume PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-violet-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-violet-300 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/25 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0d0e15]/95 backdrop-blur-xl px-4 pt-3 pb-5 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-white/[0.06] flex flex-col gap-2">
              <a
                href="/Mahir-Afshar-Rohan-Resume.pdf"
                download="Mahir-Afshar-Rohan-Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-violet-300 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/25 transition-colors"
                aria-label="Download Mahir Afshar Rohan Resume PDF"
              >
                <FileDown className="w-4 h-4 text-violet-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
