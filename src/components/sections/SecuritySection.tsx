import React from 'react';
import {
  ShieldCheck,
  Key,
  Users,
  Lock,
  FileCheck,
  Cpu,
  EyeOff,
  Server,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const SecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      title: 'Cryptographic JWT Authentication',
      description: 'Access tokens with short expiration (15 mins) coupled with cryptographically signed refresh tokens stored in secure OS keychains.',
      icon: <Key className="w-5 h-5 text-blue-400" />,
      detail: 'RS256 / HS256 Token Signing',
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      description: 'Strict segregation between Customer, Verified Service Provider, and Platform Administrator roles enforced on every API route.',
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      detail: 'Depends(get_current_active_user)',
    },
    {
      title: 'Request Ownership Validation',
      description: 'Mechanics can only update requests assigned directly to their ID. Drivers cannot modify quotes or access other users’ telemetry streams.',
      icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
      detail: 'Object-level security guards in SQLAlchemy',
    },
    {
      title: 'WebSocket Connection Guard',
      description: 'WebSockets require token exchange in the initial handshake query or header before establishing bidirectional telemetry pipes.',
      icon: <Lock className="w-5 h-5 text-purple-400" />,
      detail: 'WSS Token Verification Handshake',
    },
    {
      title: 'Zero Secrets on Mobile Clients',
      description: 'Flutter bundles contain zero payment secret keys, database credentials, or admin API tokens. Everything proxies through FastAPI.',
      icon: <EyeOff className="w-5 h-5 text-rose-400" />,
      detail: 'Zero client-side secrets',
    },
    {
      title: 'Environment Isolated Configurations',
      description: 'Database URLs, Redis connection strings, and webhook signing secrets are injected at runtime via Docker container environment variables.',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      detail: 'Pydantic BaseSettings (.env)',
    },
  ];

  return (
    <section id="security" className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Defensive Engineering"
          title="Security, Privacy & Role Isolation"
          description="Designed from the database schema up to prevent unauthorized state manipulation, location snooping, and payment forgery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((sec) => (
            <div
              key={sec.title}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {sec.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Guard:</span>
                <span className="text-blue-400 font-semibold">{sec.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
