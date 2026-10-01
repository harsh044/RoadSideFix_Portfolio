import React, { useState } from 'react';
import {
  Users,
  Wrench,
  FileText,
  DollarSign,
  TrendingUp,
  RotateCcw,
  Star,
  Shield,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Info,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { DEMO_ADMIN_METRICS, DEMO_REQUESTS, DemoRequest } from '../../data/mockData';

export const AdminPlatformSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filteredRequests = selectedFilter === 'ALL'
    ? DEMO_REQUESTS
    : DEMO_REQUESTS.filter((r) => r.status === selectedFilter);

  return (
    <section id="admin-preview" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Platform Operations"
          title="Centralized Administrator Dashboard Preview"
          description="A command console for fleet monitors and platform moderators to oversee live service callouts, review provider verification documents, inspect financial settlements, and arbitrate dispute tickets."
        />

        {/* Demo Data Disclaimer Banner */}
        <div className="mb-8 p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-center gap-3 text-xs text-blue-300">
          <Info className="w-4 h-4 text-blue-400 shrink-0" />
          <span>
            <strong>Architectural Demonstration:</strong> All metrics, provider profiles, and transaction amounts shown below are simulated demonstration data representing the platform's schema and dashboard design.
          </span>
        </div>

        {/* Conceptual Metric Cards (Users, Providers, Requests, Payments, Commission, Settlements, Refunds, Reviews) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {DEMO_ADMIN_METRICS.map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between"
            >
              <div className="text-[11px] text-slate-400 mb-1">{item.label}</div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                {item.value}
              </div>
              <div className="mt-2 text-[10px] text-emerald-400 font-mono flex items-center justify-between">
                <span>{item.change} vs last wk</span>
                <span className="text-slate-500 font-sans">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mock Live Service Request Table & Filters */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Table Header Controls */}
          <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950/60">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Live Request Dispatch Queue</span>
                <span className="text-[11px] font-mono font-normal text-slate-400">
                  (Demonstration Records)
                </span>
              </h3>
              <p className="text-xs text-slate-400">Real-time status of current roadside repair jobs</p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
              {['ALL', 'IN PROGRESS', 'ON THE WAY', 'COMPLETED'].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setSelectedFilter(status)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
                    selectedFilter === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Table Element */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px] font-mono">
                <tr>
                  <th className="px-4 py-3">Job ID</th>
                  <th className="px-4 py-3">Motorist & Vehicle</th>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Assigned Provider</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Fee / 15% Comm.</th>
                  <th className="px-4 py-3 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="px-4 py-3 font-mono font-bold text-blue-400">
                      {req.id}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-white">{req.customerName}</div>
                      <div className="text-[11px] text-slate-400">{req.vehicle}</div>
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {req.service}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {req.provider}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          req.status === 'IN PROGRESS'
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            : req.status === 'ON THE WAY'
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        }`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-mono">
                      <div className="font-bold text-white">${req.amount}.00</div>
                      <div className="text-[10px] text-emerald-400">+${req.commission.toFixed(2)}</div>
                    </td>
                    <td className="px-4 py-3 text-right text-slate-400 font-mono text-[11px]">
                      {req.timeAgo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
