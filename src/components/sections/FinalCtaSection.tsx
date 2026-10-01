import React, { useState } from 'react';
import {
  Wrench,
  Github,
  Mail,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Copy,
  Layers,
} from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';

interface FinalCtaSectionProps {
  onExploreClick?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onExploreClick,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(APP_CONFIG.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider bg-blue-950/60 border border-blue-800/60 px-3.5 py-1.5 rounded-full">
          <Wrench className="w-3.5 h-3.5" />
          <span>Mobility Engineering & Portfolio</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          style={{ textWrap: 'balance' }}
        >
          Building the Future of Roadside Assistance
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          RoadSideFix demonstrates how modern real-time spatial technologies transform automotive breakdown emergencies into seamless, predictable, and fair digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* GitHub Button - only shown if APP_CONFIG.githubUrl is provided */}
          {APP_CONFIG.githubUrl && (
            <a
              href={APP_CONFIG.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all shadow-md active:scale-95"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub</span>
            </a>
          )}

          {/* Explore Project Button */}
          <a
            href="#interactive-demo"
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/25 active:scale-95"
          >
            <Layers className="w-4 h-4" />
            <span>Explore Architecture</span>
          </a>

          {/* Contact Developer Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>Contact Developer</span>
              </>
            )}
          </button>
        </div>

        {/* Developer / Project Attribution */}
        <div className="pt-8 text-xs text-slate-500 flex items-center justify-center gap-2">
          <span>Created for demonstration & technical portfolio</span>
          <span>·</span>
          <span>{APP_CONFIG.developerRole}</span>
        </div>
      </div>
    </section>
  );
};
