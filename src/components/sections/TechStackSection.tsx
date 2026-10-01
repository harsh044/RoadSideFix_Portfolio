import React, { useState } from 'react';
import {
  Server,
  Smartphone,
  Cloud,
  CreditCard,
  MapPin,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { TECH_STACK, TechItem } from '../../data/mockData';

type TechCategory = 'All' | 'Backend' | 'Frontend' | 'Cloud & Infra' | 'Payments' | 'Location';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('All');

  const categories: TechCategory[] = ['All', 'Backend', 'Frontend', 'Cloud & Infra', 'Payments', 'Location'];

  const filteredTech = activeCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === activeCategory);

  return (
    <section id="technology" className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Engineering Foundation"
          title="Production-Grade Technology Stack"
          description="Built upon modern asynchronous backends, spatial database engines, and cross-platform native mobile frameworks for high-concurrency roadside operations."
        />

        {/* Category Filter Tabs (Interactive controls per frontend-design skill) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl mb-10 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {tech.name}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    {tech.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tech.role}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Architecture Highlight:</span>
                <span className="font-mono text-blue-400 font-medium">{tech.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
