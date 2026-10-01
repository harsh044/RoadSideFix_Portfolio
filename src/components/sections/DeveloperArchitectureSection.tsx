import React from 'react';
import {
  Code2,
  FolderTree,
  Server,
  Terminal,
  Shield,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const DeveloperArchitectureSection: React.FC = () => {
  const routers = [
    { name: '/api/v1/auth', description: 'JWT login, signup, token refresh, and password hashes' },
    { name: '/api/v1/vehicles', description: 'Driver vehicle garage management with VIN and plate numbers' },
    { name: '/api/v1/requests', description: 'Lifecycle state machine for roadside assistance missions' },
    { name: '/api/v1/geo', description: 'PostGIS ST_DWithin nearby mechanic search and radius filters' },
    { name: '/api/v1/payments', description: 'Razorpay order creation, HMAC webhook verify, settlement splits' },
    { name: '/ws/tracking/{req_id}', description: 'Full-duplex WebSocket channel for real-time GPS coordinate stream' },
    { name: '/api/v1/admin', description: 'Protected moderation queries for dispute audits and analytics' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              kicker="For Engineers & Reviewers"
              title="Built With Modern Backend Architecture"
              description="RoadSideFix is architected using strict separation-of-concerns: Flutter provides a 60fps responsive mobile experience, FastAPI coordinates business logic and WebSocket concurrency, and PostgreSQL/PostGIS guarantees acid-compliant location-aware data integrity."
            />

            <div className="space-y-3 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-xs uppercase tracking-wider font-mono text-blue-400">
                  Modular FastAPI APIRouters
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Endpoint modules are isolated with clear dependency injection (`Depends`), ensuring authentication, database sessions, and Redis connections are cleanly managed without circular imports.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-xs uppercase tracking-wider font-mono text-indigo-400">
                  Asynchronous SQLAlchemy 2.0 & Alembic
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Non-blocking database queries via `asyncpg` prevent request worker starvation under high-frequency location ping loads. Database migrations are versioned with Alembic.
                </p>
              </div>
            </div>
          </div>

          {/* Right: API Router Directory Tree Preview */}
          <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="font-mono font-bold text-white">FastAPI Router Map</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">app/api/v1/</span>
            </div>

            <div className="divide-y divide-slate-800/60 mt-2 font-mono text-xs">
              {routers.map((r) => (
                <div key={r.name} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-bold text-blue-400">{r.name}</span>
                  <span className="text-[11px] text-slate-400 font-sans sm:text-right">
                    {r.description}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
              <span>OpenAPI Specification Auto-Generated</span>
              <span className="font-mono text-emerald-400">/docs & /redoc enabled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
