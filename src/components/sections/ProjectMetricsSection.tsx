import React from 'react';
import { Layers, Smartphone, RefreshCw, Users, Navigation, Zap } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { PROJECT_METRICS } from '../../data/mockData';

const metricIcons: Record<string, React.ReactNode> = {
  'API Modules': <Layers className="w-5 h-5 text-blue-400" />,
  'Core Screens': <Smartphone className="w-5 h-5 text-indigo-400" />,
  'Service States': <RefreshCw className="w-5 h-5 text-purple-400" />,
  'User Roles': <Users className="w-5 h-5 text-cyan-400" />,
  'PostGIS Radius Query': <Zap className="w-5 h-5 text-emerald-400" />,
  'Live GPS Telemetry': <Navigation className="w-5 h-5 text-rose-400" />,
};

export const ProjectMetricsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-900/40 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Architecture & Scope"
          title="Project Architecture Metrics"
          description="Technical dimensions of the RoadSideFix software platform. Metrics reflect the codebase design, modular APIs, and mobile screen breadth."
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PROJECT_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 mx-auto mb-3 flex items-center justify-center">
                {metricIcons[metric.label] || <Layers className="w-4 h-4 text-blue-400" />}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-blue-300 mb-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {metric.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
