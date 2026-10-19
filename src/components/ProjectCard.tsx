import React from "react";
import Image from "next/image";
import { ExternalLink, Clock, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    subtitle,
    description,
    tags,
    repoUrl,
    liveUrl,
    image,
    status,
    isPlaceholderUrl,
  } = project;

  return (
    <article className="group rounded-2xl bg-[#0e0f17] border border-white/[0.08] hover:border-violet-500/35 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-violet-950/20 hover:-translate-y-1">
      {/* Visual Preview Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-white/[0.06]">
        {image ? (
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600 font-mono text-xs">
            Preview Graphic Coming Soon
          </div>
        )}

        {/* Status Badge overlay */}
        {status && (
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md shadow-md border ${
                liveUrl
                  ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/30"
                  : isPlaceholderUrl
                  ? "bg-amber-950/80 text-amber-300 border-amber-500/30"
                  : "bg-violet-950/80 text-violet-300 border-violet-500/30"
              }`}
            >
              {liveUrl ? (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              ) : isPlaceholderUrl ? (
                <Clock className="w-3 h-3 text-amber-400" />
              ) : (
                <FolderGit2 className="w-3 h-3 text-violet-400" />
              )}
              <span>{status}</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtitle */}
          <p className="text-xs font-semibold text-violet-400 tracking-wide uppercase mb-1">
            {subtitle}
          </p>

          {/* Title */}
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors mb-3">
            {title}
          </h3>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            {description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-900/90 text-zinc-300 border border-white/[0.06] hover:border-violet-500/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions / Links */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
          {/* GitHub / Repo link */}
          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.06] transition-colors"
              aria-label={`View ${title} repository on GitHub`}
            >
              <GithubIcon size={14} className="text-zinc-300" />
              <span>Source Code</span>
            </a>
          ) : (
            <div
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 px-3 py-2 rounded-lg bg-zinc-900/50 border border-dashed border-zinc-800 cursor-not-allowed"
              title="Repository link to be confirmed by Mahir"
            >
              <GithubIcon size={14} className="text-zinc-600" />
              <span>Repo Pending</span>
            </div>
          )}

          {/* Optional Live Demo Link */}
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white px-3.5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-600/20 transition-all hover:scale-105"
              aria-label={`Open live demo of ${title}`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : isPlaceholderUrl ? (
            <span
              className="text-[11px] text-amber-400/90 font-medium px-2 py-1 bg-amber-950/30 rounded border border-amber-500/20"
              title="Links will be updated as soon as repository and demo URLs are confirmed"
            >
              URLs To Be Confirmed
            </span>
          ) : (
            <span className="text-[11px] text-zinc-500 italic">
              Live Demo: N/A
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
