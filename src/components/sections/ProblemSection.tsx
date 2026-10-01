import React from 'react';
import {
  ShieldAlert,
  Clock,
  MapPinOff,
  Compass,
  HelpCircle,
  Banknote,
  AlertTriangle,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { PROBLEMS } from '../../data/mockData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-rose-400" />,
  Clock: <Clock className="w-5 h-5 text-amber-400" />,
  MapPinOff: <MapPinOff className="w-5 h-5 text-indigo-400" />,
  Compass: <Compass className="w-5 h-5 text-cyan-400" />,
  HelpCircle: <HelpCircle className="w-5 h-5 text-purple-400" />,
  ReceiptOff: <Banknote className="w-5 h-5 text-emerald-400" />,
};


export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="The Roadside Crisis"
          title="Breaking Down on the Road Shouldn't Mean Being Stranded."
          description="Traditional roadside assistance relies on outdated dispatch call-centers, opaque waiting hours, and guesswork. Motorists and mobile mechanics both suffer from the lack of a modern, location-aware digital connection."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {iconMap[problem.icon] || <AlertTriangle className="w-5 h-5 text-blue-400" />}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span className="font-medium text-slate-300">Impact:</span>
                <span>{problem.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
