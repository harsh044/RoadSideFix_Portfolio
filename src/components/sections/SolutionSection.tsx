import React, { useState } from 'react';
import {
  User,
  Send,
  Radio,
  CheckCircle,
  Navigation,
  Wrench,
  CreditCard,
  Star,
  ArrowRight,
  Shield,
  Layers,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

interface WorkflowNode {
  id: string;
  step: number;
  label: string;
  sublabel: string;
  role: 'Driver' | 'System' | 'Provider' | 'Payment';
  icon: React.ReactNode;
  detail: string;
  systemAction: string;
}

const WORKFLOW_NODES: WorkflowNode[] = [
  {
    id: 'owner',
    step: 1,
    label: 'Vehicle Owner',
    sublabel: 'Driver pinpoints GPS',
    role: 'Driver',
    icon: <User className="w-5 h-5 text-blue-400" />,
    detail: 'The driver taps the app, selects their vehicle specs, and verifies their stranded coordinates.',
    systemAction: 'Pydantic schema validation & client session verification',
  },
  {
    id: 'request',
    step: 2,
    label: 'Service Request',
    sublabel: 'Issue categorised',
    role: 'Driver',
    icon: <Send className="w-5 h-5 text-indigo-400" />,
    detail: 'Specifies the breakdown condition (flat tire, dead battery, engine smoke) with upfront transparent pricing.',
    systemAction: 'POST /api/v1/requests creates PENDING database entry',
  },
  {
    id: 'discovery',
    step: 3,
    label: 'Nearby Provider',
    sublabel: 'PostGIS spatial query',
    role: 'System',
    icon: <Radio className="w-5 h-5 text-cyan-400" />,
    detail: 'The platform scans for available certified roadside mechanics within optimal driving distance.',
    systemAction: 'PostGIS executes ST_DWithin on SRID 4326 geometry point index',
  },
  {
    id: 'acceptance',
    step: 4,
    label: 'Provider Acceptance',
    sublabel: 'Instant dispatch lock',
    role: 'Provider',
    icon: <CheckCircle className="w-5 h-5 text-purple-400" />,
    detail: 'The nearest technician accepts the dispatch alert. State changes to ACCEPTED with zero double-dispatch.',
    systemAction: 'Redis Pub/Sub pushes dispatch payload; status locked in PostgreSQL',
  },
  {
    id: 'tracking',
    step: 5,
    label: 'Live Tracking',
    sublabel: 'WebSocket telemetry',
    role: 'System',
    icon: <Navigation className="w-5 h-5 text-emerald-400" />,
    detail: 'Driver watches the technician travel on a live map with dynamic ETA updates and route telematics.',
    systemAction: 'Sub-second GPS coordinate stream over persistent WSS channel',
  },
  {
    id: 'repair',
    step: 6,
    label: 'Vehicle Repair',
    sublabel: 'On-site execution',
    role: 'Provider',
    icon: <Wrench className="w-5 h-5 text-amber-400" />,
    detail: 'Provider arrives on-site, inspects the failure, performs mechanical fix, and verifies vehicle safety.',
    systemAction: 'State transitions to ARRIVED then IN PROGRESS with geolocation audit',
  },
  {
    id: 'payment',
    step: 7,
    label: 'Digital Payment',
    sublabel: 'Razorpay checkout',
    role: 'Payment',
    icon: <CreditCard className="w-5 h-5 text-rose-400" />,
    detail: 'Driver approves payment through Razorpay (UPI, card, wallet). Platform calculates commission split.',
    systemAction: 'Server-side HMAC SHA-256 signature verification & automated payout batch',
  },
  {
    id: 'review',
    step: 8,
    label: 'Review & Close',
    sublabel: 'Transparent feedback',
    role: 'Driver',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    detail: 'Driver rates the technician on punctuality, expertise, and professionalism, building a trusted network.',
    systemAction: 'Aggregated rating calculation updates technician profile index',
  },
];

export const SolutionSection: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('discovery');

  const activeNode = WORKFLOW_NODES.find((n) => n.id === activeNodeId) || WORKFLOW_NODES[2];

  return (
    <section className="py-20 lg:py-28 bg-slate-900/40 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="The Complete Solution"
          title="One Platform. Complete Roadside Assistance."
          description="RoadSideFix replaces fragmented manual roadside phone calls with a synchronous, automated digital loop connecting stranded drivers with vetted nearby roadside professionals."
        />

        {/* Interactive 8-Stage Flow Ribbon */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center min-w-[880px] justify-between relative">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-0.5 bg-slate-800 -z-0" />

            {WORKFLOW_NODES.map((node, index) => {
              const isActive = node.id === activeNodeId;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNodeId(node.id)}
                  className="flex flex-col items-center group relative z-10 focus:outline-none"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-110 ring-4 ring-blue-500/20'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {node.icon}
                  </div>
                  <div className="mt-2 text-center">
                    <div
                      className={`text-xs font-semibold whitespace-nowrap transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'
                      }`}
                    >
                      {node.label}
                    </div>
                    <div className="text-[10px] text-slate-400 whitespace-nowrap">
                      Stage {node.step}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  {activeNode.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-blue-400">
                      STAGE 0{activeNode.step}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-xs text-slate-400">
                      Actor: <strong className="text-slate-300 font-semibold">{activeNode.role}</strong>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activeNode.label} — {activeNode.sublabel}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                {activeNode.detail}
              </p>

              {/* Technical Execution Detail */}
              <div className="pt-3 flex items-start gap-2.5 text-xs text-slate-400 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 font-mono">
                <Layers className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-sans font-semibold">Backend Logic: </span>
                  <span className="text-slate-300">{activeNode.systemAction}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/70 p-5 rounded-xl border border-slate-800/80 flex flex-col justify-between space-y-4">
              <div className="text-xs text-slate-400 space-y-2">
                <div className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
                  State Machine Safety
                </div>
                <p className="leading-relaxed">
                  Every transition is atomic and validated by the backend state machine, preventing orphaned bookings, race conditions, or unverified claims.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Next Stage:</span>
                <button
                  type="button"
                  onClick={() => {
                    const nextIndex = (activeNode.step % WORKFLOW_NODES.length);
                    setActiveNodeId(WORKFLOW_NODES[nextIndex].id);
                  }}
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                >
                  <span>Advance Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
