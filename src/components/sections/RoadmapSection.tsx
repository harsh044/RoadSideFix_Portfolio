import React from 'react';
import { CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ROADMAP_PHASES } from '../../data/mockData';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Engineering Milestones"
          title="Product Evolution & Engineering Roadmap"
          description="A staged roadmap moving from core relational models and spatial indexing to real-time pub/sub telemetry, automated fintech settlement, and AI-assisted dispatch."
        />

        {/* Desktop Horizontal Scroll / Grid Layout & Mobile Vertical Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {ROADMAP_PHASES.map((phase, idx) => {
            const isDone = phase.status === 'Completed';
            const isInProgress = phase.status === 'In Progress';
            return (
              <div
                key={phase.phase}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
                  isInProgress
                    ? 'bg-slate-900 border-blue-500/80 shadow-lg shadow-blue-500/10'
                    : isDone
                    ? 'bg-slate-900/60 border-slate-800'
                    : 'bg-slate-900/30 border-slate-800/60 opacity-80'
                }`}
              >
                <div className="space-y-3">
                  {/* Status header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400">
                      {phase.phase}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        isDone
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : isInProgress
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 mb-3">
                      {phase.architectureFocus}
                    </p>
                  </div>

                  {/* Checklist items */}
                  <ul className="space-y-2 text-xs text-slate-300">
                    {phase.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        ) : isInProgress ? (
                          <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 mt-1.5" />
                        )}
                        <span className="leading-snug text-slate-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                  {phase.period}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
