import React, { useState } from 'react';
import {
  Smartphone,
  Server,
  Database,
  Radio,
  CreditCard,
  Lock,
  ArrowDown,
  ArrowRight,
  Layers,
  Cpu,
  CheckCircle,
  Code2,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

interface ArchitectureNode {
  id: string;
  name: string;
  category: 'Client' | 'API Gateway' | 'Async & Messaging' | 'Persistence' | 'Third-Party';
  protocol: string;
  description: string;
  specs: string[];
}

const ARCH_NODES: Record<string, ArchitectureNode> = {
  flutter_clients: {
    id: 'flutter_clients',
    name: 'Flutter Mobile Clients (Driver & Pro)',
    category: 'Client',
    protocol: 'HTTPS / WSS',
    description: 'Cross-platform mobile applications written in Dart with Riverpod state management. Provides 60fps vector maps, GPS sensor telematics, and instant push UI.',
    specs: ['Dart 3.x + Flutter 3.2x', 'Riverpod Reactive State', 'Dio with Refresh Token Interceptors', 'Geolocator High-Accuracy Mode'],
  },
  fastapi_gateway: {
    id: 'fastapi_gateway',
    name: 'FastAPI Core Backend Engine',
    category: 'API Gateway',
    protocol: 'REST (JSON) + ASGI',
    description: 'Asynchronous Python framework handling JWT authentication, request validation with Pydantic schemas, and state-machine transitions.',
    specs: ['Python 3.11+ Async / Await', 'Pydantic V2 Schemas', 'JWT RS256 / HS256 Token Auth', 'Rate Limiting & CORS Shield'],
  },
  redis_pubsub: {
    id: 'redis_pubsub',
    name: 'Redis In-Memory Broker & Pub/Sub',
    category: 'Async & Messaging',
    protocol: 'RESP / TCP',
    description: 'High-throughput in-memory message bus routing sub-second coordinate streams and instant job broadcast events across distributed server workers.',
    specs: ['Sub-5ms Pub/Sub Message Latency', 'Request Channel Partitioning', 'Temporary Session Key Caching', 'Horizontal Scalability'],
  },
  websocket_hub: {
    id: 'websocket_hub',
    name: 'WebSocket Live Telematics Hub',
    category: 'Async & Messaging',
    protocol: 'WSS (Bidirectional)',
    description: 'Full-duplex persistent connection delivering technician GPS pings directly to subscribed driver devices without HTTP polling.',
    specs: ['FastAPI WebSocket Endpoints', 'Room-Based Scoped Broadcasting', 'Heartbeat Ping/Pong Keep-Alive', 'Automatic Reconnect Handshake'],
  },
  postgres_postgis: {
    id: 'postgres_postgis',
    name: 'PostgreSQL 16 + PostGIS Spatial Engine',
    category: 'Persistence',
    protocol: 'libpq / AsyncPG',
    description: 'Enterprise relational store for ACID user records, financial audits, and geospatial queries using ST_DWithin on SRID 4326 geometry.',
    specs: ['PostgreSQL 16 Enterprise ACID', 'PostGIS 3.4 Spatial Indices (GIST)', 'SQLAlchemy 2.0 Async ORM', 'Alembic Schema Versioning'],
  },
  razorpay_gateway: {
    id: 'razorpay_gateway',
    name: 'Razorpay Payment & Settlement Gateway',
    category: 'Third-Party',
    protocol: 'REST / Webhook HMAC SHA256',
    description: 'Secure card, UPI, and netbanking processing with server-side order generation and signature verification for platform commission splits.',
    specs: ['PCI-DSS Level 1 Gateway', 'Cryptographic HMAC Verification', 'Dynamic Platform Fee Deduction', 'Scheduled Provider Bank Payouts'],
  },
};

export const SystemArchitectureSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('postgres_postgis');
  const activeNode = ARCH_NODES[selectedNodeId] || ARCH_NODES['postgres_postgis'];

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="System Design"
          title="System Architecture & Data Flows"
          description="A separation-of-concerns architecture designed for resilience on the road. Mobile clients communicate via HTTPS and WebSockets to an async FastAPI backend backed by PostgreSQL PostGIS and Redis."
        />

        {/* High-Fidelity Interactive Architectural Diagram */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-8 backdrop-blur-md relative overflow-hidden">
          {/* Layer 1: Client Applications */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              1. Mobile Client Tier (Flutter)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSelectedNodeId('flutter_clients')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedNodeId === 'flutter_clients'
                    ? 'bg-blue-600/20 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-bold text-white">Flutter Customer App</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">iOS & Android</span>
                </div>
                <p className="text-xs text-slate-400">
                  Vehicle vault, GPS pinpoint, nearby mechanic radar, live tracking, and digital checkout.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedNodeId('flutter_clients')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedNodeId === 'flutter_clients'
                    ? 'bg-blue-600/20 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm font-bold text-white">Flutter Provider App</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">iOS & Android</span>
                </div>
                <p className="text-xs text-slate-400">
                  Availability toggle, dispatch alerts, turn-by-turn navigation, FSM controls, and earnings.
                </p>
              </button>
            </div>
          </div>

          {/* Flow Direction Indicator */}
          <div className="flex items-center justify-center my-4">
            <div className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono text-blue-400 flex items-center gap-1.5">
              <span>HTTPS REST API (JWT)</span>
              <span>·</span>
              <span>WSS WebSocket Live Stream</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Layer 2: Core Backend Engine */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              2. Application & API Gateway Tier (FastAPI)
            </div>
            <button
              type="button"
              onClick={() => setSelectedNodeId('fastapi_gateway')}
              className={`w-full p-5 rounded-xl border text-left transition-all ${
                selectedNodeId === 'fastapi_gateway'
                  ? 'bg-blue-600/20 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <Server className="w-5 h-5 text-blue-400" />
                  <span className="text-base font-bold text-white">FastAPI Async Monolith / Routers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span>JWT Auth</span>
                  <span>·</span>
                  <span>Pydantic v2</span>
                  <span>·</span>
                  <span>SQLAlchemy Async</span>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Centralized business logic handling user verification, state-machine dispatch guards, PostGIS spatial queries, and webhook listeners.
              </p>
            </button>
          </div>

          {/* Flow Branching Indicator */}
          <div className="flex items-center justify-center my-4">
            <div className="text-[11px] font-mono text-slate-400">
              Parallel Pipelines: Real-Time Stream | Persistence | Payment Gateway
            </div>
          </div>

          {/* Layer 3: Subsystems Grid (Redis, PostGIS, Razorpay) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Redis & WebSocket */}
            <button
              type="button"
              onClick={() => setSelectedNodeId('redis_pubsub')}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedNodeId === 'redis_pubsub'
                  ? 'bg-blue-600/20 border-blue-500 ring-2 ring-blue-500/20'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Radio className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-bold text-white">Redis Pub/Sub</span>
              </div>
              <p className="text-xs text-slate-400">
                Broker for instant GPS telemetry pings & broadcast notifications to WebSockets.
              </p>
              <div className="mt-3 text-[10px] font-mono text-purple-400 bg-slate-950 p-1.5 rounded">
                Telemetry Latency: &lt; 5ms
              </div>
            </button>

            {/* PostgreSQL & PostGIS */}
            <button
              type="button"
              onClick={() => setSelectedNodeId('postgres_postgis')}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedNodeId === 'postgres_postgis'
                  ? 'bg-blue-600/20 border-blue-500 ring-2 ring-blue-500/20'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold text-white">PostgreSQL + PostGIS</span>
              </div>
              <p className="text-xs text-slate-400">
                Spatial coordinate index (SRID 4326) with ST_DWithin for nearby mechanic search.
              </p>
              <div className="mt-3 text-[10px] font-mono text-cyan-400 bg-slate-950 p-1.5 rounded">
                GIST Spatial Index
              </div>
            </button>

            {/* Razorpay Payments */}
            <button
              type="button"
              onClick={() => setSelectedNodeId('razorpay_gateway')}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedNodeId === 'razorpay_gateway'
                  ? 'bg-blue-600/20 border-blue-500 ring-2 ring-blue-500/20'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-white">Razorpay Engine</span>
              </div>
              <p className="text-xs text-slate-400">
                Server-side order generation, HMAC verification, 15% platform split & provider payouts.
              </p>
              <div className="mt-3 text-[10px] font-mono text-emerald-400 bg-slate-950 p-1.5 rounded">
                HMAC SHA-256 Verified
              </div>
            </button>
          </div>
        </div>

        {/* Selected Architecture Subsystem Inspector */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                  {activeNode.category}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-xs font-mono text-slate-400">
                  Protocol: {activeNode.protocol}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{activeNode.name}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeNode.description}
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 min-w-[260px] space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Technical Specifications
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeNode.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
