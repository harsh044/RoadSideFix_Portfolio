export interface AppConfig {
  name: string;
  tagline: string;
  subTagline: string;
  description: string;
  githubUrl: string; // Configurable; if empty string, the button can be omitted or replaced with contact action
  demoAppUrl: string;
  contactEmail: string;
  developerName: string;
  developerRole: string;
  architectureType: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

export const APP_CONFIG: AppConfig = {
  name: "RoadSideFix",
  tagline: "Vehicle Trouble? Help Is On The Way.",
  subTagline: "Find nearby vehicle repair professionals and get roadside assistance wherever you are.",
  description: "RoadSideFix connects vehicle owners with nearby roadside repair professionals through location-aware service requests, live tracking, secure payments and a modern mobile platform.",
  // Configure GitHub URL here (e.g. "https://github.com/username/roadsidefix") or leave empty to hide link gracefully
  githubUrl: "https://github.com/hp1004032/roadsidefix-platform",
  demoAppUrl: "#interactive-demo",
  contactEmail: "hp1004032@gmail.com",
  developerName: "RoadSideFix Engineering Team",
  developerRole: "Full-Stack Mobility Architecture",
  architectureType: "FastAPI + PostGIS + Redis + Flutter",
  socials: {
    github: "https://github.com/hp1004032/roadsidefix-platform",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "hp1004032@gmail.com",
  },
};
