import React, { useState } from 'react';
import {
  Car,
  Radio,
  CheckCircle2,
  Navigation,
  Wrench,
  CreditCard,
  ArrowRight,
  Cpu,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { HOW_IT_WORKS_STEPS } from '../../data/mockData';

const stepIcons: Record<number, React.ReactNode> = {
  1: <Car className="w-5 h-5 text-blue-400" />,
  2: <Radio className="w-5 h-5 text-indigo-400" />,
  3: <CheckCircle2 className="w-5 h-5 text-purple-400" />,
  4: <Navigation className="w-5 h-5 text-emerald-400" />,
  5: <Wrench className="w-5 h-5 text-amber-400" />,
  6: <CreditCard className="w-5 h-5 text-rose-400" />,
};

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Step-By-Step Workflow"
          title="How RoadSideFix Works"
          description="From breakdown to back on the road in six coordinated phases. Engineered for rapid dispatch, real-time safety, and financial transparency."
        />

        {/* 6-Step Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STEPS.map((stepItem) => {
            const isSelected = activeStep === stepItem.step;
            return (
              <div
                key={stepItem.step}
                onClick={() => setActiveStep(stepItem.step)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500/80 shadow-xl shadow-blue-500/10 scale-[1.02]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                      {stepIcons[stepItem.step]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STEP 0{stepItem.step}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {stepItem.title}
                    </h3>
                    <p className="text-xs font-medium text-blue-400">
                      {stepItem.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {/* Technical Architecture Footnote */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex items-start gap-2 text-xs text-slate-400 font-mono">
                    <Cpu className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-snug text-slate-400 text-[11px]">
                      {stepItem.technicalDetail}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
