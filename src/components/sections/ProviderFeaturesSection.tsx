import React, { useState } from 'react';
import {
  Radio,
  Bell,
  Compass,
  CheckCircle2,
  TrendingUp,
  BadgeCheck,
  Shield,
  Clock,
  DollarSign,
  ArrowRight,
  MapPin,
  Check,
  X,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { PROVIDER_FEATURES } from '../../data/mockData';

export const ProviderFeaturesSection: React.FC = () => {
  const [providerScreen, setProviderScreen] = useState<'incoming' | 'navigation' | 'status' | 'earnings'>('incoming');
  const [requestAccepted, setRequestAccepted] = useState(false);

  return (
    <section id="provider-features" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Mobile Mockup */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center">
            {/* Screen Selector Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl mb-6 text-xs">
              <button
                type="button"
                onClick={() => setProviderScreen('incoming')}
                className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
                  providerScreen === 'incoming'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Incoming
              </button>
              <button
                type="button"
                onClick={() => setProviderScreen('navigation')}
                className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
                  providerScreen === 'navigation'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Navigation
              </button>
              <button
                type="button"
                onClick={() => setProviderScreen('status')}
                className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
                  providerScreen === 'status'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Status Flow
              </button>
              <button
                type="button"
                onClick={() => setProviderScreen('earnings')}
                className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
                  providerScreen === 'earnings'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Earnings
              </button>
            </div>

            {/* Realistic Phone Frame */}
            <div className="w-[300px] sm:w-[320px] rounded-[44px] bg-slate-950 p-3.5 shadow-2xl ring-1 ring-slate-800 border-4 border-slate-800/90 relative">
              {/* Dynamic Island */}
              <div className="w-28 h-5 bg-slate-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 mr-2" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>

              {/* Screen Inner Display */}
              <div className="bg-[#090e1a] rounded-[32px] overflow-hidden border border-slate-800/60 h-[520px] flex flex-col justify-between text-left p-4 relative select-none">
                {/* Screen 1: Incoming Dispatch */}
                {providerScreen === 'incoming' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          New Callout Alert
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-400">45s Left</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs font-bold text-white">Flat Tire Emergency</div>
                          <div className="text-[10px] text-slate-400">2023 Tesla Model Y (AWD)</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-emerald-400 font-mono">$40.25</div>
                          <div className="text-[9px] text-slate-500">Net Payout</div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Distance:</span>
                        <span className="text-blue-400 font-semibold font-mono">1.2 km away</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Location:</span>
                        <span className="text-slate-300 truncate max-w-[150px]">Market & 5th St, SF</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setRequestAccepted(false);
                          setProviderScreen('navigation');
                        }}
                        className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Decline</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setRequestAccepted(true);
                          setProviderScreen('navigation');
                        }}
                        className="py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1 shadow-lg shadow-blue-600/30"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Accept Job</span>
                      </button>
                    </div>

                    <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-900/50 text-[10px] text-blue-300">
                      Instant PostGIS lock: Accepting locks this job exclusively to your profile.
                    </div>
                  </div>
                )}

                {/* Screen 2: Turn-by-Turn Navigation */}
                {providerScreen === 'navigation' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div>
                        <div className="text-[10px] text-blue-400 font-semibold uppercase">GPS Guidance</div>
                        <div className="text-xs font-bold text-white">To Customer Location</div>
                      </div>
                      <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                        ON THE WAY
                      </div>
                    </div>

                    <div className="h-44 bg-slate-900 rounded-xl relative overflow-hidden border border-slate-800 p-3 flex flex-col justify-between">
                      <div className="p-2 bg-slate-950/90 rounded-lg border border-slate-800 flex items-center gap-2">
                        <Compass className="w-5 h-5 text-blue-400 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-white">In 200m, Turn Right</div>
                          <div className="text-[10px] text-slate-400">onto Mission St (Fastest route)</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs bg-slate-950/80 p-2 rounded-lg border border-slate-800">
                        <div>
                          <div className="text-[10px] text-slate-400">Remaining</div>
                          <div className="font-bold text-white">0.8 km · 4 min</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setProviderScreen('status')}
                          className="px-2.5 py-1 bg-blue-600 text-white text-[11px] font-semibold rounded hover:bg-blue-500"
                        >
                          I Have Arrived
                        </button>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Customer: Claire H.</span>
                      <span className="text-blue-400 font-mono">2023 Tesla Model Y</span>
                    </div>
                  </div>
                )}

                {/* Screen 3: Status Flow Control */}
                {providerScreen === 'status' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="pb-2 border-b border-slate-800">
                      <div className="text-[10px] text-indigo-400 font-semibold uppercase">Job Execution</div>
                      <div className="text-xs font-bold text-white">Active Service Controller</div>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
                        <span>1. Accepted</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
                        <span>2. On The Way</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-800 flex items-center justify-between text-xs text-cyan-200">
                        <span>3. Arrived On Scene</span>
                        <span className="text-[10px] bg-cyan-500/20 px-1.5 py-0.5 rounded text-cyan-300">Active</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setProviderScreen('earnings')}
                      className="w-full mt-4 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold text-center hover:bg-emerald-500 shadow-lg shadow-emerald-600/30"
                    >
                      Complete Repair & Request Payment
                    </button>
                  </div>
                )}

                {/* Screen 4: Earnings & Settlements */}
                {providerScreen === 'earnings' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="pb-2 border-b border-slate-800">
                      <div className="text-[10px] text-blue-400 font-semibold uppercase">Financial Overview</div>
                      <div className="text-xs font-bold text-white">Today's Payouts</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400">Today's Net Earnings</div>
                      <div className="text-2xl font-extrabold text-white font-mono">$184.50</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">4 Repairs Completed</div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Gross Invoiced</span>
                        <span className="text-slate-200 font-mono">$217.00</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Platform Commission (15%)</span>
                        <span className="text-slate-400 font-mono">-$32.50</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Direct Bank Settlement</span>
                        <span className="text-emerald-400 font-semibold">Scheduled Today</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                      <span>Payout Account: Chase Bank (•• 8920)</span>
                      <span className="text-blue-400 font-semibold">Verified</span>
                    </div>
                  </div>
                )}

                {/* Bottom Bar */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-around text-slate-500 text-[10px]">
                  <div className="flex flex-col items-center text-blue-400 font-semibold">
                    <Radio className="w-3.5 h-3.5" />
                    <span>Radar</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Jobs</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Payouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Provider Feature Cards */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <SectionHeader
              kicker="For Roadside Specialists"
              title="Built For Roadside Service Professionals"
              description="Empowering independent mobile mechanics, tow truck operators, and tire specialists with a digital dispatch terminal. Guaranteed upfront pricing, seamless navigation, and direct bank settlements."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROVIDER_FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>{feat.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Sub-badges */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-blue-400" />
                Verified Pro Credentialing
              </span>
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-blue-400" />
                Atomic Single-Claim Dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-blue-400" />
                Automated Razorpay Settlement Splits
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
