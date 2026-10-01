import React, { useState } from 'react';
import {
  Car,
  MapPin,
  Wrench,
  Navigation,
  CreditCard,
  Star,
  ShieldCheck,
  Bell,
  Clock,
  Sparkles,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { CUSTOMER_FEATURES, DEMO_PROVIDERS } from '../../data/mockData';

export const CustomerFeaturesSection: React.FC = () => {
  const [activeScreenTab, setActiveScreenTab] = useState<'radar' | 'request' | 'tracking' | 'payment'>('tracking');

  return (
    <section id="customer-features" className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Features Grid */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeader
              kicker="For Motorists"
              title="Built For Drivers: Peace of Mind on Every Road"
              description="A Flutter-based mobile customer experience engineered for moments of stress. Instant geolocation, upfront service fees, and real-time technician telemetry eliminate emergency uncertainty."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CUSTOMER_FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{feat.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature Sub-points */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                iOS & Android Native Performance
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Zero Latency WebSocket Telematics
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Instant Digital Receipts
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Screen Selector Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl mb-6 text-xs">
              <button
                type="button"
                onClick={() => setActiveScreenTab('radar')}
                className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
                  activeScreenTab === 'radar'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Nearby
              </button>
              <button
                type="button"
                onClick={() => setActiveScreenTab('request')}
                className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
                  activeScreenTab === 'request'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Service
              </button>
              <button
                type="button"
                onClick={() => setActiveScreenTab('tracking')}
                className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
                  activeScreenTab === 'tracking'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Live Track
              </button>
              <button
                type="button"
                onClick={() => setActiveScreenTab('payment')}
                className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
                  activeScreenTab === 'payment'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Payment
              </button>
            </div>

            {/* Realistic Phone Frame */}
            <div className="w-[300px] sm:w-[320px] rounded-[44px] bg-slate-950 p-3.5 shadow-2xl ring-1 ring-slate-800 border-4 border-slate-800/90 relative">
              {/* Dynamic Island / Notch */}
              <div className="w-28 h-5 bg-slate-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 mr-2" />
                <div className="w-2 h-2 rounded-full bg-blue-500/80" />
              </div>

              {/* Phone Inner Display Container */}
              <div className="bg-[#0b101c] rounded-[32px] overflow-hidden border border-slate-800/60 h-[520px] flex flex-col justify-between text-left p-4 relative select-none">
                {/* Screen 1: Radar / Nearby Providers */}
                {activeScreenTab === 'radar' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div>
                        <div className="text-[10px] text-blue-400 font-semibold uppercase">RoadSideFix Customer</div>
                        <div className="text-xs font-bold text-white">Find Nearby Mechanics</div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-blue-600/30 flex items-center justify-center text-blue-400 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="h-28 bg-slate-900/90 rounded-xl relative overflow-hidden border border-slate-800 p-2 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 animate-ping absolute" />
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center relative z-10">
                        <Car className="w-3.5 h-3.5" />
                      </div>
                      <div className="absolute bottom-1 right-2 text-[9px] text-slate-400 font-mono">
                        3 Mechanics within 3 km
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold text-slate-300">Nearby Certified Pros</div>
                      {DEMO_PROVIDERS.slice(0, 3).map((p) => (
                        <div key={p.id} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">{p.name}</div>
                            <div className="text-[10px] text-slate-400">{p.vehicleType.split('(')[0]}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-[11px] font-bold text-blue-400">{p.distanceKm} km</div>
                            <div className="text-[10px] text-emerald-400">ETA {p.etaMinutes}m</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Screen 2: Request Creation */}
                {activeScreenTab === 'request' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="pb-2 border-b border-slate-800">
                      <div className="text-[10px] text-blue-400 font-semibold uppercase">New Assistance Request</div>
                      <div className="text-xs font-bold text-white">Select Vehicle Breakdown</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Current Vehicle:</div>
                      <div className="text-xs font-semibold text-white">2023 Tesla Model Y · SF-4992</div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold text-slate-300">Common Breakdown Services</div>
                      <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Wrench className="w-4 h-4 text-blue-400" />
                          <div>
                            <div className="text-xs font-bold text-white">Flat Tire Repair</div>
                            <div className="text-[10px] text-slate-300">Spare mounting & sealant</div>
                          </div>
                        </div>
                        <div className="text-xs font-bold text-blue-400">$45</div>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-400" />
                          <div>
                            <div className="text-xs font-bold text-white">Battery Jumpstart</div>
                            <div className="text-[10px] text-slate-400">12V high-amperage boost</div>
                          </div>
                        </div>
                        <div className="text-xs font-bold text-slate-300">$40</div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveScreenTab('tracking')}
                      className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold text-center hover:bg-blue-500"
                    >
                      Broadcast to Nearby Pros ($45)
                    </button>
                  </div>
                )}

                {/* Screen 3: Live Tracking */}
                {activeScreenTab === 'tracking' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div>
                        <div className="text-[10px] text-emerald-400 font-semibold uppercase flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Technician On The Way
                        </div>
                        <div className="text-xs font-bold text-white">ETA: 6 Minutes Remaining</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono font-bold text-blue-400">0.9 km</div>
                      </div>
                    </div>

                    {/* Simulated Map Viewport */}
                    <div className="h-44 bg-slate-900 rounded-xl relative overflow-hidden border border-slate-800 p-2">
                      <div className="absolute inset-0 bg-[#09101d] opacity-90" />
                      {/* Route Line */}
                      <svg className="absolute inset-0 w-full h-full">
                        <path d="M 40 40 L 120 80 L 220 130" stroke="#3b82f6" strokeWidth="3" strokeDasharray="4 2" fill="none" />
                      </svg>
                      {/* Provider Marker */}
                      <div className="absolute top-8 left-8 flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shadow-lg">
                          <Navigation className="w-3.5 h-3.5 rotate-45" />
                        </div>
                        <span className="text-[9px] bg-slate-900/90 text-slate-200 px-1.5 py-0.5 rounded border border-slate-700">
                          Marcus Vance
                        </span>
                      </div>
                      {/* Customer Pin */}
                      <div className="absolute bottom-6 right-10 flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs shadow-lg animate-bounce">
                          <Car className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[9px] text-rose-300 font-bold">You</span>
                      </div>
                    </div>

                    {/* Technician details card */}
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center">
                          MV
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Marcus Vance</div>
                          <div className="text-[10px] text-amber-400">★ 4.95 · 480+ Repairs</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-emerald-400">Active WSS</div>
                    </div>
                  </div>
                )}

                {/* Screen 4: Payment */}
                {activeScreenTab === 'payment' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="pb-2 border-b border-slate-800 text-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-1">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-white">Repair Completed!</div>
                      <div className="text-[10px] text-slate-400">Flat Tire Replacement</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Base Callout & Fix</span>
                        <span className="text-white font-mono">$45.00</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Platform Safety Fee</span>
                        <span className="text-white font-mono">$2.50</span>
                      </div>
                      <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-white">
                        <span>Total Paid</span>
                        <span className="text-emerald-400 font-mono">$47.50</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-blue-400" />
                        <span className="text-slate-300">Razorpay Direct (•• 4242)</span>
                      </div>
                      <span className="text-emerald-400 font-semibold text-[10px]">Verified</span>
                    </div>

                    <div className="text-center pt-2">
                      <div className="text-[11px] text-slate-300 mb-1">Rate Marcus Vance</div>
                      <div className="flex justify-center gap-1 text-amber-400">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Navigation Mockup */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-around text-slate-500 text-[10px]">
                  <div className="flex flex-col items-center text-blue-400 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Map</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-3.5 h-3.5" />
                    <span>History</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Car className="w-3.5 h-3.5" />
                    <span>Vehicles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
