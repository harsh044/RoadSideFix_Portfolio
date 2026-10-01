import React from 'react';
import { Wrench, Github, Mail, ExternalLink } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                RoadSide<span className="text-blue-400">Fix</span>
              </span>
            </div>
            <p className="text-base text-slate-300 font-medium max-w-md">
              {APP_CONFIG.tagline}
            </p>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              An on-demand mobile vehicle repair and emergency assistance platform architecture connecting stranded motorists with nearby certified mechanics using PostGIS spatial intelligence, real-time WebSockets, and secure digital settlements.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <span>Full-Stack Architecture</span>
              <span aria-hidden="true">·</span>
              <span>FastAPI & Flutter</span>
              <span aria-hidden="true">·</span>
              <span>PostgreSQL / PostGIS</span>
            </div>
          </div>

          {/* Platform Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#customer-features" className="hover:text-blue-400 transition-colors">Driver Experience</a>
              </li>
              <li>
                <a href="#provider-features" className="hover:text-blue-400 transition-colors">Provider Workflow</a>
              </li>
              <li>
                <a href="#live-tracking" className="hover:text-blue-400 transition-colors">Live GPS Telemetry</a>
              </li>
              <li>
                <a href="#lifecycle" className="hover:text-blue-400 transition-colors">Request Lifecycle</a>
              </li>
              <li>
                <a href="#admin-preview" className="hover:text-blue-400 transition-colors">Admin Dashboard</a>
              </li>
            </ul>
          </div>

          {/* Engineering & Resources */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-wider mb-4">
              Architecture & Stack
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#architecture" className="hover:text-blue-400 transition-colors">System Architecture</a>
              </li>
              <li>
                <a href="#postgis" className="hover:text-blue-400 transition-colors">PostGIS Spatial Engine</a>
              </li>
              <li>
                <a href="#technology" className="hover:text-blue-400 transition-colors">Technology Stack</a>
              </li>
              <li>
                <a href="#payments" className="hover:text-blue-400 transition-colors">Payment Settlement</a>
              </li>
              <li>
                <a href="#security" className="hover:text-blue-400 transition-colors">Security & RBAC</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-blue-400 transition-colors">Engineering Roadmap</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© 2026 {APP_CONFIG.name}.</span>
            <span>Roadside emergency assistance software project & architectural portfolio.</span>
          </div>

          <div className="flex items-center gap-4">
            {APP_CONFIG.githubUrl && (
              <a
                href={APP_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            <a
              href={`mailto:${APP_CONFIG.contactEmail}`}
              className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="Contact Email"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
