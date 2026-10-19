export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  repoUrl?: string | null;
  liveUrl?: string | null;
  image?: string;
  isPlaceholderUrl?: boolean;
  status?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  iconName: "Code" | "Palette" | "Boxes" | "Wrench" | "Server";
  skills: {
    name: string;
    levelNote?: string;
  }[];
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: "Github" | "Linkedin" | "Mail";
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    location: string;
    email: string;
    shortBio: string;
    aboutText: string[];
    statusBadge: string;
  };
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  projects: Project[];
}
