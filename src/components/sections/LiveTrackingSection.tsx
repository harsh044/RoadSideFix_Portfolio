import React, { useState, useEffect } from 'react';
import {
  Radio,
  Server,
  Database,
  Wifi,
  Smartphone,
  Navigation,
  ArrowRight,
  ShieldCheck,
  Activity,
  Layers,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const LiveTrackingSection: React.FC = () => {
  const [telemetryPing, setTelemetryPing] = useState<number>(142);
  const [simulatedLat, setSimulatedLat] = useState<number>(37.7785);
  const [simulatedLng, setSimulatedLng] = useState<number>(-122.4150);
  const [simulatedSpeed, setSimulatedSpeed] = useState<number>(34);

  // Live telemetry pulse
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetryPing((prev) => prev + 1);
      setSimulatedLat((prev) => +(prev + 0.0001).toFixed(4));
      setSimulatedLng((prev) => +(prev - 0.0001).toFixed(4));
      setSimulatedSpeed((prev) => Math.floor(28 + Math.random() * 12));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="live-tracking" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Real-Time Telemetry Pipeline"
          title="Know Where Help Is"
          description="High-frequency location streaming without polling overhead. RoadSideFix combines Redis Pub/Sub with persistent WebSockets and PostGIS spatial persistence for smooth, real-time vehicle tracking."
        />

        {/* 5-Node Telemetry Architecture Flow Ribbon */}
        <div className="mb-12 p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Real-Time Data Transmission Pipeline
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {/* Step 1: Provider GPS */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-blue-400">STAGE 01</span>
                <Radio className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Provider GPS</h4>
                <p className="text-xs text-slate-400">Mobile sensor polls high-accuracy coordinates (1–2s intervals).</p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 bg-slate-950 p-2 rounded">
                lat: {simulatedLat}, lng: {simulatedLng}
              </div>
            </div>

            {/* Step 2: FastAPI */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-indigo-400">STAGE 02</span>
                <Server className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">FastAPI Ingestion</h4>
                <p className="text-xs text-slate-400">Async router ingests ping & stores latest fix in PostGIS geometry.</p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 bg-slate-950 p-2 rounded">
                ST_SetSRID(POINT, 4326)
              </div>
            </div>

            {/* Step 3: Redis Pub/Sub */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-purple-400">STAGE 03</span>
                <Activity className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Redis Pub/Sub</h4>
                <p className="text-xs text-slate-400">Coordinates broadcast to dedicated request channel in &lt;5ms.</p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 bg-slate-950 p-2 rounded">
                PUBLISH channel:req_8491
              </div>
            </div>

            {/* Step 4: WebSocket */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-cyan-400">STAGE 04</span>
                <Wifi className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">WebSocket Gateway</h4>
                <p className="text-xs text-slate-400">Full-duplex persistent connection pushes frame to client socket.</p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 bg-slate-950 p-2 rounded">
                wss://api/ws/tracking/8491
              </div>
            </div>

            {/* Step 5: Customer App */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-emerald-400">STAGE 05</span>
                <Smartphone className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Customer App</h4>
                <p className="text-xs text-slate-400">Flutter Riverpod stream smoothly renders vehicle on vector map.</p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 bg-slate-950 p-2 rounded">
                ETA Recalculation: 6 mins
              </div>
            </div>
          </div>
        </div>

        {/* Live Animated Map Visual with Real Telemetry Ticker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Map Canvas */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold text-white">Live Stream Active</span>
                <span className="text-slate-400">·</span>
                <span className="font-mono text-slate-400">Packet #{telemetryPing}</span>
              </div>
              <div className="text-xs font-mono text-blue-400">
                Speed: {simulatedSpeed} km/h
              </div>
            </div>

            {/* Radar Map Frame */}
            <div className="relative h-64 sm:h-80 w-full bg-[#080d19] overflow-hidden flex items-center justify-center">
              {/* Radar Rings */}
              <div className="w-[420px] h-[420px] rounded-full border border-blue-500/10 absolute animate-pulse" />
              <div className="w-[280px] h-[280px] rounded-full border border-blue-500/15 absolute" />
              <div className="w-[140px] h-[140px] rounded-full border border-blue-500/20 absolute" />

              {/* Highway vectors */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <path d="M 0 160 Q 250 80 600 180" stroke="#334155" strokeWidth="5" fill="none" />
                <path d="M 200 0 L 300 400" stroke="#334155" strokeWidth="4" fill="none" />
              </svg>

              {/* Moving Technician Icon */}
              <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-500/50 border-2 border-white">
                  <Navigation className="w-6 h-6 rotate-45" />
                </div>
                <div className="mt-2 px-3 py-1 rounded-full bg-slate-950/90 border border-blue-500/40 text-xs font-bold text-white shadow">
                  Marcus Vance (Mobile Workshop)
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="absolute bottom-3 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-2.5 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-mono text-[11px] text-slate-300">
                  <span>LAT: {simulatedLat}</span>
                  <span>LNG: {simulatedLng}</span>
                </div>
                <div className="text-emerald-400 font-semibold font-mono text-xs">
                  WebSocket Latency: ~18ms
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Benefits Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white">PostGIS Spatial Persistence</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Coordinates are converted into geography points with SRID 4326. This allows immediate historical breadcrumb audit trails and distance verification.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white">Redis Pub/Sub Decoupling</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                FastAPI workers publish coordinate events to Redis channels. Scale effortlessly across multiple server instances without inter-process locks.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white">Minimal Battery Drain</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Flutter uses intelligent distance-filtered location sensors, reducing unnecessary GPS ping rates when the vehicle is stationary at traffic signals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
