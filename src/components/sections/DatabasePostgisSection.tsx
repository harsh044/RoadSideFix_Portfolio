import React, { useState } from 'react';
import {
  Database,
  MapPin,
  Sliders,
  CheckCircle,
  Code2,
  Compass,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { DEMO_PROVIDERS } from '../../data/mockData';

export const DatabasePostgisSection: React.FC = () => {
  const [searchRadiusKm, setSearchRadiusKm] = useState<number>(3.0);

  // Filter providers dynamically based on radius
  const providersInRange = DEMO_PROVIDERS.filter(
    (p) => p.distanceKm <= searchRadiusKm
  );

  return (
    <section id="postgis" className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Spatial Intelligence"
          title="Location-Aware Discovery With PostgreSQL & PostGIS"
          description="Traditional relational databases struggle with geodesic curvature calculations. RoadSideFix utilizes PostGIS geography points to run sub-second spatial queries, matching stranded drivers with nearest available mechanics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Conceptual & SQL explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" />
                How the Spatial Math Works
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Earth is an oblate spheroid, not a flat 2D grid. RoadSideFix stores coordinates using{' '}
                <code className="text-blue-300 font-mono text-xs bg-slate-950 px-1.5 py-0.5 rounded">
                  geography(Point, 4326)
                </code>
                . This calculates true great-circle surface distances in meters without distortion.
              </p>

              {/* Formula card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="text-slate-400 font-sans font-semibold">Core Spatial Query Concept:</div>
                <div className="text-blue-400">
                  Customer Point (4326) + Provider Geometry + Radius (m)
                </div>
                <div className="text-slate-400">
                  = GIST Index Search via <span className="text-emerald-400 font-bold">ST_DWithin</span>
                </div>
              </div>

              {/* Actual SQL code block */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px]">SQLAlchemy / PostGIS Query</span>
                  <span className="text-slate-400">Radius: {searchRadiusKm} km ({searchRadiusKm * 1000}m)</span>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
{`SELECT 
    id, name, rating,
    ST_Distance(
        location,
        ST_SetSRID(ST_MakePoint(-122.4150, 37.7785), 4326)::geography
    ) / 1000 AS distance_km
FROM service_providers
WHERE is_available = TRUE
  AND ST_DWithin(
      location,
      ST_SetSRID(ST_MakePoint(-122.4150, 37.7785), 4326)::geography,
      ${(searchRadiusKm * 1000).toFixed(0)} -- ${(searchRadiusKm * 1000).toFixed(0)} meters
  )
ORDER BY distance_km ASC;`}
                </pre>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-mono font-bold text-blue-400">ST_DWithin</div>
                  <div className="text-slate-400 text-[11px]">Index-accelerated radius filter</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-mono font-bold text-emerald-400">ST_Distance</div>
                  <div className="text-slate-400 text-[11px]">Exact meter distance calculation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Radius Simulator */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Interactive Radius Radar</h3>
                  <p className="text-xs text-slate-400">Adjust the search radius to test PostGIS query matching.</p>
                </div>
                <span className="text-sm font-mono font-bold text-blue-400 bg-blue-950/80 border border-blue-800/80 px-3 py-1 rounded-lg">
                  {searchRadiusKm.toFixed(1)} km
                </span>
              </div>

              {/* Interactive Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>1.0 km (Tight City)</span>
                  <span>5.0 km (Suburban)</span>
                  <span>10.0 km (Highway)</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="10.0"
                  step="0.2"
                  value={searchRadiusKm}
                  onChange={(e) => setSearchRadiusKm(parseFloat(e.target.value))}
                  className="w-full accent-blue-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Customer Pin Callout */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold">
                    📍
                  </div>
                  <div>
                    <div className="font-bold text-white">Customer Location</div>
                    <div className="text-[11px] text-slate-400 font-mono">37.7785° N, -122.4150° W</div>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400">Origin Point</span>
              </div>

              {/* Returned Providers List */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  <span>Matched Technicians ({providersInRange.length})</span>
                  <span>Calculated Distance</span>
                </div>

                {providersInRange.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-400 bg-slate-950 rounded-xl border border-slate-800">
                    No mechanics within {searchRadiusKm.toFixed(1)} km. Increase radius slider.
                  </div>
                ) : (
                  providersInRange.map((p) => (
                    <div
                      key={p.id}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 font-bold text-xs flex items-center justify-center">
                          {p.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-2">
                            <span>{p.name}</span>
                            <span className="text-[10px] text-amber-400">★ {p.rating}</span>
                          </div>
                          <div className="text-[10px] text-slate-400">{p.companyName}</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-mono font-bold text-emerald-400">
                          {p.distanceKm} km
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          ~{p.etaMinutes} min ETA
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
