import React, { useState } from 'react';
import {
  Clock,
  CheckCircle,
  Navigation,
  MapPin,
  Wrench,
  CheckCheck,
  XCircle,
  AlertOctagon,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { LIFECYCLE_STATES, TERMINAL_STATES, LifecycleState } from '../../data/mockData';

export const ServiceLifecycleSection: React.FC = () => {
  const [selectedStateCode, setSelectedStateCode] = useState<string>('ON THE WAY');

  const allStates: LifecycleState[] = [...LIFECYCLE_STATES, ...TERMINAL_STATES];
  const currentState = allStates.find((s) => s.code === selectedStateCode) || LIFECYCLE_STATES[2];

  return (
    <section id="lifecycle" className="py-20 lg:py-28 bg-slate-900/40 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="State-Machine Architecture"
          title="Service Request Lifecycle"
          description="Every roadside callout is governed by a deterministic finite state machine (FSM). State mutations are validated server-side in PostgreSQL to prevent race conditions and enforce accountability."
        />

        {/* Primary Sequential Pipeline */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Happy-Path Transition Timeline
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LIFECYCLE_STATES.map((st, idx) => {
              const isSelected = st.code === selectedStateCode;
              return (
                <button
                  key={st.code}
                  type="button"
                  onClick={() => setSelectedStateCode(st.code)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/20'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                    <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded ${st.badgeBg} ${st.badgeText}`}>
                      {st.code}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white mb-1 truncate">
                    {st.title}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-2">
                    {st.description}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Terminal / Exception States */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Exception & Cancellation States
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            {TERMINAL_STATES.map((st) => {
              const isSelected = st.code === selectedStateCode;
              return (
                <button
                  key={st.code}
                  type="button"
                  onClick={() => setSelectedStateCode(st.code)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-rose-500/80 shadow-lg ring-2 ring-rose-500/20'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white">{st.title}</span>
                    <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded ${st.badgeBg} ${st.badgeText}`}>
                      {st.code}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{st.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected State Inspection Box */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded border ${currentState.badgeBg} ${currentState.badgeText} ${currentState.borderColor}`}>
                {currentState.code}
              </span>
              <h4 className="text-base font-bold text-white">
                {currentState.title}
              </h4>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl">
              {currentState.description}
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1 text-xs">
            <div className="text-slate-400 font-mono text-[11px]">FSM Trigger Event:</div>
            <div className="font-semibold text-blue-400">{currentState.triggeredBy}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
