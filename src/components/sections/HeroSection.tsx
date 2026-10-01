import React, { useState, useEffect } from 'react';
import {
  Wrench,
  Navigation,
  MapPin,
  Clock,
  ShieldCheck,
  Disc,
  Zap,
  Truck,
  ArrowRight,
  Car,
  Play,
  RotateCcw,
  CheckCircle,
} from 'lucide-react';
import { DEMO_PROVIDERS, SERVICES_LIST } from '../../data/mockData';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onTechClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onTechClick,
}) => {
  const [selectedProviderId, setSelectedProviderId] = useState<string>('p1');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('flat_tire');
  const [isSimulatingDispatch, setIsSimulatingDispatch] = useState<boolean>(false);
  const [dispatchProgress, setDispatchProgress] = useState<number>(0);
  const [activeStepText, setActiveStepText] = useState<string>('Standby: Ready to dispatch');

  const selectedProvider =
    DEMO_PROVIDERS.find((p) => p.id === selectedProviderId) || DEMO_PROVIDERS[0];
  const selectedService =
    SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  // Dispatch simulation animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulatingDispatch) {
      interval = setInterval(() => {
        setDispatchProgress((prev) => {
          if (prev >= 100) {
            setIsSimulatingDispatch(false);
            setActiveStepText('Technician Arrived at Location');
            return 100;
          }
          const next = prev + 5;
          if (next < 25) {
            setActiveStepText('Request Broadcasted to PostGIS Radius');
          } else if (next < 55) {
            setActiveStepText(`${selectedProvider.name} En Route (1.2 km away)`);
          } else if (next < 90) {
            setActiveStepText('Technician Approaching Stranded Vehicle (0.2 km)');
          } else {
            setActiveStepText('Arrived on Scene — Inspection Started');
          }
          return next;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isSimulatingDispatch, selectedProvider]);

  const handleStartSimulation = () => {
    setDispatchProgress(0);
    setIsSimulatingDispatch(true);
    setActiveStepText('Connecting to Nearby Certified Tech...');
  };

  const handleResetSimulation = () => {
    setIsSimulatingDispatch(false);
    setDispatchProgress(0);
    setActiveStepText('Standby: Ready to dispatch');
  };

  // Interpolated position for provider car along road
  // Customer is at (400, 320)
  // Provider starts at (150, 100)
  const providerStartX = 140;
  const providerStartY = 110;
  const customerX = 390;
  const customerY = 310;
  const currentProviderX =
    providerStartX + (customerX - providerStartX) * (dispatchProgress / 100);
  const currentProviderY =
    providerStartY + (customerY - providerStartY) * (dispatchProgress / 100);

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-indigo-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 space-y-8">
            {/* Metadata indicator */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real-Time Mobility Architecture</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">FastAPI & PostGIS Engine</span>
            </div>

            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
                style={{ textWrap: 'balance' }}
              >
                Vehicle Trouble? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                  Help Is On The Way.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-xl">
                RoadSideFix connects vehicle owners with nearby roadside repair
                professionals, helping drivers get fast assistance when they need
                it most.
              </p>
            </div>

            {/* CTA Action Block */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#interactive-demo"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/25 active:scale-95"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#technology"
                onClick={onTechClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
              >
                <span>View Technology</span>
              </a>
            </div>

            {/* Core Workflow Pipeline Visual (Customer -> Provider -> Live Location -> Repair) */}
            <div className="pt-6 border-t border-slate-800/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Assistance Workflow Pipeline
              </p>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-semibold text-blue-400 mb-0.5">01</div>
                  <div className="text-xs font-medium text-white">Driver Pinpoint</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-semibold text-indigo-400 mb-0.5">02</div>
                  <div className="text-xs font-medium text-white">Nearby Pro</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-semibold text-cyan-400 mb-0.5">03</div>
                  <div className="text-xs font-medium text-white">Live Tracking</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-semibold text-emerald-400 mb-0.5">04</div>
                  <div className="text-xs font-medium text-white">On-Site Fix</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Mockup Simulator */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Mockup Map Top Header */}
              <div className="px-5 py-3.5 border-b border-slate-800/90 bg-slate-950/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold text-slate-200">
                    Live Dispatch Radar
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    PostGIS SRID 4326
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Navigation className="w-3.5 h-3.5 text-blue-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Vector Map Canvas */}
              <div className="relative h-72 sm:h-80 w-full bg-[#0b1120] overflow-hidden select-none">
                {/* Simulated Road Grid Pattern */}
                <svg
                  className="w-full h-full opacity-40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 360"
                >
                  <defs>
                    <pattern id="roadGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1e293b" strokeWidth="1.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#roadGrid)" />

                  {/* Main Highways / Arteries */}
                  <path
                    d="M 20 80 Q 200 120 480 90"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 120 20 L 160 340"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="6"
                  />
                  <path
                    d="M 360 30 L 400 330"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="6"
                  />
                  <path
                    d="M 40 280 Q 250 240 460 270"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />

                  {/* Dispatch Route Polyline */}
                  <path
                    d={`M ${providerStartX} ${providerStartY} L 240 180 L ${customerX} ${customerY}`}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3.5"
                    strokeDasharray="6 4"
                    className="animate-pulse"
                  />

                  {/* Range Search Circle (PostGIS ST_DWithin visualization) */}
                  <circle
                    cx={customerX}
                    cy={customerY}
                    r="160"
                    fill="rgba(59, 130, 246, 0.05)"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Customer Location Marker */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none"
                  style={{ left: `${(customerX / 500) * 100}%`, top: `${(customerY / 360) * 100}%` }}
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 animate-ping absolute inset-0" />
                    <div className="w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-600/50 border-2 border-white relative z-10">
                      <Car className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-semibold text-rose-300 whitespace-nowrap shadow">
                    Stranded: Flat Tire (You)
                  </div>
                </div>

                {/* Other Static Nearby Providers */}
                {DEMO_PROVIDERS.filter((p) => p.id !== selectedProvider.id).map((p, i) => {
                  const x = i === 0 ? 280 : 80;
                  const y = i === 0 ? 80 : 250;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProviderId(p.id)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{ left: `${x}px`, top: `${y}px` }}
                      title={`${p.name} - ${p.distanceKm} km`}
                    >
                      <div className="w-7 h-7 rounded-full bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center shadow group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Wrench className="w-3.5 h-3.5" />
                      </div>
                      <div className="mt-1 px-1.5 py-0.5 rounded bg-slate-950/80 text-[10px] text-slate-300 whitespace-nowrap border border-slate-800 group-hover:border-blue-500">
                        {p.name.split(' ')[0]} · {p.distanceKm}km
                      </div>
                    </button>
                  );
                })}

                {/* Selected Travelling Provider Marker */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-150 z-20"
                  style={{
                    left: `${(currentProviderX / 500) * 100}%`,
                    top: `${(currentProviderY / 360) * 100}%`,
                  }}
                >
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/50 border-2 border-white">
                      <Truck className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-blue-950/90 border border-blue-600/60 text-[10px] font-semibold text-blue-200 whitespace-nowrap shadow">
                    {selectedProvider.name} · {Math.max(1, Math.round(selectedProvider.etaMinutes * (1 - dispatchProgress / 100)))}m
                  </div>
                </div>

                {/* Simulation Control Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-950/85 backdrop-blur-md border border-slate-800 p-2.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-xs text-slate-300 font-medium truncate max-w-[200px] sm:max-w-none">
                      {activeStepText}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {!isSimulatingDispatch ? (
                      <button
                        type="button"
                        onClick={handleStartSimulation}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow transition-colors"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Dispatch Pro</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResetSimulation}
                        className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Lower Card: Selected Service & Provider Info */}
              <div className="p-4 sm:p-5 space-y-4 bg-slate-950/50">
                {/* Service Selector Chips (Interactive filter controls) */}
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Select Emergency Service
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {SERVICES_LIST.slice(0, 3).map((srv) => {
                      const isActive = srv.id === selectedServiceId;
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => setSelectedServiceId(srv.id)}
                          className={`px-2.5 py-2 rounded-lg text-left text-xs transition-all border ${
                            isActive
                              ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <div className="font-semibold truncate">{srv.name}</div>
                          <div className="text-[11px] text-slate-400">~{srv.avgEtaMinutes}m · ${srv.basePrice}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Provider Card */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-sm">
                      {selectedProvider.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        <span>{selectedProvider.name}</span>
                        <span className="text-[11px] text-amber-400 font-mono">★ {selectedProvider.rating}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[210px]">
                        {selectedProvider.vehicleType}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-bold text-blue-400 font-mono">
                      {selectedProvider.distanceKm} km away
                    </div>
                    <div className="text-[11px] text-emerald-400">
                      ETA ~{selectedProvider.etaMinutes} mins
                    </div>
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
